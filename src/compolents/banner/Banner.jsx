import Button from "../button/Button";
const Banner = () => {
    return (
        <div className="bgprimary h-screen flex flex-col justify-evenly items-center mb-20 lg:mb-40">
            <div className="w-full text-white max-w-4xl mx-auto px-4 text-center ">
                <h1 className="w-full mx-auto text-5xl font-bold ">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                <p className="w-full my-6 text-lg max-w-2xl mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            
                <Button text='Shop Now' cls='' clickAction=''/>
            </div>

            <div className="relative w-full h-1/4 max-w-4xl mx-auto">
                <div className="absolute z-10 w-full  rounded-lg">
                    <div className="border mx-4 md:mx-8 lg:mx-16 p-4 lg:p-6 bg-white/60 rounded-xl">
                        <img src="../src/assets/image/banner.jpg" alt="" className=" rounded-xl"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;