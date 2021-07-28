import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Center,
  HStack,
  Stack,
  Box,
  Image,
} from '@chakra-ui/react';
import HighlightButton from '../../components/common/HighlightButton';
import TitleDetail from '../../components/common/TitleDetail';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import FileInput from '../../components/common/FileInput';
import { convertCloudinaryUrlToJpeg } from '../../utils/utils';

export const ProfileInfoForm = ({
  data,
  handleSubmit,
  handleChange,
  loading,
  setEditMode,
  editMode,
  edits,
  setEdits,
}) => {
  return (
    <Box>
      <form onSubmit={handleSubmit}>
        {/* title */}
        <FormControl id="title">
          <FormLabel fontSize="sm">Title:</FormLabel>
          <Select
            id="title"
            isRequired
            value={editMode ? edits.title : data.title}
            isDisabled={!editMode}
            onChange={handleChange}
            size="sm"
            placeholder="Select title"
          >
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
            <option value="Ms">Ms</option>
          </Select>
        </FormControl>

        {/* Marital Status */}
        <FormControl id="marital_status">
          <FormLabel fontSize="sm">Marital Status:</FormLabel>
          <Select
            id="marital_status"
            isRequired
            value={editMode ? edits.marital_status : data.marital_status}
            isDisabled={!editMode}
            onChange={handleChange}
            size="sm"
            placeholder="Select Status"
          >
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="widowed">Widowed</option>
            <option value="divorced">Divorced</option>
            <option value="separated">Separated</option>
          </Select>
        </FormControl>

        {/* Birthday */}
        <FormControl id="birthday">
          <FormLabel fontSize="sm">Date of Birth:</FormLabel>
          <Input
            isRequired
            type={editMode ? 'date' : 'text'}
            size="sm"
            id="birthday"
            value={
              editMode
                ? edits.birthday
                : new Date(data.birthday).toLocaleDateString()
            }
            isDisabled={!editMode}
            onChange={handleChange}
          />
        </FormControl>

        {/* Mother's Maiden Name */}
        <FormControl id="mothers_maiden_name">
          <FormLabel fontSize="sm">Mother's Maiden Name:</FormLabel>
          <Input
            isRequired
            type="text"
            size="sm"
            id="mothers_maiden_name"
            value={
              editMode ? edits.mothers_maiden_name : data.mothers_maiden_name
            }
            isDisabled={!editMode}
            onChange={handleChange}
          />
        </FormControl>

        {/* Marital Status */}
        <FormControl id="mothers_maiden_name">
          <FormLabel fontSize="sm">BVN:</FormLabel>
          <Input
            isRequired
            type="text"
            size="sm"
            id="mothers_maiden_name"
            value={editMode ? edits.bvn : data.bvn}
            isDisabled={!editMode}
            onChange={handleChange}
          />
        </FormControl>

        {/* Street Address */}
        <FormControl id="street_address">
          <FormLabel fontSize="sm">Street Address:</FormLabel>
          <Input
            isRequired
            type="text"
            size="sm"
            id="street_address"
            value={editMode ? edits.street_address : data.street_address}
            isDisabled={!editMode}
            onChange={handleChange}
          />
        </FormControl>

        {/* Street Address2 */}
        <FormControl id="street_address2">
          <FormLabel fontSize="sm">Street Address 2:</FormLabel>
          <Input
            type="text"
            size="sm"
            id="street_address2"
            value={editMode ? edits.street_address2 : data.street_address2}
            isDisabled={!editMode}
            onChange={handleChange}
          />
        </FormControl>

        {/* city */}
        <FormControl id="city">
          <FormLabel fontSize="sm">City:</FormLabel>
          <Input
            isRequired
            type="text"
            size="sm"
            id="city"
            value={editMode ? edits.city : data.city}
            isDisabled={!editMode}
            onChange={handleChange}
          />
        </FormControl>

        {/*  Country */}
        <FormControl my="3" id="vendor_country">
          <FormLabel fontSize="sm">Country:</FormLabel>
          <CountryDropdown
            isDisabled={!editMode}
            required
            onChange={value => setEdits({ ...edits, country: value })}
            value={editMode ? edits.country : data.country}
            id="vendor_country"
            className="select-country"
          />
        </FormControl>

        {/* State */}
        <FormControl my="3" id="vendor_state">
          <FormLabel fontSize="sm">State: </FormLabel>
          <RegionDropdown
            country={editMode ? edits.country : data.country}
            value={editMode ? edits.state : data.state}
            onChange={value => setEdits({ ...edits, state: value })}
            className="select-country"
            id="vendor_state"
            name="vendor_state"
            required
          />
        </FormControl>

        <Center my="5">
          {!editMode && (
            <Button
              onClick={() => setEditMode(true)}
              background="abudanza.secondary"
              size="sm"
            >
              Edit Profile
            </Button>
          )}
          {editMode && (
            <>
              <Button
                size="sm"
                mr="3"
                isDisabled={loading}
                onClick={() => {
                  setEditMode(false);
                }}
              >
                Cancel
              </Button>
              <HighlightButton
                loadingText={'saving'}
                isLoading={loading}
                type="submit"
                size="sm"
              >
                Save Changes
              </HighlightButton>
            </>
          )}
        </Center>
      </form>
    </Box>
  );
};

export const BasicInfo = ({ data }) => (
  <>
    <HStack spacing="5">
      <TitleDetail title="First Name" value={data.firstName} />
      <TitleDetail title="Last Name" value={data.lastName} />
    </HStack>
    <Stack spacing="5">
      <TitleDetail title="Phone" value={data.phone} />
      <TitleDetail title="Email" value={data.email} />
    </Stack>
  </>
);

export const IDCard = ({
  idCard = {},
  formData,
  loading,
  handleSubmit,
  setFormData,
}) => (
  <>
    {idCard.url && (
      <Image
        mb="5"
        src={convertCloudinaryUrlToJpeg(idCard.url)}
        alt="payment proof"
      />
    )}
    <form onSubmit={handleSubmit}>
      <>
        <FormControl id="id_type">
          <FormLabel fontSize="sm">ID Type:</FormLabel>
          <Select
            id="id_type"
            isRequired
            value={formData.id_type}
            onChange={({ target }) => {
              setFormData({ ...setFormData, id_type: target.value });
            }}
            size="sm"
            placeholder="Select ID Type"
          >
            <option value="voters_card">Voter's Card</option>
            <option value="drivers_licence">Driver's Licence</option>
            <option value="NIN">International Passport</option>
            <option value="passport">National Identification</option>
          </Select>
        </FormControl>
        <FileInput
          name="idCard"
          label="Upload ID"
          formData={formData}
          setFormData={setFormData}
        />{' '}
        <Center my="5">
          <HighlightButton
            loadingText={'saving'}
            isLoading={loading}
            type="submit"
            size="sm"
          >
            Save Changes
          </HighlightButton>
        </Center>
      </>
    </form>
  </>
);
