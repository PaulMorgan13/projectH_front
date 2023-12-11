import React  , {useState , useEffect }from "react"; 
import axios from "axios"  
import { useParams } from "react-router-dom";

const CourtPage = () => {
    const [court , setCourt ] = useState({
        name: "", 
        type: "", 
        address: "",
        floor:"",
        rim:"", 
        netType:"", 
        threePointLine:"", 
        collegeThreePointLine:"", 
        courtCount: "",
        seats:""


    })


    const {id} = useParams() 

    useEffect(() =>{
        const grabCourt = async () => {
            const res = await axios.get(`http://localhost:3400/courts/${id}`) 
            setCourt(res.data)
        } 
        grabCourt()
    },[id])  


        return(
                <div className="containter">
                
                    <div className="card"> 
                        <h1>
                        {court.name}
                        </h1> 
                        <h2>
                        {court.address}
                        </h2>

                    </div>

                </div>




        )






}  

export default CourtPage