import { useEffect, useState, useContext } from 'react';
import {
  Box,
  Center,
  Button,
  Heading,
  Spinner,
  FormControl,
  FormLabel,
  Input,
  Select,
  useToast,
} from '@chakra-ui/react';
import {
  getNextOfKin,
  addNextOfKin,
  updateNextOfKin,
} from '../../services/api';
import { AuthContext } from '../../context/AuthContext';
import Card from '../../components/common/Card';
import HighlightButton from '../../components/common/HighlightButton';

const NextOfKinDetails = ({
  data,
  handleSubmit,
  handleChange,
  loading,
  setEditMode,
  editMode,
  edits,
}) => {
  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <FormControl id="full_name">
          <FormLabel fontSize="sm">Full Name:</FormLabel>
          <Input
            isRequired
            type="text"
            size="sm"
            id="full_name"
            value={editMode ? edits.full_name : data.full_name}
            isDisabled={!editMode}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl id="email">
          <FormLabel fontSize="sm">Email:</FormLabel>
          <Input
            isRequired
            type="email"
            size="sm"
            value={editMode ? edits.email : data.email}
            isDisabled={!editMode}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl id="phone">
          <FormLabel fontSize="sm">Phone Number:</FormLabel>
          <Input
            isRequired
            type="tel"
            size="sm"
            id="phone"
            value={editMode ? edits.phone : data.phone}
            isDisabled={!editMode}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl id="relationship">
          <FormLabel fontSize="sm">Relationship:</FormLabel>
          <Select
            isRequired
            value={editMode ? edits.relationship : data.relationship}
            isDisabled={!editMode}
            onChange={handleChange}
            size="sm"
            id="relationship"
            placeholder="Select option"
          >
            <option value="brother">Brother</option>
            <option value="sister">Sister</option>
            <option value="mother">Mother</option>
            <option value="Father">Father</option>
          </Select>
        </FormControl>
        <Center my="5">
          {!editMode && (
            <Button
              onClick={() => setEditMode(true)}
              background="abudanza.secondary"
              size="sm"
            >
              Edit Next of Kin
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

const NextOfKin = () => {
  const [user] = useContext(AuthContext);
  const toast = useToast();
  const [fetchingNextOfKin, setFetchingNextOfKin] = useState(false);
  const [nextOfKin, setNextOfKin] = useState({});
  const [saving, setSaving] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [edits, setEdits] = useState({});
  const [reload, setReload] = useState(false);

  const handleChange = ({ target }) => {
    const { value, id } = target;
    setEdits({ ...edits, [id]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const method =
      Object.keys(nextOfKin).length < 1 ? addNextOfKin : updateNextOfKin;
    setSaving(true);
    method(edits)
      .then(res => {
        setSaving(false);
        setEditMode(false);
        toast({
          title: 'Next of Kin Update Successful',
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
          : 'error updating Next of kin';
        toast({
          title: message,
          status: 'error',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
        });
      });
  };

  useEffect(() => {
    setFetchingNextOfKin(true);
    getNextOfKin(user.token)
      .then(res => {
        setNextOfKin(res.data.payload);
        setEdits(res.data.payload);
        setFetchingNextOfKin(false);
      })
      .catch(err => {
        setFetchingNextOfKin(false);
        const message = err.response
          ? err.response.data.message
          : 'error fetching Next of kin, contact admin';
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
    <Card maxW="95%" background="white">
      <Heading as="h3" size="md" color="abudanza.primary" py="5">
        Next of Kin
      </Heading>
      {!fetchingNextOfKin && (
        <NextOfKinDetails
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          loading={saving}
          data={nextOfKin}
          setEditMode={setEditMode}
          editMode={editMode}
          edits={edits}
        />
      )}
      {fetchingNextOfKin && (
        <Center>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="abudanza.primary"
            size="xl"
          />
        </Center>
      )}
    </Card>
  );
};

export default NextOfKin;
