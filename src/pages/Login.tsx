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
import { decodedToken } from "../components/redux/Auth/interface";
function Login() {

  const [callbackUrl, setCallBackUrl] = useState<string | null>(null)

  const cookies = new Cookies()
  const dispatch = useAppDispatch()
  const user = useAppSelector(state=>state.auth.user)


  useEffect ( ()=>{
    if(user){
      const decodedToken = jwtDecode<decodedToken>(user?.data.accessToken)
      cookies.set("jwt_authorization", decodedToken)
      
      dispatch(setUserAccessToken(decodedToken))
    }else{
      const storedToken = cookies.get('accessToken')
      if(storedToken){
        const decodedStoredToken = jwtDecode<decodedToken>(storedToken)
        dispatch(setUserAccessToken(decodedStoredToken))
      }
    }
  },[user, dispatch])

//   useEffect(() => {
//     const queryParams = new URLSearchParams(window.location.search);
//     if (queryParams.has('callbackUrl')) {
//         setCallBackUrl(queryParams.get('callbackUrl'));
//     }
// }, []);

  const [showpassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)


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

  // const loginHandler = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log(newUser);

  //   async function action() {
  //     const response = await fetch(
  //       `https://pharmanager-backend.onrender.com/auth/${
  //         buyer ? "" : "pharmacy/"
  //       }login`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-type": "application/json",
  //         },
  //         body: JSON.stringify(newUser),
  //       }
  //     );

  //     if (response.ok) {
  //       const resData = await response.json();
  //       // const data = resData.data;
  //       // const token = data.id;
  //       console.log(resData.data.accessToken, resData.data.refreshToken);
  //       if (buyer) {
  //         return navigate("/");
  //       } else return navigate("/");
  //       // console.log(`${response.status}: ${JSON.stringify(resData)}`);
  //     } else if (response.status === 409) {
  //       console.log(`${response.status}: ${await response.text()}`);
  //       // Handle conflict error, inform the user, etc.
  //     } else {
  //       console.log(`${response.status}: ${await response.text()}`);
  //       // Handle other errors
  //     }
  //   }
  //   action();
  // };
  const onSubmit=async(data:any)=>{
    setLoading(true)
    let submitted = await dispatch(login(data))
    if(submitted){
      console.log('login successful');
      
    }
    setLoading(false)
  }

  return (
      <>
   {
    user?(<div>Hello {user.data.pharmacy.businessName}</div>):(
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
    )
   }
      </>
  );
}

export default Login;
