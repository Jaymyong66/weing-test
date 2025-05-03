import styles from './Title.module.scss';

interface TitleProps {
  title: string;
  subTitle: string;
  className?: string;
}

const Title = ({ title, subTitle, className }: TitleProps) => {
  return (
    <div className={`${styles.TitleTypeA} ${className}`}>
      <h2>{title}</h2>
      <p>{subTitle}</p>
    </div>
  );
};

export default Title;
