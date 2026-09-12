"use client";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useRouter } from "next/navigation";

function Login() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/auth")}
      className="btn-action py-2 px-4 hover:scale-105"
    >
      <span>ورود دمو</span>
      <HiArrowRightOnRectangle className="w-5 h-5" />
    </button>
  );
}

export default Login;
