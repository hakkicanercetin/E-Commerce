import BestSellers from "../../layouts/Root/BestSellersArea"
import Delivery from "../../layouts/components/DeliveryArea"
import Banner from "../../layouts/components/Banner"
import Categories from "../../layouts/components/Categories"
import SecondBanner from "../../layouts/components/SecondBanner"
import SliderComments from "../../layouts/components/SliderComments"

const HomePage = () => {
  return (
    <>
      <Delivery></Delivery>
      <Banner></Banner>
      <Categories></Categories>
      <BestSellers title="ÇOK SATANLAR"></BestSellers>
      <SecondBanner></SecondBanner>
      <SliderComments></SliderComments>
    </>
  )
}

export default HomePage