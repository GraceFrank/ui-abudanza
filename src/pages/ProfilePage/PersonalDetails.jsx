import Card from '../../components/common/Card';
import { Heading, Stack, HStack } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import HighlightButton from '../../components/common/HighlightButton';
import { useState } from 'react';
import { AddressInfo, BasicInfo, ProfileInfo } from './BasicInfo';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { getProfile } from '../../services/api';

const PersonalDetails = () => {
  const [user] = useContext(AuthContext);
  const [profileDetails, setProfileDetails] = useState(null);
  const [fetchingProfile, setFetchingProfile] = useState(false);

  useState(() => {
    setFetchingProfile(true);
    getProfile(user.token)
      .then(res => {
        setProfileDetails(res.data.payload);
        setFetchingProfile(false);
      })
      .catch(err => {
        console.log(err);
      });
  });

  return (
    <Card background="white">
      <Heading as="h2" size="md" color="abudanza.primary">
        Profile Details
      </Heading>
      <HStack my="5">
        <Image
          src="https://i.pravatar.cc/100"
          borderRadius="full"
          boxSize="100px"
          alt="profile photo"
          shadow="xl"
          mr="5"
        />
        <HighlightButton size="xs">Change Profile Photo</HighlightButton>
      </HStack>
      <Heading my="5" as="h3" size="sm" color="abudanza.primary">
        Basic
      </Heading>
      <Stack>
        <BasicInfo data={user} />
        {profileDetails && (
          <>
            <ProfileInfo data={profileDetails} />
            <AddressInfo data={profileDetails.address} />
          </>
        )}
      </Stack>
    </Card>
  );
};

export default PersonalDetails;
