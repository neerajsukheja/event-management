import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Typography,
  Box,
  Button,
  Switch,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery,
} from "@mui/material";
import TitleBackGroundImage from "../images/event-list.jpg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AlertMessage from "../components/AlertMessage";
import { eventsRequest } from "../redux/Events/action";
import { useTheme } from "@mui/material/styles";
import QRCode from "qrcode.react";

const styles = {
  link: {
    color: "#1976d2", // blue color
    textDecoration: "none",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "color 0.3s ease",
  },
};

export default function Events() {
  const [openQRCodeDialog, setQRCodeDialog] = React.useState(false);
  const [getQRCodeId, setQRCodeId] = React.useState(null);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { role, id } = useSelector((state) => state?.user || {});
  const events = useSelector((state) => state?.events || []);

  React.useEffect(() => {
    dispatch(eventsRequest(role, id, navigate));
  }, []);

  const columns = [
    { field: "id", headerName: "ID", flex: 1 },
    { field: "title", headerName: "Title", flex: 1 },
    { field: "mode", headerName: "Mode", flex: 1 },
    { field: "locationType", headerName: "Location", flex: 1 },
    { field: "date", headerName: "Date", flex: 1 },
    {
      field: "approved",
      headerName: "Approved",
      flex: 1,
      sortable: false,
      renderCell: (params) => (
        <Switch defaultChecked={params?.row?.isApproved} />
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      sortable: false,
      renderCell: (params) => (
        <div style={{ display: "flex", gap: "8px" }}>
          <a
            href="#"
            style={styles.link}
            onClick={() => navigate(`/event/view/${params.row.id}`)}
          >
            View
          </a>
          |
          <a href="#" style={styles.link}>
            Edit
          </a>
          |
          <a href="#" style={styles.link}>
            Delete
          </a>
          |
          <a
            href="#"
            style={styles.link}
            onClick={() => {
              setQRCodeDialog(true);
              setQRCodeId(params.row.id);
            }}
          >
            QR Code
          </a>
        </div>
      ),
    },
  ];

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${TitleBackGroundImage})`,
          backgroundSize: "cover",
          height: 150,
          display: "flex",
          alignItems: "center",
          padding: 3,
        }}
      >
        <Typography variant="h4" sx={{ color: "white", fontWeight: "bold" }}>
          List Events
        </Typography>
      </Box>
      <Box p={3}>
        <AlertMessage />
        <Box
          mb={3}
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/event/create")}
          >
            Create Event
          </Button>
        </Box>
        <div style={{ height: "100%", width: "100%" }}>
          <DataGrid
            rows={events}
            columns={columns}
            autoHeight
            pagination
            pageSize={5}
            pageSizeOptions={[5, 10, 20]}
            checkboxSelection
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
          />
        </div>
      </Box>
      <Dialog
        fullScreen={fullScreen}
        open={openQRCodeDialog}
        onClose={() => setQRCodeDialog(false)}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"QR Code "}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <QRCode
              value={`https://google.com/${getQRCodeId}`}
              includeMargin={true}
              size="180"
            />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}
