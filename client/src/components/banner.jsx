import '../styles/Banner.css'
import BannerPhoneImg from '../assets/images/BannerPhoneImg.svg'
import Banner2 from '../assets/images/Banner2.svg'

export const BannerOne = () => {
    return (
        <>
            <div id="banner">
                <div id="left">
                    <p>Pro.Beyond.</p>
                    <h1>IPhone 14 Pro</h1>
                    <p>Created to change everything for the better. For everyone</p>
                    <button>Shop</button>
                </div>
                <div id="right">
                    <img src={BannerPhoneImg}></img>
                </div>
            </div>
        </>
    )
}

export const BannerTwo = () => {
    return (
        <>
            <div id='banner-two-div'>
                <img src={Banner2}></img>
            </div>
        </>
    )
}

export default { BannerOne,BannerTwo};