import styles from './Inner.module.scss';

interface InnerProps {
  children: React.ReactNode;
  className?: string;
}

const InnerBase = ({ children, className }: InnerProps) => {
  return <div className={`${styles.Inner} ${className}`}>{children}</div>;
};

const InnerTable = ({ children, className }: InnerProps) => {
  return (
    <div className={`${styles.InnerTable} ${className}`}>
      <div className={styles.InnerTableCell}>{children}</div>
    </div>
  );
};

const Inner = Object.assign(InnerBase, {
  InnerTable,
});

export default Inner;
