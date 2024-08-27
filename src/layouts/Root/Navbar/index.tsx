import Header from './Header'
import MobilSearch from './Header/MobileSearch'
import Menu from './Menu'

const Navbar = () => {
  return (
    <>
    <Header></Header>
    <div className='min-[767px]:hidden'>
      <MobilSearch></MobilSearch>
    </div>
    <Menu></Menu>
    </>
  )
}

export default Navbar