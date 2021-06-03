import { useToast } from '@chakra-ui/toast';

export function handleResponse(response) {
  if (response.data) {
    return response.data;
  }
  const toast = useToast;
  toast({
    title: response.message.title,
    description: response.message.details,
    status: 'success',
    duration: 9000,
    isClosable: true,
  });

  return response;
}

export function handleError(error) {
  const toast = useToast;
  toast({
    title: error.title,
    description: error.message,
    status: 'error',
    duration: 9000,
    isClosable: true,
  });
  return error;
}
