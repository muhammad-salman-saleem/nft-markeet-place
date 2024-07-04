import { Box } from "@mui/system";
import React, { useState } from "react";
import HeaderBackground from "../assets/Pages/TermsOfService/HeaderBackground.svg";
import DeviderImage from "../assets/Pages/Disclaimer/DeviderImage.svg";
import HeaderImage from "../assets/Pages/TermsOfService/TermsHeader.svg";
import BackgroundImage from "../assets/Pages/TermsOfService/Background.png";
import StartContant from "../assets/Pages/TermsOfService/StartContant.svg";
import StartHeader from "../assets/Pages/TermsOfService/StarHeader.svg";
import { Container, IconButton, Typography } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

// Import Data
import ContentData from "../utility/TermsOfServiceContent"

const TermsOfService = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);


  const handleAccordionChange = (panelIndex) => (event, isExpanded) => {
    setExpandedIndex(isExpanded ? panelIndex : null);
  };

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${HeaderBackground})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "550px",
          marginTop: "-80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: { xs: "center",md:"space-evenly", lg: "space-between" },
            height: { xs: "75%", sm: "75%", md: "100%" },
            margin: " auto",
            color: "#fff",
            paddingTop: { sm: "80px", md: "0px" },
            position:"relative"
          }}
        >
          <Box
              component="img"
              src={StartHeader}
              sx={{
                width: {md:"60px",lg:"78px"},
                height: {md:"60px",lg:"78px"},
                position: "absolute",
                left: "30%",
                top: {md:"25%",lg:"20%"},
                display:{xs:"none",md:"block"}
              }}
            />
          <Box>
            <Typography
              sx={{
                display: "flex",
                color: "#FFF",
                fontFamily: "Clash Display",
                fontSize: { xs: "30px", sm: "40px", md: "50px", lg: "80px", },
                fontWeight: 700,
                gap: "12px",
                textShadow: `
                -6px 3px 0px #120b19, 
                -8px 6px 0px #612CD2`,

              }}
            >
              <Typography
                sx={{
                  color: "#FFF600",
                  textAlign: "center",
                  fontFamily: "Clash Display",
                  fontSize: { xs: "30px", sm: "40px", md: "50px", lg: "80px", },
                  fontWeight: 700,
                  textShadow: `
                 -6px 3px 0px #120b19, 
                 -8px 6px 0px #612CD2`,
                }}
              >
                Terms{" "}
              </Typography>{" "}
              of Service
            </Typography>
            <Typography sx={{
              color: "#FFF",
              fontFamily: "Clash Display",
              fontSize: { xs: "15px", sm: "20px", md: "25px", lg: "30px", },
              fontWeight: 400,
            }}>
              Updated August 31st, 2023
            </Typography>
          </Box>
          <Box component="img" sx={{
            width: { xs: "250px", sm: '343px' }, height: { xs: "250px", sm: '343px' }
          }}
            src={HeaderImage}
            alt="Header Image"
          >

          </Box>
        </Container>
      </Box>
      <Box sx={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        py: { xs: "40px", sm: "60px", md: "70px", lg: "100px" },
        mt: "-1px"
      }}>
        <Container sx={{ alignItems: "center", }}>
          <Typography sx={{
            color: "#000",
            fontFamily: "Clash Display",
            fontSize: { xs: "15px", sm: "18px", md: "20px", lg: "25px", },
            fontWeight: 400,
            lineHeight: "40px",
          }}>
            We are UNBLOK LLC, a registered company in Delaware, United States, operating the website <a href="http://www.unblokdata.com" style={{ color: "#612CD2" }}>http://www.unblokdata.com</a>  (the "Site") and the mobile application UNBLOK Keyboard 3.0 (the "App"). Our Services encompass the Site, App, and related products and services referred to as the "Legal Terms." UNBLOK functions as a decentralized data marketplace where users, businesses, and brands can exchange customer data as non-fungible tokens (NFTs). This involves collecting and processing virtual keyboard data, including search keywords and location-based info. By using our Services, users allow UNBLOK and NFT purchasers to utilize their data. Our platform lets users monetize their data by sharing it through the Keyboard 3.0 app, allowing us to license or sell it to third parties. This enables rewards for data sales to various third parties like brands, advertisers, and more. UNBLOK is an intermediary, facilitating data exchange between users and data purchasers. We are not responsible for how purchasers use user information. If you disagree with these terms, please refrain from using the Services. The Services are intended for users who are 18 or older.
          </Typography>
          <Box sx={{
            marginTop: "50px",
            position: "relative"
          }}>
            <Box
              component="img"
              src={StartContant}
              sx={{
                width: "50px",
                height: "50px",
                position: "absolute",
                right: "9px",
                top: "-40px"
              }}
            />

            
            {ContentData && ContentData.map((item) => {
              const isExpanded = expandedIndex === item.id;
              return (
                <>
                <Accordion key={item.id} sx={{
                  borderColor: "none", boxShadow: "none", backgroundColor: "transparent", "&.MuiAccordion-root::before": {
                    height: "0"
                  },
                  marginBottom: "-7px"
                }} expanded={isExpanded} onChange={handleAccordionChange(item.id)} className="heloword">
                  <AccordionSummary
                     expandIcon={<IconButton>{isExpanded ? <RemoveIcon sx={{
                      color: "#612CD2",
                      fontFamily: "Clash Display",
                      fontSize: "25px",
                      fontStyle: "normal",
                      fontWeight: 500,
                      lineHeight: "normal"
                  }} /> : <AddIcon sx={{
                      color: "#000000",
                      fontFamily: "Clash Display",
                      fontSize: "25px",
                      fontStyle: "normal",
                      fontWeight: 500,
                      lineHeight: "normal"
                  }} />}</IconButton>}
                    sx={{
                      margin: "0px",
                      px:"0px",
                      ".MuiAccordionSummary-content": {
                        margin: "0px"
                      },

                    }}
                  >
                    <Typography sx={{
                      fontFamily: "Clash Display",
                      fontSize: { xs: "15px", sm: "18px", md: "20px", lg: "25px", },
                      fontWeight: 500,
                      lineHeight: "300%",
                      color: !isExpanded ? '#000000' : '#612CD2',
                      margin: "0px"

                    }}>{item.title}</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{
                    borderRadius: "5px",
                    border: "2px solid rgba(162, 121, 250, 0.30)",
                    background: "rgba(155, 124, 220, 0.15)",
                    backdropFilter: "blur(10px)",
                    p: { xs: "30px", sm: "60px", lg: "70px" },
                  }}>
                    <Typography sx={{
                      color: "#000",
                      fontFamily: "Clash Display",
                      fontSize: { xs: "15px", sm: "18px", md: "20px", lg: "25px", },
                      fontWeight: 400,
                      lineHeight: "150%",
                    }}>
                      {item.decription}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Box component="img" sx={{
                  width: "100%",
                  display: !isExpanded ? "black" : "none",
              }}
                  src={DeviderImage}
                  alt="Devider Image"
              />
              </>
              )
            })}

          </Box>
        </Container>
      </Box>
    </>
  );
};

export default TermsOfService;
