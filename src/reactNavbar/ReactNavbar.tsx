import { Box, Typography, Paper } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import reactLogo from "../assets/react.svg";
import { useState } from "react";
const Navtexttheme = createTheme({
  typography: {
    body1: {
      fontFamily: "Raleway-Regular",
      color: "#c9c9c9",
      transition: "0.3s",
      "&:hover": {
        color: "#e3e3e3",
      },
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "rgb(36 36 36)",
          borderRadius: "8px",
          padding: "8px 16px",
          cursor: "pointer",
          transition: "0.3s",
          "&:hover": {
            backgroundColor: "rgb(48 48 48)",
          },
        },
      },
    },
  },
});
function ReactNavbar() {
  // const [navHover, setNavHover] = useState(false);

  return (
    <div
      // onMouseEnter={() => setNavHover(true)}
      // onMouseLeave={() => setNavHover(false)}
      className="reactNavbar-main"
    >
      <Box
        component="img"
        sx={{ height: "60px", cursor: "pointer", alt: "react-logo" }}
        src={reactLogo}
      />
      {/* {navHover && ( */}
        <Box
          sx={{
            width: "500px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          <ThemeProvider theme={Navtexttheme}>
            <Box
              sx={{
                transition: "transform 1s ease",
                // transform: navHover
                //   ? "translate(0px, 20px)"
                //   : "translate(0px,0px)",
              }}
            >
              <Paper>
                <Typography variant="body1">About</Typography>
              </Paper>
            </Box>
            <Box     sx={{
                transition: "transform 1.3s ease",
                // transform: navHover
                //   ? "translate(0px, 20px)"
                //   : "translate(0px, 0px)",
              }}>
              <Paper>
                <Typography variant="body1">Why Choose Me</Typography>
              </Paper>
            </Box>
            <Box     sx={{
                transition: "transform 1.6s ease",
                // transform: navHover
                //   ? "translate(0px, 20px)"
                //   : "translate(0px, 0px)",
              }}>
              <Paper>
                <Typography variant="body1">Projects</Typography>
              </Paper>
            </Box>
            <Box     sx={{
                transition: "transform 1.9s ease",
                // transform: navHover
                //   ? "translate(0px, 20px)"
                //   : "translate(0px, 0px)",
              }}>
              <Paper>
                <Typography variant="body1">Contact</Typography>
              </Paper>
            </Box>
          </ThemeProvider>
        </Box>
      {/* )} */}
    </div>
  );
}
export default ReactNavbar;
