/* eslint-disable react/prop-types */
import { Box, Flex } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { TbLineDashed, TbUrgent } from "react-icons/tb";
import { IoIosAdd } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { apiContext } from "../Context/ApiContext";
import { useContext } from "react";
import {
  PiCellSignalLowBold,
  PiCellSignalMediumBold,
  PiCellSignalFullBold,
} from "react-icons/pi";
import { FaUserGraduate } from "react-icons/fa";
import { FcClock } from "react-icons/fc";
import { FaCircle } from "react-icons/fa6";
import Lottie from "lottie-react";
import anim from "./anim.json";
import useOnline from "../utils/useOnline";
import offlineAnim from "./noConnection.json";

// cards section
const Card = (props) => {
  // console.log(props);
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
  );
};

const Body = ({ theme, grouping, ordering }) => {

  const isMobile = useBreakpointValue({ base: true, md: false });

  // context api for api fetching
  const data = useContext(apiContext);
  console.log(data);

  // hook to check internet connectivity

  const isOnline = useOnline();

  if (!isOnline) {
    return (
      <>
        <div className=" h-96 w-72 m-auto flex justify-center items-center">
          <Lottie animationData={offlineAnim} className="" />
        </div>
      </>
    );
  }

  return data == null ? (
    <div className="flex items-center justify-center">
      <Lottie
        animationData={anim}
        style={{ height: "600px", width: "500px" }}
      />
    </div>
  ) : (
    <>
      <Flex
        direction={{ base: "column", md: "row" }}
        wrap="wrap"
        p={4}
        gap="6px"
        minHeight="100vh"
        backgroundColor={theme === "light" ? "#F4F5F8" : "#000000"}
        color={theme === "light" ? "black" : "white"}
      >
        {/* box -1 */}
        <Box
          w={{ base: "100%", md: "48%", lg: "270px" }}
          display={isMobile ? "flex" : "block"} //
          flexDirection={isMobile ? "column" : "row"}
          alignItems={isMobile ? "center" : "flex-start"}
          justifyContent={isMobile ? "center" : "flex-start"}
         
        >
          

          <Flex justifyContent="space-between" w="80%" alignItems="center">
            <Flex alignItems="center">
              <TbLineDashed />
              <h1 className="capitalize font-bold px-1">no priority</h1>
            </Flex>
            <Flex alignItems="center" px="2px">
              <IoIosAdd />
              <BsThreeDots />
            </Flex>
          </Flex>
          {data?.apiData?.tickets?.map((items) => {
            return items.priority === 0 ? (
              <Card
                items={items}
                key={items.id}
                theme={theme}
                ordering={ordering}
                grouping={grouping}
              />
            ) : null;
          })}
        </Box>

        {/* box -2 */}
        <Box
          w={{ base: "100%", md: "48%", lg: "270px" }}
          display={isMobile ? "flex" : "block"} //
          flexDirection={isMobile ? "column" : "row"}
          alignItems={isMobile ? "center" : "flex-start"}
          justifyContent={isMobile ? "center" : "flex-start"}
        >
          <Flex justifyContent="space-between" alignItems="center" w="80%">
            <Flex alignItems="center">
              <PiCellSignalLowBold />
              <h1 className="capitalize font-bold px-1">low</h1>
            </Flex>
            <Flex alignItems="center" px="2px">
              <IoIosAdd />
              <BsThreeDots />
            </Flex>
          </Flex>
          {data?.apiData?.tickets?.map((items) => {
            return items.priority === 1 ? (
              <Card
                items={items}
                key={items.id}
                theme={theme}
                ordering={ordering}
                grouping={grouping}
              />
            ) : null;
          })}
        </Box>

        {/* box - 3 */}
        <Box
          w={{ base: "100%", md: "48%", lg: "270px" }}
          display={isMobile ? "flex" : "block"} //
          flexDirection={isMobile ? "column" : "row"}
          alignItems={isMobile ? "center" : "flex-start"}
          justifyContent={isMobile ? "center" : "flex-start"}
        >
          <Flex justifyContent="space-between" alignItems="center" w="80%">
            <Flex alignItems="center">
              <PiCellSignalMediumBold />
              <h1 className="capitalize font-bold px-1">medium</h1>
            </Flex>
            <Flex alignItems="center" px="2px">
              <IoIosAdd />
              <BsThreeDots />
            </Flex>
          </Flex>
          {data?.apiData?.tickets?.map((items) => {
            return items.priority === 2 ? (
              <Card
                items={items}
                key={items.id}
                theme={theme}
                ordering={ordering}
                grouping={grouping}
              />
            ) : null;
          })}
        </Box>

        {/* box - 4 */}
        <Box
          w={{ base: "100%", md: "48%", lg: "270px" }}
          display={isMobile ? "flex" : "block"} //
          flexDirection={isMobile ? "column" : "row"}
          alignItems={isMobile ? "center" : "flex-start"}
          justifyContent={isMobile ? "center" : "flex-start"}
        >
          <Flex justifyContent="space-between" alignItems="center" w="80%">
            <Flex alignItems="center">
              <PiCellSignalFullBold />
              <h1 className="capitalize font-bold px-1">high</h1>
            </Flex>
            <Flex alignItems="center" px="2px">
              <IoIosAdd />
              <BsThreeDots />
            </Flex>
          </Flex>
          {data?.apiData?.tickets?.map((items) => {
            return items.priority === 3 ? (
              <Card
                items={items}
                key={items.id}
                theme={theme}
                ordering={ordering}
                grouping={grouping}
              />
            ) : null;
          })}
        </Box>

        {/* box - 5 */}
        <Box
          w={{ base: "100%", md: "48%", lg: "270px" }}
          display={isMobile ? "flex" : "block"} //
          flexDirection={isMobile ? "column" : "row"}
          alignItems={isMobile ? "center" : "flex-start"}
          justifyContent={isMobile ? "center" : "flex-start"}
        >
          <Flex justifyContent="space-between" alignItems="center" w="80%">
            <Flex alignItems="center">
              <TbUrgent />
              <h1 className="capitalize font-bold px-1">urgent</h1>
            </Flex>
            <Flex alignItems="center" px="2px">
              <IoIosAdd />
              <BsThreeDots />
            </Flex>
          </Flex>
          {data?.apiData?.tickets?.map((items) => {
            return items.priority === 4 ? (
              <Card
                items={items}
                key={items.id}
                theme={theme}
                ordering={ordering}
                grouping={grouping}
              />
            ) : null;
          })}
        </Box>
      </Flex>
    </>
  );
};

export default Body;
