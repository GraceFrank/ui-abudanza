import { Box } from '@chakra-ui/layout';

const Card = ({ children, ...rest }) => (
  <Box p="6" boxShadow={'2xl'} rounded={'md'} {...rest}>
    {children}
  </Box>
);

export default Card;
