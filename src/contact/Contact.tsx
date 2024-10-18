import { Box, Typography } from "@mui/material";

function Contact() {
  return (
    <>
      <Box sx={{ width: "auto" }}>
        <Box>
          <Typography
            variant="h3"
            sx={{ color: "#FF0303", fontFamily: "Poppins-Bold", mt: "1rem" }}
            gutterBottom
          >
            CONTACT
          </Typography>
        </Box>
        <Box>
          <Box>
            <Typography variant="body1" sx={{color:'white', fontFamily:'Poppins-Medium'}} gutterBottom>
              Phone
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1" sx={{color:'white', fontFamily:'Poppins-Medium'}} gutterBottom>
              Email
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1" sx={{color:'white', fontFamily:'Poppins-Medium'}} gutterBottom>
              WhatsApp
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1" sx={{color:'white', fontFamily:'Poppins-Medium'}} gutterBottom>
              LinkedIn
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1" sx={{color:'white', fontFamily:'Poppins-Medium'}} gutterBottom>
              Naukri
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
export default Contact;
