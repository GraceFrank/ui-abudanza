import React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  HStack,
  FormHelperText,
} from '@chakra-ui/react';
import { useState } from 'react';

const FileInput = ({ name, setFormData, formData, label }) => {
  const [error, setError] = useState('');

  const handleFileInput = e => {
    // handle validations
    const file = e.target.files[0];
    if (!file) {
      setError('Please select a file');
      setFormData({ ...formData, [name]: null });

      return;
    }

    if (file.size > 1024 * 1024 * 20) {
      setError('file size should be less than');
      setFormData({ ...formData, [name]: null });

      return;
    }

    const allowedExtensions = ['jpg', 'jpeg', 'png', 'doc', 'docx', 'pdf'];
    const fileExtension = file.name.split('.').pop();
    if (!allowedExtensions.includes(fileExtension)) {
      setError(
        'only file types of jpg, jpeg, doc, docx, png and pdf are allowed'
      );
      setFormData({ ...formData, [name]: null });
      return;
    }

    setError('');
    setFormData({ ...formData, [name]: file });
    console.log('changed', e.target.files[0]);
  };

  return (
    <FormControl isRequired my="3" id={name}>
      <HStack>
        <FormLabel fontSize="sm">{label}</FormLabel>
        <Input
          onChange={handleFileInput}
          id={name}
          name={name}
          size="sm"
          type="file"
        />
      </HStack>
      <FormHelperText color="red.500">{error}</FormHelperText>
    </FormControl>
  );
};

export default FileInput;
