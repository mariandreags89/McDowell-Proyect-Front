import '../../assets/employees/employeeshome.css'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function EmployeesHome() {

    const [employeeUser, setEmployeeUser] = useState();
    const [empPass, setEmpPass] = useState();
    const navigate = useNavigate();
    console.log(employeeUser,empPass);

    return (
        <>
            <div className='container-enployees'>
                <div className="logITitle">
                    <p className='logInText'>
                        LOG IN
                    </p>
                </div>
                <div className='formDiv'>
                    <form className='form'>
                        <img className='userImg' src='https://cdn-icons-png.flaticon.com/512/3899/3899618.png' alt='NOT FOUND'/>
                        <label className='user' for="fname">
                            USER
                        </label>

                        <input className='userInput' type="text" id="employeeUser"
                            name="clientemail" placeholder="Introduzca email" required />

                        <label className='password'>PASSWORD</label>

                        <input className='passwordInput' type="text" id="empPass"
                            name="empPass" placeholder="password" required />

                        {/* <input className='logInBtn' type="submit" value="LOG IN" /> */}
                        <button className='logInBtn' onClick={() => navigate(`/employees`)}>LOG IN</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default EmployeesHome;