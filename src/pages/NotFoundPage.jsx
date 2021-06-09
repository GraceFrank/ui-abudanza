import { Image } from '@chakra-ui/image';
import { Box, Center, Flex, Heading, Link } from '@chakra-ui/layout';

import { Footer } from '../components/common/Footer';
import HighlightButton from '../components/common/HighlightButton';
import Nav from '../components/common/Nav';
import Svg404 from '../images/sever-down.svg';

const NotFoundPage = props => {
  return (
    <>
      <Nav {...props} />
      <Box pt="200" px="10" background="whiteAlpha.600">
        <Center>
          <Box>
            <Heading>Opps! The Page Not Found</Heading>
            <Center my="5">
              <Link href="/">
                <HighlightButton>Return Home</HighlightButton>
              </Link>
            </Center>
          </Box>
        </Center>
        <Image boxSize="50%" src={Svg404} alt="illustration of server" />
      </Box>
      <footer>
        <Footer position="fixed" />
      </footer>
    </>
  );
};

export default NotFoundPage;
