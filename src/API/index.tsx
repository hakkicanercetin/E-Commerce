import { ApiProductResponse } from "../Types/APIAllProducts";
import { bestSellerType } from "../Types/APIBestSeller";
import { ApiResponseCategory } from "../Types/APICategory";

export async function getBestSellers() {
  const response = await fetch("https://fe1111.projects.academy.onlyjs.com/api/v1/products/best-sellers");
  const data = (await response.json()) as bestSellerType;
  return data;
}
export async function getAllProducts({page,categoryID}:{page:number,categoryID?:string}) {
  let url = `https://fe1111.projects.academy.onlyjs.com/api/v1/products?offset=${(page - 1) * 12}&limit=12`;
  if (categoryID) {
    url += `&main_category=${categoryID}`;
  }
    const response = await fetch(url);
    const data = (await response.json()) as ApiProductResponse;
    return data;
  }
  export async function getProduct({productId}:{productId:string}) {

    const response = await fetch(`https://fe1111.projects.academy.onlyjs.com/api/v1/products/${productId}`);
    const data = (await response.json()) as ApiProductResponse;
    return data;
  }
  export async function getCategories() {

    const response = await fetch(`https://fe1111.projects.academy.onlyjs.com/api/v1/categories`);
    const data = (await response.json()) as ApiResponseCategory;
    return data;
  }
  export async function RootLoader(){
    const categories = await getCategories();
    return {categories};
  }
export async function HomePageLoader(){
  const bestSellers = await getBestSellers();
  const categories = await getCategories();
  return {bestSellers,categories};
}

export async function ProductDetailLoader({ params }: { params: Record<string, string | undefined> }) {
  const productSlug = params.slug;
  const bestSellers = await getBestSellers();
  const productDetails = await getProduct({ productId: String(productSlug) });

  return { bestSellers, productDetails };
}

export async function ProductListLoader({ request }: { request: Request }) {
  const categories = await getCategories()
  const url = new URL(request.url);
  const page = Number(url.searchParams.get("page")) || 1;
  let products;
  if (url.pathname === '/products') {
    products = await getAllProducts({ page });
  } else {
    const matchingCategory = categories.data.data.filter((d) => d.slug === url.pathname.substring(1));
    if (matchingCategory.length) {
      products = await getAllProducts({ page, categoryID: matchingCategory[0].id });
    }
  }
  return products;
}