import {
  Button,
  Text,
  FormControl,
  FormLabel,
  Input,
  Select,
  InputGroup,
  HStack,
  InputLeftElement,
  Heading,
} from '@chakra-ui/react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import FileInput from '../../components/common/FileInput';
import { calculateAmountDue } from '../../utils/utils';

const AssetFinanceForm = ({
  handleContinue,
  handleChange,
  investmentDetails,
  setInvestmentDetails,
}) => {
  return (
    <>
      <Text fontSize="sm">
        I hereby apply for the opening of account(s) with Abudanza Nigeria
        Enterprise. I understand that the information given herein and documents
        supplied are the basis for opening such account(s) and therefore warrant
        that such information is current.
      </Text>

      <form onSubmit={handleContinue}>
        {/* Duration */}
        <FormControl my="3" id="duration" isRequired>
          <HStack>
            <FormLabel fontSize="sm">Duration:</FormLabel>
            <Select
              onChange={handleChange}
              value={investmentDetails.duration}
              name="duration"
              id="duration"
              size="sm"
              placeholder="Select duration"
            >
              <option value={90}>90 Days</option>
              <option value={180}>180 Days</option>
              <option value={360}>360 Days</option>
            </Select>
          </HStack>
        </FormControl>

        {/* Cost */}
        <FormControl isRequired id="amount_paid" my="3">
          <HStack>
            <FormLabel fontSize="sm">Principal</FormLabel>
            <InputGroup size="sm">
              <InputLeftElement
                pointerEvents="none"
                color="gray.300"
                fontSize="1.2em"
                children="₦"
              />
              <Input
                size=""
                onChange={handleChange}
                value={investmentDetails.amount_paid}
                id="amount_paid"
                name="amount_paid"
                placeholder="Enter amount"
                type="number"
                step="1"
                min={10000}
                title="Only Integars are allowed"
              />
            </InputGroup>
          </HStack>
        </FormControl>

        {/* Amount Payable  */}
        <FormControl isRequired my="3" id="amountPayable">
          <HStack>
            <FormLabel fontSize="sm">Expected Returns </FormLabel>
            <Text>
              ₦
              {investmentDetails.duration &&
                investmentDetails.amount_paid &&
                Number(
                  calculateAmountDue(
                    investmentDetails.duration,
                    investmentDetails.amount_paid
                  )
                ).toLocaleString()}
            </Text>
          </HStack>
        </FormControl>

        {/* Payment Proof */}
        <FileInput
          name="paymentProof"
          label="Proof of Payment"
          formData={investmentDetails}
          setFormData={setInvestmentDetails}
        />

        {/* just Continue */}
        <Button type="submit" colorScheme="blue" size="sm" alignSelf="center">
          Continue
        </Button>
      </form>
    </>
  );
};

export default AssetFinanceForm;
