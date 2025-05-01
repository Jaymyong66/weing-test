import styles from './Title.module.scss';

interface TitleProps {
  title: string;
  subTitle: string;
}

const Title = ({ title, subTitle }: TitleProps) => {
  return (
    <div className={styles.TitleTypeA}>
      <h2>{title}</h2>
      <p>{subTitle}</p>
    </div>
  );
};

export default Title;
