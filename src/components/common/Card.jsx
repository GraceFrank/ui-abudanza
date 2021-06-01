import { Box } from '@chakra-ui/layout';

const Card = ({ children, ...rest }) => (
  <Box boxShadow={'2xl'} rounded={'md'} {...rest}>
    {children}
  </Box>
);

export default Card;
