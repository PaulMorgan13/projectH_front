import react, { useState ,useEffect } from "react" 
import axios  from "axios" 
import {Link } from "react-router-dom" 
import Top from "../componets/Top" 
import "./HomePage.css"


const HomePage = () => {
    const [courts , setCourts ] = useState([]) 


    useEffect(()=> {
        const grabCourts = async () =>{
            const res = await axios.get(`http://localhost:3400/courts`)
            setCourts(res.data)  
            
        } 
        grabCourts()  
    },[])

    return( 
        <div className="container" >  
                <h1 className="top-heading">Top Courts</h1>
            <div className="cards">
                
                
                {  

            courts.slice(0,4).map((court)=>(
                    <div className="card" key="_id">
                        <h1>
                            {court.name}
                        </h1> 

                        <h2>
                            {court.address}
                        </h2>
                    
                    </div>
            ))}
            </div>
        </div>

    )
    
} 


export default HomePage