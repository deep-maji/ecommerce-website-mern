import Category from './Category'
import { BannerOne, BannerTwo } from './banner'

export const Home = () => {
    return (
        <>
            <main>
                <BannerOne />
                <Category />
                <BannerTwo/>
            </main>
        </>
    )
}

export default Home;