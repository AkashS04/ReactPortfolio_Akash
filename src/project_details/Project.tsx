import { Box, Typography } from "@mui/material";
import EcommerceImg from "../assets/MyProjects/ECommerceWebsite.jpg";
import BussinessImg from "../assets/MyProjects/BussinessWebsite.jpg";
import StartupImg from "../assets/MyProjects/StartupWebsite.jpg";
import PersonalImg from "../assets/MyProjects/PersonalWebsite.jpg";
import PortfolioImg from "../assets/MyProjects/PortfolioWebsite.jpg";

const Project = () => {
  const projectData: any = [
    { img: EcommerceImg, title: "ECommerse Websites",content:"Robust ECommerce Websites for Clients" },
    { img: BussinessImg,title: "Bussiness Websites",content:"Robust Bussiness Websites for Clients" },
    { img: StartupImg,title: "StartUp Websites",content:"Robust StartUp Websites for Clients" },
    { img: PersonalImg,title: "Personal Websites",content:"Robust Personal Websites for Clients" },
    { img: PortfolioImg,title: "Portfolio Websites",content:"Robust Portfolio Websites for Clients" },
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

        <Box sx={{}}>
        {projectData.map((data:any)=>
            (<Box>
                <Box
                  component="img"
                  sx={{ height: "auto", width: "300px" }}
                  src={data.img}
                />
                <Typography variant="h5" gutterBottom>
                  {data.title}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {data.content}
                </Typography>
              </Box>)
        )}
        </Box>
      </Box>
    </>
  );
};
export default Project;
