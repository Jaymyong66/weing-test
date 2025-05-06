import { Inner } from '@/components/Inner';
import { LinkButton } from '@/components/LinkButton';
import { Size } from '@/components/Size';
import { TextArea } from '@/components/TextArea';
import { Title } from '@/components/Title';
import { Video } from '@/components/Video';

import styles from './Section3.module.scss';

export const Section3 = () => {
  return (
    <section className={styles.Section3}>
      <Size className={styles.Size}>
        <Inner>
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
        </Inner>
      </Size>
    </section>
  );
};
