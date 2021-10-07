import {useState} from "react";
//import styles from "./TimeStamp.module.css";
//import TimeStamp from "./TimeStamp";
//import Search from "./Search";
import TimestampSearch from "./TimestampSearch";

const car_detail=[
    {
       car_name: "Innova",
       spareWheel: "Yes",
       seatingCapacity: 6,
       engine: "good",
       gearBox: "Manual",
       type:"ABS",
       bhp: 2,
       torque: "yes"
 },
 {
           car_name: "Ford",
           spareWheel: "No",
           seatingCapacity: 6,
           engine: "good",
           gearBox: "Manual",
           type:"Non-ABS",
           bhp: 2,
           torque: "yes"
       }
   ];
function App()
{
    
            const [searchTerm, setSearchTerm] = useState("");
            const handleOnSearch =(e) => {
                setSearchTerm(e.target.value);
            };
            const filteredcar_detail = car_detail.filter((detail) =>
            detail.car_name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            return(
                <div>
                    
                    <search searchTerm ={searchTerm} onSearch ={handleOnSearch}/>
                    <h4>Searching for: {searchTerm}</h4>
                   <TimestampSearch car_detail = {filteredcar_detail}/>
        </div>
    );
}
export default App;