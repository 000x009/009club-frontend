import styles from "./index.module.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function EventImage({ className, imageSrc, ...restProps }) {
  return (
    <div className={styles.container}>
      {imageSrc ? (
        <img
          className={styles.image}
          src={imageSrc}
          alt={"event poster"}
          {...restProps}
        />
      ) : (
        <Skeleton className={styles.image} />
      )}
    </div>
  );
}
