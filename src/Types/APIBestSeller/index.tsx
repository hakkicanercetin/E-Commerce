export interface bestSellerType {
    status: string
    data: bestSellerProduct[]
  }
  
  export interface bestSellerProduct {
    name: string
    short_explanation: string
    price_info: bestSellerPrice
    photo_src: string
    comment_count: number
    average_star: number
  }
  
  export interface bestSellerPrice {
    profit?: number
    total_price: number
    discounted_price?: number
    price_per_servings?: number
    discount_percentage?: number
  }