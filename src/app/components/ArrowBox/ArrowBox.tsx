import Image from 'next/image';

import arrowNextOff from '@/assets/icons/arrow_next_off.png';
import arrowNextOn from '@/assets/icons/arrow_next_on.png';
import arrowPrevOff from '@/assets/icons/arrow_prev_off.png';
import arrowPrevOn from '@/assets/icons/arrow_prev_on.png';

import styles from './ArrowBox.module.scss';

interface ArrowBoxProps {
  className?: string;
  onClickPrev: () => void;
  onClickNext: () => void;
}

const ArrowBox = ({ onClickPrev, onClickNext, className }: ArrowBoxProps) => {
  return (
    <div className={`${styles.ArrowBox} ${className}`}>
      <div
        className={`${styles.ArrowPrev} ${styles.ArrowButton}`}
        tabIndex={0}
        role='button'
        onClick={onClickPrev}
      >
        <Image
          src={arrowPrevOff}
          alt='Previous slide'
          width={arrowPrevOff.width}
          className={styles.IconOff}
        />
        <Image
          src={arrowPrevOn}
          alt='Previous slide'
          width={arrowPrevOn.width}
          className={styles.IconOn}
        />
      </div>
      <div
        className={`${styles.ArrowNext} ${styles.ArrowButton}`}
        tabIndex={0}
        role='button'
        onClick={onClickNext}
      >
        <Image
          src={arrowNextOff}
          alt='Next slide'
          width={arrowNextOff.width}
          className={styles.IconOff}
        />
        <Image
          src={arrowNextOn}
          alt='Next slide'
          width={arrowNextOn.width}
          className={styles.IconOn}
        />
      </div>
    </div>
  );
};

export default ArrowBox;
