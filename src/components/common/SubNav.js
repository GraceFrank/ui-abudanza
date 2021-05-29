import React from 'react';
import { Icon } from '@chakra-ui/react';
import { Box, Flex, HStack, Text, Link } from '@chakra-ui/layout';
import { IoIosMail, IoLogoWhatsapp } from 'react-icons/io';
import { MdPhoneInTalk } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { PRIMARY, SECONDARY } from '../../constants/colors.json';
import { contact } from '../../constants/text.json';

const SubNavbar = () => {
  return (
    <Box py="2" px="4" backgroundColor={PRIMARY}>
      <Flex justifyContent="space-evenly">
        <HStack>
          <Icon as={IoIosMail} color={SECONDARY} />
          <Text fontSize="xs" color={SECONDARY}>
            <Link href={`mailto: ${contact.email}`}>{contact.email} </Link> |
          </Text>
          <Icon as={MdPhoneInTalk} color={SECONDARY} />
          <Text fontSize="xs" color={SECONDARY}>
            <Link href={`tel:${contact.phone}`}> {contact.phone}</Link>
          </Text>
        </HStack>
        <HStack>
          <Icon as={IoLogoWhatsapp} color={SECONDARY} />
          <Link target="_blank" href={`https://wa.me//${contact.whatsapp}`}>
            <Text fontSize="xs" color={SECONDARY}>
              Whatsapp |
            </Text>
          </Link>
          <Icon as={FaUser} color={SECONDARY} />
          <Link href="/login">
            <Text fontSize="xs" color={SECONDARY}>
              Login
            </Text>
          </Link>
        </HStack>
        <Box></Box>
      </Flex>
    </Box>
  );
};

export default SubNavbar;
