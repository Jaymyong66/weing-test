'use client';

import { useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react';

import { twoDigitFormat } from '@/utils/formatters';
import { removeNewlines, splitTextByNewlines } from '@/utils/textFormatters';

import { Container } from '../Container';
import styles from './SlideNumber.module.scss';

import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';

interface SlideNumberProps {
  slideData: {
    title: string;
    subTitle: string;
    description: string;
  }[];
}

const SlideNumber = ({ slideData }: SlideNumberProps) => {
  const isDesktop = useMediaQuery({ query: '(min-width: 891px)' });

  const [currentNum, setCurrentNum] = useState(0);
  const totalNum = slideData.length;
  const swiperRef = useRef<SwiperType | null>(null);

  const handleSlideChange = (swiper: SwiperType) => {
    setCurrentNum(swiper.activeIndex);
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <Container>
      <div className={styles.SlideArea}>
        <div className={styles.Num}>
          <p className={styles.Raleway}>
            <span className={styles.CurrentNum}>
              {twoDigitFormat(currentNum + 1)}
            </span>
            <span className={styles.TotalNum}>{twoDigitFormat(totalNum)}</span>
          </p>
        </div>

        <div className={styles.SliceWrap}>
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            onSlideChange={handleSlideChange}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            className={styles.Swiper}
          >
            {slideData.map((slide, index) => (
              <SwiperSlide key={index} className={styles.SwiperSlide}>
                <div className={styles.Content}>
                  <div className={styles.ContentTitle}>
                    <em>{slide.title}</em>
                    <i>{slide.subTitle}</i>
                  </div>
                  <p>
                    {isDesktop
                      ? splitTextByNewlines(slide.description)
                      : removeNewlines(slide.description)}
                  </p>
                </div>
                {/* 
                  <div className={styles.LearnMore}>
                    <button className={styles.LearnMoreBtn}>LEARN MORE</button>
                  </div> */}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className={styles.SlideNav}>
          <button className={styles.NavPrev} onClick={handlePrev}>
            <span className='sr-only'>이전</span>
          </button>
          <button className={styles.NavNext} onClick={handleNext}>
            <span className='sr-only'>다음</span>
          </button>
        </div>
      </div>
    </Container>
  );
};

export default SlideNumber;
