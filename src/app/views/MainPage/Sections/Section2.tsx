import Image from 'next/image';

import img_main_02 from '@/assets/images/img_main_sec2.jpg';
import img_main_02_mo from '@/assets/images/img_main_sec2_mo.jpg';
import { Size } from '@/components/Size';
import { SlideNumber } from '@/components/SlideNumber';
import { TextArea } from '@/components/TextArea';
import { Title } from '@/components/Title';
import { DummyData } from '@/data/dummyData';

import styles from './Section2.module.scss';

interface Section2Props {
  data: DummyData['section2'];
}

export const Section2 = ({ data }: Section2Props) => {
  return (
    <section className={styles.Section2}>
      <Size className={styles.Size}>
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
          <SlideNumber slideData={data} />
        </div>
      </Size>
    </section>
  );
};
