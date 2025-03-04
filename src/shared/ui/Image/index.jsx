import { isValidElement, useState } from "react";
import styles from "./index.module.css";

export function Image({
  size = 40,
  className,
  alt,
  crossOrigin,
  decoding,
  loading,
  referrerPolicy,
  sizes,
  src,
  srcSet,
  useMap,
  style,
  fallbackIcon,
  children,
  onLoad,
  onError,
  ...restProps
}) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  const hasSrc = src || srcSet;
  const needShowFallbackIcon =
    (failed || !hasSrc) && isValidElement(fallbackIcon);

  const handleImageLoad = (event) => {
    if (loaded) {
      return;
    }

    setLoaded(true);
    setFailed(false);
    onLoad?.(event);
  };

  const handleImageError = (event) => {
    setLoaded(false);
    setFailed(true);
    onError?.(event);
  };

  return (
    <div
      style={{
        width: "100%",
        minWidth: "100%",
        height: "100%",
        ...style,
      }}
      className={`${styles.wrapper} ${className}`}
      {...restProps}
    >
      {hasSrc && (
        <img
          alt={alt}
          className={`${styles.image} ${failed && styles["failed"]}`}
          crossOrigin={crossOrigin}
          decoding={decoding}
          loading={loading}
          referrerPolicy={referrerPolicy}
          sizes={sizes}
          src={src}
          srcSet={srcSet}
          useMap={useMap}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      )}
      {needShowFallbackIcon && (
        <div className={styles.fallback}>{fallbackIcon}</div>
      )}
      {children}
    </div>
  );
}
