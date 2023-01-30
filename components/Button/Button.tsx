import clsx from "clsx";

import styles from "./Button.module.css";

type ButtonVariant = "default";
type ButtonIntent = "default" | "critical" | "success" | "primary";

interface ButtonProps {
  label?: string;
  variant?: ButtonVariant;
  intent?: ButtonIntent;
}

const variantClassNames = (variant: ButtonVariant) => {
  switch (variant) {
    case "default":
      return styles.btn;
  }
};

const intentClassNames = (intent: ButtonIntent) => {
  switch (intent) {
    case "primary":
      return clsx(styles.btn__primary);
    case "critical":
      return clsx(styles.btn__critical);
    case "default":
      return clsx(styles.btn__default);
  }
};

export function Button({
  label,
  intent = "default",
  variant = "default",
}: ButtonProps) {
  return (
    <button
      className={clsx(variantClassNames(variant), intentClassNames(intent))}
    >
      {label}
    </button>
  );
}
