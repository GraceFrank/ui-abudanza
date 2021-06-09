import { Box, Heading } from '@chakra-ui/layout';

import { Footer } from '../components/common/Footer';
import Nav from '../components/common/Nav';

const HomePage = props => {
  return (
    <>
      <Nav {...props} />
      <Box h="80vh" p="300" background="whiteAlpha.600">
        <Heading>Coming Soon...</Heading>
      </Box>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default HomePage;
