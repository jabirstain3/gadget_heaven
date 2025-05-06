import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import Products from "../../compolents/products/Products";

const ProductDisplayLayout = () => {
    const [catagory, setCatagory] = useState("All Products");
    const [isCatagoryOpen, setIsCatagoryOpen] = useState(false);

    const catagoryObjects = [
        { id: "12010", name: "All Products", },
        { id: "12011", name: "Smartphone", },
        { id: "12012", name: "Laptop", },
        { id: "12013", name: "Tablet", },
        { id: "12014", name: "Smartwatch", },
        { id: "12015", name: "Headphone", },
        { id: "12016", name: "Cmera", },
    ]

    return (
        <div className="sectionBase w-full my-20 mx-auto p">
            <h2 className="mx-auto text-4xl text-center font-bold">Explore Cutting-Edge Gadgets</h2>

            <div className=" relative mt-6 md:mt-10 md:flex justify-center items-start gap-4">
                <CiMenuFries className={`text-[1.5rem] cursor-pointer transition-all duration-500 md:hidden flex`} onClick={() => setIsCatagoryOpen(!isCatagoryOpen)}/>

                <div className=" hidden w-[200px] p-4 rounded-lg bg-[#dfdcde]/70 shadow-md md:flex flex-col gap-4 ">
                    {catagoryObjects.map((ctg) => <button key={ctg.id} className={`w-full px-6 py-2 rounded-full  text-left ${catagory === ctg.id ? "bg-[#6b1eab] text-white font-bold" : "bg-white text-[#424242] font-semibold " }`} onClick={() => setCatagory(ctg.name)}>{ctg.name}</button>) }
                </div>

                <Products cat={catagory} />

                <aside className={` ${isCatagoryOpen ? "z-20" : "hidden"} md:hidden p-4  absolute top-[10px] left-[-20px] w-[200px] rounded-md transition-all duration-300`}>
                    <div className="border w-[200px] p-4 rounded-lg bg-[#dfdcde]/70 shadow-md flex flex-col gap-4 ">
                        {catagoryObjects.map((ctg) => <button key={ctg.id} className={`w-full px-6 py-2 rounded-full  text-left ${catagory === ctg.id ? "bg-[#6b1eab] text-white font-bold" : "bg-white text-[#424242] font-semibold " }`} onClick={() => setCatagory(ctg.name)}>{ctg.name}</button>) }
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default ProductDisplayLayout;