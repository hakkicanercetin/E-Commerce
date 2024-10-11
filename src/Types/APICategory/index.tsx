interface SubChild {
    name: string;
    slug: string;
    order: number;
  }
  
  interface Child {
    id: string;
    name: string;
    slug: string;
    order: number;
    sub_children: SubChild[];
  }
  
  interface TopSeller {
    name: string;
    slug: string;
    description: string;
    picture_src: string;
  }
  
  export interface Category {
    id: string;
    name: string;
    slug: string;
    order: number;
    children: Child[];
    top_sellers: TopSeller[];
  }
  
  export interface ApiResponseCategory {
    status: string;
    data: {
      data: Category[];
      status: string;
    };
  }
  