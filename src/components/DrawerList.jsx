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

export default function TemporaryDrawer({ content = "content" }) {
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
          {/* <Stack direction="row" spacing={1}>
            <img
              src="https://via.placeholder.com/150"
              width={150}
              alt="placeholder"
            />
            <Stack direction="column" spacing={1}>
              <img
                src="https://via.placeholder.com/150"
                width={100}
                alt="placeholder"
              />
              <img
                src="https://via.placeholder.com/150"
                width={100}
                alt="placeholder"
              />
            </Stack>
          </Stack> */}
          <ImageList cols={2} variant="quilted">
            <ImageListItem cols={2}>
              <Skeleton variant="rectangular" height={200} />
            </ImageListItem>
            <ImageListItem>
              <Skeleton variant="rectangular" height={100} />
            </ImageListItem>
            <ImageListItem>
              <Skeleton variant="rectangular" height={100} />
            </ImageListItem>
          </ImageList>
          <Divider sx={{ marginY: 2 }} />
          <Typography variant="h3">Title</Typography>
          <Typography variant="body1">Subtitle</Typography>
        </Box>
      </Drawer>
    </>
  );
}
