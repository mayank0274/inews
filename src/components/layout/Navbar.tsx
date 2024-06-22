import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Heading,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { BiMoon, BiSun } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";
import { Link } from "react-router-dom";

type Props = {};

export const Navbar: React.FC<Props> = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [mobileOpenMenu, setMobileOpenMenu] = useState<boolean>(false);
  let iconColor = useColorModeValue("#4d5766", "#ccd6f6");

  const handleMobileMenu = (): void => {
    setMobileOpenMenu((prev) => {
      return !prev;
    });
  };

  return (
    <>
      <Box
        as="header"
        display={"flex"}
        padding={"10px"}
        justifyContent={"space-between"}
        alignItems={"center"}
        margin={"0 20px"}
        position={"relative"}
        height={"60px"}
      >
        <Heading
          as="h3"
          color="highlightColor"
          fontSize={"24px"}
          fontFamily={'"Poppins", sans-serif'}
          letterSpacing={"2px"}
        >
          i-News
        </Heading>
        {mobileOpenMenu ? (
          <Button
            display={{ base: "block", sm: "block", md: "none", lg: "none" }}
            onClick={handleMobileMenu}
            color={iconColor}
          >
            <IoClose size={20} color={iconColor} />
          </Button>
        ) : (
          <Button
            display={{ base: "block", sm: "block", md: "none", lg: "none" }}
            onClick={handleMobileMenu}
            color={iconColor}
          >
            <CiMenuFries size={20} color={iconColor} />
          </Button>
        )}
        <Box
          as="section"
          zIndex={999}
          display={{
            base: !mobileOpenMenu ? "none" : "flex",
            sm: !mobileOpenMenu ? "none" : "flex",
            md: "flex",
            lg: "flex",
          }}
          flexDir={{ base: "column", sm: "column", md: "row", lg: "row" }}
          justifyContent={{
            base: "center",
            sm: "center",
            md: "space-between",
            lg: "space-between",
          }}
          alignItems={"center"}
          gap={{ base: "10px", sm: "10px", md: "30px", lg: "40px" }}
          position={{
            base: "absolute",
            sm: "absolute",
            md: "static",
            lg: "static",
          }}
          top={{ base: "100%", sm: "100%" }}
          right={{ base: "2%", sm: "2%" }}
          backgroundColor={{
            base: "secondaryBgColor",
            sm: "secondaryBgColor",
            md: "inherit",
            lg: "inherit",
          }}
          borderRadius={{ base: "10px", sm: "10px" }}
          padding={{ base: "10px 50px", sm: "10px 50px", md: "0", lg: "0" }}
        >
          <Link to="/" color={"primaryColor"}>
            Home
          </Link>
          <Link to="favourites" color={"primaryColor"}>
            Favourites
          </Link>

          {colorMode == "dark" ? (
            <BiSun
              size={25}
              color={iconColor}
              onClick={toggleColorMode}
              cursor="pointer"
            />
          ) : (
            <BiMoon
              size={25}
              color={iconColor}
              onClick={toggleColorMode}
              cursor="pointer"
            />
          )}
        </Box>
      </Box>
      <Divider />
    </>
  );
};
