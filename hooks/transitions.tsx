"use client";
import { useState, useCallback } from "react";
import { flushSync } from "react-dom";

declare global {
  namespace NodeJS {
    interface Document {
      startViewTransition?: (callbackOptions?: ViewTransitionUpdateCallback | undefined) => ViewTransition;
    }
  }
}

const useOpen = () => {
  const [status, setStatus] = useState("closed");

  const open = useCallback(() => {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        flushSync(() => {
          setStatus("opened");
        });
      });
    } else {
      setStatus("opened");
    }
  }, []);

  return [status, open] as const;
};

export default useOpen;
