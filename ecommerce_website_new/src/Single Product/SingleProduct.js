import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { useProductContext } from "../context/productcontext";
import PageNavigation from "../Page Navigation/PageNavigation";
import MyImage from "../My Image/MyImage";
import FormatPrice from "../Helpers/FormatPrice";
import './SingleProduct.css'
import Star from "../Star/Star";
import AddToCart from "../Add To Cart/AddToCart";

const API = "https://api.pujakaitem.com/api/products";

export default function SingleProduct() {
    const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext()

    // console.log(singleProduct);

    const { id } = useParams();
    // console.log(id);

    const { id: alias, name, company, price, description, category, stock, stars, reviews, image } = singleProduct;

    useEffect(() => {
        getSingleProduct(`${API}?id=${id}`);
    }, [])

    if (isSingleLoading) {
        return <div>Loading.....</div>
    }

    return (
        <section>
            <PageNavigation title={name} />
            <div className="container" style={{ paddingTop: "60px" }}>
                <div className="row">
                    <div className="col-lg-6 col-sm-12" style={{display:"flex",alignItems:"center"}}>    
                        <div className="product_images">
                            <MyImage imgs={image} />
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="product-data">
                            <h2>{name}</h2>
                            <Star stars={stars} reviews={reviews}/>
                            <p className="product-data-price">
                                MRP:
                                <del>
                                    <FormatPrice price={price + 250000} />
                                </del>
                            </p>
                            <p className="product-data-price product-data-real-price">
                                Deal of the Day: <FormatPrice price={price} />
                            </p>
                            <p style={{fontSize:"1rem"}}>{description}</p>
                            <div className="product-data-warranty">
                                <div className="product-warranty-data">
                                    <i className="fa fa-truck warrenty-icon" aria-hidden="true"></i>
                                    <p className="text-single-product">Free Delivery</p>
                                </div>
                                <div className="product-warranty-data">
                                    <i className="fa fa-repeat warrenty-icon" aria-hidden="true"></i>
                                    <p className="text-single-product">30 Days Replacement</p>
                                </div>
                                <div className="product-warranty-data">
                                    <i className="fa fa-truck warrenty-icon" aria-hidden="true"></i>
                                    <p className="text-single-product">Mini Delivered</p>
                                </div>
                                <div className="product-warranty-data">
                                    <i className="fa fa-shield warrenty-icon" aria-hidden="true"></i>
                                    <p className="text-single-product">2 Year Warranty</p>
                                </div>
                            </div>
                            <div className="product-data-info">
                                <p>Available : 
                                    <span className="span-single-product">{stock > 0 ? " In Stock" : " Not Available"}</span>
                                </p>
                                <p>
                                    ID : <span className="span-single-product">{id}</span>
                                </p>
                                <p>
                                    Brand : <span className="span-single-product">{company}</span>
                                </p>
                            </div>  
                            
                            <hr style={{backgroundColor:"#000"}}/>
                            {stock > 0 && <AddToCart product={singleProduct}/>}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}