import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, handleDeleteToast }) {
  //console.log("Toasts:", toasts);

  return (
    <ol className={styles.wrapper}>
      {toasts.map(
        ({ id, variant, message }) => (
          <li key={id} className={styles.toastWrapper}>
            <Toast
              id={id}
              variant={variant}
              handleDeleteToast={handleDeleteToast}
            >
              {message}
            </Toast>
          </li>
        )
        //console.log("Toast-toastShelf:", message)
      )}
    </ol>
  );
}

export default ToastShelf;
