import { BannerOne, BannerTwo } from './banner'
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
            </main>
            <Footer />
        </>
    )
}

export default Home;