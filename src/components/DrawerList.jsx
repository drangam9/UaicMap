import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  IconButton,
  ImageList,
  ImageListItem,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import * as React from "react";
import { useEffect } from "react";
import amf1 from "../assets/amf1.png";
import amf2 from "../assets/amf2.png";
import amf3 from "../assets/amf3.png";
import orar from "../assets/orar.png";

export default function TemporaryDrawer({ content = "Nr locuri: 110" }) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const buttonStyle = {
    zIndex: 1000,
    backgroundColor: "white",
    marginLeft: "auto",
    display: "flex",
    position: "absolute",
    top: "50%",
    left: "100%",
    right: "20px",
    justifyContent: "right",
    alignItems: "center",
    width: "40px",
    ":hover": {
      backgroundColor: "#eee",
    },
  };
  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 10);
  }, []);
  return (
    <>
      {open ? (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer(false)}
          edge="start"
          sx={{
            ...buttonStyle,
            marginRight: "300px",
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      ) : (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer(true)}
          edge="start"
          sx={buttonStyle}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
      )}
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        variant="persistent"
        anchor="right"
      >
        <Box width={"300px"} p={3}>
          <ImageList cols={2} variant="quilted">
            <ImageListItem cols={2}>
              <img src={amf1} alt="amf1" />
            </ImageListItem>
            <ImageListItem>
              <img src={amf2} alt="amf2" />
            </ImageListItem>
            <ImageListItem>
              <img src={amf3} alt="amf3" />
            </ImageListItem>
          </ImageList>
          <Divider sx={{ marginY: 2 }} />
          <Typography variant="h3">Amfiteatrul Al. Myller</Typography>
          <Typography variant="body1">{content}</Typography>
          <a href={orar} target="_blank">
            Vezi orar
            <img src={orar} width={"100%"} alt="orar" />
          </a>
        </Box>
      </Drawer>
    </>
  );
}
