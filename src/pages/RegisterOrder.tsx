"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useUser from "../feachures/authentication/useUser";
import Loading from "../ui/Loading";
import RegisterOrderLayout from "../feachures/order-projects/RegisterOrderLayout";
import toast from "react-hot-toast";

function RegisterOrder() {
  const { user, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && user && user.role !== "OWNER") {
      toast.error("فقط کارفرما می‌تواند پروژه ثبت کند");
      router.push("/");
    }
  }, [user, isLoading, router]);

  if (isLoading) return <Loading />;
  if (!user || user.role !== "OWNER") return null;

  return (
    <div className="container lg:max-w-7xl px-4 pb-12">
      <RegisterOrderLayout />
    </div>
  );
}

export default RegisterOrder;
