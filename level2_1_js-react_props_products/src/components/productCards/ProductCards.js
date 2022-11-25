import "./ProductCards.css";

function ProductCards(props) {
    return (
        <div className="productCard">
            <img src={props.img} alt={props.product}></img>
            <h2>{props.product}</h2>
            <h2>{props.price}</h2>
            <p>{props.description}</p>
            <button type="button">Buy Now</button>
        </div>
    )
};

export default ProductCards;