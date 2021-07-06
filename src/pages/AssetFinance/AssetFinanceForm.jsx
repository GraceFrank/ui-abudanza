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

const AssetFinanceForm = ({
  handleContinue,
  handleChange,
  assetDetails,
  setAssetDetails,
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
        <FormControl id="duration" isRequired my="5">
          <HStack>
            <FormLabel fontSize="sm">Duration: </FormLabel>
            <Heading size="sm">90 Days</Heading>
          </HStack>
        </FormControl>

        {/* Category */}
        <FormControl my="3" id="category" isRequired>
          <HStack>
            <FormLabel fontSize="sm" size="xs">
              Category
            </FormLabel>
            <Select
              onChange={handleChange}
              value={assetDetails.category}
              name="category"
              id="category"
              size="xs"
              variant="flushed"
              placeholder="Select Category"
            >
              <option value="automobile">automobile</option>
              <option value="electronics">electronics</option>
              <option value="fashion">fashion</option>
              <option value="computing/phone">automobile</option>
              <option value="others">automobile</option>
            </Select>
          </HStack>
        </FormControl>

        {/* Brand */}
        <FormControl isRequired my="3" id="brand">
          <HStack>
            <FormLabel fontSize="sm">Brand: </FormLabel>
            <Input
              onChange={handleChange}
              value={assetDetails.brand}
              type="text"
              id="brand"
              name="brand"
              variant="flushed"
              size="xs"
            />
          </HStack>
        </FormControl>
        <FormControl isRequired my="3" id="model">
          <HStack>
            <FormLabel fontSize="sm">Model: </FormLabel>
            <Input
              onChange={handleChange}
              value={assetDetails.model}
              type="text"
              id="model"
              name="model"
              variant="flushed"
              size="xs"
            />
          </HStack>
        </FormControl>

        {/* Cost */}
        <FormControl isRequired id="cost" my="3">
          <HStack>
            <FormLabel fontSize="sm">Cost of Item</FormLabel>
            <InputGroup variant="flushed" size="xs">
              <InputLeftElement
                pointerEvents="none"
                color="gray.300"
                fontSize="1.2em"
                children="₦"
              />
              <Input
                onChange={handleChange}
                value={assetDetails.cost}
                id="cost"
                name="cost"
                placeholder="Enter amount"
                type="number"
                min={10000}
              />
            </InputGroup>
          </HStack>
        </FormControl>

        {/* Amount Payable  */}
        <FormControl isRequired my="3" id="amountPayable">
          <HStack>
            <FormLabel fontSize="sm">Amount Payable: </FormLabel>
            <Text>
              {' '}
              ₦{Number((assetDetails.cost * 60) / 100).toLocaleString()}
            </Text>
          </HStack>
        </FormControl>

        {/* Vendor Name */}
        <FormControl isRequired my="3" id="vendor_name">
          <HStack>
            <FormLabel fontSize="sm">Vendor Name: </FormLabel>
            <Input
              id="vendor_name"
              name="vendor_name"
              variant="flushed"
              size="xs"
              type="text"
              onChange={handleChange}
              value={assetDetails.vendor_name}
            />
          </HStack>
        </FormControl>

        {/* Vendor Phone */}
        <FormControl isRequired my="3" id="vendor_phone">
          <HStack>
            <FormLabel fontSize="sm">Vendor Phone: </FormLabel>
            <Input
              onChange={handleChange}
              value={assetDetails.vendor_phone}
              pattern="^\+[0-9]{4,15}"
              id="vendor_phone"
              name="vendor_phone"
              variant="flushed"
              size="xs"
              type="tel"
              title="Phone number should include country code and number example: +2349996899"
            />
          </HStack>
        </FormControl>

        {/* Vendor Email */}
        <FormControl my="3" id="vendor_email">
          <HStack>
            <FormLabel fontSize="sm">Vendor Email: </FormLabel>
            <Input
              onChange={handleChange}
              value={assetDetails.vendor_email}
              type="email"
              id="vendor_email"
              name="vendor_email"
              variant="flushed"
              size="xs"
            />
          </HStack>
        </FormControl>

        {/* Vendor Website */}
        <FormControl my="3" id="vendor_website">
          <HStack>
            <FormLabel fontSize="sm">Vendor Website: </FormLabel>
            <Input
              onChange={handleChange}
              value={assetDetails.vendor_website}
              type="url"
              id="vendor_website"
              name="vendor_website"
              variant="flushed"
              size="xs"
            />
          </HStack>
        </FormControl>

        {/* Vendor Address */}
        <FormControl my="3" id="vendor_street_address">
          <HStack>
            <FormLabel fontSize="sm">Vendor Address: </FormLabel>
            <Input
              onChange={handleChange}
              value={assetDetails.vendor_address}
              type="text"
              id="vendor_street_address"
              name="vendor_street_address"
              variant="flushed"
              size="xs"
            />
          </HStack>
        </FormControl>

        {/* Vendor City */}
        <FormControl isRequired my="3" id="vendor_city">
          <HStack>
            <FormLabel fontSize="sm">Vendor City: </FormLabel>
            <Input
              onChange={handleChange}
              value={assetDetails.vendor_city}
              type="text"
              id="vendor_city"
              name="vendor_city"
              variant="flushed"
              size="xs"
            />
          </HStack>
        </FormControl>

        {/* Vendor Country */}
        <FormControl my="3" id="vendor_country">
          <HStack>
            <FormLabel fontSize="sm">Vendor Country: </FormLabel>
            <CountryDropdown
              onChange={value =>
                setAssetDetails({ ...assetDetails, vendor_country: value })
              }
              value={assetDetails.vendor_country}
              required
              id="vendor_country"
              target={{ name: 'vendor_country' }}
              className="select-country"
            />
          </HStack>
        </FormControl>

        {/* Vendor State */}
        <FormControl my="3" id="vendor_state">
          <HStack>
            <FormLabel fontSize="sm">Vendor State: </FormLabel>
            <RegionDropdown
              onChange={value =>
                setAssetDetails({ ...assetDetails, vendor_state: value })
              }
              value={assetDetails.vendor_state}
              country={assetDetails.vendor_country}
              id="vendor_state"
              name="vendor_state"
              required
            />
          </HStack>
        </FormControl>

        {/* Payment Proof */}
        <FileInput
          name="paymentProof"
          label="Proof of Payment"
          formData={assetDetails}
          setFormData={setAssetDetails}
        />

        {/* Proforma Invoice */}
        <FileInput
          name="proformaInvoice"
          label="Proforma Invoice"
          formData={assetDetails}
          setFormData={setAssetDetails}
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
