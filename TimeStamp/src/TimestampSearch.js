//import styles from "./CarsList.module.css";
function TimestampSearch({car_detail}) {

     return(
         <div>
             <ul>
                 {car_detail.map(function (car) {  
                 return (   
         <li>
             <span>{car.car_name }</span>
             <span>{car.spareWheel }</span>
             <span>{car.seatingCapacity }</span>
         </li>
     );
 })}
 </ul>
 </div>
     );
}
     export default TimestampSearch;