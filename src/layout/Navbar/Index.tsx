import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Cleanify from "../../assets/Cleanify.svg";
import { Img } from "react-image";
import { ButtonTextStyle, RegisterButtonStyle, SignInButtonStyle } from "./Styles";
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["About Us", "Register", "Sign in"];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
          <Box
            sx={{
             height: "50px",
             width: "100%",
            }}
          >
            <img src={Cleanify} alt="Cleanify" style={{ height: "100%", fontSize: '40px' }} />
          </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center", color: 'secondary.main' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "#FFFFFF",
          maxHeight: "100px",
          display: "flex",
          justifyContent: "space-between",
          position: 'sticky',
          top: '0'
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon sx = {{
                color: 'primary.main'
            }} />
          </IconButton>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block"  },
              height: {
                sm: '70px',
                md: '100px',
              },
              textTransform: "none",
            }}
          >
            <Img
              src={Cleanify}
              alt="Cleanify"
              loader={<div>...loading</div>}
              style={{ height: "100%" }}
            />
          </Box>
          <Box sx={{ display: { xs: "none", sm: "flex" }, marginRight: '40px', gap: {
            sm: '10px',
            md: '20px',
          }, alignItems: 'center' }}>
                <Button sx = {ButtonTextStyle}>About Us</Button>
                <Button sx={RegisterButtonStyle}>Register</Button>
                <Button sx={SignInButtonStyle}>Sign in</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
