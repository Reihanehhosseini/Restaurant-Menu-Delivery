"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return createPortal(
    <div className="fixed inset-0 z-50  border-2  backdrop-blur-xs flex items-center justify-center">
      {children}
    </div>,
    document.body,
  );
}
