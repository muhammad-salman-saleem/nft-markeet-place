import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import storeIcon from "../../assets/Header/storeIcon.png";
import nftLogo from "../../assets/Header/nftLogo.png";
import "../../App.css";

const menuItemStyle = {
  fontFamily: "Clash Display",
  fontSize: "20px",
  fontWeight: 400,
  lineHeight: "25px",
  letterSpacing: "0em",
  color: "#ffffff",
  margin: "0px 30px 0px 0px",
  "&:hover": {
    color: "rgba(255, 246, 0, 1)",
  },
  "@media (max-width: 1100px)": {
    marginRight: "10px",
    fontSize: "16px",
  },
};
const walletButtonStyle = {
  width: "189px",
  height:"36px",
  borderRadius: "5px",
  background: "rgba(255, 246, 0, 1)",
  justifyContent: "space-around",
  alignItems: "center",
  // img: {
  //   width: "28px",
  //   position: "relative",
  //   left: "-6px",
  // },
  "&:hover": {
    background: "rgba(255, 246, 0, 1)",
  },
  "@media (max-width: 1100px)": {
    width: "140px",
  },
  "@media (max-width: 769px)": {
    width: "100%",
    img: {
      width: "24px",
    },
  },
};
const buttonStyleText = {
  fontSize: "15px",
  lineHeight: "18.45px",
  color: "rgba(0, 0, 0, 1)",
  fontWeight: "500",
  fontFamily: "Clash Display",
  textTransform: "capitalize",
  position: "relative",
  // top: "1px",
  // left: "-12px",
  // "@media (max-width: 769px)": {
  //   left: "-1px",
  // },
};
const siteLogoStyle = {
  width: "204px",
  "@media (max-width: 1200px)": {
    width: "130px",
  },
  "@media (max-width: 769px)": {
    width: "116px",
  },
  "@media (max-width: 500px)": {
    fontSize: "12px",
  },
};
const headerNavContainer = {
  maxWidth: "1440px!important",
  margin: "auto",
  paddingRight: "40px",
  paddingLeft: "40px",
  "@media (max-width: 769px)": {
    paddingRight: "8px",
    paddingLeft: "8px",
  },
};

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar className="headerBarr" position="relative" sx={{ height: "80px" }}>
      <Container sx={headerNavContainer}>
        <Toolbar disableGutters>
          <Link to="/">
            <MenuItem sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
              <Box
                component="img"
                sx={siteLogoStyle}
                src={nftLogo}
                alt="siteLogo"
              />
            </MenuItem>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {/* <Link to="/Keyboard">
                <MenuItem sx={menuItemStyle}>Keyboard 3.0</MenuItem>
              </Link>
              <Link to="/Activity">
                <MenuItem sx={menuItemStyle}>Activity</MenuItem>
              </Link>
              <Link to="/MyAccount">
                <MenuItem sx={menuItemStyle}>My Account</MenuItem>
              </Link> */}
              <Link to="/Faq">
                <MenuItem sx={menuItemStyle}>FAQ</MenuItem>
              </Link>
              <Link to="/About">
                <MenuItem sx={menuItemStyle}>About</MenuItem>
              </Link>
              
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1, flexGrow: 1 }}>
            <Link to="/">
              <MenuItem>
                <Box
                  component="img"
                  sx={siteLogoStyle}
                  src={nftLogo}
                  alt="siteLogo"
                />
              </MenuItem>
            </Link>
          </Box>
          <Box
            className="headerMenuItems"
            sx={{
              flexGrow: 2,
              justifyContent: "flex-end",
              display: { xs: "none", md: "flex" },
            }}
          >
            {/* <Link to="/Keyboard">
              <MenuItem sx={menuItemStyle}>Keyboard 3.0</MenuItem>
            </Link>
            <Link to="/Activity">
              <MenuItem sx={menuItemStyle}>Activity</MenuItem>
            </Link>
            <Link to="/MyAccount">
              <MenuItem sx={menuItemStyle}>My Account</MenuItem>
            </Link> */}
            <Link to="/Faq">
              <MenuItem sx={menuItemStyle}>FAQ</MenuItem>
            </Link>
            <Link to="/About">
              <MenuItem sx={menuItemStyle}>About</MenuItem>
            </Link>
            <Link to="/term-of-service">
                <MenuItem sx={menuItemStyle}>Term</MenuItem>
              </Link>
            <Link to="/privacy-policy">
                <MenuItem sx={menuItemStyle}>privacy</MenuItem>
              </Link>
            <Link to="/disclaimer">
                <MenuItem sx={menuItemStyle}>disclaimer</MenuItem>
              </Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button sx={walletButtonStyle}>
              <img hidden src={storeIcon} alt="wallet button" />
              <Typography sx={buttonStyleText}>Download Now</Typography>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
