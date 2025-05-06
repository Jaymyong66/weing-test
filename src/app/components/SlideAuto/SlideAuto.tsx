import styles from './SlideAuto.module.scss';

interface SlideAutoProps {
  direction: 'left' | 'right';
  children: React.ReactNode;
}

const SlideAutoBase: React.FC<SlideAutoProps> = ({ children, direction }) => {
  const className =
    direction === 'left' ? styles.LogoSlide : styles.LogoSlideReverse;

  return (
    <div className={styles.AniRow}>
      <ul className={className}>{children}</ul>
    </div>
  );
};

const SlideItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className={styles.PartnerItem}>
      <p>{children}</p>
    </li>
  );
};

const SlideAuto = Object.assign(SlideAutoBase, {
  Item: SlideItem,
});

export default SlideAuto;
