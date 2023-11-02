import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";

const MainSection = () => {
  const subtitle =
    "¡Usar Roomsite es realmente sencillo! \n Sigue estos tips para que tu experienciasea realmente sensacional.";

  return (
    <Container
      sx={{
        background: "none",
      }}
    >
      <Box
        display={"grid"}
        gridTemplateColumns={{
          xs: "1fr",
          sm: "1fr 1fr",
        }}
        gridTemplateRows="auto"
        gridTemplateAreas={{
          xs: "'.' '.' 'title' 'subtitle' 'btn'",
          sm: "'. img' 'title img' 'subtitle img' 'btn img' '. img'",
        }}
        columnGap={{
          xs: 0,
          sm: 2,
        }}
        height={{
          xs: "92vh",
        }}
       >
        <Box
        gridArea={"img"}
        sx={{
          backgroundImage: `url("pic_trulli.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          style: "width:250px;height:300px;"
        }}
      />
    </Box>

        <Box
          textAlign={{
            xs: "center",
            sm: "center",
          }}
          gridArea={"subtitle"}
          alignSelf={{
            xs: "center",
          }}
        >
          <Typography variant="h5">{subtitle}</Typography>
        </Box>
        <Box
          gridArea={"btn"}
          alignSelf={{
            xs: "start",
            sm: "start",
            style: "color:#6647FF;"
          }}
          display={"flex"}
          justifySelf={{
            xs: "center",
            sm: "center",
          }}
        >
          <Button variant="contained">siguiente</Button>
        </Box>
    </Container>
  );
};

export default MainSection;
