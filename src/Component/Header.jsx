/* eslint-disable react/prop-types */
import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import { FaMoon } from "react-icons/fa";
import { LuSun } from "react-icons/lu";
import { IoChevronUpSharp, IoChevronDownSharp } from "react-icons/io5";
import { useState } from "react";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";

const Header = ({
  onToggleTheme,
  theme,
  grouping,
  ordering,
  onGroupingChange,
  onOrderingChange,
}) => {
  const [dropDown, setDropDown] = useState(false);

  const handleDropDownIcon = () => {
    setDropDown(!dropDown);
  };

  return (
    <Box
      className="h-[8vh]"
      backgroundColor={theme === "light" ? "#ffffff" : "#161B22"}
      padding="10px"
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        h="full"
        color={theme === "light" ? "black" : "white"}
      >
        <Box position="relative">
          <button
            id="dropdownDefaultButton"
            className=" rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center font-bold"
            style={{
              backgroundColor: theme === "light" ? "#ffffff " : "#161B22",
              padding: "10px",
              color: theme === "light" ? "black" : "white",
              boxShadow:
                theme === "light"
                  ? "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 2px"
                  : "0 0 8px 0 #ffffff22",
            }}
            type="button"
            onClick={handleDropDownIcon}
          >
            <HiAdjustmentsHorizontal className="mx-2" />
            Display
            {dropDown ? (
              <IoChevronUpSharp className="mx-2" />
            ) : (
              <IoChevronDownSharp className="mx-2" />
            )}
          </button>

          {/* Dropdown menu */}
          {dropDown && (
            <Box
              position="absolute"
              top="100%"
              left="0"
              backgroundColor={theme === "light" ? "#ffffff" : "#161B22"}
              padding="10px"
              borderRadius="md"
              border="1px solid"
              borderColor={theme === "light" ? "#ccc" : "#333"}
              zIndex="1"
              className="flex flex-col"
            >
              <Box className=" w-[260px] h-[29px] flex justify-between items-center py-6 mx-2 ">
                <Text className="text-gray-400 font-semibold">Grouping</Text>
                <select
                  className="w-[112px] h-[29px] bg-transparent outline-none px-2 capitalize rounded-md"
                  style={{ color: theme === "light" ? "black" : "white" }}
                  value={grouping}
                  onChange={(e) => onGroupingChange(e.target.value)}
                >
                  <option value="priority">priority</option>
                  <option value="status">status</option>
                  <option value="user">user</option>
                </select>
              </Box>

              <Box className="w-[260px] h-[29px] flex justify-between items-center py-6 mx-2">
                <Text marginTop="2" className="text-gray-400 font-semibold">
                  Ordering
                </Text>
                <select
                  className="w-[112px] h-[29px] bg-transparent outline-none active:outline-none px-2 capitalize rounded-md"
                  style={{ color: theme === "light" ? "black" : "white" }}
                  value={ordering}
                  onChange={(e) => onOrderingChange(e.target.value)}
                >
                  <option value="priority">priority</option>
                  <option value="title">title</option>
                </select>
              </Box>
            </Box>
          )}
        </Box>

        {/* Theme toggle */}
        <Spacer />
        <Box>
          {theme === "light" ? (
            <FaMoon onClick={onToggleTheme} />
          ) : (
            <LuSun onClick={onToggleTheme} />
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
