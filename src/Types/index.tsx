import { Variant } from "./APIProduct"

export type BasketItemType = {
    quantity:number,
    variant:Variant,
    name:string,
    price:number
  }