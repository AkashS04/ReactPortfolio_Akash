import { Box, Typography } from "@mui/material";
import EcommerceImg from "../assets/MyProjects/ECommerceWebsite.jpg";
import BussinessImg from "../assets/MyProjects/BussinessWebsite.jpg";
import StartupImg from "../assets/MyProjects/StartupWebsite.jpg";
import PersonalImg from "../assets/MyProjects/PersonalWebsite.jpg";
import PortfolioImg from "../assets/MyProjects/PortfolioWebsite.jpg";

const Project = () => {
  const projectData: any = [
    {
      img: EcommerceImg,
      title: "ECommerse Websites",
      content: "Robust ECommerce Websites for Clients",
    },
    {
      img: BussinessImg,
      title: "Bussiness Websites",
      content: "Robust Bussiness Websites for Clients",
    },
    {
      img: StartupImg,
      title: "StartUp Websites",
      content: "Robust StartUp Websites for Clients",
    },
    {
      img: PersonalImg,
      title: "Personal Websites",
      content: "Robust Personal Websites for Clients",
    },
    {
      img: PortfolioImg,
      title: "Portfolio Websites",
      content: "Robust Portfolio Websites for Clients",
    },
  ];

  return (
    <>
      <Box>
        <Typography
          variant="h3"
          sx={{ color: "#d52e2e", fontFamily: "Poppins-Bold", mt: "1rem" }}
          gutterBottom
        >
          PROJECTS
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            padding: "2rem 4rem 2rem 4rem",
            justifyContent: "space-around",
          }}
        >
          {projectData.map((data: any) => (
            <Box
              sx={{
                width: "300px",
                backgroundColor: "#181818",
                position: "relative",
                overflow: "hidden",
                padding: "2rem",
                border: "1px solid #121212",
                borderRadius: "1rem",
                marginBottom: "2rem",
                cursor: "default",
                "::after": {
                  content: '""',
                  position: "absolute",
                  height: "400px",
                  width: "400px",
                  top: "0px",
                  left: "0px",
                  borderRadius: "1rem",
                  backgroundColor: "rgb(0 0 0 / 38%)",
                  transition: "transform 650ms ease",
                },
                "&:hover::after": {
                  transform: "translate(370px, 500px)",
                },
              }}
            >
              <Box
                component="img"
                sx={{ height: "auto", width: "300px" }}
                src={data.img}
              />
              <Typography
                variant="h5"
                sx={{ fontFamily: "Raleway-Extralight", color: "#e3e3e3" }}
                gutterBottom
              >
                {data.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontFamily: "Raleway-Thin", color: "#e3e3e3" }}
                gutterBottom
              >
                {data.content}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};
export default Project;
