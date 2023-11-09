import { Box, TextField, Stack, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
export default function Rooms() {
  return (
    <Box marginTop="10px">
      <Box
        sx={{
          backgroundColor: "#3851ac",
          height: "50vh",
          borderBottomRightRadius: "30px",
          borderBottomLeftRadius: "30px",
          paddingTop: "10px",
          paddingRight: "10px",
          paddingLeft: "10px",
        }}
      >
        <Stack spacing={2}>
          <TextField
            sx={{
              backgroundColor: "#ffff",
              borderRadius: "10px",
            }}
            id="Outlined-basic"
            label="ingrese fechas"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CalendarMonthIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            sx={{ backgroundColor: "#ffff", borderRadius: "10px" }}
            id="Outlined-basic"
            label="seleccione huesped"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonAddAltIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            sx={{ backgroundColor: "#ffff", borderRadius: "10px" }}
            id="Outlined-basic"
            label="ingreso habitaciones"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Stack>
      </Box>
      <Box>blanco</Box>
    </Box>
  );
}
