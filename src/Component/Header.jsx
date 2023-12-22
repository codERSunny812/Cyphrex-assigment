import { Box, Flex } from "@chakra-ui/layout";
import { FaMoon } from "react-icons/fa";
import { LuSun } from "react-icons/lu";
import { IoChevronUpSharp, IoChevronDownSharp } from "react-icons/io5";
import { useState } from "react";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import './style.css'



const Header = ({ onToggleTheme, theme }) => {
  const [dropDown,setDropDown] = useState(false);

  const hanldeDropDownIcon = ()=>{
    if(!dropDown){
    setDropDown(true);
    }else{
      setDropDown(false);
    }
  } 
  return (
    <>
      <Box className=" h-[8vh]" style={{ backgroundColor: theme === 'light' ? '#ffffff ' : '#414A4C', padding: '10px' }}>
        <Flex alignItems="center" justifyContent="space-between" h="full" style={{ color: theme === 'light' ? '#333' : '#eee' }}>
          <Box>

            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className=" dropDown_shadow  text-whitefont-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center shadow-lg outline-black " type="button" onClick={hanldeDropDownIcon}> 
              <HiAdjustmentsHorizontal className="mx-2" />

            Display
            {
                dropDown ? (<IoChevronUpSharp className="mx-2" />) : (<IoChevronDownSharp className="mx-2" />)
            }
             

            </button>

            {/*  Dropdown menu */}

            <div id="dropdown" className="border-4 border-black dropDown_shadow mx-32 z-10 hidden bg-white divide-y divide-gray-100 rounded-lg  w-[308px] h-[102px] dark:bg-gray-700" >
              <ul className="py-2 mx-2 text-sm text-gray-700 dark:text-gray-200 flex flex-col  items-center justify-center gap-2" aria-labelledby="dropdownDefaultButton" >
                <li className="  flex justify-between items-center w-[260px] h-[29px]">
                  <a href="#" className=" block px-4 py-2 capitalize items-center justify-between">grouping</a>
                  <select className="w-[112px] h-[29px] bg-transparent outline-none px-2 capitalize">
                    <option>priority</option>
                    <option >status</option>
                    <option>user</option>
                  </select>
                </li>
                <li className=" flex justify-between items-center w-[260px] h-[29px] focus:outline-none">
                  <a href="#" className=" block px-4 py-2 capitalize items-center justify-between">ordering</a>
                  <select className="w-[112px] h-[29px] bg-transparent outline-none active:outline-none px-2 capitalize">
                    <option value="">priority</option>
                    <option value="">title</option>
                  </select>
                </li>
                
              </ul>
            </div>

            

           
          </Box>

          {/* theme toggle */}
          <Box>
            {
              theme === 'light' ? (<FaMoon onClick={onToggleTheme} />) : (<LuSun onClick={onToggleTheme}/>)
            }
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Header;
