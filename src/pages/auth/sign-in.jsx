import { Link } from "react-router-dom";
import loginimg from "../../../public/img/login/loginimg.svg"
import googlebtn from "../../../public/img/login/google.svg"
import logo from "../../../public/img/logo.svg"
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

export function SignIn() {
  return (
    <div className="flex flex-row justify-center ">
      <div className=" top-0">
          <img src={logo}/> 
      </div>
      <div className="flex flex-row justify-center items-center mt-8">
        <div className="w-[341px] bg-white mr-24">
          <p className=" text-[#280559] text-[40px] font-bold mb-2">Login</p>
          <p className=" text-[#667085] text-[16px] font-normal mb-14">Please fill your detail to access your account.</p>
          <p className=" text-[#344054] text-[16px] font-normal mb-2">Email</p>
          <Input type="email" label="Email" size="lg" />
          <p className=" text-[#344054] text-[16px] font-normal mt-5 mb-2">Password</p>
          <Input type="password" label="Password" size="lg" />
          <div className="flex flex-row justify-between items-center my-5">
                <Checkbox className=" text-[#344054] font-normal" label="Remember Me" />  
                <Link to="/auth/sign-up">
                  <Typography
                    as="span"
                    variant="small"
                    color="blue"
                    className="ml-1 font-bold"
                  >
                    Forgot Password?
                  </Typography>
                </Link>
          </div>
          <Button variant="gradient" fullWidth>
            Sign In
          </Button>
          <Link to="/auth/sign-up">
            <div className="w-full flex flex-row justify-center my-3">
              <img src={googlebtn}/>  
              <p className=" text-base text-[#344054] font-medium mx-2">Sign in with Google</p>  
            </div>
          </Link>
          <Link to="/auth/sign-up">
            <div className="w-full flex flex-row justify-center my-3">
              <p className=" text-sm text-[#344054] font-medium mx-2">Don’t have an account?<span className=" text-[#0263FF]"> Sign up </span> </p>  
            </div>
          </Link>
        </div>
      </div>
      <div className="w-[1058px]">
        <img src={loginimg}/>
      </div>
      
    </div>
  );
}

export default SignIn;