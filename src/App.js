import { Flex } from '@chakra-ui/react';
import Sidebar from './components/Sidebar';
import Video from './components/Video';


function App() {
  return (
    <Flex w="100%" h="100vh" align="center" justify="center">
      <Flex width={{ base: "90%",  lg: "fit-content" }} gap={[0, 3]} flexDirection={{ md: "column", lg: "row" }} justify="center" maxWidth="1120px">
        <Video />
        <Sidebar />
      </Flex>
    </Flex>
  );
}

export default App;
