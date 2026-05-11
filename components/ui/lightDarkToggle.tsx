"use client";

import React, { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";
import { MoonIcon, SunIcon } from "lucide-react";

type a = {
  className?: string;
};

export default function LightDarkToggle({ className }: a) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger
            className={className}
            onClick={() => {
              document.body.classList.toggle("dark");
              setIsDarkMode((e) => !e);
            }}
          >
            {isDarkMode ? <MoonIcon /> : <SunIcon />}
          </TooltipTrigger>

          <TooltipContent>
            {isDarkMode ? "Enable Light mode" : "Enable Dark mode"}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
