import styles from "./index.module.css";

export function EventImage({ className, imageSrc, ...restProps }) {
  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src={imageSrc}
        alt={"event poster"}
        {...restProps}
      />
    </div>
  );
}
