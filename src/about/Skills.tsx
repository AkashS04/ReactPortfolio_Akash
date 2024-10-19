import { Box, Typography } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
const Skills = () => {
  return (
    <Box sx={{ padding: "0rem 4rem" }}>
        <Box sx={{padding:'1rem 0rem', border:'1px solid #121212', borderRadius: '1rem'}}>
        <Typography variant='h6' sx={{color:'#ffffff', paddingLeft:'2rem', fontFamily:'Poppins-Medium' ,fontSize:'2rem'}} align='left' > CORE SKILLS</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#352b2b94",
          padding: "1rem 2rem 3rem 2rem",
          borderRadius: "1rem",
          margin: "1rem",
        }}
      >
        <Box>
          <Typography variant="h5"  sx={{color:'white', fontFamily: 'Raleway-Regular'}} align="left">
            HTML
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ width: "100%", mr: 1 }}>
            <LinearProgress variant="determinate" value={80} />
          </Box>
          <Box sx={{ minWidth: 35 }}>
            <Typography
              variant="body2"
              sx={{ color: "red" }}
            >{`80%`}</Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#352b2b94",
          padding: "1rem 2rem 3rem 2rem",
          borderRadius: "1rem",
          margin: "1rem",
        }}
      >
        <Box>
          <Typography variant="h5"  sx={{color:'white', fontFamily: 'Raleway-Regular'}} align="left">
            CSS
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ width: "100%", mr: 1 }}>
            <LinearProgress variant="determinate" value={75} />
          </Box>
          <Box sx={{ minWidth: 35 }}>
            <Typography
              variant="body2"
              sx={{ color: "red" }}
            >{`75%`}</Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#352b2b94",
          padding: "1rem 2rem 3rem 2rem",
          borderRadius: "1rem",
          margin: "1rem",
        }}
      >
        <Box>
          <Typography variant="h5"  sx={{color:'white', fontFamily: 'Raleway-Regular'}} align="left">
            JavaScript
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ width: "100%", mr: 1 }}>
            <LinearProgress variant="determinate" value={70} />
          </Box>
          <Box sx={{ minWidth: 35 }}>
            <Typography
              variant="body2"
              sx={{ color: "red" }}
            >{`70%`}</Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#352b2b94",
          padding: "1rem 2rem 3rem 2rem",
          borderRadius: "1rem",
          margin: "1rem",
        }}
      >
        <Box>
          <Typography variant="h5"  sx={{color:'white', fontFamily: 'Raleway-Regular'}} align="left">
            TypeScript
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ width: "100%", mr: 1 }}>
            <LinearProgress variant="determinate" value={70} />
          </Box>
          <Box sx={{ minWidth: 35 }}>
            <Typography
              variant="body2"
              sx={{ color: "red" }}
            >{`70%`}</Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#352b2b94",
          padding: "1rem 2rem 3rem 2rem",
          borderRadius: "1rem",
          margin: "1rem",
        }}
      >
        <Box>
          <Typography variant="h5"  sx={{color:'white', fontFamily: 'Raleway-Regular'}} align="left">
            React
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ width: "100%", mr: 1 }}>
            <LinearProgress variant="determinate" value={75} />
          </Box>
          <Box sx={{ minWidth: 35 }}>
            <Typography
              variant="body2"
              sx={{ color: "red" }}
            >{`75%`}</Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#352b2b94",
          padding: "1rem 2rem 3rem 2rem",
          borderRadius: "1rem",
          margin: "1rem",
        }}
      >
        <Box>
          <Typography variant="h5"  sx={{color:'white', fontFamily: 'Raleway-Regular'}} align="left">
            Material-UI
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ width: "100%", mr: 1 }}>
            <LinearProgress variant="determinate" value={70} />
          </Box>
          <Box sx={{ minWidth: 35 }}>
            <Typography
              variant="body2"
              sx={{ color: "red" }}
            >{`70%`}</Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#352b2b94",
          padding: "1rem 2rem 3rem 2rem",
          borderRadius: "1rem",
          margin: "1rem",
        }}
      >
        <Box>
          <Typography variant="h5"  sx={{color:'white', fontFamily: 'Raleway-Regular'}} align="left">
            Bootstrap
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ width: "100%", mr: 1 }}>
            <LinearProgress variant="determinate" value={80} />
          </Box>
          <Box sx={{ minWidth: 35 }}>
            <Typography
              variant="body2"
              sx={{ color: "red" }}
            >{`80%`}</Typography>
          </Box>
        </Box>
      </Box>
        </Box>
        
    </Box>
  );
};
export default Skills;
