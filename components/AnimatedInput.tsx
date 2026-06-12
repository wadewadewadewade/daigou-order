"use client";

import { useState, forwardRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value: string;
  className?: string;
}

const labelVariants = {
  placeholder: {
    y: "-50%",
    top: "50%",
    fontSize: "14px",
    color: "#777777",
    background: "transparent",
    padding: "0 0",
  },
  floating: {
    y: "-50%",
    top: "0%",
    fontSize: "10px",
    color: "#888888",
    background: "#EDE8DF",
    padding: "0 4px",
  },
};

export const AnimatedInput = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className = "", value, onFocus, onBlur, style, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const isFloating = isFocused || value.length > 0;

    return (
      <div className={cn("relative", className)}>
        <motion.div
          initial="placeholder"
          animate={isFloating ? "floating" : "placeholder"}
          variants={labelVariants}
          transition={{ type: "tween", duration: 0.18, ease: "easeInOut" }}
          style={{
            position: "absolute",
            left: "12px",
            pointerEvents: "none",
            fontWeight: 500,
            zIndex: 1,
            whiteSpace: "nowrap",
            lineHeight: 1,
            transformOrigin: "left center",
          }}
        >
          {isFloating
            ? label.split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 3 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.025, duration: 0.12 }}
                  style={{ display: "inline-block" }}
                >
                  {char === " " ? " " : char}
                </motion.span>
              ))
            : label}
        </motion.div>

        <input
          ref={ref}
          value={value}
          {...props}
          placeholder=""
          style={{
            width: "100%",
            paddingTop: "20px",
            paddingBottom: "10px",
            paddingLeft: "14px",
            paddingRight: "14px",
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
