import "./MovieCards.css";


function MovieCards(props) {
    return (
        <div className="movieCard">
            <p className="regularText">{props.title}</p>
            <p className="regularText">{props.year}</p>
            <p className="regularText">{props.director}</p>
            <p className="regularText">{props.duration}</p>
            <p className="regularText">{props.rate}</p>
            <div>
                <p className="smallText">{props.genre1}</p>
                <p className="smallText">{props.genre2}</p>
                <p className="smallText">{props.genre3}</p>
                <p className="smallText">{props.genre4}</p>
            </div>

        </div>
    );
};

export default MovieCards;