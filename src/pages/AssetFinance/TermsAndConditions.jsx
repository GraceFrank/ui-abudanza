import { Heading, Button, Checkbox, Spinner, HStack } from '@chakra-ui/react';
import DocumentReader from '../../components/common/RenderPDF';

export default function TermsAndConditions({
  handleSubmit,
  agreedToTerms,
  handleChange,
  loading,
}) {
  return (
    <>
      <Heading color="abudanza.highlight" as="h3" size="md">
        Terms and conditions
      </Heading>
      <DocumentReader file="/assettermsconditions.pdf" numPages={1} />
      <form onSubmit={handleSubmit}>
        <Checkbox onChange={handleChange} isChecked={agreedToTerms} mt="2">
          I have read and agreed to terms and conditions
        </Checkbox>
        <HStack align="start">
          {loading && (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          )}
          <Button
            isLoading={loading}
            loadingText="Submitting"
            isDisabled={!agreedToTerms}
            colorScheme="blue"
            background="abudanza.primary"
            mt="2"
            size="sm"
            type="submit"
          >
            Submit
          </Button>
        </HStack>
      </form>
    </>
  );
}
