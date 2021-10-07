//import logo from './logo.svg';
import './App.css';
import CarsList from './CarsList';

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
  function App(){
    return (
         <div>
             <h1>Car Details</h1>
             < CarsList   car_detail = { car_detail } ignored_properties= { car_detail } />
         </div>
    );
}
export default App;