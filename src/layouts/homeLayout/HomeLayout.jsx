import Banner from "../../compolents/banner/Banner";
import ProductDisplayLayout from "../productDisplayLayout/ProductDisplayLayout";

const HomeLayout = () => {
    return (
        <section className="w-full">
            <Banner/>
            <ProductDisplayLayout/>
        </section>
        
    );
};

export default HomeLayout;