import styles from "./CarsList.module.css";
function CarsList({car_detail, ignored_properties}) {

     return(
         <div className= {styles.container}>
             <ul>
                 {ignored_properties.map(function (car) {  
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
     export default CarsList;