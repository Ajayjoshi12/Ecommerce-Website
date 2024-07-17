import { useContext } from "react";
import HeroSection from "../Hero Section/HeroSection";
import { useProductContext } from "../context/productcontext";

export default function About() {

    const { myName } = useProductContext()

    const data = {
        name: "Mini Ecommerce"
    }

    return (
        <>
            {myName}
            <HeroSection myData={data} />
        </>
    )
}