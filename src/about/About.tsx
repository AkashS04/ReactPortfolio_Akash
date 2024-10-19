import { Box, Typography } from "@mui/material";
import Skills from "./Skills";

function About() {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Typography
          variant="h3"
          sx={{ color: "#FF0303", fontFamily: "Poppins-Bold", mt: "1rem" }}
          gutterBottom
        >
          ABOUT
        </Typography>
        <Box sx={{padding:'1rem 4rem'}}>
          <Typography
            variant="h4"
            align="left"
            sx={{ fontFamily: "Poppins-Regular", color: "#fff" }}
            gutterBottom
          >
            Hello, I'm Akash,Front-end Developer in India.
          </Typography>
          <Typography
            variant="h5"
            align="left"
            sx={{ fontFamily: "Raleway-Extralight", color: "#fff" }}
            gutterBottom
          >
            Having better skills with modern web technologies
          </Typography>
        </Box>
        <Skills/>
      </Box>
    </>
  );
}
export default About;
