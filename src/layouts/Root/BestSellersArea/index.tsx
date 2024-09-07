import product from "../../../assets/product.png"
import product2 from "../../../assets/product2.png"
import product3 from "../../../assets/product3.png"
import product4 from "../../../assets/product4.png"
import product5 from "../../../assets/product5.png"
import product6 from "../../../assets/product6.png"
import Card from "./Card"
const BestSellers = ({title}:{title:string}) => {
    const bestSellerProducts = [
        {
            image:product,
            name:"WHEY PROTEİN",
            subtitle:"EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ",
            commentNumber:"10869",
            price:"549"
        },
        {
            image:product2,
            name:"FITNESS PAKETİ",
            subtitle:"EN POPÜLER ÜRÜNLER BİR ARADA",
            commentNumber:"7650",
            price:"799",
            discount:"29",
            oldPrice:"1126"
        },
        {
            image:product3,
            name:"GÜNLÜK VİTAMİN PAKETİ",
            subtitle:"EN POPÜLER ÜRÜNLER BİR ARADA",
            commentNumber:"5013",
            price:"549",
            discount:"23",
            oldPrice:"717"
        },
        {
            image:product4,
            name:"PRE-WORKOUT SUPREME",
            subtitle:"ANTRENMAN ÖNCESİ TAKVİYESİ",
            commentNumber:"6738",
            price:"399"
        },{
            image:product5,
            name:"CREAM OF RICE",
            subtitle:"EN LEZZETLİ PİRİNÇ KREMASI",
            commentNumber:"5216",
            price:"239"
        },{
            image:product6,
            name:"CREATINE",
            subtitle:"EN POPÜLER SPORCU TAKVİYESİ",
            commentNumber:"8558",
            price:"239"
        }
    ]
  return (
    <>
    <div className="min-[1700px]:px-[360px] px-[225px] max-[1368px]:px-[175px] max-[1200px]:px-[150px] max-[992px]:px-[32px]">
        <div>
            <p className="text-[22px] leading-8 text-center mt-[10px]">{title}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 min-[1645px]:grid-cols-6 py-4 gap-5">
            {bestSellerProducts.map((p,index)=>(
                <Card key={index} image={p.image} name={p.name} subtitle={p.subtitle} commentNumber={p.commentNumber} price={p.price} discount={p.discount} oldprice={p.oldPrice}></Card>
            ))}
        </div>
    </div>
    </>
  )
}

export default BestSellers