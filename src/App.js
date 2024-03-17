import "./App.css";
import ApplicationRoutes from "./application-routes";
import Header from "./components/Header";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Copyright from "./components/Copyright";
import { useSelector } from "react-redux";

const theme = createTheme({
  palette: {
    primary: {
      main: "#d71e28",
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "primary" },
          style: {
            backgroundColor: "#d71e28",
            color: "#FFFFFF",
            fontWeight: "bold",
            borderRadius: 24,
            padding: "10px 40px",
            width: "auto",
            "&:hover": {
              textDecoration: "underline",
              backgroundColor: "#d71e28",
            },
          },
        },
        {
          props: { variant: "secondary" },
          style: {
            backgroundColor: "#d71e28",
            color: "#FFFFFF",
            fontWeight: "bold",
            borderRadius: 24,
            padding: "10px 40px",
            width: "auto",
            "&:hover": {
              textDecoration: "underline",
              backgroundColor: "#d71e28",
            },
          },
        },
      ],
    },
    MuiDataGrid: {
      styleOverrides: {
        columnHeader: {
          backgroundColor: "#ffcdd2",
        },
      },
    },
  },
});

function App() {
  const { id } = useSelector((state) => state?.user || {});
  const isAuthenticated = id ? true : false;
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <ApplicationRoutes isAuthenticated={isAuthenticated} />
        <Copyright sx={{ m: 2 }} />
      </div>
    </ThemeProvider>
  );
}

export default App;
