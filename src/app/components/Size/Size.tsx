import styles from './Size.module.scss';

interface SizeProps {
  children: React.ReactNode;
  className?: string;
}

const Size = ({ children, className }: SizeProps) => {
  return <div className={`${styles.Size} ${className}`}>{children}</div>;
};

export default Size;
