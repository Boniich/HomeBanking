import { Toaster } from "react-hot-toast";

export const Notification = ({ background }) => {
  return (
    <Toaster
      position="bottom-center"
      containerStyle={{
        bottom: 75,
      }}
      toastOptions={{
        style: {
          border: "1px solid #BAE6FD",
          background: background,
          padding: "12px 20px",
        },
      }}
    />
  );
};
