import { Heading, VStack, Text, HStack, Spacer, Flex } from '@chakra-ui/layout';
import Card from '../../components/common/Card';
import Triangle from '../../images/triangle-polygon.svg';
import ReferSvg from '../../images/refer_svg';
import { SECONDARY } from '../../constants/colors.json';
import nairaNotesImage from '../../images/Naira_notes.jpg';
import { Image } from '@chakra-ui/image';
import HighlightButton from '../../components/common/HighlightButton';
import AssetSvg from '../../images/deliveries';
import Icon from '@chakra-ui/icon';
import SwiperCore, { Navigation, Pagination, Autoplay, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import React, { useRef, useState } from 'react';
// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import { useMediaQuery } from '@chakra-ui/media-query';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination]);

const AdvertBanners = () => {
  const [isMobileView] = useMediaQuery('(max-width: 600px)');

  return (
    <Swiper
      slidesPerView={isMobileView ? 1 : 3}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      className="mySwiper"
    >
      <SwiperSlide>
        <Card
          backgroundImage={Triangle}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundColor={SECONDARY}
          backgroundSize="95%"
        >
          <HStack>
            <Heading color="white" size="sm">
              Refer and earn &#8358;1000
            </Heading>
            <Spacer />
            <ReferSvg />
          </HStack>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card background="white">
          <HStack>
            <VStack>
              <Text>Earn up to 50% on Investments</Text>
              <HighlightButton>Learn More</HighlightButton>
            </VStack>
            <Image minW="40%" src={nairaNotesImage} />
          </HStack>
        </Card>
      </SwiperSlide>

      <SwiperSlide>
        {/*pay 60% and get asset in 90 days*/}
        <Card
          background="rgb(190,226,242)"
          background="linear-gradient(45deg, rgba(190,226,242,1) 50%, rgba(7,69,99,1) 50%)"
        >
          <Flex>
            <Heading size="sm">Pay 60% and get Asset in 90 days</Heading>
            <Icon as={AssetSvg} />
          </Flex>
        </Card>
      </SwiperSlide>
    </Swiper>
  );
};
export default AdvertBanners;
