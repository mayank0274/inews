import React, { useRef, useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Tag,
} from "@chakra-ui/react";

import { GrSort } from "react-icons/gr";

interface Props {
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

const Filter: React.FC<Props> = ({ setCategory }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);
  const [selectedCategory, setSelectedCategory] = useState("");

  const FILTERS = [
    {
      title: "Business",
      value: "business",
    },
    {
      title: "Entertainment",
      value: "entertainment",
    },
    {
      title: "General",
      value: "general",
    },
    {
      title: "Health",
      value: "health",
    },
    {
      title: "Science",
      value: "science",
    },
    {
      title: "Sports",
      value: "sports",
    },
    {
      title: "Technology",
      value: "technology",
    },
  ];

  function clearFilter() {
    setCategory("general");
    onClose();
  }

  function handleFilter() {
    setCategory(selectedCategory);
    onClose();
  }

  return (
    <>
      <Button
        ref={btnRef}
        colorScheme="gray"
        onClick={onOpen}
        as={"button"}
        display={"flex"}
        gap={"10px"}
      >
        <GrSort />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Filter News</DrawerHeader>

          <DrawerBody>
            {FILTERS.map((filter) => {
              return (
                <Tag
                  onClick={() => {
                    setSelectedCategory(filter.value);
                  }}
                  backgroundColor={
                    selectedCategory === filter.value ? "green" : "grey"
                  }
                  m={2}
                  cursor={"pointer"}
                >
                  {filter.title}
                </Tag>
              );
            })}
          </DrawerBody>

          <DrawerFooter>
            <Button
              variant="outline"
              mr={3}
              onClick={() => {
                clearFilter();
              }}
              size={"md"}
            >
              Clear Filters
            </Button>
            <Button
              colorScheme="blue"
              size={"md"}
              onClick={() => {
                handleFilter();
              }}
            >
              Apply Changes
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Filter;
