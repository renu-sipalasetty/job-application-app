import React, { useState } from 'react'
import JobRoles from './JobRoles'

const DashBoard=(props)=>{
    const {data,handleUser}=props
    console.log(data)
    const [job,setJob]=useState([])
    
    const filteredFrontEnd = data.filter((ele)=>{
        return ele.jobTitle === "Front-End Developer"
    }) 
    const filteredNode=data.filter((ele)=>{
        return ele.jobTitle === "Node.js Developer"
    })
    const filteredMean=data.filter((ele)=>{
        return ele.jobTitle === "MEAN Stack Developer"
    })
    const filteredFullStack=data.filter((ele)=>{
        return ele.jobTitle === "FULL Stack Developer"
    })
    const handleClick=(e)=>{
        const res=e.target.value
        if(res==='Front-End Developer'){
            setJob(filteredFrontEnd)
        }
        if(res==='Node.js Developer'){
            setJob(filteredNode)
        }
        if(res==='MEAN Stack Developer'){
            setJob(filteredMean)
        }
        if(res==='Full Stack Developer'){
            setJob(filteredFullStack)
        }
    }
    return (
        <div>
            <section>
                <button value='Front-End Developer' onClick={handleClick}>Front-End Developer</button>
                <button value='Node.js Developer' onClick={handleClick}>Node.js Developer</button>
                <button value='MEAN Stack Developer' onClick={handleClick}>MEAN Stack Developer</button>
                <button value='Full Stack Developer' onClick={handleClick}>Full Stack Developer</button>
            </section>
            <JobRoles job={job} handleUser={handleUser} />
        </div>
    )
}
export default DashBoard
