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
    <div style={{ display: "inline-flex", gap: "4px", background: "#F7F4EF", border: "2px solid #2c2c2c", borderRadius: "0", padding: "4px", boxShadow: "3px 3px 0 #2c2c2c" }}>
      {tabs.map((tab, idx) => {
        const Icon = tab.icon;
        const isActive = selected === idx;
        return (
          <motion.button
            key={idx}
            onClick={() => handleClick(idx)}
            layout
            style={{
              display: "flex", alignItems: "center", gap: "6px",
              padding: "7px 10px", borderRadius: "0",
              border: isActive ? "2px solid #2c2c2c" : "2px solid transparent",
              background: isActive ? "#2c2c2c" : "transparent",
              cursor: "pointer", fontFamily: "inherit",
              fontWeight: 700, fontSize: "12px",
              color: isActive ? "#F7F4EF" : "#1a1a1a",
              whiteSpace: "nowrap",
            }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            <Icon size={14} style={{ flexShrink: 0 }} strokeWidth={isActive ? 2.5 : 2} />
            <AnimatePresence initial={false}>
              {isActive && (
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
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
