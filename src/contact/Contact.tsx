import { Box, Typography } from "@mui/material";
import phone from "../assets/icons/phone-call.png";
import email from "../assets/icons/email.png";
import whatsApp from "../assets/icons/whatsapp.png";
import linkedIN from "../assets/icons/linkedin.png";

function Contact() {
  return (
    <Box
      sx={{ borderTop: "1px solid #707070", padding: ".5rem 0rem 4rem 0rem" }}
    >
      <Box sx={{ width: "auto", padding: "0rem 4rem" }}>
        <Box>
          <Typography
            variant="h5"
            align="left"
            sx={{ color: "#d52e2e", fontFamily: "Poppins-Bold", mt: "1rem" }}
            gutterBottom
          >
            CONTACT
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            justifyContent: "space-around",
            padding: "2rem 0rem",
            border: "1px solid #707070",
            borderRadius: ".5rem",
            boxShadow: " rgb(131 38 38 / 14%) 0px 2px 8px 0px",
          }}
        >
          <Box>
            <Box
              component="img"
              sx={{ cursor:'pointer', height: "100px", width: "auto",filter:
                "invert(85%) sepia(7%) saturate(26%) hue-rotate(319deg) brightness(101%) contrast(104%)",
              transition:'transform 250ms ease',
              '&:hover':{
                transform:'scale(1.1)'
              }
             }}
              src={phone}
            />
          </Box>
          <Box>
            <Box
              component="img"
              sx={{ cursor:'pointer', height: "100px", width: "auto",filter:
                "invert(85%) sepia(7%) saturate(26%) hue-rotate(319deg) brightness(101%) contrast(104%)",
                transition:'transform 250ms ease',
                '&:hover':{
                  transform:'scale(1.1)'
                } }}
              src={email}
            />
          </Box>
          <Box>
            <Box
              component="img"
              sx={{ cursor:'pointer', height: "100px", width: "auto",filter:
                "invert(85%) sepia(7%) saturate(26%) hue-rotate(319deg) brightness(101%) contrast(104%)",
                transition:'transform 250ms ease',
                '&:hover':{
                  transform:'scale(1.1)'
                }
               }}
              src={whatsApp}
            />
          </Box>
          <Box>
            <Box
              component="img"
              sx={{ cursor:'pointer', height: "100px", width: "auto",filter:
                "invert(85%) sepia(7%) saturate(26%) hue-rotate(319deg) brightness(101%) contrast(104%)",
                transition:'transform 250ms ease',
                '&:hover':{
                  transform:'scale(1.1)'
                }
              }}
              src={linkedIN}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default Contact;
