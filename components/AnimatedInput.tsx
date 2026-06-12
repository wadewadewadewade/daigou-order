"use client";

import { useState, forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value: string;
  className?: string;
}

export const AnimatedInput = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className = "", value, onFocus, onBlur, style, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const isFloating = isFocused || value.length > 0;

    return (
      <div className={cn("relative", className)} style={{ display: "block" }}>
        {/* floating label */}
        <AnimatePresence initial={false}>
          {isFloating ? (
            <motion.div
              key="floating"
              initial={{ y: 0, top: "50%", fontSize: "14px", color: "#777777", background: "transparent", padding: "0" }}
              animate={{ y: "-50%", top: "0%", fontSize: "10px", color: "#888888", background: "#EDE8DF", padding: "0 4px" }}
              exit={{ y: 0, top: "50%", fontSize: "14px", color: "#777777", background: "transparent", padding: "0" }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              style={{
                position: "absolute",
                left: "10px",
                transformOrigin: "left center",
                pointerEvents: "none",
                fontWeight: 500,
                zIndex: 1,
                whiteSpace: "nowrap",
                lineHeight: 1,
              }}
            >
              {/* stagger per letter */}
              {label.split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03, type: "spring", stiffness: 400, damping: 25 }}
                  style={{ display: "inline-block" }}
                >
                  {char === " " ? " " : char}
                </motion.span>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="placeholder"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
              style={{
                position: "absolute",
                left: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: "14px",
                color: "#777777",
                fontWeight: 500,
                pointerEvents: "none",
                whiteSpace: "nowrap",
              }}
            >
              {label}
            </motion.div>
          )}
        </AnimatePresence>

        <input
          ref={ref}
          value={value}
          {...props}
          style={{
            width: "100%",
            paddingTop: isFloating ? "20px" : "12px",
            paddingBottom: "12px",
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
            transition: "box-shadow 0.1s ease, padding-top 0.15s ease",
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
