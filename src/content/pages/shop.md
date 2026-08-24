---
_schema: default
title: shop
description: >-
  handmade macrame dolls, angels, wall hangings and christmas decorations.
  email us to order — every piece is made by hand to suit you.
pageSections:
  - _component: page-sections/heroes/hero-center
    eyebrow: the shop
    heading: pick something, then tell us about it
    subtext: >-
      there is no checkout here on purpose. everything is made by hand, so we
      would rather hear what you are after first — colours, names, sizes — and
      make yours properly.
    buttonSections:
      - _component: building-blocks/core-elements/button
        text: email us to order
        hideText: false
        link: mailto:info@bandhan.co.nz
        iconName: envelope
        iconPosition: before
        variant: primary
        size: md
    maxContentWidth: 2xl
    paddingHorizontal: lg
    paddingVertical: 4xl
    colorScheme: inherit
    backgroundColor: accent
  - _component: page-sections/builders/custom-section
    label: shop notes
    contentSections:
      - _component: building-blocks/core-elements/list
        items:
          - text: free shipping on orders $100 and over
            iconName: truck
            iconColor: default
            link:
          - text: made to order in your colours
            iconName: heart
            iconColor: default
            link:
          - text: posted anywhere in new zealand
            iconName: map-pin
            iconColor: default
            link:
        direction: horizontal
        alignmentHorizontal: center
        size: sm
        listType: icon
    maxContentWidth: 2xl
    paddingHorizontal: lg
    paddingVertical: lg
    colorScheme: inherit
    backgroundColor: surface
    rounded: false
  - _component: page-sections/commerce/product-grid
    sectionLabel: classic collection
    eyebrow: classic collection
    heading: dolls, frames and wall hangings
    subtext: >-
      our everyday range. lovely for new babies, birthdays, weddings, or a
      shelf that needs something soft on it.
    enquiryEmail: info@bandhan.co.nz
    enquiryText: enquire about this
    footnote: >-
      prices are a guide for the standard size. larger pieces, extra names and
      custom colours are all possible — just ask.
    buttonSections: []
    products:
      - name: individual macrame doll
        price: $25
        description: a little hanging doll, made in the colours you choose.
        imageSource: /src/assets/images/bandhan/products/macrame-doll-lilac.jpg
        imageAlt: a macrame doll with dusty pink and taupe cotton fringing
        badge: ''
      - name: framed doll
        price: $30
        description: a doll mounted in a white frame, with a name in beads.
        imageSource: /src/assets/images/bandhan/products/framed-doll.jpg
        imageAlt: >-
          a pink macrame doll mounted in a white picture frame with a beaded name
          banner
        badge: personalised
      - name: posable doll
        price: $30
        description: bendy arms and legs, so she can sit wherever you like.
        imageSource: /src/assets/images/bandhan/products/posable-doll.jpg
        imageAlt: a posable macrame doll in a pink petal skirt sitting on a wooden table
        badge: ''
      - name: standing doll
        price: $35
        description: stands on her own, straw hat and tiny basket included.
        imageSource: /src/assets/images/bandhan/products/standing-doll.jpg
        imageAlt: a standing macrame doll in a blue dress wearing a woven sun hat
        badge: ''
      - name: large wall hanging
        price: $60
        description: two figures in a gold hoop — our most given wedding gift.
        imageSource: /src/assets/images/bandhan/products/forever-love-wall-hanging.jpg
        imageAlt: >-
          a macrame wall hanging of two figures holding a heart, framed in a gold
          hoop
        badge: ''
    minItemWidth: 300
    maxItemWidth: 400
    gap: lg
    alignmentHorizontal: center
    maxContentWidth: 2xl
    paddingHorizontal: lg
    paddingVertical: 4xl
    colorScheme: inherit
    backgroundColor: base
  - _component: page-sections/commerce/product-grid
    sectionLabel: christmas collection
    eyebrow: christmas collection
    heading: angels, gnomes and things for the tree
    subtext: >-
      our busiest little corner. christmas orders fill up quickly, so it pays to
      get in touch early in the year.
    enquiryEmail: info@bandhan.co.nz
    enquiryText: enquire about this
    footnote: >-
      **ordering for christmas?** get in touch by the end of october and we will
      make sure it is under the tree in time.
    buttonSections: []
    products:
      - name: individual angel tree hanging
        price: $25
        description: cotton fringing, wooden wings and a tiny wooden heart.
        imageSource: /src/assets/images/bandhan/products/angel-tree-hanging.jpg
        imageAlt: a small macrame angel with wooden wings, hanging from cotton cord
        badge: ''
      - name: gnomes
        price: $15 – $25
        description: three sizes, chunky knit hats, absolutely no faces.
        imageSource: /src/assets/images/bandhan/products/christmas-gnomes.jpg
        imageAlt: three chunky knit gnomes with red and green pom pom hats
        badge: ''
      - name: small christmas ornaments
        price: $5
        description: little wreaths for the tree, or for tying onto a gift.
        imageSource: /src/assets/images/bandhan/products/christmas-ornaments.jpg
        imageAlt: six small macrame wreath ornaments in cream, blue, green and navy
        badge: stocking filler
      - name: tree ornament set
        price: $40
        description: an angel and two wreaths, boxed together as a set.
        imageSource: /src/assets/images/bandhan/products/tree-ornament-set.jpg
        imageAlt: a macrame angel and two woven wreaths arranged on a white background
        badge: set of three
      - name: large angel wall hanging
        price: $60
        description: wide cotton wings on a gold hoop, for a door or a wall.
        imageSource: /src/assets/images/bandhan/products/angel-wall-hanging.jpg
        imageAlt: a large macrame angel wall hanging with wide cream wings
        badge: ''
    minItemWidth: 300
    maxItemWidth: 400
    gap: lg
    alignmentHorizontal: center
    maxContentWidth: 2xl
    paddingHorizontal: lg
    paddingVertical: 4xl
    colorScheme: inherit
    backgroundColor: surface
  - _component: page-sections/info-blocks/faq-section
    sectionLabel: shop questions
    heading: the practical bits
    singleOpen: true
    openFirst: false
    items:
      - title: how do i pay?
        contentSections:
          - _component: building-blocks/core-elements/text
            text: >-
              once we have agreed on what you are after, we will send you the
              total and our bank details. payment is by internet banking, and we
              start making as soon as it lands.
            size: md
      - title: what does shipping cost?
        contentSections:
          - _component: building-blocks/core-elements/text
            text: >-
              shipping is free on orders $100 and over. under that we charge
              actual courier cost, which we will tell you before you pay. pick
              up can sometimes be arranged too — just ask.
            size: md
      - title: can you make something that is not listed here?
        contentSections:
          - _component: building-blocks/core-elements/text
            text: >-
              often, yes. custom pieces are some of our favourite work — bridal
              parties, new babies, memorial pieces, a doll that looks like
              someone in particular. send us a photo or a colour and we will tell
              you what is possible.
            size: md
      - title: how do i look after it?
        contentSections:
          - _component: building-blocks/core-elements/text
            text: >-
              keep it out of direct sun and away from damp. a gentle brush or a
              puff of air is all the cotton fringing needs. spot clean only —
              please do not put it in the wash.
            size: md
    maxContentWidth: lg
    paddingHorizontal: lg
    paddingVertical: 4xl
    colorScheme: inherit
    backgroundColor: base
  - _component: page-sections/ctas/cta-center
    sectionLabel: shop cta
    heading: ready to order?
    subtext: >-
      send us the piece you like and the colours you have in mind. we will
      reply with a price, a timeframe and a few photos as we go.
    buttonSections:
      - _component: building-blocks/core-elements/button
        text: email info@bandhan.co.nz
        hideText: false
        link: mailto:info@bandhan.co.nz
        iconName: envelope
        iconPosition: before
        variant: primary
        size: md
      - _component: building-blocks/core-elements/button
        text: other ways to reach us
        hideText: false
        link: /contact/
        iconName: ''
        iconPosition: before
        variant: tertiary
        size: md
    maxContentWidth: lg
    paddingHorizontal: lg
    paddingVertical: 4xl
    colorScheme: inherit
    backgroundColor: accent
---
