import { useProductContext } from "../context/productcontext"
import Product from "../Product/Product";
import './FeatureProduct.css'


export default function FeatureProduct() {

    const { isLoading, featureProducts } = useProductContext();
    // console.log(featureProducts);

    if (isLoading) {
        return <div>......Loading</div>
    }

    return (
        <section className="main-feature">
            <div className="container">
                <div>
                    <p style={{ marginBottom: "0px" }}>Check Now!</p>
                    <h2>Our Feature Services</h2>
                </div>
                <div className="row">

                    {featureProducts.map((curElem) => {
                        return <Product key={curElem.id} {...curElem}/>

                    })}
                </div>
            </div>
        </section>
    )
}