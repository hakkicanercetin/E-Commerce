export type BaseProduct = {
    name: string;
    short_explanation: string;
    price_info: PriceInfo;
    photo_src: string;
    comment_count: number;
    average_star: number;
  };
  
  export type Product = BaseProduct & {
    id: string;
    slug: string;
  };
  
  export type PriceInfo = {
    profit?: number;
    total_price: number;
    discounted_price?: number;
    price_per_servings?: number;
    discount_percentage?: number;
  };
  
  export interface ApiProductResponse {
    status: string;
    data: {
        count: number;
        next: string | null;
        previous: string | null;
        results: Product[];
    };
  }
  