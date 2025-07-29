export const validateEmail = (email: string) => {
  /*
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/; - meaning
    /^ start of the string
    [^\s@] = One or more characters that are not whitespace or @
    +@ = there should be @
    [^\s@] = One or more characters that are not whitespace or @ (domain name)
    +\. = should be a dot(.)
    [^\s@] = One or more characters that are not whitespace or @ (TLD like .com)
    $ = end of the string
    */
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const validatePass = (password: string) => password.length >= 6;

export const validateCpass = (confirmPassword: string, password: string) =>
  password === confirmPassword;

export const validateName = (name: string) => {
  return typeof name === "string" && name.trim().length >= 1;
};

export const validateOtp = (otp:string)=>{
    return typeof otp === "string" && otp.trim().length == 6;
}

export const formateMoney = (data:string)=>{
  const num:number = parseInt(data);
  const [integerPart, fractionalPart] =num.toString().split('.');
  const lastThree = integerPart.slice(-3);
  const otherDigits = integerPart.slice(0, -3);
  const formatted = otherDigits.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + (otherDigits ? "," : "") + lastThree;

  return fractionalPart ? `${formatted}.${fractionalPart}` : formatted;
}