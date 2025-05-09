import { useLocation } from 'react-router';
import ProductDetailsCard from '../../compolents/productDetailCard/productDetailsCard';
import SubBanner from '../../compolents/subBanner/SubBanner';

const ProductDetailsLayout = () => {
    const location = useLocation();

    const { state } = location;
     // console.log(state);
    
    const title = "Product Details";
    const description = "Get an in-depth look at your selected product! Explore its features, specifications, and everything you need to know to make an informed decision. At Gadget Heaven, we ensure you have all the details at your fingertips."
    
    return (
        <div className='w-full bg-[#F6F6F6]'>
            <SubBanner heading={title} intro={description} />
            <ProductDetailsCard product={state} />
        </div>
    );
};

export default ProductDetailsLayout;