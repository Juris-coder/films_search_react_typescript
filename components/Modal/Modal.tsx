import * as React from "react";
import classNames from "classnames";
import { externalURL } from "../../utils";
import styles from "./styles.module.scss";

export type ModalProps = {};

export const Modal: React.FC<ModalProps> = () => {
  const [isClosed, setIsClosed] = React.useState(true);
  React.useEffect(() => {
    const modalTimeout = setTimeout(() => setIsClosed(false), 700);
    return () => clearTimeout(modalTimeout);
  }, []);

  return (
    <>
      <div className={classNames(styles.modal, { [styles.closed]: isClosed })}>
        <h2>Hi!</h2>
        <h3>
          This is <span>SEARCH movies</span>.
        </h3>
        <h3>
          A live movies search application using external database via API.
          <br />
          Choose a film here and get redirected to the TMDb’s website for more
          information.
        </h3>
        <button onClick={() => setIsClosed(true)}>GOT IT</button>
        <button
          type="button"
          onClick={() => externalURL("https://www.themoviedb.org/")}
        >
          Take me to TMDb
        </button>
      </div>
      <div
        className={classNames(styles.black, { [styles.closed]: isClosed })}
        onClick={() => setIsClosed(true)}
      />
    </>
  );
};
