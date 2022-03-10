import * as React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import {
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={14} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars() {
  let navigate = useNavigate();
  const [open, setOpen] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    navigate("/plants")
  };

  return (
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar open={open} autoHideDuration={1000} onClose={handleClose} anchorOrigin={{ vertical: "bottom", horizontal: "left" }}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Plant successfully added!
          </Alert>
        </Snackbar>
      </Stack>
  );
}
