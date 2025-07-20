'use client';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { navlinks } from '../../../constants/constants';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2';
import { LiaCloudSolid } from 'react-icons/lia';
import { TbAirBalloon } from "react-icons/tb";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { validateCpass, validateEmail, validateName, validateOtp, validatePass } from '@/utils/helper';
import axiosInstance from '@/utils/axiosInstance';
import { API_PATHS } from '@/utils/apiPaths';
import toast from "react-hot-toast";

type Props = {
  openNav: () => void
}

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);
  const [otpLoading, setOtpLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);



  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [otp, setOtp] = useState('');

  //submit
  const handleSubmit = async (e: any) => {
    if (loading) return;
    setLoading(true);
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please a valid Email!");
      setLoading(false);
      return;
    }

    try {
      let response;

      if (formType == "login") {
        if (!password) {
          setError("Please enter the password!");
          setLoading(false);
          return;
        }

        if (!validatePass(password)) {
          setError("Password must be atleast 6 Characters long!");
          setLoading(false);
          return;
        }

        setError("");

        response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
          email,
          password
        });
        const { token, userId, name: userName } = response.data;
        if (token) {
          localStorage.setItem("token", token);
          localStorage.setItem("userId", userId);
          localStorage.setItem("email", email);
          localStorage.setItem("name", name);
          toast.success("Log in success!");
          setIsDialogOpen(false);
        }

      }
      else if (formType === 'register') {
        if (!password) {
          setError("Please enter the password!");
          setLoading(false);
          return;
        }

        if (!validatePass(password)) {
          setError("Password must be atleast 6 Characters long!");
          setLoading(false);
          return;
        }

        if (!validateCpass(confirmPassword, password)) {
          setError("Password and Confirm Password must be same!");
          setLoading(false);
          return;
        }

        if (!validateName(name)) {
          setError("Password must be atleast 6 Characters long!");
          setLoading(false);
          return;
        }

        if (!validateOtp(otp)) {
          setError("Otp must be 6 digit");
          setLoading(false);
          return;
        }

        const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
          email,
          name,
          otp,
          password,
          confirmPassword
        });

        toast.success("Registered successfully!");

      }
      else if (formType === 'forgetpass') {
        if (!validatePass(password)) {
          setError("Password must be atleast 6 Characters long!");
          setLoading(false);
          return;
        }

        if (!validateCpass(confirmPassword, password)) {
          setError("Password and Confirm Password must be same!");
          setLoading(false);
          return;
        }

        if (!validateOtp(otp)) {
          setError("Otp must be 6 digit");
          setLoading(false);
          return;
        }

        const response = await axiosInstance.post(API_PATHS.AUTH.FORGOT_PASS, {
          email,
          otp,
          password,
          confirmPassword
        });

        toast.success("Password Changed successfully!");
      }

    } catch (error: any) {
      const msg = error?.response?.data?.message || "Something went wrong!";
      setError(msg);
    } finally {
      setLoading(false);
    }

  }


  const handleSendOtp = async (e:any) => {
    if (otpLoading) return;
    setOtpLoading(true);
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please a valid Email!");
      setLoading(false);
      return;
    }


    try {
      const res = await axiosInstance.post(
        formType === 'register'
          ? API_PATHS.AUTH.OTPREGISTER
          : API_PATHS.AUTH.OTPFORGETPASS,
        { email }
      );
      console.log('✅ OTP sent:', res.data.message);
    } catch (error:any) {
      console.error('❌ OTP Error:', error.response?.data?.message || error.message);
    } finally {
      setOtpLoading(false);
    }
  }


  const [formType, setFormType] = useState<"login" | "register" | "forgetpass">("login");
  const renderForm = () => {
    switch (formType) {
      case "login":
        return (
          <>
            <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </>
        );
      case "register":
        return (
          <>
            <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Button onClick={handleSendOtp} disabled={otpLoading}>
              otpLoading? "Sending OTP..." : "Send OTP"
            </Button>
            <Input type="password" placeholder="OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
            <Input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
            <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </>
        );
      case "forgetpass":
        return (
          <>
            <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Button onClick={handleSendOtp} disabled={otpLoading}>
              otpLoading? "Sending OTP..." : "Send OTP"
            </Button>
            <Input type="password" placeholder="OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
            <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </>
        );
    }
  };

  const renderFooterLinks = () => {
    if (formType === "login") {
      return (
        <div className="text-sm text-center mt-2 space-y-1">
          <span
            onClick={() => setFormType("register")}
            className="text-blue-600 hover:underline cursor-pointer"
          >
            Don't have an account? Sign up
          </span>
          <br />
          <span
            onClick={() => setFormType("forgetpass")}
            className="text-blue-600 hover:underline cursor-pointer"
          >
            Forgot password?
          </span>
        </div>
      );
    } else if (formType === "register") {
      return (
        <span
          onClick={() => setFormType("login")}
          className="text-sm text-center text-blue-600 hover:underline cursor-pointer mt-2"
        >
          Already have an account? Log in
        </span>
      );
    } else if (formType === "forgetpass") {
      return (
        <span
          onClick={() => setFormType("login")}
          className="text-sm text-center text-blue-600 hover:underline cursor-pointer mt-2"
        >
          Back to Login
        </span>
      );
    }
  };


  useEffect(() => {
    const handler = () => {
      // if scroll is >= 90px
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };
    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    }
  }, [])


  return (
    <div className={`${navBg ? "bg-blue-950 shadow-md" : "bg-transparent"} transition-all duration-200 h-[12vh] z-[1000] fixed w-full`}>
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-col">
            {/* <TbAirBalloon className='w-6 h-6 text-white'/> */}
            <LiaCloudSolid className='w-6 h-6 font-bold text-white' />
          </div>
          <h1 className='text-xl md:text-2xl text-white uppercase font-bold'>Sora</h1>
        </div>
        {/* navlinks */}
        <div className="hidden lg:flex items-center space-x-10">
          {navlinks.map((item) => {
            return (
              <Link href={item.url} key={item.id}>
                <p className="relative text-white text-base font-medium w-fit block 
                  after:block after:content-[''] 
                  after:absolute after:h-[3px] after:bg-yellow-300 after:w-full                   
                  after:scale-x-0 hover:after:scale-x-100 
                  after:origin-right hover:after:origin-left 
                  after:transition-transform after:duration-300">
                  {item.lable}
                </p>
              </Link>
            )
          })}
        </div>

        {/* button */}
        <div className="flex items-center space-x-4">
          {/* dialog box */}
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <p onClick={() => setIsDialogOpen(true)} className="relative text-white text-base font-medium w-fit block 
                  after:block after:content-[''] 
                  after:absolute after:h-[3px] after:bg-yellow-300 after:w-full                   
                  after:scale-x-0 hover:after:scale-x-100 
                  after:origin-right hover:after:origin-left 
                  after:transition-transform after:duration-300 hover:cursor-pointer">
                Login/SignUp
              </p>
            </DialogTrigger>
            <DialogOverlay className="fixed inset-0 z-[999] bg-black/40 backdrop-blur-sm" />
            <DialogContent className="sm:max-w-md z-[1100]">
              <DialogHeader>
                <DialogTitle>
                  {{
                    login: "Login",
                    register: "Sign Up",
                    forgetpass: "Reset Password"
                  }[formType]}
                </DialogTitle>
                <DialogDescription>
                  {{
                    login: "Login with your email and password",
                    register: "Register with your name, email and create a password",
                    forgetpass: "We'll send you an otp to your registered mail to reset your password"
                  }[formType]}
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-3 mt-2">{renderForm()}</div>
              <div className="text-red-600 text-xs p-2">{error}</div>
              {renderFooterLinks()}
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline"onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                </DialogClose>
                <Button type="submit" onClick={handleSubmit} disabled={loading}>
                  {{
                    login: loading ? "Logging in..." : "Login",
                    register: loading ? "Signing up..." : "Sign Up",
                    forgetpass: loading ? "Changing..." : "Change Password"
                  }[formType]}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          {/* <button className="relative bg-white md:px-12 md:py-2.5 px-8 py-2 text-base hover:bg-gray-100 hover:font-medium transition-all duration-200 rounded-lg hover:cursor-pointer hover:-translate-y-[2px]">
            Book Now
          </button> */}
          {/* burger menu */}
          <HiBars3BottomRight onClick={openNav} className="w-8 h-8 cursor-pointer text-white lg:hidden" />
        </div>

      </div>
    </div>
  )
}

export default Nav