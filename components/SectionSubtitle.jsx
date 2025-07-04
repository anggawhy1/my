"use client";

import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";
import { textVariants } from "../utils/motion";

export default function SectionSubtitle({ children, className = "", ...props }) {
  const { theme } = useContext(ThemeContext);

  return (
    <motion.h3
      variants={textVariants(1.1)}
      className={`${
        theme === "light" ? "text-[#00B14F]" : "text-[#00B14F]"
      } ${className} lg:text-[2em] text-[1.6em] lg:text-start text-center font-bold mb-1`}
      {...props}
    >
      {children}
    </motion.h3>
  );
}
