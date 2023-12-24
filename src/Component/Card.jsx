/* eslint-disable react/prop-types */
import { Box, Flex } from "@chakra-ui/layout";
import { FaUserGraduate } from "react-icons/fa";
import { FcClock } from "react-icons/fc";
import { FaCircle } from "react-icons/fa6";


const Card = (props) => {
  return (
      <Box
          my="5%" //Adjusted margin for responsiveness
          w="90%" //Adjusted width for responsiveness
          p="13.8px 19.2px"
          borderRadius="12px"
          bgColor={props.theme === "light" ? "#ffffff " : "#161B22"}
          color={props.theme === "light" ? "black" : "white"}
          border={props.theme === "light" ? "none" : "1.5px solid gray"}
      >
          <Flex
              h="fit-content"
              w="full"
              justifyContent="space-between"
              alignItems="center"
          >
              <h1 className="font-semibold text-gray-400">{props.items.id}</h1>
              <FaUserGraduate />
          </Flex>
          <Flex
              justifyContent="flex-start"
              alignItems="center"
              w="full"
              h="fit-content"
              p="3px"
              my="9px"
          >
              <FcClock height="10px" width="10px" className="" />
              <h2 className="text-[14px] px-4 w-fit h-fit">{props.items.title}</h2>
          </Flex>
          <Flex
              border="1px solid gray"
              alignItems="center"
              p="1px 5px"
              w="fit-content"
              h="19.5px"
              borderRadius="3px"
          >
              <FaCircle style={{ padding: "1.5px" }} color="#A9A9A9" />
              <h2 className="text-[13.6px] px-3 text-gray-500 font-semibold">
                  {props.items.tag[0]}
              </h2>
          </Flex>
      </Box>
  )
}

export default Card