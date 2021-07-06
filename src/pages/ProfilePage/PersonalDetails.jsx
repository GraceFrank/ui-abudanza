import Card from '../../components/common/Card';
import { useState } from 'react';
import { BasicInfo, IDCard, ProfileInfoForm } from './BasicInfo';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { getProfile, updateProfile, createProfile } from '../../services/api';
import { Divider, useToast, Heading, Spinner, Center } from '@chakra-ui/react';
import { useEffect } from 'react';

const PersonalDetails = () => {
  const [user] = useContext(AuthContext);
  const toast = useToast();
  const [fetchingProfile, setFetchingProfile] = useState(false);
  const [profileDetails, setProfileDetails] = useState({ address: {} });
  const [saving, setSaving] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [edits, setEdits] = useState({});
  const [reload, setReload] = useState(false);
  const [idCardUrl, setIdCardUrl] = useState('');
  const [idCardFormData, setIdCardFormData] = useState({});
  const [uploading, setUploading] = useState(false);

  const handleChange = ({ target }) => {
    const { value, id } = target;
    setEdits({ ...edits, [id]: value });
    console.log('EDITS', edits);
  };

  const submitFileUpload = e => {
    e.preventDefault();
    setUploading(true);
    const formData = new FormData();
    for (const data in idCardFormData) {
      if (!idCardFormData[data]) continue;
      formData.append(data, idCardFormData[data]);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSaving(true);

    const method =
      Object.keys(profileDetails).length > 1 ? updateProfile : createProfile;
    method(edits)
      .then(res => {
        setSaving(false);
        setEditMode(false);
        toast({
          title: 'Profile Update Successful',
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
        });
        setReload(!reload);
      })
      .catch(err => {
        const message = err.response
          ? err.response.data.message
          : 'error updating Profile contact Admin';
        toast({
          title: message,
          status: 'error',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
        });
        setSaving(false);
      });
  };

  useEffect(() => {
    setFetchingProfile(true);
    getProfile(user.token)
      .then(res => {
        const data = res.data.payload;
        setProfileDetails(data);
        setFetchingProfile(false);
        setEdits({
          title: data.title,
          marital_status: data.marital_status,
          birthday: data.birthday,
          nationality: data.nationality,
          mothers_maiden_name: data.mothers_maiden_name,
          bvn: data.bvn,
          street_address: data.address.street_address,
          street_address2: data.address.street_address2,
          city: data.address.city,
          state: data.address.state,
          country: data.address.country,
        });
      })
      .catch(err => {
        const message = err.response
          ? err.response.data.message
          : 'error updating Profile contact Admin';
        toast({
          title: message,
          status: 'error',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
        });
      });
  }, [reload]);

  return (
    <Card maxW="95%" mx="5" mb="5" pb="10" px="5" background="white">
      <Heading as="h2" size="md" color="abudanza.primary">
        Profile Details
      </Heading>
      <Heading my="3" as="h3" size="sm" color="abudanza.primary">
        Basic
      </Heading>
      <BasicInfo data={user} />
      <Divider my="5" />
      <Heading my="5" as="h3" size="sm" color="abudanza.primary">
        Profile Details
      </Heading>
      {fetchingProfile ? (
        <Center>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="abudanza.primary"
            size="xl"
          />
        </Center>
      ) : (
        <ProfileInfoForm
          data={profileDetails}
          loading={saving}
          edits={edits}
          setEdits={setEdits}
          editMode={editMode}
          setEditMode={setEditMode}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
      )}
      <Divider my="5" />
      <Heading my="5" as="h3" size="sm" color="abudanza.primary">
        ID Card Upload
      </Heading>
      <IDCard
        idCardUrl={idCardUrl}
        formData={idCardFormData}
        handleSubmit={submitFileUpload}
        setFormData={setIdCardFormData}
        loading={uploading}
      />
    </Card>
  );
};

export default PersonalDetails;
