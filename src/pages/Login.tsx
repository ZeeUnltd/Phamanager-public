import { Link, useNavigate } from "react-router-dom";
import { useState, FormEvent } from "react";
import ContinueWith from "../components/ContinueWith";
import PasswordInput from "../components/PasswordInput";
import loginImage from "../assets/images/loginimage.jpg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const buyer = false;
  const navigate = useNavigate();

  const newUser = {
    email: email,
    password: password,
  };

  const loginHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(newUser);

    async function action() {
      const response = await fetch(
        `https://pharmanager-backend.onrender.com/auth/${
          buyer ? "" : "pharmacy/"
        }login`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        }
      );

      if (response.ok) {
        const resData = await response.json();
        // const data = resData.data;
        // const token = data.id;
        console.log(resData.data.accessToken, resData.data.refreshToken);
        if (buyer) {
          return navigate("/");
        } else return navigate("/");
        // console.log(`${response.status}: ${JSON.stringify(resData)}`);
      } else if (response.status === 409) {
        console.log(`${response.status}: ${await response.text()}`);
        // Handle conflict error, inform the user, etc.
      } else {
        console.log(`${response.status}: ${await response.text()}`);
        // Handle other errors
      }
    }
    action();
  };

  return (
    <main className="bg-[#E6F2FB] p-3  flex items-start justify-between font-Euclid text-xl   ">
      <div className="w-[50%] ">
        <img src={loginImage} alt="" className="h-[850px]" />
      </div>

      <div className="w-[50%] bg-white rounded-r-[50px] flex flex-col justify-center gap-12 p-12 items-start pl-[10%] h-[850px]">
        <h3 className="font-semibold text-3xl">Welcome Back to Pharmanager</h3>

        <form
          onSubmit={loginHandler}
          className="w-[550px] flex  flex-col gap-10"
        >
          <input
            required
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email address/Unique Identification Number"
            className="border-2 focus:outline-formBlue rounded-md p-4 w-full  border-slate-200"
          />
          <PasswordInput
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />

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

          <input
            type="submit"
            value={"Login"}
            className="w-full bg-formBlue rounded-md text-center p-4 text-white"
          />
        </form>

        <ContinueWith />

        <div className="flex justify-center gap-6 text-xl w-[550px]">
          <p>Don't have an account?</p>
          <Link to={"/sign-up"} className="text-formBlue">
            Create an account
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Login;
