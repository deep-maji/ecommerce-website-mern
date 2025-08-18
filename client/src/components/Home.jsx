import { BannerOne, BannerTwo, BannerThree } from './banner'
import Category from './Category'
import Navbar from './navbar'
import Footer from './footer'

export const Home = () => {
    return (
        <>
            <Navbar />
            <main>
                <BannerOne />
                <Category />
                <BannerTwo />
                <BannerThree />
            </main>
            <Footer />
        </>
    )
}

export default Home;