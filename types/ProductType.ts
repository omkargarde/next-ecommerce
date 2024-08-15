// Interface for a single product variant
export type ProductVariantType = {
  size: string;
};
// Interface for a single product
export type MockProductType = {
  id: number;
  name: string;
  description: string;
  price: number;
  discountPrice: number | null; // nullable for products without discounts
  image: string;
  rating: number;
  reviewsCount: number;
  category: string;
  variants: ProductVariantType[]; // array of product variants
};

export type CartProductType = MockProductType & {
  quantity: number;
};
