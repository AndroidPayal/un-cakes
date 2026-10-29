export const productCategories = [
  { id: "cakes", label: "Cakes & baking supplies" },
  { id: "gift-hampers", label: "Gift hampers" },
  { id: "packaging", label: "Cake packaging & products" },
] as const;

export type ProductCategory = (typeof productCategories)[number]["id"];

export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  category: ProductCategory;
  /** Path relative to public/, for example /products/chocolate-cake.jpg. */
  image?: string;
  /** Optional public product URL to include in the WhatsApp message. */
  url?: string;
};

// Replace these examples with confirmed products and prices from the shop.
export const products: Product[] = [
  // category 1 - cakes
  {
    id: "rasmalai-cake",
    name: "Rasmalai Cake",
    price: 550,
    description:
      "A sweet rasmalai flavoured centrepiece for birthdays and special days.",
    category: "cakes",
    image: "/products/cake_rasmalai.jpeg",
  },
  {
    id: "pineapple-cake",
    name: "Pineapple Cake",
    price: 400,
    description:
      "Pure decadence in every slice. Indulge in layers of velvety sponge, delicately filled and frosted to absolute perfection.",
    category: "cakes",
    image: "/products/cake-pinapple.jpeg",
  },
  {
    id: "vanilla-cake",
    name: "Vanilla Cake",
    price: 350,
    description:
      "A symphony of sweetness. Crafted for the moments that deserve something truly extraordinary.",
    category: "cakes",
    image: "/products/cake-vanilla.jpeg",
  },
  {
    id: "butterscotch-cake",
    name: "ButterScotch Cake",
    price: 450,
    description:
      "Where artistry meets flavor. Each bite is meticulously handcrafted using premium ingredients to create a taste experience you won't forget.",
    category: "cakes",
    image: "/products/cake-butterscotch.jpeg",
  },
  {
    id: "butterscotch-cake-2",
    name: "ButterScotch Cake",
    price: 450,
    description:
      "Baking the world a sweeter place. Elegantly structured, beautifully balanced, and designed to steal the spotlight at any table.",
    category: "cakes",
    image: "/products/cake-butterscotch-2.jpeg",
  },
  {
    id: "blackcurrent-cake",
    name: "BlackCurrent Cake",
    price: 450,
    description:
      "Made for your biggest moments. From milestone birthdays to intimate gatherings, this cake adds a touch of magic to every celebration.",
    category: "cakes",
    image: "/products/cake-blackCurrent.jpeg",
  },
  {
    id: "blackcurrent-cake-2",
    name: "BlackCurrent Cake",
    price: 450,
    description:
      "The ultimate showstopper. Hand-decorated to reflect your style and baked to satisfy your cravings.",
    category: "cakes",
    image: "/products/cake-blackCurrent-2.jpeg",
  },
  {
    id: "blackcurrent-cake-3",
    name: "BlackCurrent Cake",
    price: 450,
    description:
      "Layer upon layer of pure happiness. Because every special memory deserves an equally special dessert.",
    category: "cakes",
    image: "/products/cake-blackCurrent-3.jpeg",
  },
  {
    id: "blackforest-cake",
    name: "BlackForest Cake",
    price: 450,
    description:
      "Layer upon layer of pure happiness. Because every special memory deserves an equally special dessert.",
    category: "cakes",
    image: "/products/cake-blackForest.jpeg",
  },
  {
    id: "blackforest-cake-2",
    name: "BlackForest Cake",
    price: 450,
    description:
      "Rich. Fudgy. Perfection. The ultimate comfort food, elevated into a striking centerpiece.",
    category: "cakes",
    image: "/products/cake-blackForest-2.jpeg",
  },
  {
    id: "blackforest-cake-3",
    name: "BlackForest Cake",
    price: 450,
    description:
      "Pure, unadulterated indulgence. Deep cocoa flavors meet a velvety texture that lingers long after the final bite.",
    category: "cakes",
    image: "/products/cake-blackForest-3.jpeg",
  },

  {
    id: "chocotruffle-cake",
    name: "ChocoTruffle Cake",
    price: 450,
    description:
      "Pure, unadulterated indulgence. Deep cocoa flavors meet a velvety texture that lingers long after the final bite.",
    category: "cakes",
    image: "/products/cake-chocoTruffle.jpeg",
  },
  {
    id: "chocotruffle-cake-2",
    name: "ChocoTruffle Cake",
    price: 450,
    description:
      "Pure, unadulterated indulgence. Deep cocoa flavors meet a velvety texture that lingers long after the final bite.",
    category: "cakes",
    image: "/products/cake-blackForest-3.jpeg",
  },
  {
    id: "chocotruffle-cake-3",
    name: "ChocoTruffle Cake",
    price: 450,
    description:
      "Pure, unadulterated indulgence. Deep cocoa flavors meet a velvety texture that lingers long after the final bite.",
    category: "cakes",
    image: "/products/cake-blackForest-3.jpeg",
  },
  {
    id: "mixfruit-cake",
    name: "Mixfruit Cake",
    price: 500,
    description:
      "Sun-kissed sweetness. Light, airy layers infused with fresh citrus zest and topped with a vibrant burst of seasonal berries.",
    category: "cakes",
    image: "/products/cake-mixfruit.jpeg",
  },
  {
    id: "mixfruit-cake-2",
    name: "Mixfruit Cake",
    price: 500,
    description:
      "A breath of fresh flavor. Perfectly balanced, subtly sweet, and wonderfully refreshing for afternoon teas or garden celebrations.",
    category: "cakes",
    image: "/products/cake-mixfruit-2.jpeg",
  },
  {
    id: "mixfruit-cake-3",
    name: "Mixfruit Cake",
    price: 500,
    description:
      "Simplicity at its finest. Whipped buttercream meets real fruit compote for a clean, natural taste that dances on the palate.",
    category: "cakes",
    image: "/products/cake-mixfruit-3.jpeg",
  },
  {
    id: "mixfruit-cake-4",
    name: "Mixfruit Cake",
    price: 500,
    description:
      "Whipped buttercream meets real fruit compote for a clean, natural taste that dances on the palate.",
    category: "cakes",
    image: "/products/cake-mixfruit-4.jpeg",
  },
  {
    id: "mixfruit-cake-5",
    name: "Mixfruit Cake",
    price: 500,
    description: "Natural taste that dances on the palate.",
    category: "cakes",
    image: "/products/cake-mixfruit-5.jpeg",
  },
  {
    id: "chocolate-cake",
    name: "Chocolate Cake",
    price: 500,
    description: "A taste that dances on the palate.",
    category: "cakes",
    image: "/products/cake-chocolate.jpeg",
  },
  {
    id: "chocolate-cake-2",
    name: "Chocolate Cake",
    price: 500,
    description:
      "Rich. Fudgy. Perfection. The ultimate comfort food, elevated into a striking centerpiece.",
    category: "cakes",
    image: "/products/cake-chocolate-2.jpeg",
  },
  // category 2 - hampers
  {
    id: "gift-hampers-1",
    name: "Diwali PVC Hamper",
    price: 850,
    description:
      ' 10" Hamper contains 1 cookie jar, 1 dryfruit jar, 1 dryCake, 2 cards',
    category: "gift-hampers",
    image: "/products/hamper-1.jpeg",
  },
  {
    id: "gift-hampers-2",
    name: "Sweet candle",
    price: 350,
    description: "Pack of 4 candles representing Indian Sweets",
    category: "gift-hampers",
    image: "/products/hamper-2.jpeg",
  },
  {
    id: "gift-hampers-3",
    name: "Dry Fruit Combo Pack",
    price: 1000,
    description: 'Pack of 4 candles representing Indian Sweets, Size 10" ',
    category: "gift-hampers",
    image: "/products/hamper-3.jpeg",
  },
  {
    id: "gift-hampers-4",
    name: "Hanging",
    price: 500,
    description: "one hanging in the box",
    category: "gift-hampers",
    image: "/products/hamper-4.jpeg",
  },
  {
    id: "gift-hampers-5",
    name: "Candle Stand",
    price: 150,
    description: "one candle stand in the box",
    category: "gift-hampers",
    image: "/products/hamper-5.jpeg",
  },
  {
    id: "gift-hampers-6",
    name: "Sweet Hamper",
    price: 850,
    description:
      "A symphony of sweetness. From buttery crumbs to rich confections, we’ve gathered our absolute favorites into one breathtaking presentation.",
    category: "gift-hampers",
    image: "/products/hamper-6.jpeg",
  },
  {
    id: "gift-hampers-7",
    name: "Gift Hamper",
    price: 500,
    description:
      "Elegance, boxed. The perfect balance of sophisticated presentation and decadent flavors, crafted to leave a lasting impression.",
    category: "gift-hampers",
    image: "/products/hamper-7.jpeg",
  },
  //category -3 packaging

  {
    id: "packaging-1",
    name: "Bento Cake Box",
    price: 20,
    description:
      "Compact, highly portable packaging solution specifically designed to hold miniature, personal-sized cakes (typically 3 to 4 inches in diameter)",
    category: "packaging",
    image: "/products/packaging-1.jpeg",
  },
  {
    id: "packaging-2",
    name: "Heighted Cake Box",
    price: 120,
    description:
      "An 8-inch box specifically engineered to package and transport tall designer cakes.",
    category: "packaging",
    image: "/products/packaging-2.jpeg",
  },
  {
    id: "packaging-2-2",
    name: "Heighted Cake Box",
    price: 140,
    description:
      "An 8-inch box provides crucial vertical clearance to prevent toppers, frosting peaks, or fondant work from getting crushed.",
    category: "packaging",
    image: "/products/packaging-2.jpeg",
  },
  {
    id: "packaging-3",
    name: "Cake Box",
    price: 30,
    description: "8-inch cake box",
    category: "packaging",
    image: "/products/packaging-3.jpeg",
  },
  {
    id: "packaging-4",
    name: "Premium Brownie Box",
    price: 45,
    description:
      "an upscale, high-end packaging solution designed specifically for gourmet bakeries, luxury gifting, and artisanal confectioners",
    category: "packaging",
    image: "/products/packaging-4.jpeg",
  },
  {
    id: "packaging-5",
    name: "Cookie Brownie Container",
    price: 18,
    description:
      "A cookie brownie container commonly called a dessert combo box.",
    category: "packaging",
    image: "/products/packaging-5.jpeg",
  },
  //----------------

  {
    id: "packaging-6",
    name: "Zigzag Candle",
    price: 25,
    description:
      "These long, thin candles are twisted or bent into a playful zigzag or corkscrew wave.",
    category: "packaging",
    image: "/products/packaging-6.jpeg",
  },
  {
    id: "packaging-7",
    name: "Number Candle",
    price: 20,
    description: "A candle denotes age of person",
    category: "packaging",
    image: "/products/packaging-7.jpeg",
  },
  {
    id: "packaging-8",
    name: "Fairy light",
    price: 18,
    description: "Lights in a foldable wire.",
    category: "packaging",
    image: "/products/packaging-8.jpeg",
  },
  {
    id: "packaging-9",
    name: "Happy B'day Stick",
    price: 10,
    description: "Stick size 3-inch",
    category: "packaging",
    image: "/products/packaging-9.jpeg",
  },
  {
    id: "packaging-9-2",
    name: "Happy B'day Stick",
    price: 30,
    description: "Stick size 5-inch",
    category: "packaging",
    image: "/products/packaging-9.jpeg",
  },
];
