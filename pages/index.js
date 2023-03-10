import { Stack, Typography } from "@mui/material";

export default function Home() {
  const navBarLinks = ["Home", "Contact"];

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={5}
    >
      {/* <Image src={logo} alt="Picture of the author" width={350} /> */}
      {/* <ResponsiveAppBar navBarLinks={navBarLinks} /> */}
      <Typography variant="h6">
        We&apos;re currently working on creating our new website.
      </Typography>
      {/* {!subscribed && <SubscribedForm setSubscribed={setSubscribed} />}
        {subscribed && (
          <Alert severity="success">You have been subscribed!</Alert>
        )} */}
    </Stack>
  );
}
