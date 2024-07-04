import { Box } from "@mui/system";
import React, { useState } from "react";
import DeviderImage from "../assets/Pages/Disclaimer/DeviderImage.svg";
import HeaderBackground from "../assets/Pages/Disclaimer/BackgroundImage.jpg";
import HeaderImage from "../assets/Pages/Disclaimer/DisclaimerHeaderImage.svg";
import BackgroundImage from "../assets/Pages/Disclaimer/Background.jpg";
import StartContant from "../assets/Pages/TermsOfService/StartContant.svg";
import { Container, IconButton, Typography } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

// Import Data
import DisclimerContentData from "../utility/DisclaimerContant";

const Disclaimer = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);


    const handleAccordionChange = (panelIndex) => (event, isExpanded) => {
        setExpandedIndex(isExpanded ? panelIndex : null);
    };

    return (
        <Box sx={{
            backgroundImage: `url(${HeaderBackground})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100%",
            marginTop: "-80px",
        }}>


            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "80px",
                }}
            >


                <Container
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "column" },
                        height: "100%",
                        margin: " auto",
                        color: "#fff",
                        paddingTop: { xs: "30px", sm: "0px", md: "0px" },
                        pb: { xs: "30px", sm: "40px", md: "60px", lg: "80px" },
                    }}
                >
                    <Box sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        alignItems: "center",
                        justifyContent: { xs: "center", md: "space-evenly", lg: "space-between" },
                        height: { xs: "75%", sm: "75%", md: "100%" },

                        color: "#fff",
                        paddingTop: { sm: "80px", md: "0px" }
                    }}>
                        <Box>
                            <Typography
                                sx={{
                                    display: "flex",
                                    color: "#FFF600",
                                    fontFamily: "Clash Display",
                                    fontSize: { xs: "30px", sm: "40px", md: "50px", lg: "80px", },
                                    fontWeight: 700,
                                    gap: "12px",
                                    textShadow: `
                                -6px 3px 0px #120b19, 
                                -8px 6px 0px #612CD2`,
                                }}
                            >
                                Disclaimer
                            </Typography>
                        </Box>
                        <Box component="img" sx={{
                            width: { xs: "250px", sm: '343px' }, height: { xs: "250px", sm: '343px' }
                        }}
                            src={HeaderImage}
                            alt="Header Image"
                        >

                        </Box>
                    </Box>
                    <Box sx={{
                        mt: { xs: "30px", sm: "50px", md: "60px" }
                    }}>
                        <Typography sx={{
                            color: "#FFF",
                            fontFamily: "Clash Display",
                            fontSize: { xs: "18px", sm: "20px", md: "22px", lg: "25px", },
                            fontStyle: "normal",
                            fontWeight: 600,
                            lineHeight: "normal",
                            mb: "20px"
                        }}>
                            CYBER RISK DISCLAIMER
                        </Typography>
                        <Typography sx={{
                            color: "#FFF",
                            fontFamily: "HelveticaRegular",
                            fontSize: { xs: "18px", sm: "20px", md: "22px", lg: "25px", },
                            fontStyle: "normal",
                            fontWeight: 400,
                            lineHeight: "normal",
                            mb: "20px"
                        }}>
                            This Disclaimer is a legal agreement between you (User) and UNBLOK LLC (Company) regarding your use of the UNBLOK platform. If you don't agree with these terms, do not use our services. Your use of the platform means you accept and are bound by this Disclaimer.
                        </Typography>
                        <Typography sx={{
                            color: "#FFF",
                            fontFamily: "Clash Display",
                            fontSize: { xs: "18px", sm: "20px", md: "22px", lg: "25px", },
                            fontStyle: "normal",
                            fontWeight: 600,
                            lineHeight: "normal",
                            mb: "20px"
                        }}>
                            BACKGROUND
                        </Typography>
                        <Typography sx={{
                            color: "#FFF",
                            fontFamily: "HelveticaRegular",
                            fontSize: { xs: "18px", sm: "20px", md: "22px", lg: "25px", },
                            fontStyle: "normal",
                            fontWeight: 400,
                            lineHeight: "normal",
                            mb: "20px"
                        }}>
                            As technology becomes more integral to our lives, cyber risks like fraud, data loss, and breaches are on the rise. Cyber fraud involves using deceptive tactics to steal sensitive information. Data loss happens when data is accidentally or deliberately destroyed. Data breaches involve unauthorized access to confidential information. These risks can have serious consequences for individuals, businesses, and governments. Cyber threats are always evolving, so staying informed about the latest risks and safeguarding your data is crucial.
                        </Typography>
                        <Typography sx={{
                            color: "#FFF",
                            fontFamily: "HelveticaRegular",
                            fontSize: { xs: "18px", sm: "20px", md: "22px", lg: "25px", },
                            fontStyle: "normal",
                            fontWeight: 400,
                            lineHeight: "normal",
                            mb: "20px"
                        }}>
                            Cybercriminals are getting more sophisticated and target individuals and businesses of all sizes. They're often a step ahead of security measures. Keeping up with the latest threats and protecting your data is essential. Cybercriminals can use stolen information for fraud or sell it on the black market. If you're a victim of cybercrime, act promptly and contact the authorities.
                        </Typography>
                        <Typography sx={{
                            color: "#FFF",
                            fontFamily: "HelveticaRegular",
                            fontSize: { xs: "18px", sm: "20px", md: "22px", lg: "25px", },
                            fontStyle: "normal",
                            fontWeight: 400,
                            lineHeight: "normal",
                            mb: "20px"
                        }}>
                            To protect yourself, practice online security vigilance. Use strong, unique passwords for each account, avoid clicking on unfamiliar links or attachments, and install reliable antivirus software. These precautions help guard against cyber threats.
                        </Typography>
                    </Box>
                </Container>
            </Box>

            <Box sx={{
                backgroundImage: `url(${BackgroundImage})`,
                backgroundSize: "cover",

                backgroundRepeat: "no-repeat",
                pt: { xs: "40px", sm: "50px", md: "60px", lg: "70px" },
                pb: { xs: "40px", sm: "60px", md: "80px", lg: "100px" },
                mt: "-1px",
            }}>
                <Container sx={{ alignItems: "center", }}>
                    <Box sx={{
                        marginTop: "50px",
                        position: "relative"
                    }}>
                        <Box
                            component="img"
                            src={StartContant}
                            sx={{
                                width: {xs:"50px",md:"60px",lg:"76px "},
                                position: "absolute",
                                right: "40px",
                                top: {xs:"-20px",md:"-15px",lg:"-10px"}
                            }}
                        />

                        {DisclimerContentData && DisclimerContentData.map((item) => {
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
                                                display: "flex",

                                            }}
                                        >
                                            <Typography sx={{
                                                fontSamily: "Clash Display",
                                                fontSize: { xs: "15px", sm: "18px", md: "20px", lg: "25px", },
                                                fontWeight: 500,
                                                lineHeight: "300%",
                                                color: !isExpanded ? '#000000' : '#612CD2',
                                                margin: "0px",


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
        </Box>
    );
};

export default Disclaimer;
