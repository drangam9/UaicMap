import {
  Box,
  Container,
  Divider,
  Grid,
  ImageList,
  Skeleton,
  Stack,
  styled,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { useEffect, useState } from "react";

export default function MobileDrawer({ content = "content" }) {
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
              {Array.from(new Array(3)).map((_, index) => (
                <Skeleton key={index} variant="rectangular" height={200} />
              ))}
            </ImageList>
            <Divider sx={{ marginY: 2 }} />
            <Typography variant="h3">Title</Typography>
            <Typography variant="body1">{content}</Typography>
          </Box>
        </Box>
      </SwipeableDrawer>
    </>
  );
}
