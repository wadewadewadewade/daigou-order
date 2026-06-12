"use client";

import { AnimatePresence, motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { useState } from "react";

export interface Tab {
  title: string;
  icon: LucideIcon;
  onClick?: () => void;
}

interface ExpandableTabsProps {
  tabs: Tab[];
}

export function ExpandableTabs({ tabs }: ExpandableTabsProps) {
  const [selected, setSelected] = useState<number | null>(null);

  const handleClick = (idx: number) => {
    setSelected(selected === idx ? null : idx);
    tabs[idx].onClick?.();
  };

  return (
    <div
      style={{
        display: "inline-flex",
        gap: "6px",
        background: "#FFFEF8",
        border: "2px solid #111111",
        borderRadius: "8px",
        padding: "5px",
        boxShadow: "3px 3px 0px #111111",
      }}
    >
      {tabs.map((tab, idx) => {
        const Icon = tab.icon;
        const isActive = selected === idx;

        return (
          <motion.button
            key={idx}
            onClick={() => handleClick(idx)}
            layout
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "7px 10px",
              borderRadius: "5px",
              border: isActive ? "2px solid #111111" : "2px solid transparent",
              background: isActive ? "#FFE14D" : "transparent",
              cursor: "pointer",
              fontFamily: "inherit",
              fontWeight: 700,
              fontSize: "13px",
              color: "#111111",
              whiteSpace: "nowrap",
              transition: "background 0.15s ease",
            }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            <Icon
              size={16}
              style={{ flexShrink: 0, color: isActive ? "#111111" : "#555555" }}
              strokeWidth={isActive ? 2.5 : 2}
            />
            <AnimatePresence initial={false}>
              {isActive && (
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  style={{ overflow: "hidden", display: "inline-block" }}
                >
                  {tab.title}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        );
      })}
    </div>
  );
}
