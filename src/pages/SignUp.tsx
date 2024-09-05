import { useState, FormEvent, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import signupImage from "../assets/images/signupimage.jpg";
import ContinueWith from "../components/ContinueWith";
import Axios from "../api/axios";
import { Form, Formik } from "formik";
import CustomInput from "../components/Forms/customInput";
import CustomSelect from "../components/Forms/customSelect.js";
import { Button } from "../components/elements/button.js";
import * as Yup from "yup";
// import { useAppDispatch, useAppSelector } from "../components/redux/store.js";
// import { patient_Registration, pharmacy_Registration } from "../components/redux/Auth/features.js";

function SignUp() {
  const [signupAs, setSignupAs] = useState("drug buyer");
  const [showPassword, setShowPassword] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const buyer = signupAs === "drug buyer";
  const pharmacy = signupAs === "pharmacy";

  // const dispatch = useAppDispatch();
  // const getToken = useAppSelector((state) => state.auth.decodedToken);
  // const token:string|any = getToken

  const navigate = useNavigate();
  // console.log(token);

  const buyerInitialvalues = {
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    password: "",
  };

  const pharmacyIntialValues = {
    businessName: "",
    email: "",
    type: "",
    password: "",
    address: "",
  };

  const buyerValidationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "First name must be at least 2 characters")
      .max(50, "First name must be at most 50 characters")
      .required("First name is required"),
    lastName: Yup.string()
      .min(2, "Last name must be at least 2 characters")
      .max(50, "Last name must be at most 50 characters")
      .required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is Required"),
    role: Yup.string().required("Type is required"),
  });

  const PharmacyValidationSchema = Yup.object().shape({
    businessName: Yup.string()
      .min(2, "Business name must be at least 2 characters")
      .max(50, "Business name must be at most 50 characters")
      .required("Business name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is Required")
      .min(8, "Password must be at least 8 characters"),
    type: Yup.string().required("Type is required"),
    address: Yup.string().required("A user must have an address"),
  });

  const register_url = "/auth/pharmacy/signup";

  const onSubmit_alt = async (data: any) => {
    console.log(data);

    try {
      const response = await Axios.post(register_url, data);
      console.log(response.data, response.statusText);
      navigate("/login", { replace: true });

      //clear the input fields if successful here
    } catch (error) {
      if (!error?.response) {
        console.log("No server response");
      } else if (error.response.status === 409) {
        console.log("username has been taken");
      } else {
        console.log("Registration error: ", error);
      }

      console.log("Registration error: ", error);
    }
  };

  const onSubmit = async (data: any) => {
    console.log(data);
    if (buyer) {
      setIsSubmitting(true);

      // let  submit = await dispatch(patient_Registration(data))
      let submit;
      if (submit) {
        console.log("submitted");
      }
    } else if (pharmacy) {
      setIsSubmitting(true);

      // let submit = await dispatch(pharmacy_Registration(data))
      let submit;
      if (submit) {
        console.log("submitted");
      }
    }

    setIsSubmitting(false);
  };

  // const signupHandler = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log(newUser);

  //   async function action() {
  //     const response = await fetch(
  //       `https://pharmanager-backend.onrender.com/auth/${
  //         buyer ? "" : "pharmacy/"
  //       }signup`,
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
  //       console.log(resData);
  //       return navigate("/login");
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

  // setHttpOnlyCookie()

  return (
    <main className="bg-[#E6F2FB] p-3 flex items-start justify-between font-Euclid text-xl ">
      <div className="w-[50%] ">
        <img src={signupImage} alt="" className="h-[900px]" />
      </div>
      <div className="w-[50%] bg-white rounded-r-[50px] flex flex-col gap-10 p-12 items-start pl-[10%] h-[900px]">
        <h3 className="font-semibold text-2xl">
          Welcome to Pharmanager Health Systems
        </h3>

        <div className="flex justify-between border-2 border-formBlue rounded-md w-[100%]">
          <div
            className={`p-3 w-[50%] text-center cursor-pointer ${
              buyer && "bg-formBlue text-white"
            }`}
            onClick={() => setSignupAs("drug buyer")}
          >
            Sign up as a patient
          </div>
          <div
            className={`p-3 w-[50%] text-center cursor-pointer ${
              pharmacy && "bg-formBlue text-white"
            }`}
            onClick={() => setSignupAs("pharmacy")}
          >
            Sign up as a provider
          </div>
        </div>

        {buyer && (
          <Formik
            initialValues={buyerInitialvalues}
            validationSchema={buyerValidationSchema}
            onSubmit={onSubmit}
          >
            <Form className="w-[100%] flex flex-col gap-8">
              <>
                <div className="flex justify-between items-center gap-6 ">
                  <CustomInput
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    label=""
                  />

                  <CustomInput
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    label=""
                  />
                </div>
                <CustomInput
                  label=""
                  type="email"
                  placeholder="Email Address"
                  name="email"
                />
                <CustomInput
                  placeholder="Password"
                  name="password"
                  label=""
                  type={showPassword ? "text" : "password"}
                  handleShowPassword={() => setShowPassword(!showPassword)}
                />

                {/* For Drug Buyer Categories */}
                <CustomSelect
                  label=""
                  name="role"
                  options={[
                    {
                      label: "CORPORATE ORGANIZATION",
                      value: "CORPORATE ORGANIZATION",
                    },
                    { value: "PATIENT", label: "PATIENT" },
                  ]}
                />
              </>

              <Button isLoading={isSubmitting} size="lg" type="submit">
                {" "}
                Create an Account
              </Button>
            </Form>
          </Formik>
        )}
        {pharmacy && (
          <Formik
            initialValues={pharmacyIntialValues}
            validationSchema={PharmacyValidationSchema}
            onSubmit={onSubmit_alt}
          >
            <Form className="w-[100%] flex flex-col gap-8">
              <>
                <CustomInput
                  type="text"
                  placeholder="Business Name"
                  name="businessName"
                  label=""
                />

                <CustomInput
                  type="number"
                  placeholder="Business License ID"
                  name="businessName"
                  label=""
                />

                <CustomInput
                  label=""
                  type="email"
                  placeholder="Email Address"
                  name="email"
                />

                <CustomInput
                  placeholder="Password"
                  name="password"
                  label=""
                  type={showPassword ? "text" : "password"}
                  handleShowPassword={() => setShowPassword(!showPassword)}
                />
                <CustomInput name="address" label="" placeholder="Address" />

                <CustomSelect
                  label=""
                  placeholder="Select provider type"
                  name="type"
                  options={[
                    {
                      label: "COMMUNITY PHARMACY",
                      value: "COMMUNITY_PHARMACY",
                    },
                    { value: "HOSPITAL_PHARMACY", label: "HOSPITAL_PHARMACY" },
                    { value: "CLINIC_PHARMACY", label: "CLINIC PHARMACY" },
                    { value: "DISTRIBUTOR", label: "DISTRIBUTOR" },
                  ]}
                />
              </>

              <Button isLoading={isSubmitting} size="lg" type="submit">
                {" "}
                Create an Account
              </Button>
            </Form>
          </Formik>
        )}

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

//Muyiwa's Solution;
//Use bcrypt to encrypt password
//use JWT and cookie-parser to generate webtokens (and also set the expiry time) for the user and send it
