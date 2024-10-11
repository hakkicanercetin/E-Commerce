import { bestSellerType } from "../APIBestSeller";

export type bestSellerAndProductDetailType = {
    bestSellers:bestSellerType,
    productDetails:ProductDetailType,
}
type NutritionalContent = {
    ingredients: {
      name: string;
      amounts: string[];
    }[];
    nutrition_facts: {
      ingredients: {
        name: string;
        amounts: string[];
      }[];
      portion_sizes: string[];
    };
    amino_acid_facts: {
      ingredients: {
        name: string;
        amounts: string[];
      }[];
      portion_sizes: string[];
    };
  };
  
  export type Variant = {
    id: string;
    size: {
      gram: number;
      pieces: number;
      total_services: number;
    };
    aroma: string;
    price: {
      profit: number;
      total_price: number;
      discounted_price: number;
      price_per_servings: number;
      discount_percentage: number;
    };
    photo_src: string;
    is_available: boolean;
  };
  
  export type ProductDetailType = {
    status: string;
    data: {
      id: string;
      name: string;
      slug: string;
      short_explanation: string;
      explanation: {
        usage: string;
        features: string;
        description: string;
        nutritional_content: NutritionalContent;
      };
      main_category_id: string;
      sub_category_id: string;
      tags: string[];
      variants: Variant[];
      comment_count: number;
      average_star: number;
    };
  };
  