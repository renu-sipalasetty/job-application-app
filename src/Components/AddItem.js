import React from 'react'
import axios from 'axios'

import Form from './Form'

const AddItem=(props)=>{
    const setProfile=(profile)=>{
        axios.post('https://dct-application-Form.herokuapp.com/users/application-form',profile)
            .then((response)=>{
                const res=response.data
                if(res.hasOwnProperty('errors')===true){
                    console.log(res.errors)
                }
                else{
                    console.log(res)
                }
            })
            .catch((err)=>{
                alert(err.message)
            })
    }
    return (
        <div>
            <Form setProfile={setProfile} />
        </div>
    )
}

export default AddItem