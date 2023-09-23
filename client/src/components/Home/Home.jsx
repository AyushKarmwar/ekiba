import { useEffect, useContext } from "react";
import { Context } from "../../utils/context";

import "./Home.scss";
import Category from "../Home/Category/Category";
import Banner from "./Banner/Banner";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";

const Home = () => {


    const getCategories = () => {
        fetchDataFromApi("/api/categories?populate=*").then(res => {
            // console.log(res);
            console.log(categories)
            setCategories(res);
            console.log(categories)
        });
    };

    const { categories, setCategories } = useContext(Context);
    useEffect(() => {
        getCategories();
        // console.log(categories)
    }, []);



    return (<div>
            <Banner/>
            <div className="main-content">
                <div className="layout">
                {/* <Category categories={categories} /> */}
                <Category />
                <Products headingText="Popular Products" />
                </div>
            </div>
            </div>);
};

export default Home;
