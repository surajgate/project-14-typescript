import { Box, Button, Card, Container, Typography } from "@mui/material";
import { useGlobalContext } from "../Context";
import CardItem from "./CardItem";
const CardContainer = () => {
  const { total, clearCart } = useGlobalContext();

  return (
    <>
      <Container>
        <Card sx={{ m: 4 }}>
          <Typography
            variant="h3"
            sx={{ display: "flex", justifyContent: "center", p: 2 }}
          >
            YOUR BAG
          </Typography>
          <CardItem/>
          <Box sx={{ display: "flex", justifyContent: "space-between", m: 2 }}>
            <Typography variant="h6" gutterBottom>
              Total
            </Typography>
            <Typography variant="h6" gutterBottom>
              ${total}
            </Typography>
          </Box>
        </Card>

        <Box sx={{ display: "flex", justifyContent: "center", m : 4, p : 2 }}>
          <Button variant="outlined" color="error" onClick={() => {clearCart()}}>
            CLEAR CART
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default CardContainer;
