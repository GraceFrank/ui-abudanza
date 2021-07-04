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
  getBankDetails,
  addBankDetail,
  updateBankDetail,
} from '../../services/api';
import Card from '../../components/common/Card';
import HighlightButton from '../../components/common/HighlightButton';
import { set } from 'react-hook-form';

const BankDetailsForm = ({
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
        <FormControl id="account_name">
          <FormLabel fontSize="sm">Account Name:</FormLabel>
          <Input
            isRequired
            type="text"
            size="sm"
            id="account_name"
            value={editMode ? edits.account_name : data.account_name}
            isDisabled={!editMode}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl id="account_number">
          <FormLabel fontSize="sm">Account umber:</FormLabel>
          <Input
            id="account_number"
            isRequired
            type="text"
            size="sm"
            value={editMode ? edits.account_number : data.account_number}
            isDisabled={!editMode}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl id="bank_name">
          <FormLabel fontSize="sm">Bank Name:</FormLabel>
          <Input
            isRequired
            type="tel"
            size="sm"
            id="bank_name"
            value={editMode ? edits.bank_name : data.bank_name}
            isDisabled={!editMode}
            onChange={handleChange}
          />
        </FormControl>

        <Center my="5">
          {!editMode && (
            <Button
              onClick={() => setEditMode(true)}
              background="abudanza.secondary"
              size="sm"
            >
              Edit Bank Details
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

const BankDetails = () => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [bankDetails, setBankDetails] = useState({});
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
      Object.keys(bankDetails) < 1 ? addBankDetail : updateBankDetail;
    setSaving(true);
    method(edits)
      .then(res => {
        setSaving(false);
        setEditMode(false);
        toast({
          title: 'Bank Details Update Successful',
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
        });
        setReload(!reload);
      })
      .catch(err => {
        setSaving(false);
        const message = err.response
          ? err.response.data.message
          : 'error updating Bank';
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
    setLoading(true);
    getBankDetails()
      .then(res => {
        setBankDetails(res.data.payload);
        setEdits(res.data.payload);
        setLoading(false);
      })
      .catch(err => {
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
    <Card maxW="95%" background="white" mb="5">
      <Heading as="h3" size="md" color="abudanza.primary" py="5">
        Bank Details
      </Heading>
      {!loading && (
        <BankDetailsForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          loading={saving}
          data={bankDetails}
          setEditMode={setEditMode}
          editMode={editMode}
          edits={edits}
        />
      )}
      {loading && (
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

export default BankDetails;
