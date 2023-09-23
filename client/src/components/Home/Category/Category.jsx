import cat1 from "../../../assets/category/cat-1.jpg"
import { Context } from "../../../utils/context";
import { useEffect } from "react";
import React, {useContext} from "react";
import "./Category.scss";

const Category = () => {

    const { categories, setCategories } = useContext(Context);
    const print = () => {
        console.log(categories);
    }; 
    

 
    return ( 
    <div className="shop-by-category">
        <div className="categories">
            {/* {print} */}
            {/* {categories.data.map((item) => (
                <div key={item.id} className="category">
                    <img src={process.env.REACT_APP_DEV_URL + item.attributes.img.data.
                    attributes.url} alt="" />
                </div>
            ))}  */}
        </div>
    </div>
    // <div className="shop-by-category">
    //     <div className="categories">
    //             <div className="category">
    //                 <img src={cat1} alt="" />
    //             </div>
    //             <div className="category">
    //                 <img src={cat1} alt="" />
    //             </div>
    //             <div className="category">
    //                 <img src={cat1} alt="" />
    //             </div>
    //             <div className="category">
    //                 <img src={cat1} alt="" />
    //             </div>
    //     </div>
    // </div>
    );
};

export default Category;
