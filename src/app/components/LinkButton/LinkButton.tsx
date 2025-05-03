import styles from './LinkButton.module.scss';

interface LinkButtonProps {
  className?: string;
  label: string;
  href?: string;
}

const LinkButton = ({ className, label, href }: LinkButtonProps) => {
  return (
    <div className={`${styles.Wrapper} ${className}`}>
      <a href={href}>{label}</a>
    </div>
  );
};

export default LinkButton;
