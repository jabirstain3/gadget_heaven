import { useContext } from "react";
import { FavoriteContext } from "../../utils/context/FavouriteContext";
import ProductListCard from "../../compolents/productListCard/ProductListCard";

const FavouriteLayout = () => {
        const { favorites, } = useContext(FavoriteContext);
    
    return (
        <div className='sectionBase mx-auto'>
            <h1 className="text-2xl font-bold">My Wishlist</h1>

            <div className='w-full mt-4 md:mt-6 flex flex-col gap-4'>
                {
                    favorites.length > 0 ? 
                    favorites.map((item) => <ProductListCard key={item.product_id} item={item}/>) :
                    (<div className="w-full flex justify-center items-center h-[360px]">
                        <p className="text-lg">No products found in the Wishlist.</p>
                    </div>)
                }
            </div>
    </div>
    );
};

export default FavouriteLayout;