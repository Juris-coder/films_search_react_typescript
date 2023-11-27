import * as React from "react";
import { Footer, Input } from "../../components";
import styles from "./styles.module.scss";

export type BaseLayoutProps = {
  children: React.ReactNode;
};

const BaseLayoutMemo: React.FC<BaseLayoutProps> = (props) => {
  const { children } = props;

  return (
    <div className={styles.mainContainer}>
      <Input />
      {children}
      <Footer />
    </div>
  );
};

export const BaseLayout = React.memo(BaseLayoutMemo);

export default BaseLayout;
