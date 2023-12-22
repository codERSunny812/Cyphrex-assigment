/* eslint-disable react/prop-types */
import { Box ,Flex } from "@chakra-ui/layout" 
import { TbLineDashed, TbUrgent } from "react-icons/tb";
import { IoIosAdd } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import {apiContext} from '../Context/ApiContext'
import { useContext } from "react";
import { PiCellSignalLowBold, PiCellSignalMediumBold, PiCellSignalFullBold } from "react-icons/pi";
import { FaUserGraduate } from "react-icons/fa";
import { FcClock } from "react-icons/fc";
import { FaCircle } from "react-icons/fa6";






// cards section

const Card = (props) =>{
  console.log(props.items.id);
  return(
    <Box my='10%' bg="white" w='fit-content' h='fit-content' p='13.8px 19.2px' borderRadius='12px' color='black' >

      <Flex h="fit-content" w='full' justifyContent="space-between" alignItems="center" >
        <h1>{props.items.id}</h1>
        <FaUserGraduate />
      </Flex>
      <Flex  justifyContent="flex-start" alignItems="center" w="full" h="fit-content" p='3px' my='9px'>
        <FcClock height='10px' width='10px' className="" />
        <h2 className="text-[14px] px-4 w-fit h-fit">{props.items.title}</h2>
      </Flex>
      <Flex border='1px solid gray' alignItems="center"  p='1px 5px' w='fit-content' h='19.5px'>
        <FaCircle height='5px' width='5px' color="gray" />
        <h2 className="text-[13.6px] px-3 text-gray-500 font-semibold">{props.items.tag[0]}</h2>

      </Flex>


    </Box>
  );
}

const Body = ({ theme }) => {

  

  const data = useContext(apiContext);
 
  // console.log(data?.tickets);


  return (
    <>
      <Box h="100vh" w="100vw" backgroundColor={theme === 'light' ? '#F4F5F8' : '#242124'} padding="10px" color={theme === 'light' ? 'black' : 'white'} >

        <Flex  justifyContent='space-between' 
        direction={{base:'column' , md:'row'}}
        wrap="wrap"
        p={4}
        >

          {/* box -1  */}
          <Box w={{ base: '100%', md: '270px' }} h="200px">
            <Box>
            <Flex justifyContent='space-between' alignItems="center">
              <Flex alignItems="center" >
                  <TbLineDashed />
                  <h1 className="capitalize font-bold px-1" >no priority</h1>
              </Flex>
              <Flex alignItems="center" px="2px" >
                  <IoIosAdd />
                  <BsThreeDots />
              </Flex>
            </Flex>
              
              
            </Box>
            <Box>
             {
              data?.tickets?.map((items)=>{
                return items.priority == 0 ? (

                 <Card items={items} key={items.id} theme={theme}/>
                ) : null
              })
             }
          
            </Box>
          </Box>

          {/* box -2  */}
          <Box  w='270px' h="200px">

            <Box>
              <Flex justifyContent='space-between' alignItems="center">
                <Flex alignItems="center" >
                  <PiCellSignalLowBold />
                  <h1 className="capitalize font-bold px-1" >low</h1>
                </Flex>
                <Flex alignItems="center" px="2px" >
                  <IoIosAdd />
                  <BsThreeDots />
                </Flex>
              </Flex>
            </Box>
            <Box>

              {
                data?.tickets?.map((items) => {
                  return items.priority == 1 ? (

                    <Card items={items} key={items.id} />
                  ) : null
                })
              }
            </Box>
            



          </Box>

          {/* box - 3 */}
          <Box  w='270px' h="200px">

            <Box>
              <Flex justifyContent='space-between' alignItems="center">
                <Flex alignItems="center" >
                  <PiCellSignalMediumBold />
                  <h1 className="capitalize font-bold px-1" >medium</h1>
                </Flex>
                <Flex alignItems="center" px="2px" >
                  <IoIosAdd />
                  <BsThreeDots />
                </Flex>
              </Flex>
            </Box>

            <Box>
              {
                data?.tickets?.map((items) => {
                  return items.priority == 2 ? (

                    <Card items={items} key={items.id} />
                  ) : null
                })
              }
            </Box>
          

          </Box>

          {/* box - 4 */}

          <Box  w='270px' h="200px">
           
            <Box>
              <Flex justifyContent='space-between' alignItems="center">
                <Flex alignItems="center" >
                  <PiCellSignalFullBold />
                  <h1 className="capitalize font-bold px-1" >high</h1>
                </Flex>
                <Flex alignItems="center" px="2px" >
                  <IoIosAdd />
                  <BsThreeDots />
                </Flex>
              </Flex>


            </Box>
            <Box>

              {
                data?.tickets?.map((items) => {
                  return items.priority == 3 ? (

                    <Card items={items} key={items.id} />
                  ) : null
                })
              }
            </Box>

          </Box>

          {/* box - 5 */}

          <Box  w='270px' h="200px">

            <Box>
              <Flex justifyContent='space-between' alignItems="center">
                <Flex alignItems="center" >
                  <TbUrgent />
                  <h1 className="capitalize font-bold px-1" >urgent</h1>
                </Flex>
                <Flex alignItems="center" px="2px" >
                  <IoIosAdd />
                  <BsThreeDots />
                </Flex>
              </Flex>


            </Box>
            <Box>

              {
                data?.tickets?.map((items) => {
                  return items.priority == 4 ? (

                    <Card items={items} key={items.id} />
                  ) : null
                })
              }
            </Box>


          </Box>

        </Flex>

    </Box>
      
        
        
    
    </>
  )
}

export default Body