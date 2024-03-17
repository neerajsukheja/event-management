import * as React from "react";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import Stack from "@mui/material/Stack";
import { hideAlert } from "../redux/AlertMessage/action";

export default function AlertMessage() {
  const [open, setOpen] = React.useState(true);
  const dispatch = useDispatch();

  const { message, type, visible, time } = useSelector(
    (state) => state?.alertMessage
  );
  React.useEffect(() => {
    setTimeout(() => {
      dispatch(hideAlert());
    }, time);
  }, [message]);

  if (!visible) return null;
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Collapse in={open}>
        <Alert
          severity={type}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {message}
        </Alert>
      </Collapse>
    </Stack>
  );
}
