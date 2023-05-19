import { CircularProgress, Container, LinearProgress, Typography } from "@mui/material";
import { useGlobalContext } from "../Context";
import CardContainer from "./CardContainer";
import Navbar from "./Navbar";
function App() {
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <>
      <LinearProgress/>
        
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
