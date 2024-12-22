"use client";
import React, { useEffect, useState } from "react";
import { DarkModeToggler } from "./dark-mode-toggler";
import Link from "next/link";
import { getAuthenticatedUser, signoutUser } from "@/lib/db/db.actions";
import Image from "next/image";

function Navbar() {
  return (
    <div className="top-0 sticky z-50  flex justify-between items-center p-5 px-10"></div>
  );
}

export default Navbar;
