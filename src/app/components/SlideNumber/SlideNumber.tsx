import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { twoDigitFormat } from '@/utils/formatters';

import { Container } from '../Container';
import styles from './SlideNumber.module.scss';
import 'swiper/css';

interface SlideNumberProps {
  slideData: {
    title: string;
    subTitle: string;
    description: string;
  }[];
}

const SlideNumber = ({ slideData }: SlideNumberProps) => {
  const [currentNum, setCurrentNum] = useState(0);
  const totalNum = slideData.length;

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
      </div>
    </Container>
  );
};

export default SlideNumber;
