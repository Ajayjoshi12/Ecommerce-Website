import FilterSection from "../Filter Section/FilterSection";
import ProductList from "../Product List/ProductList";
import Sort from "../Sort/Sort";
import { useFilterContext } from "../context/filter_context";

export default function Products(){

    const { filter_products } = useFilterContext();
    // console.log(filter_products);

    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div>
                        <FilterSection/>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="product-view--sort">
                        <div className="sort-filter">
                            <Sort/>
                        </div>
                        <div className="main-product">
                            <ProductList/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}