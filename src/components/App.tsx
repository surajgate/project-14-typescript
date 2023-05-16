import { CircularProgress, Container, Typography } from "@mui/material";
import { useGlobalContext } from "../Context";
import CardContainer from "./CardContainer";
import Navbar from "./Navbar";
function App() {
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <>
        <Container sx={{display : 'flex'}}>
          <Typography variant="h3">Loading </Typography>
          <CircularProgress
            sx={{ display: "flex", justifyContent: "center" }}
          ></CircularProgress>
        </Container>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <CardContainer />
    </>
  );
}

export default App;
