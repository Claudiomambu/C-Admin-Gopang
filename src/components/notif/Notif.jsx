import React from "react";
import { Snackbar } from "@material-ui/core";
import Alert from "@mui/material/Alert";

export default function Notif(props) {
  const { notif, setNotif } = props;

  return (
    <Snackbar
      open={notif.isOpen}
      autoHideDuration={5}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert severity={notif.type}>{notif.pesan}</Alert>
    </Snackbar>
  );
}
