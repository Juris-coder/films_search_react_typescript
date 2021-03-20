import * as React from "react";
import classNames from "classnames";
import styles from "../styles.module.scss";
import { makeFilmURL, externalURL } from "../../../utils";
import { TemplateProps } from "../../../models";
import { IMAGE_PATH, NOT_FOUND_IMAGE_PATH } from "../../../configs/env";

export const Poster: React.FC<TemplateProps> = (props) => {
  const {
    id,
    title,
    poster_path,
    release_date,
    index,
    focus,
    setFocus,
  } = props;

  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (focus) {
      ref.current!.focus();
    }
  }, [focus]);

  const handleSelect = React.useCallback(() => {
    setFocus(index);
    externalURL(makeFilmURL(id, title));
  }, [index, setFocus]);

  return (
    <div
      className={classNames(styles.filmDiv, styles.postersDiv, {
        [styles.active]: focus,
      })}
      onClick={handleSelect}
      onKeyPress={handleSelect}
      tabIndex={focus ? 0 : -1}
      ref={ref}
    >
      <img
        className={styles.filmPoster}
        src={poster_path ? `${IMAGE_PATH}${poster_path}` : NOT_FOUND_IMAGE_PATH}
        alt="film_poster"
      />
      <h4 className={styles.filmTitle}>{`${title} `}</h4>
      <p className={styles.filmYear}>
        {release_date ? release_date.slice(0, 4) : "unknown"}
      </p>
    </div>
  );
};
