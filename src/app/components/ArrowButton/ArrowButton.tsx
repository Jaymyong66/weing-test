import Image from 'next/image';

import arrowNext from '@/assets/icons/arrow_next2.png';
import arrowPrev from '@/assets/icons/arrow_prev2.png';

import styles from './ArrowButton.module.scss';

interface ArrowButtonProps {
  direction: 'prev' | 'next';
  className?: string;
  onClick: () => void;
}

const ArrowButton = ({ direction, className, onClick }: ArrowButtonProps) => {
  if (direction === 'prev') {
    return (
      <div
        className={`${styles.ArrowButton} ${styles.ArrowPrev} ${className}`}
        onClick={onClick}
      >
        <Image src={arrowPrev} alt='Previous slide' />
      </div>
    );
  }

  return (
    <div
      className={`${styles.ArrowButton} ${styles.ArrowNext} ${className}`}
      onClick={onClick}
    >
      <Image src={arrowNext} alt='Next slide' />
    </div>
  );
};

export default ArrowButton;
