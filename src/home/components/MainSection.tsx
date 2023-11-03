import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
  Stack,
  BottomNavigation,
} from "@mui/material";
import { typography } from "@mui/system";
import styless from "./MainSection.module.css";
const MainSection = () => {
  return (
    <Container>
      <Stack>
        <img
          src="https://e7.pngegg.com/pngimages/456/86/png-clipart-flat-design-city-drawing-city-building-text.png"
          width="300"
          height={"150"}
          className={styless.imagen}
        />
      </Stack>
      <Box className={styless.textoPrincipal}>
        <Typography>
          Usa Room site es realmente sencillo. Sigue estos tips para que tu
          experiencia sea realmente sensacional
        </Typography>
      </Box>
      <Stack className={styless.BotonPrincipal}>
        <Button href="/login" variant="contained">
          siguiente
        </Button>
        <Typography align="center" variant="caption">
          No quieres ver mas de esto?
        </Typography>
        <Typography align="center" variant="caption">
          Saltar
        </Typography>
      </Stack>
    </Container>
  );
};

export default MainSection;
