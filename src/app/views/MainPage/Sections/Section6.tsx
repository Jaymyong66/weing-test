import { Inner } from '@/components/Inner';
import { Size } from '@/components/Size';
import { SlideAuto } from '@/components/SlideAuto';
import { Title } from '@/components/Title';
import { DummyData } from '@/data/dummyData';

import styles from './Section6.module.scss';

interface Section6Props {
  data: DummyData['section6'];
}

export const Section6 = ({ data }: Section6Props) => {
  return (
    <section className={styles.Section6}>
      <Size>
        <Inner className={styles.Inner}>
          <div className={styles.Left}>
            <Inner.InnerTable>
              <Title
                title='파트너'
                subTitle='같이, 가치를 잇고, 가능성을 엽니다.'
                className={styles.TitleTypeA}
              />
            </Inner.InnerTable>
          </div>
          <div className={styles.Right}>
            <div className={styles.Partner}>
              <SlideAuto direction='left'>
                {data.partners.map((src, index) => (
                  <SlideAuto.Item key={`partner-top-${index}`}>
                    <img src={src} alt={`파트너 ${index + 1}`} />
                  </SlideAuto.Item>
                ))}
              </SlideAuto>

              <SlideAuto direction='right'>
                {data.partners.map((src, index) => (
                  <SlideAuto.Item key={`partner-top-${index}`}>
                    <img src={src} alt={`파트너 ${index + 1}`} />
                  </SlideAuto.Item>
                ))}
              </SlideAuto>
            </div>
          </div>
        </Inner>
      </Size>
    </section>
  );
};
