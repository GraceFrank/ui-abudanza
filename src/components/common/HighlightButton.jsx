import { Button } from '@chakra-ui/button';
import { HIGHLIGHT } from '../../constants/colors.json';

const HighlightButton = ({ children, ...rest }) => (
  <Button
    colorScheme="orange"
    background={HIGHLIGHT}
    size="sm"
    color="white"
    shadow="sm"
    {...rest}
  >
    {children}
  </Button>
);

export default HighlightButton;
