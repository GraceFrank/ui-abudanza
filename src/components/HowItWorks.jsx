import { Box, Flex, Heading } from '@chakra-ui/layout';
import UpdateProfileSvg from '../images/update-profile.svg';
import SelectAssetSvg from '../images/Select_asset_finance.svg';
import RelaxSvg from '../images/relax.svg';
import POSSvg from '../images/pos.svg';
import arrow from '../images/rotated-right-arrow-with-broken-line .svg';
import { Image } from '@chakra-ui/image';

const TextSvg = ({ text, image, boxSize }) => {
  return (
    <Box>
      <Heading size="xs" my="5">
        {text}
      </Heading>
      <Image w={boxSize} src={image} />
    </Box>
  );
};
const HowItWorks = () => {
  return (
    <Box mx="5" my="7">
      <Heading as="h4" size="sm" my="5">
        How it Works
      </Heading>
      <Flex direction={['column', 'row']}>
        <TextSvg text="Update pofile" image={UpdateProfileSvg} />

        <Image className="rotated" mx="5" boxSize="20" src={arrow} />
        <TextSvg text="Select Asset to finance" image={SelectAssetSvg} />
        <Image className="rotated" src={arrow} mx="5" boxSize="20" />

        <TextSvg
          text="Make payment and upload proof of payment"
          image={POSSvg}
        />
        <Image className="rotated" src={arrow} mx="5" boxSize="20" />

        <TextSvg
          text="Chill and wait wait for your vendor to call you"
          image={RelaxSvg}
        />
      </Flex>
    </Box>
  );
};

export default HowItWorks;
