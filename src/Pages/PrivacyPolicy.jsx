import { Box } from "@mui/system";
import React, { useState } from "react";
import HeaderBackground from "../assets/Pages/PrivacyPolicy/HeaderBackground.svg";
import DeviderImage from "../assets/Pages/Disclaimer/DeviderImage.svg";
import HeaderImage from "../assets/Pages/PrivacyPolicy/PrivacyHeader.svg";
import BackgroundImage from "../assets/Pages/PrivacyPolicy/Background.png";
import StartContant from "../assets/Pages/PrivacyPolicy/StartContant.svg";
import { Container, IconButton, Typography } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

// Import Data
import PrivacyPolicyContentData from "../utility/PrivacyPolicyContent"

const PrivacyPolicy = () => {
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
                        paddingTop: { sm: "80px", md: "0px" }
                    }}
                >
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
                                Privacy{" "}
                            </Typography>{" "}
                            Policy
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
                        fontSize: { xs: "15px", sm: "18px", md: "20px", lg: "24px", },
                        fontWeight: 400,
                        lineHeight: "40px",
                    }}>
                        This privacy notice for UNBLOK ("we," "us," or "our"), explains how we collect, store, use, and share your information when you use our services such as visiting the website <a href="http://www.unblokdata.com" style={{ color: "#612CD2" }}>(http://www.unblokdata.com) </a> or any other site that links to this privacy notice, downloading our mobile app or any other app linked to this notice, and engaging with us in sales, marketing, or events.
                    </Typography>
                    <Typography sx={{
                        color: "#000",
                        fontFamily: "Clash Display",
                        fontSize: { xs: "15px", sm: "18px", md: "20px", lg: "24px", },
                        fontWeight: 400,
                        lineHeight: "40px",
                        mt: "20px",
                    }}>
                        <b style={{ fontWeight: 600 }}>Have questions or concerns?</b> Reading this notice will help you understand your privacy rights. If you don't agree with our policies, please don't use our Services. For more information, reach out to us at <a href="mailto:info@unblokapp.com" style={{ color: "#612CD2" }}>info@unblokapp.com</a>.
                    </Typography>
                    <Box sx={{
                        position: "relative"
                    }}>
                        <Box
                            component="img"
                            src={StartContant}
                            sx={{
                                width: "50px",
                                height: "50px",
                                position: "absolute",
                                right: "20px",
                                top: "30%",
                            }}
                        />
                        <Typography sx={{
                            color: "#612CD2",
                            fontFamily: "Clash Display",
                            fontSize: { xs: "15px", sm: "18px", md: "20px", lg: "24px", },
                            fontWeight: 600,
                            lineHeight: "40px",
                            mt: "20px",
                        }}>

                            Summary of Key Points
                        </Typography>
                        <Typography sx={{
                            color: "#000",
                            fontFamily: "Clash Display",
                            fontSize: { xs: "15px", sm: "18px", md: "20px", lg: "24px", },
                            fontWeight: 400,
                            lineHeight: "40px",
                        }}>
                            Personal Information: We process personal information based on your interactions, choices, and the features you use on our Services.
                        </Typography>
                        <Typography sx={{
                            color: "#000",
                            fontFamily: "Clash Display",
                            fontSize: { xs: "15px", sm: "18px", md: "20px", lg: "24px", },
                            fontWeight: 400,
                            lineHeight: "40px",
                        }}>
                            <b style={{ fontWeight: 500 }}>Sensitive Data:</b> We handle sensitive personal information with your consent or as permitted by law.
                        </Typography>
                        <Typography sx={{
                            color: "#000",
                            fontFamily: "Clash Display",
                            fontSize: { xs: "15px", sm: "18px", md: "20px", lg: "24px", },
                            fontWeight: 400,
                            lineHeight: "40px",
                        }}>
                            <b style={{ fontWeight: 500 }}>Third-Party Data:</b> We don't receive information from third parties.
                        </Typography>
                        <Typography sx={{
                            color: "#000",
                            fontFamily: "Clash Display",
                            fontSize: { xs: "15px", sm: "18px", md: "20px", lg: "24px", },
                            fontWeight: 400,
                            lineHeight: "40px",
                        }}>
                            <b style={{ fontWeight: 500 }}>Processing Reasons:</b> We process your information for Service improvement, communication, security, and legal compliance, as well as other purposes with your consent.
                        </Typography>
                        <Typography sx={{
                            color: "#000",
                            fontFamily: "Clash Display",
                            fontSize: { xs: "15px", sm: "18px", md: "20px", lg: "24px", },
                            fontWeight: 400,
                            lineHeight: "40px",
                        }}>
                            <b style={{ fontWeight: 500 }}>Sharing Information:</b> We share information with specific third parties in certain situations.
                        </Typography>
                        <Typography sx={{
                            color: "#000",
                            fontFamily: "Clash Display",
                            fontSize: { xs: "15px", sm: "18px", md: "20px", lg: "24px", },
                            fontWeight: 400,
                            lineHeight: "40px",
                        }}>
                            <b style={{ fontWeight: 500 }}>Data Security:</b> We implement measures to protect your data, but no method is 100% secure against unauthorized access.
                        </Typography>
                        <Typography sx={{
                            color: "#000",
                            fontFamily: "Clash Display",
                            fontSize: { xs: "15px", sm: "18px", md: "20px", lg: "24px", },
                            fontWeight: 400,
                            lineHeight: "40px",
                        }}>
                            <b style={{ fontWeight: 500 }}>Your Rights:</b> Depending on your location, you might have rights related to your personal information as per privacy laws.
                        </Typography>
                        <Typography sx={{
                            color: "#000",
                            fontFamily: "Clash Display",
                            fontSize: { xs: "15px", sm: "18px", md: "20px", lg: "24px", },
                            fontWeight: 400,
                            lineHeight: "40px",
                        }}>
                            <b style={{ fontWeight: 500 }}>Exercising Your Rights:</b> To exercise your rights, simply contact us at info@unblokapp.com or get in touch with our team.
                        </Typography>
                    </Box>
                    <Typography sx={{
                        color: "#000",
                        fontFamily: "Clash Display",
                        fontSize: { xs: "15px", sm: "18px", md: "20px", lg: "24px", },
                        fontWeight: 400,
                        lineHeight: "40px",
                        mt: "20px"
                    }}>
                        Learn more about the information that we collect by continuing to read.
                    </Typography>
                    <Box sx={{
                        marginTop: "50px",
                    }}>



                        {PrivacyPolicyContentData && PrivacyPolicyContentData.map((item) => {
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
                                            px: "0px",
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
                                        {item.listContent && (
                                            <Box component="ul" sx={{
                                                marginTop: "10px",
                                                paddingLeft: "20px",
                                                fontSize: { xs: "15px", sm: "18px", md: "20px", lg: "25px" },
                                                fontWeight: 400,
                                                lineHeight: "35px",
                                            }}>
                                                {item.listContent.map((list) => (
                                                    <li key={list.id} >{list.text}</li>
                                                ))}
                                            </Box>
                                        )}
                                    </AccordionDetails>
                                </Accordion>
                                <Box component="img" sx={{
                                            width: "100%",
                                            display:!isExpanded ? "black" : "none",
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

export default PrivacyPolicy;
