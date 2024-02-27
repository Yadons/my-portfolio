import { Box, Container, Grid, Typography, styled } from "@mui/material"
import avatar from "../../../../assets/images/avatar.jpg"
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StyledButton from "../../../../components/styledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {

    const StyledHero = styled("div") (({theme}) => ({
      backgroundColor: theme.palette.primary.main,
      height: "100vh",
      display: "flex",
      alignItems: "center",
      [theme.breakpoints.up('xs')]: { //<= Mobile.
          paddingTop: "150px"
      },
      [theme.breakpoints.up('md')]: {// >= Mobile.
        paddingTop: "0px"
      }
    }))

    const StyledImg = styled("img") (({theme}) => ({
      width: "75%",
      borderRadius: "45%",
      border: `1px solid ${theme.palette.primary.contrastText}`
    }))

    return (
      <>
          <StyledHero>
            <Container maxWidth="lg">
            <Grid container spacing={2}>
              <Grid item xs={12} md={5}>
                <Box position="relative">
                  <Box position="absolute" width="100%" top={-100} right={0}>
                      <AnimatedBackground />
                  </Box>
                  <Box position="relative" textAlign="center">
                      <StyledImg src= {avatar} />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={7}>
                <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Yago Silva</Typography>
                <Typography color="primary.contrastText" variant="h2" textAlign="center">I'm a Software Engineer</Typography>

                <Grid container display="flex" justifyContent="center" spacing={3} pb={3} pt={3}>
                    <Grid item xs={12} md={6} display="flex" justifyContent="center">
                        <StyledButton>
                        <DownloadIcon />  
                          < Typography>Download CV</Typography>
                        </StyledButton>
                    </Grid>
                    <Grid item xs={12} md={6} display="flex" justifyContent="center">
                    <StyledButton>
                      <MailOutlineIcon />
                      <Typography>Fale Comigo</Typography>
                     </StyledButton>
                    </Grid>
                </Grid>
                
              </Grid>

            </Grid>
            </Container>
          </StyledHero >
      </>
    )
  }
  
  export default Hero