import React from "react";
import { Snackbar } from "@material-ui/core";
import Alert from "@mui/material/Alert";

export default function Notif(props) {
  const { notif, setNotif } = props;
  const handleClose = (event, reason) => {
    setNotif({
      ...notif,
      isOpen: false,
    });
  };

  return (
    <Snackbar
      onClose={handleClose}
      open={notif.isOpen}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert severity={notif.type}>{notif.pesan}</Alert>
    </Snackbar>
  );
}
