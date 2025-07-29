import Category from './Category'
import { BannerOne, BannerTwo } from './banner'

export const MainBody = () => {
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

export default MainBody;