import Category from "./Category"
import protein from "../../../assets/category.png";
import vitamin from "../../../assets/category2.png";
import saglik from "../../../assets/category3.png";
import spor from "../../../assets/category4.png";
import gida from "../../../assets/category5.png";
import tüm from "../../../assets/category6.png"
const Categories = () => {
  const categories = [
    {
      image:protein,
    },
    {
      image:vitamin,
    },
    {
      image:saglik,
    },
    {
      image:spor,
    },
    {
      image:gida,
    },
    {
      image:tüm,
    }
  ]
  return (
    <>
        <div className="min-[1700px]:px-[360px] px-[225px] max-[1368px]:px-[175px] max-[1200px]:px-[150px] max-[992px]:px-[32px] max-[767px]:px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4">
                {categories.map((c,index)=>(
                  <Category key={index} image={c.image}></Category>
                ))}
            </div>
        </div>
    </>
  )
}

export default Categories