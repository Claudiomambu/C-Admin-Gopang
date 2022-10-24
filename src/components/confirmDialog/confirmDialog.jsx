import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@material-ui/core";

export default function confirmDialog(props) {
  const { confirmDialog, setConfirmDialog } = props;

  return (
    <Dialog open={confirmDialog.isOpen}>
      <DialogTitle></DialogTitle>
      <DialogContent>
        <Typography varian="h6">{confirmDialog.title}</Typography>
        <Typography varian="subtitle2">{confirmDialog.subTitle}</Typography>
      </DialogContent>
      <DialogActions>
        <button className="tidak">Tidak</button>
        <button className="ya">Ya</button>
      </DialogActions>
    </Dialog>
  );
}
