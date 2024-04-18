import { Link, useNavigate } from "react-router-dom";
import { useState, FormEvent, useEffect } from "react";
import ContinueWith from "../components/ContinueWith";
import loginImage from "../assets/images/loginimage.jpg";
import CustomInput from "../components/Forms/customInput";
import { Formik, Form } from "formik";
import { Button } from "../components/elements/button";
import * as Yup from 'yup'
import { useAppDispatch, useAppSelector } from "../components/redux/store";
import { login } from "../components/redux/Auth/features";
import Cookies from "universal-cookie";
import jwt, { jwtDecode } from  "jwt-decode"
import { setUserAccessToken } from "../components/redux/Auth";

function Login() {



  const cookies = new Cookies()
  const dispatch = useAppDispatch()
  const user = useAppSelector(state=>state.auth.user)


  useEffect ( ()=>{
  if(user){
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('get-token', user.data.accessToken)
  }
  },[user, dispatch])


  const [showpassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

console.log(localStorage.getItem('user'));

  // const buyer = false;
  const navigate = useNavigate();

  
  const initialValues={
    email:'',
    password:''
  }
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
      password:Yup.string().required('Password is Required'),
  });


 
  const onSubmit=async(data:any)=>{
    setLoading(true)
    let submitted = await dispatch(login(data))
    if(submitted){
     
      navigate('/dashboard')
    }
    setLoading(false)
  }

  return (
      <>
 <main className="bg-[#E6F2FB] p-3  flex items-start justify-between font-Euclid text-xl">
      <div className="w-[50%]">
        <img src={loginImage} alt="" className="w-full h-full" />
      </div>

      <div className="w-[50%] bg-white rounded-r-[40px] flex flex-col justify-center gap-12 p-12 items-start pl-[10%] h-full">
        <h3 className="font-semibold text-3xl">Welcome Back to Pharmanager</h3>

       <Formik initialValues={initialValues} validationSchema={validationSchema}   onSubmit={onSubmit}>
       <Form
          className="w-[550px] flex  flex-col gap-10" >
     
          <CustomInput name="email" label="Email" placeholder="Email/Unique Identification Number"/>
          <CustomInput name="password" label="Password"   placeholder='password'
              type={showpassword ? 'text' : 'password'}
              handleShowPassword={() => setShowPassword(!showpassword)} />

          <div className="flex justify-between items-center">
            <div className="flex justify-between items-center">
              <input
                type="checkbox"
                className="cursor-pointer [&:not(input:checked)]:appearance-none outline-none  bg-white h-5 w-5 border border-slate-400 rounded-md mr-2"
              />

              <label htmlFor="prescription" className="text">
                Remember Me
              </label>
            </div>

            <Link to={"/forgot-password"} className="text-formBlue ">
              Forgot password?
            </Link>
          </div>

          {/* <input
            type="submit"
            value={"Login"}
            className="w-full bg-formBlue rounded-md text-center p-4 text-white"
          /> */}
          <Button variant="primary" isLoading={loading} size="lg" type="submit">
            Login
          </Button>
        </Form>
       </Formik>

        <ContinueWith />

        <div className="flex justify-center gap-6 text-xl w-[550px]">
          <p>Don't have an account?</p>
          <Link to={"/sign-up"} className="text-formBlue">
            Create an account
          </Link>
        </div>
      </div>
    </main>
      </>
  );
}

export default Login;
