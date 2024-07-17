import { NavLink } from "react-router-dom";
import './HeroSection.css'

export default function HeroSection(props) {

    const { name } = props.myData

    return (
        <div className="container" style={{padding:"60px 0px"}}>
            <div className="row">
                <div className="col-lg-6 col-sm-12">
                    <div className="res-padd">
                        <p style={{textTransform:"uppercase",marginBottom:"0px"}}>Welcome to</p>
                        <h1 style={{color:"#1b1a19"}}>{name}</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ducimus ratione, quibusdam, laboriosam voluptatum necessitatibus architecto laudantium neque commodi autem modi aliquid molestias at et accusantium placeat eius quas quis.
                        </p>
                        <NavLink>
                            <button className="btn btn-danger btn-hero">shope now</button>
                        </NavLink>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <div>
                        <img src="assets/img/hero.jpg" className="img-fluid" alt="hero-section-img" />
                    </div>
                </div>
            </div>
        </div>
    )
}