import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';

import AssetFinanceForm from './InvestmentForm';
import { useState } from 'react';
import TermsAndConditions from './TermsAndConditions';
import { createInvestment } from '../../services/api';
import SuccessAlert from './SuccessAlert';

function InvestmentModal() {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [investmentDetails, setInvestmentDetails] = useState({ cost: 0 });
  const [loading, setLoading] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleContinue = e => {
    e.preventDefault();
    if (!investmentDetails['paymentProof']) return;
    setShowTerms(true);
  };
  const handleAgreement = () => {
    setAgreedToTerms(!agreedToTerms);
    console.log('Agreed', agreedToTerms);
  };
  const handleBack = () => {
    setShowTerms(false);
    setAgreedToTerms(false);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    for (const data in investmentDetails) {
      if (!investmentDetails[data]) continue;
      formData.append(data, investmentDetails[data]);
    }
    //Todo! Reload investments, Reload Assets

    createInvestment(formData)
      .then(res => {
        setLoading(false);
        toast({
          title: 'Investment Request Created 🎊',
          description: 'Wil be Reviewed in 24 hours',
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
        });
        setAgreedToTerms(false);
        setShowTerms(false);
        setShowSuccess(true);
        setInvestmentDetails({ cost: 0 });
      })
      .catch(err => {
        setShowSuccess(false);
        const message = err.response
          ? err.response.data.message
          : 'Error Submitting Request. contact Admin';

        setLoading(false);
        toast({
          title: message,
          status: 'error',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
        });
      });
  };

  const handleClose = e => {
    onClose(e);
    setAgreedToTerms(false);
    setShowTerms(false);
    setShowSuccess(false);
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setInvestmentDetails({ ...investmentDetails, [name]: value });
  };

  return (
    <>
      <Button
        background="abudanza.highlight"
        colorScheme="orange"
        onClick={onOpen}
        size="sm"
      >
        Invest Now
      </Button>

      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="abudanza.primary">Invest</ModalHeader>
          <ModalCloseButton isDisabled={loading} onClick={handleClose} />
          <ModalBody pb={6}>
            {!showTerms && !showSuccess && (
              <AssetFinanceForm
                handleContinue={handleContinue}
                handleChange={handleChange}
                investmentDetails={investmentDetails}
                setInvestmentDetails={setInvestmentDetails}
              />
            )}
            {showTerms && (
              <TermsAndConditions
                handleChange={handleAgreement}
                handleSubmit={handleSubmit}
                agreedToTerms={agreedToTerms}
                loading={loading}
              />
            )}
            {showSuccess && <SuccessAlert onClose={handleClose} />}
          </ModalBody>

          <ModalFooter>
            {showTerms && (
              <Button
                mr="4"
                onClick={handleBack}
                isDisabled={loading}
                background="abudanza.secondary"
                leftIcon={<ArrowBackIcon />}
                size="xs"
              >
                Back
              </Button>
            )}
            <Button size="xs" isDisabled={loading} onClick={handleClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default InvestmentModal;
