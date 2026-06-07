import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { checkOtp } from "../../services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { CiEdit } from "react-icons/ci";
import Loading from "../../ui/Loading";
import { getErrorMessage } from "../../utils/getErrorMessage";
import type { User } from "../../types";

interface CheckOTPFormProps {
  phoneNumber: string;
  onBack: () => void;
  onResendOtp?: () => void;
  otpResponse?: { message?: string };
  password?: string;
}

function CheckOTPForm({
  phoneNumber,
  onBack,
  otpResponse,
  password,
}: CheckOTPFormProps) {
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(60);
  const navigate = useNavigate();
  const { isLoading, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });

  const checkOtpHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await mutateAsync({ phoneNumber, otp });
      const { message, user } = response.data.data as {
        message?: string;
        user?: User;
      };
      if (message) toast.success(message);
      if (!user) return;
      if (!user.isActive) {
        return navigate("/complete-profile");
      }
      if (user.status !== 2) {
        navigate("/");
        toast("پروفایل شما در انتظار تایید است.", { icon: "👏" });
        return;
      }
      navigate("/");
    } catch (error) {
      toast.error(getErrorMessage(error));
    }
  };

  useEffect(() => {
    if (time <= 0) return;
    const timer = setInterval(() => setTime((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [time]);

  const handelResendOtp = () => {
    toast.error("این بخش هنوز غیر فعال است", {
      duration: 6000,
    });
  };

  return (
    <div className="flex justify-center">
      <div className="">
        <button onClick={onBack}>
          <HiArrowRight className="w-6 h-6 text-secondery-500" />
        </button>
        {otpResponse && (
          <p className="flex items-center gap-x-2 mb-4">
            <span>{otpResponse?.message}</span>
            <button onClick={onBack}>
              <CiEdit />
            </button>
          </p>
        )}
        <div className="mb-4 text-secondery-500">
          {time > 0 ? (
            <p>{time} ثانیه تا ارسال مجدد کد</p>
          ) : (
            <button onClick={handelResendOtp}>ارسال مجدد کد</button>
          )}
        </div>
        <form className="space-y-10" onSubmit={checkOtpHandler}>
          <p className="font-bold text-secondery-400">
            کد رو به رو را وارد کنید: {password}
          </p>
          <div className="max-w-xs max-h-xs w-96 h-96">
            <img src="/check-otp.webp" alt="" />
          </div>{" "}
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={<span>-</span>}
            renderInput={(props) => {
              const { type: _type, ...rest } = props;
              return <input type="number" {...rest} />;
            }}
            containerStyle="flex flex-row-reverse gap-x-2 justify-center"
            inputStyle={{
              width: "2.5rem",
              padding: "0.5rem 0.2rem",
              border: "1px solid rgb(var(--color-primary-600))",
              borderRadius: "0.5rem",
            }}
          />
          <div>
            {isLoading ? (
              <Loading />
            ) : (
              <button type="submit" className="btn btn--primary w-full">
                تایید
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default CheckOTPForm;
