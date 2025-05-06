import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import img_main_sec4_1 from '@/assets/images/img_main_sec4_1.jpg';
import { Inner } from '@/components/Inner';
import { Size } from '@/components/Size';
import { Title } from '@/components/Title';
import { DummyData } from '@/data/dummyData';

import styles from './Section4.module.scss';

interface Section4Props {
  data: DummyData['section4'];
}

export const Section4 = ({ data }: Section4Props) => {
  return (
    <section className={styles.Section4}>
      <Size className={styles.Size}>
        <Inner>
          <Title
            title='우리가 하는 일'
            subTitle='밀착, 교감, 즐거움 그리고 성장'
            className={styles.TitleTypeA}
          />
          <div className={styles.SlideArea}>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              loop={true}
              breakpoints={{
                1024: {
                  slidesPerView: 3.5,
                },
                100: {
                  slidesPerView: 3,
                },
              }}
              className={styles.CaseSlide}
            >
              {data.map((item, index) => (
                <SwiperSlide key={index}>
                  <a href={item.link} className={styles.SlideLink}>
                    <div>
                      <div
                        className={styles.SlideImg}
                        style={{
                          backgroundImage: `url(${item.imageSrc})`,
                        }}
                      >
                        <Image src={img_main_sec4_1} alt='' />
                      </div>
                      <div className={styles.TextBox}>
                        <div className={styles.Table}>
                          <div className={styles.TableCell}>
                            <div className={styles.Text}>
                              <em>{item.title}</em>
                              <span>{item.content}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Inner>
      </Size>
    </section>
  );
};
