import React,{useState,useEffect} from "react"
import axios from 'axios'
import Loader from "./Loader"
import DashBoard from "./Dashboard"

const JobContainer=(props)=>{
    const [data,setdata]=useState([])
    const handleUser=(people)=>{
        setdata(people)
    }
    const[isLoading,setIsLoading] = useState(true);

    useEffect(()=>{
        axios.get('http://dct-application-form.herokuapp.com/users/application-forms')
        .then((response)=>{
            const res=response.data
            if(res.hasOwnProperty('errors')){
                alert(res.errors)
            }
            else{
                setdata(res)
                setIsLoading(false)
            }
        })
        .catch((err)=>{
            alert(err.message)
        })
    },[])
    return (
        <div>
            <h2>Admin DashBoard -{isLoading ?<Loader/>: <span>{data.length}</span>}</h2>
            <DashBoard data={data} handleUser={handleUser}/>
            
        </div>
    )
}

export default JobContainer