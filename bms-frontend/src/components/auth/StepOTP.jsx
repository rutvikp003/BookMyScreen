import { useState } from "react";
import useCountdown from "../../hooks/useCountdown";
import { IoClose } from "react-icons/io5";

const StepOTP = ({ onNext }) => {
  const [otpArray, setOtpArray] = useState(new Array(4).fill(""));

  const inuptRef = useState();
  const { displayTime, isExpired } = useCountdown(
    {
      initialTimeInSeconds: 2 * 60,
    },
    300,
  );
  const handleVerifyOtp = (e) => {
    e.preventDefault();
    onNext();
  };

  const handleResendOtp = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <div className="flex flex-col gap-3 px-10 py-6">
        <h2 className="text-center text-lg font-semibold">
          Enter your OTP From your Email
        </h2>

        <p className="text-center text-sm text-gray-500">
          If you don't have an account, we'll create one for you .
        </p>

        {/* OTP input */}
        <div className="flex items-center justify-center gap-2">
          {otpArray.map((value, index) => (
            <input
              key={index}
              type="text"
              name="otp"
              maxLength={1}
              value={value}
              onChange={(e) => handleOtpChange(e, index)}
              className="w-12 h-12 border border-gray-300 rounded-md text-center text-white-500 font-bold focus:outline-none focus:ring-2 focus:ring-black mx-1 border border-gray-200"
            />
          ))}
          <button
            type="button"
            className="w-8 cursor-pointer h-8 border border-gray-300 rounded-md items-center font-bold ml-1 text-[#f74565]"
          >
            <IoClose onClick={() => toggleModal()} size={24} className="inline text-gray-500" />
          </button>
        </div>

        {isExpired ? (
          <p className="text-center text-xs text-indigo-500 cursor-pointer">OTP expired. <a href="" className="underline" onClick={handleResendOtp}>Please resend OTP</a>.</p>
        ) : (
          <p className="text-center text-sm">OTP expires in {displayTime}</p>
        )}

        <button
          type="submit"
          onClick={handleVerifyOtp}
          className="w-full cursor-pointer text-white bg-black py-2 rounded-md text-lg hover:bg-gray-800 transition"
        >
          Continue
        </button>

        <p className="text-[#c4c5c5] text-center m-auto text-[12px]">
          By entering your email id, you're agreeing to our
          <a href="" className="text-[#f74565]">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="" className="text-[#f74565]">
            Privacy Policy
          </a>{" "}
          . Thanks!
        </p>
      </div>
    </>
  );
};

export default StepOTP;
