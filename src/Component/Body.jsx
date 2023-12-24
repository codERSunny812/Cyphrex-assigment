/* eslint-disable react/prop-types */
import { Box, Flex } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { TbLineDashed } from "react-icons/tb";
import { IoIosAdd } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { apiContext } from "../Context/ApiContext";
import { useContext } from "react";
import Lottie from "lottie-react";
import anim from "./anim.json";
import useOnline from "../utils/useOnline";
import offlineAnim from "./noConnection.json";
import Card from "./Card";


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

  // Grouping logic
  const groupTickets = (tickets, grouping) => {
    const groupedData = {};

    if (grouping === "priority" || grouping === "status") {
      tickets.forEach((ticket) => {
        const groupKey = ticket[grouping];
        if (!groupedData[groupKey]) {
          groupedData[groupKey] = [];
        }
        groupedData[groupKey].push(ticket);
      });
    } else if (grouping === "user") {
      data?.apiData?.users.forEach((user) => {
        const userId = user.id;
        const userTickets = tickets.filter((ticket) => ticket.userId === userId);
        groupedData[userId] = userTickets;
      });
    }
    return groupedData;
  };

  // Ordering logic
  const sortTickets = (tickets, ordering) => {
    return [...tickets].sort((a, b) => {
      if (ordering === "priority") {
        return a.priority - b.priority;
      } else if (ordering === "title") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
  };

  if (!isOnline) {
    return (
      <div className="h-96 w-72 m-auto flex justify-center items-center">
        <Lottie animationData={offlineAnim} className="" />
      </div>
    );
  }

  const sortedTickets = sortTickets(data?.apiData?.tickets || [], ordering);
  const groupedData = groupTickets(sortedTickets, grouping);

  // Map priority levels to headings

  const priorityHeadings = {
    0: "No Priority",
    1: "Low Priority",
    2: "Medium Priority",
    3: "High Priority",
    4: "Urgent",
  };




  

  return data == null ? (
    <div className="flex items-center justify-center">
      <Lottie
        animationData={anim}
        style={{ height: "600px", width: "500px" }}
      />
    </div>
  ) : (
    <>

    {/* whole body component */}
      <Flex
        direction={{ base: "column", md: "row" }}
        wrap="wrap"
        p={4}
        gap="6px"
        minHeight="100vh"
        backgroundColor={theme === "light" ? "#F4F5F8" : "#000000"}
        color={theme === "light" ? "black" : "white"}
        
      >


          
          {Object.entries(groupedData).map(([groupKey, groupTickets]) => (
            <Box 
              key={groupKey}
              w={{ base: "100%", md: "48%", lg: "270px" }}
              display={isMobile ? "flex" : "block"} //
              flexDirection={isMobile ? "column" : "row"}
              alignItems={isMobile ? "center" : "flex-start"}
              justifyContent={isMobile ? "center" : "flex-start"}
            >

              <Flex justifyContent="space-between" w="80%" alignItems="center">
                <Flex alignItems="center">
                  <TbLineDashed />
                  {grouping === "user" ? (
                    <h1 className="capitalize font-bold px-1">
                      {data?.apiData?.users.find((user) => user.id === groupKey)?.name}
                    </h1>
                  ) : (
                      <h1 className="capitalize font-bold px-1">
                        {grouping === "priority" && ordering === "priority" || ordering == 'title'
                          ? priorityHeadings[groupKey]
                          : groupKey}
                      </h1>
                  )}
                </Flex>
                <Flex alignItems="center" px="2px">
                  <IoIosAdd />
                  <BsThreeDots />
                </Flex>
              </Flex>
              {groupTickets.map((items) => (
                <Card
                  items={items}
                  key={items.id}
                  theme={theme}
                  ordering={ordering}
                  grouping={grouping}
                />
              ))}
            </Box>
          ))}
      </Flex>
    </>
  );
};

export default Body;
