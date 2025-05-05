import styles from './Inner.module.scss';

interface InnerProps {
  children: React.ReactNode;
  className?: string;
}

const Inner = ({ children, className }: InnerProps) => {
  return <div className={`${styles.Inner} ${className}`}>{children}</div>;
};

export default Inner;
