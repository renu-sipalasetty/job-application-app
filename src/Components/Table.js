import axios from "axios"
import React from "react"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Table=(props)=>{
    const {job,handleUser}=props

    const showDetails=(id)=>{
        axios.get(`http://dct-application-form.herokuapp.com/users/application-form/${id}`)
            .then((response)=>{
                const result=response.data
                // console.log(result)
                const MySwal = withReactContent(Swal)
                MySwal.fire({
                    title: <p>{result.name}'s Profile</p>,
                    html:<div>
                            <p>Contact Number:{result.phone}</p>
                            <p>Email:{result.email}</p>
                            <p>Skills:{result.skills}</p>
                            <p>Experience:{result.experience}</p>
                            <p>Status:{result.status}</p>
                        </div>
                })
            })
            .catch((err)=>{
                alert(err.catch)
            })
    }

    const handleShortlist=(id)=>{
        axios.put(`http://dct-application-form.herokuapp.com/users/application-form/update/${id}`,{status:'shortlisted'})
            .then((res)=>{
                axios.get('http://dct-application-form.herokuapp.com/users/application-forms')
                    .then((response)=>{
                        const result=response.data.map((ele)=>{
                            return ele
                        })
                        handleUser(result)
                    })
                    .catch((err)=>{
                        alert(err.message)
                    })
            })
            .catch((err)=>{
                alert(err.message)
            })

    }
    const handleReject=(id)=>{
        axios.put(`http://dct-application-form.herokuapp.com/users/application-form/update/${id}`,{status:'rejected'})
            .then((res)=>{
                axios.get('http://dct-application-form.herokuapp.com/users/application-forms')
                    .then((response)=>{
                        const result=response.data.map((ele)=>{
                            return ele
                        })
                        handleUser(result)
                    })
                    .catch((err)=>{
                        alert(err.message)
                    })
            })
            .catch((err)=>{
                alert(err.message)
            })
    }
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Technical Skills</th>
                        <th>Experience</th>
                        <th>Applied Date</th>
                        <th>View Details</th>
                        <th>Update Application status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        job.map((profile)=>{
                            return (
                                    <tr key={profile._id}>
                                        <td>{profile.name}</td>
                                        <td>{profile.skills}</td>
                                        <td>{profile.experience}</td>
                                        <td>{profile.createdAt}</td>
                                        <td><button 
                                                onClick={(e)=>{showDetails(profile._id)}} 
                                            >View Details
                                            </button>
                                        </td>
                                        <td>
                                            <div>
                                                <button  
                                                    className="btn btn-success" 
                                                    onClick={()=>{handleShortlist(profile._id)}} 
                                                    disabled={profile.status==='shortlisted'}
                                                >ShortList
                                                </button>
                                                    
                                                <button
                                                    onClick={()=>{handleReject(profile._id)}} 
                                                    className="btn btn-danger" 
                                                    disabled={profile.status==='rejected'}
                                                >Reject
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                            )
                        })
                    }
                </tbody>

            </table>
        </div>
    )
}
export default Table