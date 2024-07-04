import React, { useEffect, useState } from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
import parentAboutBox from "../assets/Pages/About/AboutUs.png";
// import cartoonImg from "../assets/Pages/About/aboutCartoon.png";
import cartoonImg from "../assets/Pages/About/backgound.svg";
import cartoonImage from "../assets/Pages/About/backgroundImage.svg";
import Fox from "../assets/Pages/About/Fox.svg";
import Yahoo from "../assets/Pages/About/Yahoo.svg";
import SliderImage from "../assets/Pages/About/SliderImage.svg";
import Asiaone from "../assets/Pages/About/Asiaone.svg";
import Invaluable from "../assets/Pages/About/Invaluable.png";
import curveBox from "../assets/Pages/About/curveBox.png";
import Marquee from "react-fast-marquee";

const data = [
  {
    id: 1,
    imageUrl: Fox,
  },
  {
    id: 2,
    imageUrl: Yahoo,
  },
  {
    id: 3,
    imageUrl: SliderImage,
  },
  {
    id: 4,
    imageUrl: Asiaone,
  },
]

const parentFaqBox = {
  background: `url(${parentAboutBox})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "Top center",
  width: "100%",
};

const faqBannerBox = {
  width: "100%",
  minHeight: "789px",
  display: "flex",
  flexDirection: 'column',
  justifyContent: "center",
  alignItems: "center",
  paddingBottom: "20px",
  "@media (max-width: 769px)": {
    minHeight: "350px",
  },
};


const About = () => {
  const [imageUrl, setImageUrl] = useState(cartoonImg);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1441) {
        setImageUrl(cartoonImage);
      } else {
        setImageUrl(cartoonImg);
      }
    };

    window.addEventListener('resize', handleResize);


    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <>
      <Box sx={parentFaqBox}>
        <Box sx={faqBannerBox}>

          <Container>
            <Grid container spacing={2}>
              <Grid item md={6} xs={12}>
                <Box>
                  <Typography sx={{
                    color: "#FFF600",
                    textAlign: "left",
                    fontFamily: "Helvetica Neue Regular",
                    fontSize: { xs: "30px", sm: "40px", md: "50px", lg: "80px", },
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "normal",
                    textShadow: `
                    -4px 3px 0px #120b19, 
                     -6px 4px 0px #612CD2`,
                    marginTop: { xs: "30px", sm: "40px", md: "unset", }
                  }}>About</Typography>
                  <Typography
                    sx={{
                      color: "#ffffff",
                      textAlign: "left",
                      fontFamily: "'Helvetica Neue', sans-serif",
                      fontSize: { xs: "30px", sm: "40px", md: "50px", lg: "80px", },
                      fontStyle: "normal",
                      fontWeight: 700,
                      lineHeight: "normal",
                      textShadow: `
                      -4px 3px 0px #120b19, 
                       -6px 4px 0px #612CD2`,
                    }}
                  >
                    UNBLOK
                  </Typography>
                  <Typography
                    sx={{
                      color: "#ffffff",
                      textAlign: "left",
                      fontFamily: "'Helvetica Neue', sans-serif",
                      fontSize: { xs: "22px", sm: "25px", md: "28px", lg: "30px", },
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "normal",
                      marginTop: { xs: "30px", sm: "35px", md: "41px" },
                    }}
                  >
                    Ignite Your Marketing Efforts<br></br> with Data-Driven NFTs
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Box>
              <Typography
                sx={{
                  color: "#ffffff",
                  fontFamily: "Helvetica Neue Regular",
                  fontSize: { xs: "18px", sm: "18px", md: "19px", lg: "20px", },
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "36px",
                  marginTop: { xs: "30px", sm: "40px", md: "80px", lg: "118px" },
                }}
              >
                UNBLOK gives your business unparalleled access to customer data
                directly from their phone. You get more precise and
                comprehensive data than ever before, including location, keyword
                usage, and online shopping habits. <br></br>We have data that’s
                not available anywhere else. Not even Facebook or Google have
                this much insight – and you can access all this actionable data
                for FREE with our innovative new NFTs
              </Typography>
            </Box>
          </Container>
          <Box sx={{
            width: { xs: "100%", md: "unset" },
            justifyContent: { xs: "flex-end", md: "unset" },
            display: { xs: "flex", md: "unset" }
          }}>
            <Box
              component="img"
              src={imageUrl}
              sx={{
                width: { xs: "80%", sm: "80%", md: "50%", lg: "666px", },
                height: { lg: "470px" },
                position: { md: "absolute" },
                right: "0px",
                top: { xs: "0px", md: "150px", lg: "80px" },
                "@media (min-width: 1441px)": {
                  width: "50%",
                },
              }}
            />
          </Box>
        </Box>

        <Box sx={{ background: "rgba(255, 255, 255, 1)", paddingTop: "66px", overflow: "hidden" }}>
          <Container>

            <Box
              sx={{
                width: "50%",
                background: `url(${Invaluable})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "Top center",
                paddingBottom: "25px",
                paddingLeft: "117px",
                marginBottom: "36px"
              }}
            >
              <Typography
                sx={{
                  color: "#612CD2",
                  fontFamily: "Clash Display",
                  textAlign: "left",
                  fontSize: "50px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "normal",
                }}
              >
                Invaluable
              </Typography>
              <Typography
                sx={{
                  color: "rgba(0, 0, 0, 1)",
                  fontFamily: "HelveticaNeueOutline",
                  textAlign: "left",
                  fontSize: "50px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "normal",
                }}
              >
                Insights
              </Typography>
            </Box>
          </Container>

          <Box sx={{
            background: `url(${curveBox})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "relative",
            width: "100%",
            height: "224px",
            position: "relative",
            paddingTop: { xs: "15%", sm: "10%", md: "9%", lg: "6%", xl: "7.5%" },

          }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                transform: "rotate(3.989deg)",
                overflowX: "scroll",
                overflowY: "hidden",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                "&::-webkit-scrollbar": {
                  display: "none"
                },
                px: { xs: "20px", sm: "30px", md: "40px", lg: "57px" },
                width: "98%",
                scrollBehavior: "smooth",

              }}>
              <Marquee style={{ display: "flex", justifyContent: "space-between", }}>
                {
                  data && data.map((item) => (
                    <Box
                      key={item.id}
                      component="img"
                      src={item.imageUrl}
                      sx={{
                        height: { xs: "50px", lg: "auto" },
                        rotate: "-4deg",
                        flex: "0 0 auto",
                        // width: "100%"
                        mx:"20px",
                      }}
                    />
                  ))
                }
                {
                  data && data.map((item) => (
                    <Box
                      key={item.id}
                      component="img"
                      src={item.imageUrl}
                      sx={{
                        height: { xs: "50px", lg: "auto" },
                        rotate: "-4deg",
                        flex: "0 0 auto",
                        // width: "100%"
                        mx:"20px",
                      }}
                    />

                  ))
                }

              </Marquee>
            </Box>
          </Box>


        </Box>
      </Box>
    </>
  );
};

export default About;
