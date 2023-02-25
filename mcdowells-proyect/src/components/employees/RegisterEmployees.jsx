import { useState } from 'react'
import '../../assets/employees/employeeshome.css'
import Modal from '../Modal';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../context/User';



const RegisterEmployees = () => {
    const navigate = useNavigate()
    const contextUser = useUserContext()

    const [userName, setUserName] = useState()
    const [password, setPassword] = useState()
    const [loggedIn, setLoggedIn] = useState(false)
    const [notLoggedIn, setNotLoggedIn] = useState(false)


    const RegisterUser =async (e) => {
        e.preventDefault();
        const infoUser = {
            username: userName,
            password: password
        }
       /* const response = await UsersManager.login(infoUser, setLoggedIn, setNotLoggedIn)
        if (typeof response !== 'undefined') {
            contextUser.setUser(response.data)
            navigate('/employees')
        } */
    }


    return (<>
        <div className='containerLog'>
            <div className="logITitle">
                <p className='logInText'>
                    REGISTER
                </p>
            </div>
            <div className='formDiv'>
                <form className='form' onSubmit={RegisterUser}>
                    <img className='userImg' src='https://cdn-icons-png.flaticon.com/512/3899/3899618.png' alt='NOT FOUND' />
                    <label className='user' for="fname">
                        USER
                    </label>

                    <input className='userInput' type="text" id="employeeUser"
                        name="employeeemail" placeholder="Introduzca usuario" onChange={(e) => setUserName(e.target.value)} required />

                    <label className='password'>PASSWORD</label>

                    <input className='passwordInput' type="password" id="emailOrder"
                        name="empPass" placeholder="password" onChange={(e) => setPassword(e.target.value)} required />

                    <input className='logInBtn' type="submit" value="LOG IN" />


                </form>
            </div>
        </div>

        {notLoggedIn && <Modal title={"Ha habido un error"} text={"Usuario y/o contraseña no encontrado"} route={() => setNotLoggedIn(false)} />}


    </>)

}


export default RegisterEmployees;

