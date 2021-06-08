import { useState } from 'react';
import { Button } from '@chakra-ui/button';
import { FormLabel, FormControl } from '@chakra-ui/form-control';
import { useDisclosure } from '@chakra-ui/hooks';
import { Icon } from '@chakra-ui/icons';
import { Input } from '@chakra-ui/input';
import { RiMailSendFill, RiMailCloseFill } from 'react-icons/ri';
import { Text, Box, Link } from '@chakra-ui/layout';
import {
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalContent,
  Modal,
} from '@chakra-ui/modal';
import { resendConfrimationEmail } from '../services/api/api';

function SendConfirmationEmailModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [sending, setSending] = useState(false);
  const [email, setEmail] = useState();
  const [status, setStatus] = useState({});

  const handleSubmit = e => {
    e.preventDefault();
    setSending(true);

    resendConfrimationEmail(email)
      .then(() => {
        setSending(false);
        setStatus({
          success: true,
          message: `Confirmation Mail Sent, check your ${email} inbox`,
        });
      })
      .catch(err => {
        setSending(false);
        const message =
          err.response && err.response.status === 400
            ? 'Email Already Confirmed'
            : 'Error Sending email contact admin';
        setStatus({ error: true, message });
      });
  };
  return (
    <>
      <Text my="5" fontSize="xs">
        Didn't receive confirmation Email? click &nbsp;
        <Link onClick={onOpen} color="blue.500">
          Here
        </Link>
        &nbsp; to resend it.
      </Text>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Resend Confirmation Email</ModalHeader>

          <ModalCloseButton />
          <ModalBody>
            {!status.success && !status.error && (
              <form onSubmit={handleSubmit}>
                <FormControl id="email" isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    variant="flushed"
                    placeholder="Email"
                    id="email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </FormControl>

                <Button
                  isLoading={sending}
                  background="abudanza.primary"
                  colorScheme="blue"
                  loadingText="Sending"
                  mt="5"
                  width="100%"
                  type="submit"
                >
                  Submit
                </Button>
              </form>
            )}
            {status.success && (
              <Box>
                <Icon as={RiMailSendFill} w="20" h="20" color="green" />
                <Text color="green">{status.message}</Text>
              </Box>
            )}
            {status.error && (
              <Box>
                <Icon as={RiMailCloseFill} w="20" h="20" color="red" />
                <Text color="black">{status.message}</Text>
              </Box>
            )}
          </ModalBody>

          <ModalFooter>
            <Button
              size="xs"
              background="abudanza.secondary"
              color="black"
              colorScheme="blue"
              mr={3}
              onClick={() => {
                onClose();
                setStatus({});
              }}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default SendConfirmationEmailModal;
