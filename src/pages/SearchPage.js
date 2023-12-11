import react, { useState ,useEffect } from "react" 
import axios  from "axios"   
import {Link } from "react-router-dom" 




const SearchPage =()=>{ 
    const [query , setQuery] = useState([]) 

    const handleSearch = (e) =>{
        setQuery(e.target.value)


    }

    
    useEffect(() =>{
        const grabParks = async() => {
            const res = await axios.get(`http://localhost:3400/courts`)
            setQuery(res.data)
            console.log(res)
            
        }    
        grabParks()
    },[])
 
    return( 
            <div className="container">
                    <input className="search" placeholder="Search" name="search"  onChange={handleSearch} />



            </div>



    )


} 

export default SearchPage