import React, { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";
import toast from "react-hot-toast";
import ChooseAcount from "./ChooseAcount";

function AuthContainer() {
  const [step, setStep] = useState(2);
  const [phoneNumber, setphoneNumber] = useState();
  const [password, setpassword] = useState();

  const {
    isPending: isSendingOtp,
    error,
    mutateAsync,
    data: otpResponse,
  } = useMutation({
    mutationFn: getOtp,
  });

  const sendOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await mutateAsync({ phoneNumber });
      const { message } = response.data.data;
      setStep(3);
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            isSendingOtp={isSendingOtp}
            onSubmit={sendOtpHandler}
            setStep={setStep}
            phoneNumber={phoneNumber}
            onChange={(e) => setphoneNumber(e.target.value)}
          />
        );
      case 2:
        return (
          <ChooseAcount
            setStep={setStep}
            setphoneNumber={setphoneNumber}
            setpassword={setpassword}
          />
        );

      case 3:
        return (
          <CheckOTPForm
            phoneNumber={phoneNumber}
            onBack={() => setStep((s) => s - 1)}
            onResendOtp={sendOtpHandler}
            otpResponse={otpResponse}
            password={password}
          />
        );
      default:
        return null;
    }
  };

  return <div className="w-full">{renderStep()}</div>;
}

export default AuthContainer;
