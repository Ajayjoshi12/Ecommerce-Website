import './Star.css'

export default function Star({ stars, reviews}){

    // console.log(stars);

    const ratingStar = Array.from({length:5}, (elem, index) => {

        let number = index + 0.5;

        return (
            <span key={index}>
                {
                    stars >= index + 1 
                    ? <i className="fa fa-star icon" aria-hidden="true"></i>
                    : stars >= number
                    ? <i className="fa fa-star-half-o icon" aria-hidden="true"></i>
                    : <i className="fa fa-star-o icon" aria-hidden="true"></i>
                }
            </span>
        )
    })

    return(
        <div>
            <div className="icon-style">
                {ratingStar}
                <p style={{paddingLeft:"7px"}}>({reviews} customer reviews)</p>
            </div>  
        </div>
    )
}