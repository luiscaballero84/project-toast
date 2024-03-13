import React from "react";

import useEscapeKey from "../../hooks/use-keydown-hook";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function createToast(message, variant) {
    const newToast = {
      message,
      variant,
      id: crypto.randomUUID(),
    };
    const nextToasts = [...toasts, newToast];
    setToasts(nextToasts);
  }

  function deleteToast(id) {
    const nextToasts = toasts.filter((toast) => {
      return toast.id !== id;
    });

    setToasts(nextToasts);
  }

  const handleEscape = React.useCallback(() => {
    setToasts([]);
  }, []);

  useEscapeKey("Escape", handleEscape);

  return (
    <ToastContext.Provider value={{ toasts, createToast, deleteToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
