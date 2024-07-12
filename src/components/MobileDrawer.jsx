import {
  Box,
  Container,
  Divider,
  Grid,
  ImageList,
  ImageListItem,
  Skeleton,
  Stack,
  styled,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { useEffect, useState } from "react";
import amf1 from "../assets/amf1.png";
import amf2 from "../assets/amf2.png";
import amf3 from "../assets/amf3.png";
import orar from "../assets/orar.png";

export default function MobileDrawer({ content = "" }) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const Puller = styled("div")(({ theme }) => ({
    width: 30,
    height: 6,
    backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
    borderRadius: 3,
    position: "absolute",
    top: 8,
    left: "calc(50% - 15px)",
  }));
  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 10);
  }, []);
  return (
    <>
      <Container
        sx={{
          paddingY: 1,
          position: "absolute",
          top: "calc(100% - 35px)",
          boxShadow: 5,

          height: 35,
          width: 1,
        }}
      >
        <Puller />
      </Container>

      <SwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={56}
        disableSwipeToOpen={false}
        zIndex={1200}
      >
        r
        <Puller />
        <Box height="500px">
          <Box width={1} p={3}>
            <ImageList cols={3} rowHeight={200}>
              <ImageListItem>
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
            <Typography variant="body1">Nr. locuri: 110</Typography>
            <a href={orar} target="_blank">
              Vezi orar
              <img src={orar} width={"100%"} alt="orar" />
            </a>
          </Box>
        </Box>
      </SwipeableDrawer>
    </>
  );
}
