
import { useContext, useState } from 'react';
import { IoHeart, IoHeartOutline, IoStar } from 'react-icons/io5';
import { useLocation } from 'react-router';
import { FavoriteContext } from '../../utils/context/FavouriteContext';
import { CartContext } from '../../utils/context/CartContext';

const ProductDetailsCard = () => {
    const { favorites, handalFavorite } = useContext(FavoriteContext);
    const { handalCartItem } = useContext(CartContext);
    const location = useLocation();

    const { state } = location;
    // console.log(state);
    const { product_title, price, product_image, description, Specification, availability, rating, sold } = state || {};

    const [isFavorite, setIsFavorite] = useState(favorites.some(item => item.product_id === state.product_id));

    return (
        <div className="sectionBase mx-auto">
            <div className='w-[90%] lg:w-full max-w-xl lg:max-w-6xl mx-auto my-10 lg:my-14 p-4 lg:p-6 bg-white rounded-lg lg:flex gap-6 shadow-lg md:shadow-2xl'>
                <div className="border w-full lg:w-1/2  aspect-[4/3] relative overflow-hidden rounded-lg">
                    <img src={product_image} alt={product_title} className='w-full object-cover'/>
                </div>

                <div className='mt-4 lg:mt-0 flex flex-col gap-2'>
                    <h1 className='text-2xl font-semibold'>{product_title}</h1>
                    <p className='text-xl font-semibold'>Price: ${price}</p>

                    <div className='text-sm'>
                        {
                            availability ? <p className="w-fit border border-green-400 px-3 py-1 text-green-600 bg-green-50 rounded-full">In Stock</p> : 
                            <p className="w-fit border border-red-400 px-3 py-1 text-red-500 bg-red-50 rounded-full">Out of Stock</p>
                        }
                    </div>

                    <p className=''>{description}</p>

                    <div className="text-lg">
                        <h2 className="font-bold">Specification:</h2>
                        {
                            Specification.map((spec, index) => <p key={index} className='pl-2'>{index+1}. {spec}</p>)
                        }
                    </div>
                    
                    <div className="flex items-center gap-1">
                        <p className='text-lg font-bold'>Rating:</p>
                        <IoStar className="text-yellow-400 text-[1.1rem]"/>
                        <span className="text-gray-800 text-lg font-semibold">{rating}</span>
                        <span className="text-gray-500">({sold} Sold)</span>
                    </div>

                    <div className='flex items-center gap-4 mt-4'>
                        <button className={`hover:text-[#7f21c7] font-semibold hover:bg-white px-6 py-2 border hover:border-[#6b1eab] rounded-full bg-[#932ce7] text-white border-white transition duration-300`} onClick={() => handalCartItem(state)}>Add To Card</button>

                        <button className="bg-gray-200 hover:bg-white rounded-full w-max text-gray-600 p-2 border border-white hover:border-gray-400 transition duration-300" onClick={() => { setIsFavorite(!isFavorite); handalFavorite(state)}} >
                            {
                                isFavorite ? <IoHeart className="w-6 h-6 text-red-500"/> :
                                <IoHeartOutline className="w-6 h-6"/> 
                            }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsCard;