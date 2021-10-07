import TimeShow from "./TimeShow";
function Button({handleClick}) {
    const[isShow, setShow] = useState(false);
    const toggleShow = () => {
        setShow((prev) => !prev);
        handleClick();
    };
    return (
        <button onClick={toggleShow} type="button">
            {isShow ? "2021-10-01T11:32:02.089Z"  : "2021-10-01T11:32:58.089Z"}
        </button>
    );
}

const Greeting = ({greeting}) => <h1> {greeting}</h1>;

export default function TimeShow() {
    const greeting = "2021-10-01T11:32";
    const handleButtonClick = () => console.log("I am clicking the button to see time")

    return (
        <div className = {styles.container}>
            <Greeting greeting = {greeting}/>
            <Button handleClick={handleButtonClick}/>
            <TimeStamp/>
        </div>
    );
}
export default TimeShow;