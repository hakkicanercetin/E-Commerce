import { useEffect, useState } from "react";
import Card from "../../layouts/Root/BestSellersArea/Card";
import { useLoaderData, useLocation, useNavigate } from "react-router";
import { ApiProductResponse } from "../../Types/APIAllProducts";
import { Link, useSearchParams } from "react-router-dom";
const ProductList = () => {
  const result = useLoaderData() as ApiProductResponse;
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const currentPage = Number(searchParams.get("page")) || 1;
  const [page, setPage] = useState(currentPage);
  const location = useLocation();
  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);
  console.log()
  const handlePageChange = (newPage: number) => {
    navigate(`${location.pathname}?page=${newPage}`);
  };
  console.log(result)
  return (
    <>
        <div className="min-[1700px]:px-[360px] px-[225px] max-[1368px]:px-[175px] max-[1200px]:px-[150px] max-[992px]:px-[32px] max-[767px]:px-4">
          <div className=" mt-[72px]">
            <div>
              <p className="text-[45px] font-extrabold leading-8 text-center mt-[10px]">
                TÜM ÜRÜNLER
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 py-4 gap-5">
            {result?.data.results.map((res, index) => (
              <Link to={`/products/${res.slug}`} key={index}>
                <Card productData={res}></Card>
              </Link>
            ))}
            </div>
          </div>
          <div className="py-10">
          <div className="flex justify-between">
            <button
              className={`p-3 ${
                result?.data.previous ? "bg-green-500" : "bg-slate-500"
              }`}
              disabled={!result?.data.previous}
              onClick={() => handlePageChange(page - 1)}
            >
              Geri
            </button>
            <button
              className={`p-3 ${
                result?.data.next ? "bg-green-500" : "bg-slate-500"
              }`}
              disabled={!result?.data.next}
              onClick={() => handlePageChange(page + 1)}
            >
              İleri
            </button>
          </div>
        </div>
        </div>
    </>
  );
};

export default ProductList;
