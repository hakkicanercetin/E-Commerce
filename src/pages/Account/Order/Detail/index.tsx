import { useParams } from "react-router"
import { useDatas } from "../../../../Context"
import { OrderType } from "../../../../Types"

const Detay = () => {
    const { orders } = useDatas()
    const { id } = useParams()
    const obj = orders.find((s:OrderType)=>s.number == id)
  return (
    <>
        <div className="col-span-3 pb-10">
        <div className="py-6">
          <p className="text-base font-semibold leading-7">Sipariş {obj.status}</p>
          <p className="text-sm leading-7">Sipariş {obj.date} Tarihinde Sipariş Verildi. - {obj.number} numaralı sipariş</p>
        </div>
        <div className="grid grid-cols-3">
            <div className="col-span-2">
                a
            </div>
            <div className="col-span-1">
                b
            </div>
        </div>
      </div>
    </>
  )
}

export default Detay