import { Box, Spacer, Flex } from "@chakra-ui/layout"
const Header = () => {
  return (
    <>
    <Box className="border-2 border-black h-[8vh]">
        <Flex>
          <Box>
            Box 1
          </Box>
          <Box >
            Box 2
          </Box>
        </Flex>
    </Box>
    </>
  )
}

export default Header