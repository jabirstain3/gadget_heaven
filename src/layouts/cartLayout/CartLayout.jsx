import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../utils/context/CartContext';
import ProductListCard from '../../compolents/productListCard/ProductListCard';
import Modal from '../../compolents/modal/Modal';

const CartLayout = () => {
    const { cartItems, handalClearCart } = useContext(CartContext);
    const [sortedItems, setSortedItems] = useState(cartItems);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [paid, setPaid] = useState(0);
    // console.log(cartItems.length);

    useEffect(() => {
        setSortedItems(cartItems);
    }, [cartItems]);

    const totalPrice = sortedItems.reduce((total, item) => total + item.price, 0);

    const handalSort = () => {
        const sorted = [...sortedItems].sort((a, b) => b.price - a.price);
        setSortedItems(sorted);
    };
    const handalParchase =() => {
        setPaid(totalPrice);
        setIsModalVisible(true);
        handalClearCart();
    }

    return (
        <div className='sectionBase mx-auto'>
            <div className='w-full p-2 md:flex md:gap-4 fustify-center items-center'>
                <div className="w-full mt-2 md:mt-0  grow flex justify-between items-end md:items-center gap-4">
                    <h1 className="text-2xl font-bold">My Cart</h1>
                    <p className="text-2xl font-bold">Total: ${totalPrice}</p>
                </div>

                <div className="w-full md:w-fit mt-2 md:mt-0 flex justify-between md:flex-none items-center gap-4">
                    <button onClick={handalSort} className="px-4 py-1 text-[#7f21c7] text-lg font-semibold bg-white border border-[#6b1eab] rounded-full hover:bg-[#6b1eab] hover:text-white hover:border-white transition duration-300 ">Sort by Price <span></span></button>
                    <button onClick={handalParchase} disabled={sortedItems.length === 0} className={`px-4 py-[5px] text-white text-lg font-medium bg-[#9538E2] border rounded-full border-white  ${sortedItems.length === 0 ? "cursor-not-allowed" : "hover:bg-[#6b1eab]"}`}>Purchase</button>
                </div>
            </div>
            <div className='w-full mt-4 md:mt-6 flex flex-col gap-4'>
                {
                    sortedItems.length > 0 ? 
                    ( sortedItems.map((item) => <ProductListCard key={item.product_id} item={item}/>)) :
                    (<div className="w-full flex justify-center items-center h-[360px]">
                        <p className="text-lg">No products found in the Cart.</p>
                    </div>)
                }
            </div>

            { isModalVisible && <Modal total={paid}/> }
            
        </div>
    );
};

export default CartLayout;