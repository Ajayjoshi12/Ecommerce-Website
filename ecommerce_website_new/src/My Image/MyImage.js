import { useState } from 'react'
import './MyImage.css'

export default function MyImage({imgs = [{url:""}]}){
    // console.log(imgs);

    const [mainImage, setMainImage] = useState(imgs[0])
    // console.log(mainImage);
     
    return(
        <div className="image-main">
            <div className="grid grid-four-column">
                {
                    imgs.map((curElm, index)=>{
                        return (
                            <figure>
                                <img 
                                src={curElm.url} 
                                alt={curElm.filename} 
                                className="box-image--style img-fluid" 
                                key={index}
                                onClick={()=>{setMainImage(curElm)}}
                                />
                            </figure>
                        )
                    })
                }
            </div>

            <div className="main-screen">
                <img src={mainImage.url} alt={mainImage.filename} className="img-fluid"/>
            </div>
        </div>
    )
}