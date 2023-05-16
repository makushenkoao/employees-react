import { FC, ReactNode } from "react";
import { Layout as AntLayout } from "antd";
import styles from "./Layout.module.css";
import { Header } from "..";

export const Layout: FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <AntLayout.Content
        style={{
          height: "100%",
        }}
      >
        {children}
      </AntLayout.Content>
    </div>
  );
};
