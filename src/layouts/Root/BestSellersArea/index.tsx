import { useLoaderData } from "react-router"
import Card from "./Card"
import { HomePageLoader } from "../../../API"
const BestSellers = ({title}:{title:string}) => {
  const {bestSellers} = useLoaderData() as Awaited<ReturnType<typeof HomePageLoader>>
  return (
    <>
    <div className="min-[1700px]:px-[360px] px-[225px] max-[1368px]:px-[175px] max-[1200px]:px-[150px] max-[992px]:px-[32px]">
        <div>
            <p className="text-[22px] leading-8 text-center mt-[10px]">{title}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 min-[1645px]:grid-cols-6 py-4 gap-5">
            {bestSellers.data.map((d,index)=>(
                <Card key={index} productData={d}></Card>
            ))}
        </div>
    </div>
    </>
  )
}

export default BestSellers