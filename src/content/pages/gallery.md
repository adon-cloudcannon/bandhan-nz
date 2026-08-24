---
_schema: default
title: gallery
description: >-
  a closer look at bandhan's hand knitted pieces and handmade macrame dolls,
  angels, wall hangings and christmas decorations.
pageSections:
  - _component: page-sections/heroes/hero-center
    eyebrow: gallery
    heading: a closer look
    subtext: >-
      every photo here is a piece that actually left the workbasket. yours will
      be a little different — that is the nice part.
    buttonSections: []
    maxContentWidth: lg
    paddingHorizontal: lg
    paddingVertical: 4xl
    colorScheme: inherit
    backgroundColor: accent
  - _component: page-sections/builders/custom-section
    label: featured photos
    contentSections:
      - _component: building-blocks/wrappers/image-carousel
        label: bandhan pieces
        images:
          - source: /src/assets/images/bandhan/products/forever-love-wall-hanging.jpg
            alt: >-
              a macrame wall hanging of two figures holding a heart, framed in a
              gold hoop
            positionVertical: center
            positionHorizontal: center
          - source: /src/assets/images/bandhan/products/angel-wall-hanging.jpg
            alt: a large macrame angel wall hanging with wide cream wings
            positionVertical: center
            positionHorizontal: center
          - source: /src/assets/images/bandhan/products/standing-doll.jpg
            alt: a standing macrame doll in a blue dress wearing a woven sun hat
            positionVertical: center
            positionHorizontal: center
          - source: /src/assets/images/bandhan/products/framed-doll.jpg
            alt: >-
              a pink macrame doll mounted in a white picture frame with a beaded
              name banner
            positionVertical: center
            positionHorizontal: center
          - source: /src/assets/images/bandhan/products/tree-ornament-set.jpg
            alt: >-
              a macrame angel and two woven wreaths arranged on a white
              background
            positionVertical: center
            positionHorizontal: center
          - source: /src/assets/images/bandhan/products/christmas-gnomes.jpg
            alt: three chunky knit gnomes with red and green pom pom hats
            positionVertical: center
            positionHorizontal: center
        showArrows: true
        loop: true
        aspectRatio: square
        sizes: '(max-width: 768px) 100vw, 768px'
        widths:
          - 480
          - 768
          - 1200
    maxContentWidth: lg
    paddingHorizontal: lg
    paddingVertical: 3xl
    colorScheme: inherit
    backgroundColor: base
    rounded: false
  - _component: page-sections/media/gallery-mosaic
    sectionLabel: everything
    eyebrow: the whole lot
    heading: everything in one place
    subtext: >-
      gnomes, dolls, angels and wreaths — with photos of the knit range on the
      way. if you see a colour combination you like, mention it when you get in
      touch.
    images:
      - source: /src/assets/images/bandhan/products/christmas-gnomes.jpg
        alt: three chunky knit gnomes with red and green pom pom hats
        caption: knitted gnomes
        feature: true
      - source: /src/assets/images/bandhan/products/angel-wall-hanging.jpg
        alt: a large macrame angel wall hanging with wide cream wings
        caption: large angel wall hanging
        feature: false
      - source: /src/assets/images/bandhan/products/macrame-doll-lilac.jpg
        alt: a macrame doll with dusty pink and taupe cotton fringing
        caption: individual macrame doll
        feature: false
      - source: /src/assets/images/bandhan/products/framed-doll.jpg
        alt: >-
          a pink macrame doll mounted in a white picture frame with a beaded name
          banner
        caption: framed doll
        feature: false
      - source: /src/assets/images/bandhan/products/posable-doll.jpg
        alt: a posable macrame doll in a pink petal skirt sitting on a wooden table
        caption: posable doll
        feature: false
      - source: /src/assets/images/bandhan/products/standing-doll.jpg
        alt: a standing macrame doll in a blue dress wearing a woven sun hat
        caption: standing doll
        feature: false
      - source: /src/assets/images/bandhan/products/forever-love-wall-hanging.jpg
        alt: >-
          a macrame wall hanging of two figures holding a heart, framed in a gold
          hoop
        caption: large wall hanging
        feature: true
      - source: /src/assets/images/bandhan/products/angel-tree-hanging.jpg
        alt: a small macrame angel with wooden wings, hanging from cotton cord
        caption: angel tree hanging
        feature: false
      - source: /src/assets/images/bandhan/products/tree-ornament-set.jpg
        alt: a macrame angel and two woven wreaths arranged on a white background
        caption: tree ornament set
        feature: false
      - source: /src/assets/images/bandhan/products/christmas-ornaments.jpg
        alt: six small macrame wreath ornaments in cream, blue, green and navy
        caption: small christmas ornaments
        feature: false
    buttonSections:
      - _component: building-blocks/core-elements/button
        text: see prices in the shop
        hideText: false
        link: /shop/
        iconName: arrow-long-right
        iconPosition: after
        variant: primary
        size: md
    columns: '3'
    gap: md
    alignmentHorizontal: center
    maxContentWidth: 3xl
    paddingHorizontal: lg
    paddingVertical: 4xl
    colorScheme: inherit
    backgroundColor: surface
  - _component: page-sections/ctas/cta-center
    sectionLabel: gallery cta
    heading: seen something you like?
    subtext: >-
      tell us which photo caught your eye and we will make you one — in your
      colours, at your size.
    buttonSections:
      - _component: building-blocks/core-elements/button
        text: get in touch
        hideText: false
        link: /contact/
        iconName: ''
        iconPosition: before
        variant: primary
        size: md
    maxContentWidth: lg
    paddingHorizontal: lg
    paddingVertical: 4xl
    colorScheme: inherit
    backgroundColor: accent
---
