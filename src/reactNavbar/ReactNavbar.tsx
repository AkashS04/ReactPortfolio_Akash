import { Box, Typography, Paper } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import reactLogo from "../assets/react.svg";
const Navtexttheme = createTheme({
  typography: {
    body1: {
      fontFamily: "Raleway-Regular",
      color: "white",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          borderRadius: "8px",
          padding: "4px 8px",
          cursor:'pointer',
          transition:'0.3s',
          '&:hover':{
            backgroundColor:'rgba(0, 0, 0, 0.4)'
          }
        },
      },
    },
  },
});
function ReactNavbar() {
  return (
    <div className="reactNavbar-main">
      <img className="reactNavbar" src={reactLogo} alt="react-logo" />
      <Box
        sx={{
          width: "500px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <ThemeProvider theme={Navtexttheme}>
          <Box>
            <Paper>
              <Typography variant="body1">About</Typography>
            </Paper>
          </Box>
          <Box>
            <Paper>
              <Typography variant="body1">Why Choose Me</Typography>
            </Paper>
          </Box>
          <Box>
            <Paper>
              <Typography variant="body1">Projects</Typography>
            </Paper>
          </Box>
          <Box>
            <Paper>
              <Typography variant="body1">Contact</Typography>
            </Paper>
          </Box>
        </ThemeProvider>
      </Box>
    </div>
  );
}
export default ReactNavbar;
