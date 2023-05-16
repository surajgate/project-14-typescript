import {
  Box,
  Button,
  CardMedia,
  Container,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { useGlobalContext } from "../Context";

export interface ItemType {
  id: string;
  title: string;
  price: string;
  img: string;
  amount: number;
}

const CardItem = () => {

  const { cart, remove, toggleAmount } = useGlobalContext();

  return (
    <>
      <Container sx={{ m: 1, p: 2 }}>
        {cart.map((item) => {
          const { id, title, img, amount } = item;
          return (
            <Container
              sx={{ p: 1, display: "flex", justifyContent: "space-between" }}
            >
              <Box sx={{ display: "flex" }}>
                <Box>
                  <CardMedia component="img" height={70} src={img} />
                </Box>
                <Box>
                  <Typography variant="h5" gutterBottom>
                    {title}
                  </Typography>
                  <Typography paragraph>${item.price}</Typography>
                  <Button
                    onClick={() => {
                      remove(id);
                    }}
                  >
                    Remove
                  </Button>
                </Box>
              </Box>
              <Box>
                <Button sx={{ m: 2 }} onClick={() => toggleAmount(id, "dec")}>
                  -
                </Button>
                <OutlinedInput
                  sx={{ width: "2.5rem" }}
                  value={amount}
                ></OutlinedInput>
                <Button sx={{ m: 2 }} onClick={() => toggleAmount(id, "inc")}>
                  +
                </Button>
              </Box>
            </Container>
          );
        })}
      </Container>
    </>
  );
};
export default CardItem;
