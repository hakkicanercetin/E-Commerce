import Category from "./Category"
import protein from "../../../assets/category.png";
import vitamin from "../../../assets/category2.png";
import saglik from "../../../assets/category3.png";
import spor from "../../../assets/category4.png";
import gida from "../../../assets/category5.png";
import tüm from "../../../assets/category6.png"
import { useLoaderData } from "react-router";
import { HomePageLoader } from "../../../API";
import { Link } from "react-router-dom";
const Categories = () => {
  const categoriesImage = [
      protein,
      spor,
      gida,
      saglik,
      vitamin,
  ]

  const {categories:{data:{data}}} = useLoaderData() as Awaited<ReturnType<typeof HomePageLoader>>
  const categoriesWithImage = data.map((category,index)=>({
    ...category,image:categoriesImage[index]
  }))
  return (
    <>
        <div className="min-[1700px]:px-[360px] px-[225px] max-[1368px]:px-[175px] max-[1200px]:px-[150px] max-[992px]:px-[32px] max-[767px]:px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4">
                {categoriesWithImage.map((c,index)=>(
                  <Category key={index} categoryData={c}></Category>
                ))}
                <div className="py-3">
                  <Link to={"/products"}>
                  <img src={tüm} alt="category"/>
                  </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Categories