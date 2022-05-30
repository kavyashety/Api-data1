import React,{useState,useEffect} from "react";
import axios from "axios";

const Apidata = () => {
    const[arr, setArr] = useState([]);
    const[loader, setLoader] = useState(true)
    useEffect(()=>{
        axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
        .then((response)=>{
            console.log(response.data.meals)
            setArr(response.data.meals)
            setLoader(false)
         });
    },[])

    return(
        <div>
           {
               loader?(<h4>loading.....</h4>):
               (
               arr.map(item=>
                <div className="text-center text-primary ">
                <h4>Meal:{item.idMeal}</h4>
                <h4>AREA:{item.strArea}</h4>
                <h5>Ingr:{item.strIngredient1}</h5>
                <h5>StrArea:{item.strArea}</h5>
                <h5>strYoutube:{item.strYoutube}</h5>
                </div>
               )
           )}
        </div>
    )

}
export default Apidata;