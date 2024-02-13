import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import signupImage from "../assets/images/signupimage.jpg";
import ContinueWith from "../components/ContinueWith";
import PasswordInput from "../components/PasswordInput";

function SignUp() {
  const [signupAs, setSignupAs] = useState("drug buyer");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [typeofBuyer, setTypeofBuyer] = useState("");
  const [typeofPharmacy, setTypeofPharmacy] = useState("");
  const [businessName, setBusinessName] = useState("");

  const buyer = signupAs === "drug buyer";
  const navigate = useNavigate();

  const newUser = {
    email: email,
    firstName: buyer ? firstName : null,
    lastName: buyer ? lastName : null,
    businessName: !buyer ? businessName : null,
    password: password,
    type: buyer ? typeofBuyer : typeofPharmacy,
    address: !buyer ? "Lagos" : null,
  };

  const signupHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(newUser);

    async function action() {
      const response = await fetch(
        `https://pharmanager-backend.onrender.com/auth/${
          buyer ? "" : "pharmacy/"
        }signup`,
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
        console.log(resData);
        return navigate("/login");
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
    <main className="bg-[#E6F2FB] p-3 flex items-start justify-between font-Euclid text-xl ">
      <div className="w-[50%] ">
        <img src={signupImage} alt="" className="h-[900px]" />
      </div>

      <div className="w-[50%] bg-white rounded-r-[50px] flex flex-col gap-10 p-12 items-start pl-[10%] h-[900px]">
        <h3 className="font-semibold text-2xl">Welcome to Pharmanager</h3>

        <div className="flex justify-between border-2 border-formBlue rounded-md w-[550px]">
          <div
            className={`p-3 w-[50%] text-center cursor-pointer ${
              signupAs === "drug buyer" && "bg-formBlue text-white"
            }`}
            onClick={() => setSignupAs("drug buyer")}
          >
            Sign up as a drug buyer
          </div>
          <div
            className={`p-3 w-[50%] text-center cursor-pointer ${
              signupAs === "pharmacy" && "bg-formBlue text-white"
            }`}
            onClick={() => setSignupAs("pharmacy")}
          >
            Sign up as a pharmacy
          </div>
        </div>

        <form
          method="post"
          onSubmit={signupHandler}
          className="w-[550px] flex flex-col gap-8"
        >
          {buyer && (
            <div className="flex justify-between items-center gap-6 ">
              <input
                required
                type="text"
                placeholder="First Name"
                name="firstName"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                className="border-2 border-slate-200 focus:outline-formBlue rounded-md p-4 w-[50%]"
              />
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                className="border-2 border-slate-200 focus:outline-formBlue rounded-md p-4 w-[50%]"
              />
            </div>
          )}
          {!buyer && (
            <input
              type="text"
              placeholder="Business Name"
              name="businessName"
              value={businessName}
              onChange={e => setBusinessName(e.target.value)}
              className="border-2 border-slate-200 focus:outline-formBlue rounded-md p-4 w-[100%]"
            />
          )}
          <input
            required
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="border-2 border-slate-200 focus:outline-formBlue rounded-md p-4 w-full"
          />
          <PasswordInput
            placeholder="Password"
            name="password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          {/* For Drug Buyer Categories */}
          {buyer && (
            <select
              name="type of drug buyer"
              id="buyer"
              className="border-2 rounded-md p-3 w-full"
              value={typeofBuyer}
              onChange={e => setTypeofBuyer(e.target.value)}
            >
              <option value="type">Type of Drug Buyer</option>
              <option value="Corporate Organization">
                CORPORATE ORGANIZATION
              </option>
              <option value="PATIENT">PATIENT</option>
            </select>
          )}

          {/* For Pharmacy Categories */}
          {!buyer && (
            <select
              name="type of drug pharmacy"
              id="pharmacy"
              className="border-2 focus:outline-none rounded-md p-3 w-full"
              value={typeofPharmacy}
              onChange={e => setTypeofPharmacy(e.target.value)}
            >
              <option value="type">Type of Pharmacy</option>
              <option value="COMMUNITY_PHARMACY">COMMUNITY_PHARMACY</option>
              <option value="HOSPITAL/CLINIC PHARMACY">
                HOSPITAL/CLINIC PHARMACY
              </option>
              <option value="DISTRIBUTOR">DISTRIBUTOR</option>
            </select>
          )}

          <button
            type="submit"
            className="w-full bg-formBlue rounded-md text-center p-4 text-white"
          >
            Create an Account
          </button>
        </form>

        <ContinueWith />

        <div className="flex justify-center gap-6 text-xl w-[550px]">
          <p>Already have an account?</p>
          <Link to={"/login"} className="text-formBlue">
            Login
          </Link>
        </div>
      </div>
    </main>
  );
}

export default SignUp;

// export async function action({ request }) {
//   const data = await request.formData();
//   const authData = {
//     firstName: data.get("firstName"),
//     lastName: data.get("lastName"),
//     email: data.get("email"),
//     password: data.get("password"),
//     type: data.get("type"),
//   };

//   const response = await fetch(
//     `https://pharmanager-backend.onrender.com/auth/signup`,
//     {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json",
//       },
//       body: JSON.stringify(authData),
//     }
//   );

//   if (!response.ok) {
//     throw json({ message: "Could not signup user" }, { status: 500 });
//   }

//   const resData = await response.json();
//   console.log(resData);

//   return redirect("/");
// }

// const token = resData.token;

// localStorage.setItem("token", token);
// const expiration = new Date();
// expiration.setHours(expiration.getHours() + 1);
// localStorage.setItem("expiration", expiration.toISOString());
