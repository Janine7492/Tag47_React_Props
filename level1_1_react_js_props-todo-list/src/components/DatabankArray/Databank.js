import "./Databenk.css";



function DataBank(props) {
    return (
        <ul className="list">
            <li>{props.todo}</li>
        </ul>
    )
}

export default DataBank;