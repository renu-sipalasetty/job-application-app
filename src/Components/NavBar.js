import React from 'react'
import {Link,Routes,Route} from 'react-router-dom'
import Home from './Home'
import JobContainer from './JobContainer'
import AddItem from './AddItem'

const NavBar=(props)=>{
    return (
        <>
           <nav>
               <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/form'>Application Form</Link></li>
                    <li> <Link to='/dashBoard'>Admin</Link> </li>
               </ul>
           </nav>

            <Routes>
                <Route
                    path='/'
                    element={<Home />}
                    exact={true}
                />

                <Route
                    path='/form'
                    element={<AddItem />}
                    exact={true}
                />

                <Route
                    path='/dashboard'
                    element={<JobContainer />}
                    exact={true}
                />
            </Routes>
        </>
    )
}
export default NavBar