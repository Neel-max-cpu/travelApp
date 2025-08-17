'use client';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { navlinks } from '../../../constants/constants';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2';
import { LiaCloudSolid } from 'react-icons/lia';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { validateCpass, validateEmail, validateName, validateOtp, validatePass } from '@/utils/helper';
import axiosInstance from '@/utils/axiosInstance';
import { API_PATHS } from '@/utils/apiPaths';
import toast from "react-hot-toast";
import { IoIosLogOut } from 'react-icons/io';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useRouter } from 'next/navigation';

type Props = {
  openNav: () => void
}

const Nav = ({ openNav }: Props) => {
  const router = useRouter();
  const [navBg, setNavBg] = useState(false);
  const [otpLoading, setOtpLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [otp, setOtp] = useState('');
  const [otpCoolDown, setOtpCoolDown] = useState(0);
  const [isOtpSent, setIsOtpSent] = useState(false);


  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    // When dialog is opened, reset all form state
    if (!isDialogOpen && isOtpSent && email) {
      const type = formType === "register" ? "1" : formType === "forgetpass" ? "2" : null;
      if (!type) return;
      let value: string;
      if (formType == "register") value = "1";
      else if (formType == "forgetpass") value = "2";
      let response = axiosInstance.post(API_PATHS.AUTH.DISABLEOTP, {
        email,
        value: type
      }).catch(err => console.error("❌ OTP disable error:", err));

      localStorage.removeItem("otpEmail");
      localStorage.removeItem("otpType");
    }

    setFormType("login");
    resetForm();
  }, [isDialogOpen]);


  //page reload
  useEffect(() => {
    const handleBeforeUnload = () => {
      const otpEmail = localStorage.getItem("otpEmail");
      const otpType = localStorage.getItem("otpType");
      const value = otpType === "register" ? "1" : otpType === "forgetpass" ? "2" : null;

      if (otpEmail && value) {
        let response = axiosInstance.post(API_PATHS.AUTH.DISABLEOTP, {
          email: otpEmail,
          value
        }).catch(err => console.error("❌ OTP disable error:", err));
        localStorage.removeItem("otpEmail");
        localStorage.removeItem("otpType");
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);


  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (otpCoolDown > 0) {
      interval = setInterval(() => {
        setOtpCoolDown(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [otpCoolDown]);

  const resetForm = () => {
    setError("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setOtp("");
    setName("");
  }

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
        setError("");
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
        const { token, userId, name } = response.data.body;
        if (token) {
          localStorage.setItem("token", token);
          localStorage.setItem("userId", userId);
          localStorage.setItem("email", email);
          localStorage.setItem("name", name);
          toast.success("Log in success!");
          setIsDialogOpen(false);
          setIsLoggedIn(true);
        }

      }
      else if (formType === 'register') {
        setError("");
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
        setFormType("login");

      }
      else if (formType === 'forgetpass') {
        setError("");
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
        setFormType("login");
      }

    } catch (error: any) {
      toast.error("Something went wrong please try again sometime laster!")
      const msg = error?.response?.data?.message || "Something went wrong!";
      setError(msg);
    } finally {
      setLoading(false);
    }

  }


  const handleSendOtp = async (e: any) => {
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
      toast.success("Otp sent to your email!")
      setOtpCoolDown(120);
      setIsOtpSent(true);
      if (formType === "register" || formType === "forgetpass") {
        localStorage.setItem("otpEmail", email);
        localStorage.setItem("otpType", formType);
      }
    } catch (error: any) {
      toast.error("Error in sending otp!")
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
            <Button onClick={handleSendOtp} disabled={otpLoading || otpCoolDown > 0}>
              {otpLoading ? (
                <>
                  <AiOutlineLoading3Quarters className="animate-spin inline-block mr-2" />
                  Sending OTP...
                </>
              ) : otpCoolDown > 0 ? (
                `Resend in ${otpCoolDown}s`
              ) : (
                "Send OTP"
              )}
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
            <Button onClick={handleSendOtp} disabled={otpLoading || otpCoolDown > 0}>
              {otpLoading ? (
                <>
                  <AiOutlineLoading3Quarters className="animate-spin inline-block mr-2" />
                  Sending OTP...
                </>
              ) : otpCoolDown > 0 ? (
                `Resend in ${otpCoolDown}s`
              ) : (
                "Send OTP"
              )}
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
            onClick={() => { setFormType("register"); resetForm(); }}
            className="text-blue-600 hover:underline cursor-pointer"
          >
            Don't have an account? Sign up
          </span>
          <br />
          <span
            onClick={() => { setFormType("forgetpass"); resetForm(); }}
            className="text-blue-600 hover:underline cursor-pointer"
          >
            Forgot password?
          </span>
        </div>
      );
    } else if (formType === "register") {
      return (
        <span
          onClick={() => {
            setFormType("login");
            resetForm();
          }}
          className="text-sm text-center text-blue-600 hover:underline cursor-pointer mt-2"
        >
          Already have an account? Log in
        </span>
      );
    } else if (formType === "forgetpass") {
      return (
        <span
          onClick={() => { setFormType("login"); resetForm(); }}
          className="text-sm text-center text-blue-600 hover:underline cursor-pointer mt-2"
        >
          Back to Login
        </span>
      );
    }
  };

  const handleHome = () => {
    toast.success("Redirecting...");
    router.push("/");
  }

  const handleLogOut = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    toast.success("Logged out!");
  }


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
    <div className={`${navBg ? "bg-blue-950 shadow-md" : "bg-transparent"} transition-all duration-200 h-[12vh] z-[1001] fixed w-full`}>
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-col">
            {/* <TbAirBalloon className='w-6 h-6 text-white'/> */}
            <LiaCloudSolid className='w-6 h-6 font-bold text-white' />
          </div>
          <h1 className='text-xl md:text-2xl text-white uppercase font-bold cursor-pointer' onClick={handleHome}>Sora</h1>
        </div>
        {/* navlinks */}
        <div className="hidden lg:flex items-center space-x-10">
          {navlinks
            .filter(item => isLoggedIn ||(item.id !== 7 && item.id !== 5))
            .map((item) => {
              return (
                <p
                  key={item.id}
                  className="navButtonStyleMap cursor-pointer"
                  onClick={() => {
                    if (item.url === "#") {
                      toast(
                        "No link present!",
                        {
                          icon: '⚠️',
                          style: {
                            border: "1px solid #facc15", 
                            padding: "8px",
                            color: "#713f12",            
                          },
                        }
                      );
                    } 
                    else {
                      toast.success("Redirecting...");
                      router.push(item.url);
                    }
                  }}
                >
                  {item.lable}
                </p>
              )
            })}
        </div>

        {/* button */}
        <div className="flex items-center space-x-4">
          {/* dialog box */}
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            {isLoggedIn ? (
              <div onClick={() => handleLogOut()} className="navButtonStyle">
                <div className="flex space-x-2 items-center">
                  <span>LogOut</span>
                  <IoIosLogOut className='h-5 w-5 font-bold' />
                </div>
              </div>
            ) : (

              <DialogTrigger asChild>
                <p onClick={() => setIsDialogOpen(true)} className="navButtonStyle">
                  Login/SignUp
                </p>
              </DialogTrigger>
            )}
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
                  <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                </DialogClose>
                <Button type="submit" onClick={handleSubmit} disabled={loading}>
                  {{
                    login: loading ? (
                      <>
                        <AiOutlineLoading3Quarters className="animate-spin inline-block mr-2" />
                        Logging in...
                      </>
                    ) : ("Login"),
                    register: loading ? (
                      <>
                        <AiOutlineLoading3Quarters className="animate-spin inline-block mr-2" />
                        Signing up...
                      </>
                    ) : "Sign Up",
                    forgetpass: loading ? (
                      <>
                        <AiOutlineLoading3Quarters className="animate-spin inline-block mr-2" />
                        Changing...
                      </>
                    ) : "Change Password"
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