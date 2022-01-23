import React from "react";
import Sidebar from "./sidebar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMessages } from "../features/Slices/messagesSlice";
import { fetchUsers } from "../features/Slices/userSlice";


const Admin = () => {
   const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMessages());
    dispatch(fetchUsers());
  });
  return (
    <>
      <Sidebar />
    </>
  );
};

export default Admin;
