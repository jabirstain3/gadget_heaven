import { useEffect, useState } from "react";
import ProductCard from "../productCard/ProductCard";

const Products = ( {cat} ) => {
    const [items, setItems] = useState([]);
    // console.log(cat);
    
    useEffect(() => {
        fetch('electronic_gadgets.json')
            .then((res) => res.json())
            .then((data) => {
                // console.log(data)
                cat === "All Products" ?  setItems(data) :
                setItems(data.filter((item) => item.category === cat));                
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }, [cat]);

    
    return (
        <div className=" w-full flex flex-wrap justify-center md:justify-start gap-4 mt-4 md:mt-0">
            { items.length > 0 ? 
                    items.map((item) => <ProductCard key={item.product_id} item={item} /> )
            : (
                <div className="w-full border rounded-lg flex justify-center items-center h-[360px]">
                    <p className="">No products found in this category.</p>
                </div>
            )}
        </div>
    );
};

export default Products;