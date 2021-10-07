import {useState} from "react";

const TimeStamp = () => {
//    const searchState=  useState("");
//    const searchTerm  = searchState[0];
//    const setSearchTerm = searchState[1];
const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (event) => {
        setSearchTerm (event.target.value);
    };

return (
    <div>
        <label htmlFor = "search"> Timestamp: </label>
        <input id = "search" type = "text" onChange={handleChange}/>
        <p>
            Searching for <strong>{searchTerm}</strong>
        </p>
    </div>
);
}
export default TimeStamp;