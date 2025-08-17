import PhoneImg from '../assets/icons/Phones.svg'
import CamerasImg from '../assets/icons/Cameras.svg'
import ComputersImg from '../assets/icons/Computers.svg'
import GamingImg from '../assets/icons/Gaming.svg'
import HeadphonesImg from '../assets/icons/Headphones.svg'
import SmartWatchesImg from '../assets/icons/SmartWatches.svg'
import { NavLink } from "react-router-dom";

export const CateNavs = () => {
  return (
    <>
      <NavLink to={'/category/phone'}><div className="cate-container"><img className="img" src={PhoneImg}></img><p>Phones</p></div></NavLink>
      <NavLink to={'/category/headphone'}><div className="cate-container"><img className="img" src={HeadphonesImg}></img><p>Headphones</p></div></NavLink>
      <NavLink to={'/category/gaming'}><div className="cate-container"><img className="img" src={GamingImg}></img><p>Gaming</p></div></NavLink>
      <NavLink to={'/category/camera'}><div className="cate-container"><img className="img" src={CamerasImg}></img><p>Cameras</p></div></NavLink>
      <NavLink to={'/category/computer'}><div className="cate-container"><img className="img" src={ComputersImg}></img><p>Computers</p></div></NavLink>
      <NavLink to={'/category/watch'}><div className="cate-container"><img className="img" src={SmartWatchesImg}></img><p>Watches</p></div></NavLink>
    </>
  )
}

export default CateNavs;