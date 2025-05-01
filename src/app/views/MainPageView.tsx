'use client';

import Image from 'next/image';
import React, { useState } from 'react';

import styles from './MainPageView.module.scss';
import { DummyData } from '../data/dummyData';

interface MainPageViewProps {
  data: DummyData;
}

export const MainPageView: React.FC<MainPageViewProps> = ({ data }) => {
  const [currentVisual, setCurrentVisual] = useState(data.section1[1]);

  const handleNextTileClick = () => {
    setCurrentVisual(data.section1[currentVisual.next]);
  };

  return (
    <>
      <section
        className={styles.Section1}
        style={{ backgroundImage: `url(${currentVisual.mainVisual})` }}
      >
        <div className={styles.MainTxt}>
          <div className={styles.Size}>
            <div className={styles.Section1Title}>{currentVisual.title}</div>
          </div>
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
                  <Image src='/images/ico_next_arr.png' alt='arrow' />
                </span>
              </div>
            </div>
          </div>
          <div className={styles.NextTilePreview}>
            <Image src={currentVisual.visualThumb} alt='next' />
          </div>
        </button>
      </section>
      <section className={styles.Section2}></section>
    </>
  );
};
