'use client';

import Image from 'next/image';
import React, { useState } from 'react';

import img_main_02 from '@/assets/images/img_main_sec2.jpg';
import img_main_02_mo from '@/assets/images/img_main_sec2_mo.jpg';
import { LinkButton } from '@/components/LinkButton';
import { SlideNumber } from '@/components/SlideNumber';
import { Video } from '@/components/Video';

import styles from './MainPageView.module.scss';
import { TextArea } from '../components/TextArea';
import { Title } from '../components/Title';
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

      <section className={styles.Section2}>
        <div className={styles.Size}>
          <div className={styles.Section2Inner}>
            <div className={styles.Section2TxtArea}>
              <Title
                title='교육 프로그램'
                subTitle='프로로 성장시키는 최고 수준의 교육이 있습니다.'
              />
              <TextArea
                text={
                  '마리아케이 글로벌은\n국내 유일 워싱턴 프로토콜 스쿨 라이센스 강사가\n소통과 교류의 가치를 새롭게 조명함으로써 사람과 사람을,\n한국인과 세계인을 연결하는 전문 교육 프로그램을 운영하고 있습니다.'
                }
              />
            </div>
            <div className={styles.Section2ImgArea}>
              <p>
                <Image
                  src={img_main_02}
                  alt=''
                  width={img_main_02.width}
                  className={`${styles.ImgPc} ${styles.BasicImg}`}
                />
                <Image
                  src={img_main_02_mo}
                  alt=''
                  width={img_main_02_mo.width}
                  className={`${styles.ImgMo} ${styles.BasicImg}`}
                />
              </p>
            </div>
            <SlideNumber slideData={data.section2} />
          </div>
        </div>
      </section>

      <section className={styles.Section3}>
        <div className={styles.Size}>
          <div className={styles.Inner}>
            <div className={styles.ContentWrapper}>
              <Video src='https://www.youtube.com/embed/24FxDKFzin0?autoplay=1#' />
              <Title
                title='마리아케이 글로벌'
                subTitle='최고의 프로들이 당신의 가능성을 일깨웁니다.'
                className={styles.TitleTypeA}
              />
              <TextArea
                text={
                  '글로벌 매너, 국제의전, 퍼스널 브랜딩 등 각 분야의 최고의 전문가들로 이루어진 마리아 케이글로벌. 우리는 이론에 치중한 진부한 교육을 지양하며, 글로벌 무대에서 완벽히 통하는 가장 진보된 정보를 교육에 적용하고 있습니다. 외국인 컨설턴트와의 실전 트레이닝 등 유일하고 실용적인 액션러닝을 통해 글로벌 경쟁력을 갖춘 인재 육성 솔루션을 제안하고 있습니다.'
                }
                className={styles.TextArea}
                footer={
                  <LinkButton
                    label='LEARN MORE'
                    href='https://mariakglobal.com/about/'
                    className={styles.LearnMore}
                  />
                }
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
