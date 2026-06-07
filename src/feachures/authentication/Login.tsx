import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/auth")}
      className="btn-action py-2 px-4 hover:scale-105"
    >
      <span>ورود دمو</span>
      <HiArrowRightOnRectangle className="w-5 h-5" />
    </button>
  );
}

export default Login;
