import * as React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

export type FooterProps = {};

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className={styles.image}>
      <Image src="/images/logo.png" alt="logo" width={220} height={50} />
    </footer>
  );
};
