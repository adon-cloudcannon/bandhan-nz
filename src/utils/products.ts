import productsData from "../data/products.json";

export type ProductPhoto = {
  source: string;
  alt?: string;
};

export type Product = Record<string, unknown> & {
  id?: string;
  name?: string;
  collection?: string;
  featured?: boolean;
  images?: ProductPhoto[];
  /** Older single-photo fields, still honoured for one-off inline products. */
  imageSource?: string;
  imageAlt?: string;
};

export const catalogue = (productsData.products ?? []) as Product[];

export type ProductSelection = {
  products?: Product[];
  productIds?: string[];
  collectionId?: string;
  featuredOnly?: boolean;
};

/**
 * Every product lives once, in `src/data/products.json`. A section says which
 * of them it wants rather than restating them, so a price or a photo is only
 * ever edited in one place.
 *
 * Precedence: inline products (an escape hatch for one-offs that do not belong
 * in the catalogue), then explicit ids, then a collection, then the featured
 * ones, then the whole catalogue.
 */
export function selectProducts({
  products = [],
  productIds = [],
  collectionId = "",
  featuredOnly = false,
}: ProductSelection): Product[] {
  if (products.length > 0) return products;

  if (productIds.length > 0) {
    return productIds
      .map((id) => catalogue.find((product) => product.id === id))
      .filter((product): product is Product => Boolean(product));
  }

  if (collectionId) return catalogue.filter((product) => product.collection === collectionId);
  if (featuredOnly) return catalogue.filter((product) => product.featured);

  return catalogue;
}

/** Every photo of a product, in the order they are listed. */
export function productPhotos(product: Product): ProductPhoto[] {
  const listed = Array.isArray(product.images) ? product.images : [];
  const photos = listed.filter(
    (photo) => photo && typeof photo.source === "string" && photo.source.trim() !== ""
  );

  if (photos.length > 0) return photos;

  if (typeof product.imageSource === "string" && product.imageSource.trim() !== "") {
    return [{ source: product.imageSource, alt: product.imageAlt }];
  }

  return [];
}

/** The photo a product card shows: the first one listed. */
export function productCardPhoto(product: Product): ProductPhoto | null {
  return productPhotos(product)[0] ?? null;
}

export type GalleryPhoto = ProductPhoto & {
  productName: string;
};

/**
 * Flattens a selection into gallery photos, taking one photo from each product
 * before coming back for seconds. A product with six photos would otherwise
 * clump together and make a gallery look repetitive.
 */
export function galleryPhotos(products: Product[], perProduct = 0): GalleryPhoto[] {
  const lists = products.map((product) => {
    const photos = productPhotos(product);
    const capped = perProduct > 0 ? photos.slice(0, perProduct) : photos;

    return capped.map((photo) => ({
      source: photo.source,
      alt: photo.alt || String(product.name ?? ""),
      productName: String(product.name ?? ""),
    }));
  });

  const deepest = lists.reduce((max, list) => Math.max(max, list.length), 0);
  const flattened: GalleryPhoto[] = [];

  for (let round = 0; round < deepest; round++) {
    for (const list of lists) {
      if (list[round]) flattened.push(list[round]);
    }
  }

  return flattened;
}
