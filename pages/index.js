import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import myImage from "../public/myImage.jpg";

export default function Home() {
  const navBarLinks = ["About", "Services", "Contact"];

  return (
    <>
      <ResponsiveAppBar navBarLinks={navBarLinks} />
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={5}
        sx={{ padding: "10px" }}
      >
        <Box id={navBarLinks[0]} sx={{ textAlign: "center" }}>
          <Image
            alt="me"
            src={myImage}
            width={250}
            height={250}
            style={{
              borderRadius: "180px",
              maxWidth: "100%",
              height: "auto",
            }}
          />
          <Typography>
            My name is Joseph and I have been building websites for over ten
            years!
          </Typography>
        </Box>
        <Typography>
          My name is Joseph and I have been building websites for over ten
          years!
        </Typography>
        <Typography>
          My name is Joseph and I have been building websites for over ten
          years!
        </Typography>
        <Typography>
          My name is Joseph and I have been building websites for over ten
          years!
        </Typography>
        <Typography>
          My name is Joseph and I have been building websites for over ten
          years!
        </Typography>
        <Typography>
          My name is Joseph and I have been building websites for over ten
          years!
        </Typography>
        <Typography>
          My name is Joseph and I have been building websites for over ten
          years!
        </Typography>
        <Box id={navBarLinks[1]} sx={{ textAlign: "center" }}>
          <Image
            alt="me"
            src={myImage}
            width={250}
            height={250}
            style={{
              borderRadius: "180px",
              maxWidth: "100%",
              height: "auto",
            }}
          />
          <Typography>
            My name is Joseph and I have been building websites for over ten
            years!
          </Typography>
        </Box>
        <Typography>
          My name is Joseph and I have been building websites for over ten
          years!
        </Typography>
        <Typography>
          My name is Joseph and I have been building websites for over ten
          years!
        </Typography>
        <Typography>
          My name is Joseph and I have been building websites for over ten
          years!
        </Typography>
        <Typography>
          My name is Joseph and I have been building websites for over ten
          years!
        </Typography>
        <Typography>
          My name is Joseph and I have been building websites for over ten
          years!
        </Typography>
        <Typography>
          My name is Joseph and I have been building websites for over ten
          years!
        </Typography>
        <Typography>
          My name is Joseph and I have been building websites for over ten
          years!
        </Typography>
        <Box id={navBarLinks[2]} sx={{ textAlign: "center" }}>
          <Image
            alt="me"
            src={myImage}
            width={250}
            height={250}
            style={{
              borderRadius: "180px",
              maxWidth: "100%",
              height: "auto",
            }}
          />
          <Typography>
            My name is Joseph and I have been building websites for over ten
            years!
          </Typography>
        </Box>
      </Stack>
    </>
  );
}
