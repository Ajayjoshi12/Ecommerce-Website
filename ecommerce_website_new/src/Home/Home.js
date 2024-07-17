import FeatureProduct from "../Feature Products/FeatureProduct";
import HeroSection from "../Hero Section/HeroSection";
import Services from "../Services/Services";
import Trusted from "../Trusted/Trusted";

export default function Home() {

    const data = {
        name: "Mini Store"
    }

    return (
        <>
            <HeroSection myData={data} />
            <FeatureProduct/>
            <Services />
            <Trusted />
            
        </>
    )
}