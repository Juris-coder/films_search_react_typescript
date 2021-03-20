import * as React from "react";
import classNames from "classnames";
import styles from "../styles.module.scss";
import { TemplateProps } from "../../../models";
import { makeFilmURL, externalURL } from "../../../utils";

export const List: React.FC<TemplateProps> = (props) => {
  const { id, title, vote_average, index, focus, setFocus } = props;
  const rating = vote_average.toFixed(1);
  const itemTitle = `${title} (${rating})`;
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
      className={classNames(styles.listDiv, {
        [styles.active]: focus,
      })}
      onClick={handleSelect}
      onKeyPress={handleSelect}
      tabIndex={focus ? 0 : -1}
      ref={ref}
    >
      {itemTitle}
    </div>
  );
};
