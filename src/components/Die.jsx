
export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white",
        boxShadow: props.isHeld ? "0px 3.2px 7.68px 0px #0000002E" : "0px 1.2px 3.2px 0px #0000001A"
    };

    return (
        <button
            style={styles}
            className="die-container__button"
            aria-pressed={props.isHeld}
            aria-label={`Die with value ${props.value}, 
            ${props.isHeld ? "held" : "not held"}`}
            onClick={() => props.toggleHeld(props.id)}
        >
            {props.value}
        </button>
    );
}
