import { Box, Typography } from "@mui/material";
import ProblemSolving from "../assets/skillsIcons/problem-solving.png";
import TeamPlayer from "../assets/skillsIcons/team.png";
import ProjectPlaning from "../assets/skillsIcons/project.png";
import Research from "../assets/skillsIcons/research.png";
import MultiTasking from "../assets/skillsIcons/multitask.png";

const WhyChooseMe = () => {
  const Skillset = [
    {
      skillIcon: ProblemSolving,
      title: "Problem Solving",
      name: "Implement creative ideas for Analyzed and Recognized core issues",
    },
    {
      skillIcon: TeamPlayer,
      title: "Team & Collabration",
      name: "Add values for the team efforts and Assistive for others to achieving team objectives",
    },
    {
      skillIcon: ProjectPlaning,
      title: "Project Planning",
      name: "Developing and detailing outline or strategy for the project with Arranged tasks,resources,and schedules effectively",
    },
    {
      skillIcon: Research,
      title: "Research",
      name: "collective and organize data or examine data and information to draw conclusions ",
    },
    {
      skillIcon: MultiTasking,
      title: "Multitasking",
      name: "Manage multiple task with responsibility and took care of various tasks efficiently at the same time",
    },
  ];
  return (
    <>
      <Box sx={{ width: "auto" }}>
        <Typography
          variant="h3"
          sx={{ color: "#d52e2e", fontFamily: "Poppins-Bold", mt: "1rem" }}
          gutterBottom
        >
          WHY CHOOSE ME
        </Typography>
        <Box sx={{padding:'2rem 4rem'}}>
          <Box sx={{ display: "flex",
                flexWrap: "wrap",
                gap: "2rem",}}>
          
              {
                Skillset.map((skills:any)=>(
                  <Box
                  sx={{
                    width:'40%',
                    height:'104px',
                    display: 'flex',
                    alignItems: 'center' ,
                    gap: '1rem' ,
                    margin: "1rem",
                    padding:"2rem",
                    backgroundColor: "#35353594",
                    borderRadius:'1rem',
                    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 18px 50px -10px'
                  }}
                >
                  <Box
                component="img"
                src={skills.skillIcon}
                sx={{
                  filter:
                    "invert(85%) sepia(7%) saturate(26%) hue-rotate(319deg) brightness(101%) contrast(104%)",
                  height: "60px",
                  width: "auto",
                }}
              />
              <Box>
                <Typography variant='h5' align='left' sx={{fontFamily:'Raleway-Extralight',color:'#e3e3e3'}}>{skills.title}</Typography>
                <Typography variant='body1' align='left' sx={{fontFamily:'Poppins-Regular',color:'#e3e3e3'}}>{skills.name}</Typography>
              </Box>
            </Box>
                ))
              }
              
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default WhyChooseMe;
