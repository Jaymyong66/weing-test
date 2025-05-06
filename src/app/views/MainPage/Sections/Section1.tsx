import Image from 'next/image';
import { useState } from 'react';

import { Inner } from '@/components/Inner';
import { Size } from '@/components/Size';
import { DummyData } from '@/data/dummyData';

import styles from './Section1.module.scss';

interface Section1Props {
  data: DummyData['section1'];
}

export const Section1 = ({ data }: Section1Props) => {
  const [currentVisual, setCurrentVisual] = useState(data[1]);

  const handleNextTileClick = () => {
    setCurrentVisual(data[currentVisual.next]);
  };

  return (
    <section
      className={styles.Section1}
      style={{ backgroundImage: `url(${currentVisual.mainVisual})` }}
    >
      <div className={styles.MainTxt}>
        <Size className={styles.Size}>
          <Inner.InnerTable>
            <div className={styles.Section1Title}>{currentVisual.title}</div>
          </Inner.InnerTable>
        </Size>
      </div>

      <button className={styles.NextTile} onClick={handleNextTileClick}>
        <div className={styles.NextTileDetails}>
          <div className={styles.NextTileInner}>
            <div className={styles.NextTileInnerTop}>
              <span className={styles.NextTileHeading}>{'Up next'}</span>
            </div>
            <div className={styles.NextTileInnerBottom}>
              <span
                className={styles.NextTileTitle}
              >{`${currentVisual.nextTileTitle}`}</span>
              <span className={styles.NextTileArrow}>
                <Image
                  src='/images/ico_next_arr.png'
                  alt='arrow'
                  width={18}
                  height={12}
                />
              </span>
            </div>
          </div>
        </div>
        <div className={styles.NextTilePreview}>
          <Image
            src={currentVisual.visualThumb}
            alt='next'
            width={210}
            height={300}
          />
        </div>
      </button>
    </section>
  );
};
