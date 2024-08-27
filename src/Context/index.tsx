/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, createContext, useContext, useState } from "react";
import product from "../assets/product.png"
import product2 from "../assets/product2.png"
import product3 from "../assets/product3.png"
import product4 from "../assets/product4.png"
import { OrderType } from "../Types";
  const dummyOrders = [
    {
      image:product,
      status:"Teslim Edildi",
      name:"DEEP SLEEP",
      date:"31 Mart 2023",
      number:"427795"
    },
    {
      image:product2,
      status:"Teslim Edildi",
      name:"MELATONIN - GÜNLÜK VİTAMİN PAKETİ - BROMELAIN",
      date:"14 Aralık 2022",
      number:"290405"
    },
    {
      image:product3,
      status:"Teslim Edildi",
      name:"GAMER HACK - DETOX PAKETİ",
      date:"19 Kasım 2022",
      number:"255564"
    },
    {
      image:product4,
      status:"Teslim Edildi",
      name:"CREAM OF RICE",
      date:"1 Ekim 2023",
      number:"190462"
    },
  ];

  const DataContext = createContext<{orders:OrderType[],setOrders:React.Dispatch<React.SetStateAction<OrderType[]>>}>({orders:[],setOrders:()=>null});
  
  interface DatasProviderProps {
    children: ReactNode;
  }
const DatasProvider = ({children}:DatasProviderProps) => {
    const [orders,setOrders] = useState<OrderType[]>(dummyOrders)
  return (
    <DataContext.Provider value={{orders,setOrders}}>
        {children}
    </DataContext.Provider>
  )
}
export const useDatas = () => {
    const context = useContext(DataContext)
    return context;
  };
export default DatasProvider