import React,{useState} from 'react'
import validator from 'validator'

const Form=(props)=>{
    const {setProfile}=props

    //State vriables
    
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [mobile,setMobile]=useState('')
    const [jobRole,setJobRole]=useState('')
    const [experience,setExperience]=useState('')
    const [skills,setSkills]=useState('')

    // error state variable
    
    const [formErrors,setFormErrors]=useState({})
    
    //errors object
    const mistakes={}

    const handleChanges=(e)=>{
        const attr=e.target.name
        if(attr==='name'){
            setName(e.target.value)
        }
        else if(attr==='email'){
            setEmail(e.target.value)
        }
        else if(attr==='mobile'){
            setMobile(e.target.value)
        }
        else if(attr==='exp')
        {
            setExperience(e.target.value)
        }
        else if(attr==='job'){
            setJobRole(e.target.value)
        }
        else if(attr==='skills'){
            setSkills(e.target.value)
        }
    }
    const handleJobRole=(e)=>{
        const res=e.target.value
        setJobRole(res)
    }
   

    const runValidations=()=>{
        if(name.trim().length===0){
            mistakes['name']='name should not be blank'
        }
        if(email.trim().length===0){
            mistakes['email']='email should not be blank'
        }
        else if(!validator.isEmail(email)){
            mistakes['email']='invalid email format'
        }
        if(mobile.trim().length===0){
            mistakes['mobile']='contact number should not be blank'
        }
        if(jobRole.trim().length===0){
            mistakes['jobRole']='Job Role should be selected'
        }
        if(experience.trim().length===0){
            mistakes['experience']='experience should not be blank'
        }
        if(skills.trim().length===0){
            mistakes['skills']='Technical skills should not be blank'
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        runValidations()
        if(Object.keys(mistakes).length===0){
            setFormErrors({})

            const profile={
                name:name,
                email:email,
                phone:mobile,
                jobTitle:jobRole,
                experience:experience,
                skills:skills
            }
            console.log(profile)
            setProfile(profile)
            // Reset Form
            setName('')
            setEmail('')
            setJobRole('')
            setMobile('')
            setSkills('')
            setExperience('')
        }
        else{
            setFormErrors(mistakes)
            console.log(formErrors)
        }
        
    }
    return (
        <div>
            <section>
                <form onSubmit={handleSubmit} autoComplete='off'>
                    <label><h4>Full Name</h4></label>
                    <input 
                        type='text'
                        name='name'
                        value={name}
                        onChange={handleChanges}
                    />
                    {formErrors.name && <div className='text-danger'><span>{formErrors.name}</span></div>}
                    <hr/>
                    <label> <h4>Email Address</h4> </label>
                    <input
                        type='email'
                        name='email'
                        value={email}
                        onChange={handleChanges}
                    />
                    {formErrors.email && <div className='text-danger'><span>{formErrors.email}</span></div>}
                    <hr/>
                    <label> <h4>Contact Number</h4> </label>
                    <input 
                        type='text'
                        name='mobile'
                        value={mobile}
                        onChange={handleChanges}
                    />
                    {formErrors.mobile && <div className='text-danger'><span>{formErrors.mobile}</span></div>}
                    <hr/>
                    <label> <h4>Apply for Job</h4></label>
                    <select
                        value={jobRole}
                        name='job'
                        onChange={handleJobRole}
                    >
                        <option>--Select--</option>
                        <option>Front-End Developer</option>
                        <option>Node.js Developer</option>
                        <option>MEAN Stack Developer</option>
                        <option>Full Stack Developer</option>
                    </select>
                    {formErrors.jobRole && <div className='text-danger'><span>{formErrors.jobRole}</span></div>}
                    <hr/>
                    <label> <h4>Experience</h4> </label>
                    <input
                        type='text'
                        name='exp'
                        value={experience}
                        onChange={handleChanges}
                    />
                    {formErrors.experience && <div className='text-danger'><span>{formErrors.experience}</span></div>}
                    <hr/>
                    <label> <h4>technical Skills</h4> </label>
                    <textarea 
                        value={skills}
                        name='skills'
                        onChange={handleChanges}
                        rows='4'
                        cols='70'
                        style={{resize:'none'}}
                    >
                    </textarea>
                    {formErrors.skills && <div className='text-danger'><span>{formErrors.skills}</span></div> }
                    <hr/>
                    <input
                        type='submit'
                        value='Send Application'
                    />
                </form>
            </section>
        </div>
    )
}
export default Form