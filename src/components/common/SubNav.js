import React from 'react';
import { Icon } from '@chakra-ui/react';
import { Box, Flex, Wrap, WrapItem, Text, Link } from '@chakra-ui/layout';
import { IoIosMail, IoLogoWhatsapp } from 'react-icons/io';
import { MdPhoneInTalk } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { PRIMARY, SECONDARY } from '../../constants/colors.json';
import { contact } from '../../constants/text.json';

const SubNavbar = () => {
  return (
    <Box py="2" px="4" backgroundColor={PRIMARY}>
      <Flex justifyContent="space-evenly">
        <Wrap wrap="true">
          <WrapItem>
            <Icon as={IoIosMail} color={SECONDARY} />
            <Text fontSize="xs" color={SECONDARY}>
              <Link href={`mailto: ${contact.email}`}>{contact.email} </Link> |
            </Text>
          </WrapItem>
          <WrapItem>
            <Icon as={MdPhoneInTalk} color={SECONDARY} />
            <Text fontSize="xs" color={SECONDARY}>
              <Link href={`tel:${contact.phone}`}> {contact.phone}</Link>
            </Text>
          </WrapItem>
        </Wrap>
        <Wrap>
          <WrapItem>
            <Icon as={IoLogoWhatsapp} color={SECONDARY} />
            <Link target="_blank" href={`https://wa.me//${contact.whatsapp}`}>
              <Text fontSize="xs" color={SECONDARY}>
                Whatsapp |
              </Text>
            </Link>
          </WrapItem>
          <WrapItem>
            <Icon as={FaUser} color={SECONDARY} />
            <Link href="/login">
              <Text fontSize="xs" color={SECONDARY}>
                Login
              </Text>
            </Link>
          </WrapItem>
        </Wrap>
        <Box></Box>
      </Flex>
    </Box>
  );
};

export default SubNavbar;
