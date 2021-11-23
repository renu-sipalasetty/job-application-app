import React from 'react'
import Table from './Table'
const JobRoles=(props)=>{
    const {job,handleUser}=props
    return (
            <>
                {
                    job.length>0 && (
                        <div>
                            <h2>{job[0]['jobTitle']}</h2>
                            <Table job={job} handleUser={handleUser} />
                        </div>
                    )
                }
            </>
    )
}
export default JobRoles