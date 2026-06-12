"use client";

import { useState, forwardRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value: string;
  className?: string;
}

const containerVariants = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.05 },
  },
};

const letterVariants = {
  initial: { y: 0, color: "inherit", fontSize: "14px" },
  animate: {
    y: "-140%",
    color: "#888888",
    fontSize: "10px",
    transition: { type: "spring" as const, stiffness: 300, damping: 20 },
  },
};

const containerVariantsFloating = {
  initial: { background: "transparent", padding: "0" },
  animate: {
    background: "#EDE8DF",
    padding: "0 4px",
    transition: { duration: 0.1 },
  },
};

export const AnimatedInput = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className = "", value, onFocus, onBlur, style, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const showLabel = isFocused || value.length > 0;

    return (
      <div className={cn("relative", className)}>
        <motion.div
          className="absolute pointer-events-none text-[#2c2c2c]"
          style={{ left: "12px", top: "50%", transform: "translateY(-50%)" }}
          variants={containerVariantsFloating}
          initial="initial"
          animate={showLabel ? "animate" : "initial"}
        >
          {label.split("").map((char, index) => (
            <motion.span
              key={index}
              className="inline-block text-sm"
              variants={letterVariants}
              style={{ willChange: "transform", fontWeight: 500 }}
            >
              {char === " " ? " " : char}
            </motion.span>
          ))}
        </motion.div>
        <input
          ref={ref}
          value={value}
          {...props}
          style={{
            width: "100%",
            padding: "20px 14px 12px",
            fontSize: "15px",
            fontWeight: 600,
            borderRadius: "0",
            border: "2px solid #2c2c2c",
            outline: "none",
            background: "#EDE8DF",
            color: "#1a1a1a",
            fontFamily: "inherit",
            transition: "box-shadow 0.1s ease",
            ...style,
          }}
          onFocus={(e) => {
            setIsFocused(true);
            e.currentTarget.style.boxShadow = "3px 3px 0 #2c2c2c";
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            e.currentTarget.style.boxShadow = "none";
            onBlur?.(e);
          }}
        />
      </div>
    );
  }
);

AnimatedInput.displayName = "AnimatedInput";
