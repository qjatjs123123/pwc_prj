import React from "react";
import styles from "./Textarea.module.css";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

export function TextArea(props: TextareaProps) {
  return <textarea className={styles.textarea} {...props} />;
}
