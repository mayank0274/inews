import { Heading, Text, Card, CardBody, Box, Button } from "@chakra-ui/react";
import { handleFavourites } from "../../utlis/utlis";
import { useEffect, useState } from "react";

interface Props {
  news: any;
}

const DEFAULT_IMG =
  "https://tse4.mm.bing.net/th?id=OIP.9azIn2wnpMw7MMK0UEv5nAHaE9&pid=Api&P=0&h=180";
export default function NewsCard({ news }: Props) {
  const { title, description, urlToImage, url, content } = news;
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    let favouriteNews = JSON.parse(
      localStorage.getItem("inews-favourites") || "{}"
    );

    if (favouriteNews.length > 0) {
      let alreadyAdded = favouriteNews.filter((elem: any) => {
        return elem.url == news.url;
      });

      if (alreadyAdded.length > 0) {
        setIsFavourite(true);
      }
    }
  }, [isFavourite]);

  return (
    <Card
      direction="row"
      overflow="hidden"
      variant="outline"
      bg={"secondaryBgColor"}
      width={{ base: "90%", sm: "90%", md: "45%", lg: "45%" }}
      minHeight={"200px"}
      maxHeight={"250px"}
      cursor={"pointer"}
    >
      <Box
        width={"20%"}
        height={"100%"}
        backgroundImage={urlToImage || DEFAULT_IMG}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"cover"}
        backgroundPosition={"center"}
      ></Box>

      <Box display={"flex"} flexDir={"column"} gap={"10px"} width={"80%"}>
        <CardBody
          display={"flex"}
          flexDir={"column"}
          gap={"10px"}
          as={"a"}
          href={url}
          target="_blank"
          textDecoration={"none"}
        >
          <Heading size="md">{title}</Heading>
          <Text>{content || description || "Click here to read more"}</Text>
        </CardBody>

        <Button
          onClick={() => {
            handleFavourites(news);
            setIsFavourite(!isFavourite);
          }}
          width={"90%"}
          alignSelf={"center"}
          mb={"10px"}
          fontWeight={200}
        >
          {isFavourite ? "Remove from favourites" : "Add to favourites"}
        </Button>
      </Box>
    </Card>
  );
}
