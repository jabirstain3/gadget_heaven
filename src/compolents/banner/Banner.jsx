import Button from "../button/Button";
import bannerImg from "../../assets/image/banner.jpg";

const Banner = () => {
    return (
        <div className="bgprimary min-h-screen flex flex-col justify-evenly items-center py-10 gap-10">
            <div className="w-full text-white max-w-4xl mx-auto px-4 text-center ">
                <h1 className="w-full mx-auto text-5xl font-bold ">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                <p className="w-full my-6 text-lg max-w-2xl mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

                <a href="#displaysection"><Button text='Shop Now' cls='' clickAction=''/></a>
            </div>

            <div className="w-full max-w-4xl mx-auto">
                <div className="border mx-4 md:mx-8 lg:mx-16 p-4 lg:p-6 bg-white/60 rounded-xl">
                    <img src={bannerImg} alt="" className=" rounded-xl"/>
                </div>
            </div>
        </div>
    );
};

export default Banner;