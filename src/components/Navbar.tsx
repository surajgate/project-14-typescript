import ShoppingBasketRoundedIcon from "@mui/icons-material/ShoppingBasketRounded";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useGlobalContext } from "../Context";

export default function Navbar() {
  const { amount } = useGlobalContext();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}
          >
            UseReducer
          </Typography>
          <Button color="inherit" sx={{ height: "2rem", width: "2rem" }}>
            <ShoppingBasketRoundedIcon />
            <Typography variant="h6"  >{amount}</Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
