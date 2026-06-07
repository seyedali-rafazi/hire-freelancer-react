import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "../feachures/authentication/useUser";
import Loading from "../ui/Loading";
import HomeHeader from "../ui/HomeHeader";
import RegisterOrderLayout from "../feachures/order-projects/RegisterOrderLayout";
import toast from "react-hot-toast";

function RegisterOrder() {
  const { user, isLoading } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && user && user.role !== "OWNER") {
      toast.error("فقط کارفرما می‌تواند پروژه ثبت کند");
      navigate("/");
    }
  }, [user, isLoading, navigate]);

  if (isLoading) return <Loading />;
  if (!user || user.role !== "OWNER") return null;

  return (
    <div className="bg-secondery-0">
      <HomeHeader />
      <div className="container lg:max-w-7xl min-h-screen">
        <RegisterOrderLayout />
      </div>
    </div>
  );
}

export default RegisterOrder;
