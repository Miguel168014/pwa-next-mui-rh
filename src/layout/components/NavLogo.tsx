import { Box } from "@mui/material";
import { useRouter } from "next/router";

const NavLogo = () => {
  const router = useRouter();
  console.log(router);
  if (router.route === "/login") {
    return <Box>Iniciar Sesiòn</Box>;
  }
  if (router.route === "/home") {
    return <Box>Home</Box>;
  }

  return <Box>Bienvenido!</Box>;
};

export default NavLogo;
