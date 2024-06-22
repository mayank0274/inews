import { NewsSection } from "../components/news/NewsSection";
import { Box } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box display={"flex"} flexDir={"column"} as="div">
      <NewsSection />
    </Box>
  );
};

export default Home;
