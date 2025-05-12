import { AiOutlineDelete } from "react-icons/ai";
import { useLocation } from "react-router";
import { useContext } from "react";
import { CartContext } from "../../utils/context/CartContext";
import { FavoriteContext } from "../../utils/context/FavouriteContext";

const ProductListCard = ({ item }) => {
    const { handalRemoveCartItem, handalCartItem, } = useContext(CartContext);
    const { handalFavorite } = useContext(FavoriteContext);
    const { pathname } = useLocation()
    // console.log(pathname);

    const { product_id, product_title, price, product_image, } = item || {};

    const handleDelete = () => {
        if (pathname === "/dashboard/wishlist") {
            handalFavorite(item);
        }
        else if (pathname === "/dashboard/cart") {
            handalRemoveCartItem(product_id);
            // console.log("delete");
            
        }
    }

    const handleAddToCart = () => {
        handalCartItem(item);
        handalFavorite(item);
    }

    return (
        <div className="w-full h-full bg-white p-4 rounded-xl flex justify-between items-center gap-4 shadow-md">
            <div className="aspect-[4/3] w-32 rounded-lg">
                <img src={product_image} alt={product_title} className="w-full aspect-[4/3] rounded-lg " />
            </div>

            <div className=" w-full h-full md:flex justify-between items-start gap-4">
                <div className="">
                    <h1 className="text-xl font-semibold">{product_title}</h1>
                    <p className="text-lg">${price}</p>
                </div>

                <div className="my-auto flex justify-end items-center gap-2">
                    { 
                        pathname === "/dashboard/wishlist" && 
                        (<button onClick={handleAddToCart} className="px-4 py-[5px] text-white text-lg font-medium bg-[#9538E2] border border-white rounded-full hover:bg-[#6b1eab]">Add to Cart</button>) 
                    }

                    <button onClick={handleDelete}  className="text-[1.6rem] cursor-pointer transition-all duration-500 hover:text-red-700">
                        <AiOutlineDelete />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductListCard;