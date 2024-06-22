import React, { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Heading,
  Spinner,
  Text,
} from "@chakra-ui/react";
import NewsCard from "./NewsCard";

import Filter from "./Filter";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import SearchBar from "./SearchBar";

type Props = {};

export const NewsSection: React.FC<Props> = () => {
  const [category, setCategory] = useState("business");
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [query, setQuery] = useState("");

  const {
    isLoading: loadingNews,
    error,
    data: news,
  } = useQuery({
    queryKey: ["news", page, category, query],
    queryFn: async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=your api key=${page}&pageSize=${20}&q=${query}`;
      const data = await fetch(url);
      const res = await data.json();
      setTotalResults(res.totalResults);
      return res.articles;
    },
    placeholderData: keepPreviousData, // keep prev data until new one loads
    staleTime: 20000,
  });

  const fetchMoreData = (move: number) => {
    setPage((prev) => {
      return Math.max(0, prev + move);
    });
  };

  if (loadingNews) {
    return (
      <Center h={"100vh"}>
        <Spinner size={"xl"} />
      </Center>
    );
  }

  if (error) {
    return (
      <Text textAlign={"center"} color={"orangered"}>
        {error.message}
      </Text>
    );
  }

  return (
    <Box my={"10px"} display={"flex"} flexDir={"column"} width={"100%"}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        flexDir={"column"}
        alignItems={"center"}
        width={{ base: "90%", sm: "90%", md: "90%", lg: "90%" }}
        margin={"auto"}
      >
        <Box width={"100%"} display={"flex"} justifyContent={"space-between"}>
          <Heading
            fontFamily={"'Poppins', sans-serif"}
            textTransform={"capitalize"}
            textAlign={"center"}
            color={"primaryHeading"}
            as={"h2"}
            fontSize={{ base: "20px", sm: "20px", md: "25px", lg: "25px" }}
          >
            Trending news
          </Heading>
          <Filter setCategory={setCategory} />
        </Box>

        <SearchBar setQuery={setQuery} />
      </Box>

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
        {news?.length === 0 && (
          <Text fontSize={"18px"}>
            News not found !! Try With Clearing Filters
          </Text>
        )}
        {news?.length > 0 &&
          news.map((news: any, i: number) => {
            return <NewsCard news={news} key={`${i}`} />;
          })}
      </Box>

      <Box width={"95%"}>
        <ButtonGroup float={"right"}>
          <Button
            onClick={() => {
              fetchMoreData(-1);
            }}
            isDisabled={page === 1}
          >
            Previous
          </Button>
          <Button
            onClick={() => {
              fetchMoreData(1);
            }}
            isDisabled={20 * page > totalResults}
          >
            Next
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
};
