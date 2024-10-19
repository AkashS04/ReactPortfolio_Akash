import { Box, Typography } from "@mui/material";
import phone from "../assets/icons/phone.png";
import email from "../assets/icons/gmail.png";
import whatsApp from "../assets/icons/whatsapp.png";
import linkedIN from "../assets/icons/linkedin.png";

function Contact() {
  return (
    <Box sx={{ borderTop:'0.5px solid #121212' ,padding:'.5rem 0rem 4rem 0rem'}}>
      <Box sx={{  width: "auto", padding: "0rem 4rem" }}>
        <Box>
          <Typography
            variant="h5"
            align="left"
            sx={{ color: "#FF0303", fontFamily: "Poppins-Bold", mt: "1rem" }}
            gutterBottom
          >
            CONTACT
          </Typography>
        </Box>
        <Box sx={{display:'flex', flexWrap:'wrap'}}>
          <Box>
            <Box
              component="img"
              sx={{ height: "30px", width: "auto" }}
              src={phone}
            />
          </Box>
          <Box>
            <Box
              component="img"
              sx={{ height: "30px", width: "auto" }}
              src={email}
            />
          </Box>
          <Box>
            <Box
              component="img"
              sx={{ height: "30px", width: "auto" }}
              src={whatsApp}
            />
          </Box>
          <Box>
            <Box
              component="img"
              sx={{ height: "30px", width: "auto" }}
              src={linkedIN}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default Contact;
