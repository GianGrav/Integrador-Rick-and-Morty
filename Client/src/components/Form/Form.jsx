import { useState } from "react"
import {Validation} from '../../validacion'
import style from './Form.module.css'

const Form = (props)=>{
    const {login} = props

    const [userData, setUserData] = useState({
        email:'',
        password:''
    })

    const [errors,setErrors] = useState({})

    const handleChange = (event) =>{
        setUserData({
            ...userData,
            [event.target.name]:event.target.value
        })

        setErrors({
            ...errors,
            [event.target.name]: Validation(userData,event.target.name)
        })
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        login(userData)
    }

    return (
        <div>
            <p>Login</p>
            <form onSubmit={handleSubmit}>
                <div className={style.userbox}>
                <input required="" type="text" name="email" value={userData.email} onChange={handleChange} />
                <label htmlFor="email">Email</label>
                {errors.email !== ''? <span className={style.error}>{errors.email}</span> : ''}
                </div>
                <br /><br /><br />
                <div className={style.userbox}>
                <input required="" type="text" name="password" value={userData.password} onChange={handleChange}/>
                {errors.password!== ''? <span className={style.error}>{errors.password}</span> : ''}
                <label htmlFor="password">Password</label>
                </div>
                
                <div>
                <button type="submit" className={style.btnn}>login</button>
                </div>
            </form>
        </div>
    )
}

export default Form

