import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import CreateRoom from "./CreateRoom";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />    

      <main className="flex-1 mt-14">
        <Outlet />
      </main>
      <CreateRoom/>
    </div>
  );
}
