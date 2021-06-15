import { Text, Box } from '@chakra-ui/react';

const TitleDetail = ({ title, value, textTransform }) => (
  <Box>
    <Text fontSize="xs" color="grey">
      {title}:
    </Text>
    <Text
      fontWeight="semibold"
      textTransform={textTransform || 'capitalize'}
      isTruncated
    >
      {value}
    </Text>
  </Box>
);

export default TitleDetail;
