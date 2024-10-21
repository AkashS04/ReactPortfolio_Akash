import { Box, Typography } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
const Skills = () => {
  const coreSkills=[
    {title:'HTML',value:'80',percentage:'80%'},
    {title:'CSS',value:'75',percentage:'75%'},
    {title:'JavaScript',value:'70',percentage:'70%'},
    {title:'TypeScript',value:'70',percentage:'70%'},
    {title:'React',value:'75',percentage:'75%'},
    {title:'Material-UI',value:'70',percentage:'70%'},
    {title:'Bootstrap',value:'80',percentage:'80%'},
    {title:'REST API',value:'70',percentage:'70%'},
    {title:'GitHub',value:'70',percentage:'70%'},
    {title:'JIRA',value:'70',percentage:'70%'},
  ]

  return (
    <Box sx={{ padding: "0rem 4rem" }}>
        <Box sx={{padding:'1rem 0rem', border:'1px solid #707070', borderRadius: '1rem'}}>
        <Typography variant='h6' sx={{color:'#e3e3e3', paddingLeft:'2rem', fontFamily:'Poppins-Medium' ,fontSize:'1.1rem'}} align='left' > CORE SKILLS</Typography>
      <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
      {coreSkills.map((skills:any)=>(
         <Box
         sx={{
          width:'40%',
           display: "flex",
           flexDirection: "column",
           backgroundColor: "#48484894",
           padding: "1rem 2rem 3rem 2rem",
           borderRadius: "1rem",
           margin: "1rem",
         }}
       >
         <Box>
           <Typography variant="h5"  sx={{color:'#e3e3e3', fontFamily: 'Raleway-Regular'}} align="left">
             {skills.title}
           </Typography>
         </Box>
         <Box sx={{ display: "flex", alignItems: "center" }}>
           <Box sx={{ width: "100%", mr: 1 }}>
             <LinearProgress variant="determinate" value={skills.value} />
           </Box>
           <Box sx={{ minWidth: 35 }}>
             <Typography
               variant="body2"
               sx={{ color: "#d52e2e", fontFamily:'Poppins-Semibold',fontSize:'1.1rem' }}
             >{skills.percentage}</Typography>
           </Box>
         </Box>
       </Box>
      ))}
      </Box>

        </Box>
        
    </Box>
  );
};
export default Skills;
