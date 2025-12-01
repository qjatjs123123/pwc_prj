import { ReactElement, ReactNode } from "react";
import { Text } from "../Text/Text";
import styles from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  src: string;
  description?: ReactNode;
  button?: ReactElement;
  title: string;
}

export function ErrorMessage({
  src,
  title,
  description,
  button,
}: ErrorMessageProps) {
  return (
    <div className={styles.container}>
      <img src={src} width={60} height={60} alt="error-image" />

      <Text weight="bold" type="title" size="2">
        {title}
      </Text>

      {description}
      {button && <div className={styles.buttonWrapper}>{button}</div>}
    </div>
  );
}
