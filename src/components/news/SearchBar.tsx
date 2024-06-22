import { Box, Input, InputGroup } from "@chakra-ui/react";
import { useState } from "react";

type Props = {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar: React.FC<Props> = ({ setQuery }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setQuery(searchQuery);
  };

  return (
    <Box display={"block"} w="100%" m="10px">
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          handleSubmit(e);
        }}
      >
        <InputGroup>
          <Input
            type="search"
            placeholder="Enter your Query"
            variant={"filled"}
            color={"#fff"}
            // w={{ base: "70%", sm: "75%", md: "89%", lg: "89%" }}
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
          />
        </InputGroup>
      </form>
    </Box>
  );
};

export default SearchBar;
