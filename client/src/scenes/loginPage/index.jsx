import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <center style={{
        backgroundColor: theme.palette.background.alt,
        padding: "1rem 6%"
      }}>
        <img style={{ width: '80px'}} src="/assets/logo.png" alt="logo" />
      </center>
      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to Funstagram !
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
