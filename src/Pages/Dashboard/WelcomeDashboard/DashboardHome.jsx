import React from "react";
import useAuth from "../../../Hooks/useAuth";

export default function DashboardHome() {
  const { user } = useAuth();
  return (
    <div>
      <h1 className="text-6xl font-extrabold p-10 text-center mt-24">
        Wellcome <span className="text-red-600">{user.email}</span> To Your
        DashBoard
      </h1>{" "}
    </div>
  );
}
