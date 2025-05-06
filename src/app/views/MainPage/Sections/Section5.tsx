import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ArrowBox } from '@/components/ArrowBox';
import { ArrowButton } from '@/components/ArrowButton';
import { Inner } from '@/components/Inner';
import { Size } from '@/components/Size';
import { TextArea } from '@/components/TextArea';
import { Title } from '@/components/Title';
import { DummyData } from '@/data/dummyData';

import styles from './Section5.module.scss';

import type { Swiper as SwiperType } from 'swiper';

interface Section5Props {
  data: DummyData['section5'];
}

export const Section5 = ({ data }: Section5Props) => {
  const feedbackSwiperRef = useRef<SwiperType | null>(null);
  return (
    <section className={styles.Section5}>
      <Size className={styles.Size}>
        <Inner className={styles.Inner}>
          <div className={styles.Top}>
            <Title
              title='피드백'
              subTitle='더 큰 세상에 대한 두려움을 떨치는 경험'
              className={styles.TitleTypeA}
            />
            <ArrowBox
              className={styles.ArrowBox}
              onClickPrev={() => feedbackSwiperRef.current?.slidePrev()}
              onClickNext={() => feedbackSwiperRef.current?.slideNext()}
            />
          </div>
          <div className={styles.Bottom}>
            <div className={styles.SlideArea}>
              <Swiper
                spaceBetween={40}
                slidesPerView={1}
                loop={true}
                breakpoints={{
                  1550: {
                    slidesPerView: 3,
                  },
                  840: {
                    slidesPerView: 2,
                  },
                }}
                onSwiper={(swiper) => {
                  feedbackSwiperRef.current = swiper;
                }}
              >
                {data.map((item, index) => (
                  <SwiperSlide key={index}>
                    <TextArea text={item.content} className={styles.TextArea}>
                      <TextArea.TextInfo
                        author={item.author}
                        organization={item.organization}
                        className={styles.TextInfo}
                      />
                    </TextArea>
                  </SwiperSlide>
                ))}
              </Swiper>
              <ArrowButton
                direction='prev'
                onClick={() => feedbackSwiperRef.current?.slidePrev()}
              />
              <ArrowButton
                direction='next'
                onClick={() => feedbackSwiperRef.current?.slideNext()}
              />
            </div>
          </div>
        </Inner>
      </Size>
    </section>
  );
};
