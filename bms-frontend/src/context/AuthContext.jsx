import { useState, useContext, createContext } from "react";
import { useMutation } from "@tanstack/react-query";
import { sendOTP, verifyOTP, activate, logout} from "../apis";
import { toast } from "react-hot-toast";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [step, setStep] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState(null);
  const [intervel, setIntervel] = useState(null);
  const [authData, setAuthData] = useState();
  const [auth, setAuth] = useState();


  // mutation for sending OTP

  const sendOtpRequestMutation = useMutation(sendOTP, {
    mutationfn: (email) => sendOTP({ email }),
  });

  const verifyOtpRequestMutation = useMutation({
    mutationfn: (reqData) => verifyOTP(reqData),
  });

  const activateUserMutation = useMutation({
    mutationfn: (reqData) => activate(reqData),
  });

  const logOutMutation = useMutation({
    mutationfn: () => logout(),
  });

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const sendOtpRequest = async ({ email, onNext }) => {
    sendOtpRequestMutation.mutate(email, {
      onSuccess: (data) => {
        console.log(res.data);
        setAuthData(res.data);
        toast.success("OTP sent successfully");
        onNext();
      },
      onError: (err) => {
        console.log(err);
        toast.error(err?.response?.error?.message || "Something went wrong");
      },
    });
  };

  const verifyOtpRequest = async ({ otp, onNext }) => {
    const { hash, email } = authData;
    const reqData = { otp, hash, email };
    verifyOtpRequestMutation.mutate(reqData, {
      onSuccess: (res) => {
        setAuthData(null)
        setUser(res.data);
        setAuth(true);
        if (!res.data.user?.activateUser) {
        onNext();
        }else {
          setStep(1);
          toggleModal();
        }
      },
      onError: (err) => {
        console.log(err);
        toast.error(err?.response?.error?.message || "Something went wrong");
      },
    });
  };

  const activateUserRequest = async (data) => {
    const {name, phone} = data;
    const {id} = user?._id;
    const reqData = {name, phone, id};

    activateUserMutation.mutate(reqData, {
      onSuccess: (res) => {
        console.log(res);
        setUser(res.data);        
        setStep(1);
        toggleModal();
      },
      onError: (err) => {
        console.log(err);
        toast.error(err?.response?.error?.message || "Something went wrong");
      }
    });
  };

  const logOutRequest = () => {
    logOutMutation.mutate(null, {
      onSuccess: (data) => {
        console.log(data);          
        setAuth(false);
        setUser(null);
        window.location.href = "/";
      },
      onError: (err) => {
        console.log(err);
        toast.error(err?.response?.error?.message || "Something went wrong");
      }
    });
  };


  return (
    <AuthContext.Provider value={{ step, setStep, showModal, toggleModal, user, authData, sendOtpRequest, verifyOtpRequest, activateUserRequest, logOutRequest, auth }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
