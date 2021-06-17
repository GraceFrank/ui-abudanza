import { useState } from 'react';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
  HStack,
  Stack,
  Heading,
} from '@chakra-ui/react';
import HighlightButton from '../../components/common/HighlightButton';
import TitleDetail from '../../components/common/TitleDetail';

export const ProfileInfoForm = ({ data }) => {
  const [profileInfo, setProfileInfo] = useState({});
  const [updating, setUpdating] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
  };
  const handleChange = ({ target }) => {
    const { value, name } = target;
    setProfileInfo({ ...profileInfo, [name]: value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <VStack>
          <HStack>
            <FormControl id="title" isRequired>
              <FormLabel>Title</FormLabel>
              <Select placeholder="Select option" variant="flushed">
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Ms">Ms</option>
              </Select>
              <Input
                variant="flushed"
                id="title"
                placeholder="FirstName"
                name="first_name"
                type="text"
                minlength={2}
                maxlength={255}
                value={profileInfo.first_name}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="lastName" isRequired>
              <FormLabel>Last Name</FormLabel>
              <Input
                variant="flushed"
                placeholder="LastName"
                name="first_name"
                type="text"
                minlength={2}
                maxlength={255}
                value={profileInfo.last_name}
                onChange={handleChange}
              />
            </FormControl>
          </HStack>
          <HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                variant="flushed"
                placeholder="Email"
                id="email"
                name="email"
                type="email"
                value={profileInfo.email}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="phone" isRequired>
              <FormLabel>Phone</FormLabel>
              <Input
                variant="flushed"
                placeholder="Phone Number"
                id="phone"
                type="tel"
                value={profileInfo.phone}
                onChange={handleChange}
              />
            </FormControl>
          </HStack>
        </VStack>
        <HighlightButton
          isLoading={updating}
          loadingText="Updating"
          size="xs"
          type="submit"
        >
          Update Basic Info
        </HighlightButton>
        <Button></Button>
      </form>
    </>
  );
};

export const BasicInfo = ({ data }) => (
  <HStack spacing="5">
    <Stack spacing="5" w="50%">
      <TitleDetail title="First Name" value={data.firstName} />
      <TitleDetail title="Email" value={data.email} textTransform="lowercase" />
    </Stack>
    <Stack spacing="5">
      <TitleDetail title="Last Name" value={data.lastName} />
      <TitleDetail title="Phone" value={data.phone} />
    </Stack>
  </HStack>
);

export const ProfileInfo = ({ data }) => {
  return (
    <>
      <Heading pt="5" color="abudanza.primary" size="xs" as="h4">
        PROFILE
      </Heading>
      <HStack spacing="5">
        <Stack spacing="5" w="50%">
          <TitleDetail title="Title" value={data.title} />
          <TitleDetail
            title="Mother's Maiden Name"
            value={data.mothers_maiden_name}
          />
          <TitleDetail title="BVN" value={data.bvn} />
        </Stack>
        <Stack spacing="5">
          <TitleDetail title="Marital Status" value={data.marital_status} />
          <TitleDetail
            title="Date of Birth"
            value={new Date(data.birthday).toLocaleDateString()}
          />
          <TitleDetail title="Nationality" value={data.nationality} />
        </Stack>
      </HStack>
    </>
  );
};

export const AddressInfo = ({ data }) => (
  <>
    <Heading pt="5" color="abudanza.primary" size="xs" as="h4">
      ADDRESS
    </Heading>

    <Stack>
      <TitleDetail title="Street Address" value={data.street_address} />
      <TitleDetail title="Street Address 2" value={data.street_address2} />
    </Stack>
    <Stack spacing="5">
      <HStack spacing="5">
        <TitleDetail title="City" value={data.city} />
        <TitleDetail title="State" value={data.state} />
        <TitleDetail title="Country" value={data.country} />
      </HStack>
    </Stack>
  </>
);
