// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import "../cssFiles/login&signup.css"
import {useState} from 'react'
import Input from '../Components/Input'
import Button from '../Components/Button'
import { Link } from 'react-router-dom'
import Loader from "react-loader-spinner"
// import Loader from "../Components/Loader"

export const SignUp = () => {

    const [name,setName] = useState("")
    const [pass,setPass] = useState("")
    const [Email,setEmail] = useState("")
    const [loader,setloader] = useState(false)




    const Signupfn = (e) => {
        e.preventDefault();

        let obj = {
            Email,
            pass,
            name
        }

        console.log(obj)

        setloader(true)

     
        // setloader(false)

        

    }

    // console.log(loader)

    return (
        <div className="signup_main" >
            {loader ? loader : (<>

                <div>
                <h1>Sign up</h1>
                <form onSubmit={(e) => Signupfn(e)}> 

                <div>
                        <Input 
                             placeholder="Enter UserName"
                             type="text"
                             onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <Input 
                             placeholder="Enter email"
                             type="email"
                             onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
               
                    <div>
                        <Input 
                             placeholder="Enter Password"
                             type="password"
                             onChange={(e) => setPass(e.target.value)}
                        />
                    </div>


                    <div>
                    <Button 
                         value="SignUp"
                         style={{backgroundColor:"black",color:"white"}}
                    />
                </div>

                </form>


             
        
        
                <Link to="/login">login</Link>
            </div>
            </>)}

             
           <Loader type="ThreeDots" 
           color="blue" 
           height={120}
           width={120}
           visible={loader}
           secondaryColor="Grey"
           />
        </div>
    )
}
