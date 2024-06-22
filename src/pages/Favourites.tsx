import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import NewsCard from "../components/news/NewsCard";

const Favourites = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let favouriteNews = JSON.parse(
      localStorage.getItem("inews-favourites") || "{}"
    );

    if (favouriteNews.length > 0) {
      setArticles(favouriteNews);
    }
  }, []);

  return (
    <Box
      display={"flex"}
      flexDir={{ base: "column", sm: "column", md: "row", lg: "row" }}
      gap={"10px"}
      flexWrap={"wrap"}
      justifyContent={"center"}
      alignItems={{
        base: "center",
        sm: "center",
        md: "normal",
        lg: "normal",
      }}
      my={"20px"}
      as="div"
    >
      <Box as="div"></Box>
      {articles?.length === 0 && (
        <Text fontSize={"18px"}>
          News not found !! Try With Clearing Filters
        </Text>
      )}
      {articles?.length > 0 &&
        articles.map((news: any) => {
          return <NewsCard news={news} key={news.url} />;
        })}
    </Box>
  );
};

export default Favourites;
