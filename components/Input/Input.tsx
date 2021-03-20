import * as React from "react";
import { Icon } from "@iconify/react";
import searchIcon from "@iconify/icons-gg/search";

import styles from "./styles.module.scss";
import { Autocomplete, AutocompleteListTemplate } from "../../components";
import * as templates from "../Autocomplete/templates";

const templateNames = Object.keys(templates);

export type InputProps = {};

export const Input: React.FC<InputProps> = (props) => {
  const [filmName, setFilmName] = React.useState("");
  const [template, setTemplate] = React.useState<AutocompleteListTemplate>(
    "Poster"
  );

  return (
    <div className={styles.container}>
      <div className={styles.container__input}>
        <Icon className={styles.iconify} icon={searchIcon} />
        <div className={styles.inputOuter}>
          <input
            className={styles.query}
            placeholder="start typing..."
            onChange={(event) => setFilmName(event.target.value)}
            value={filmName}
          />
          <div className={styles.radio}>
            {templateNames.map((templateName) => (
              <div key={templateName}>
                <label>
                  {templateName}
                  <input
                    className={styles.radioInput}
                    checked={template === templateName}
                    type="radio"
                    onChange={() =>
                      setTemplate(templateName as AutocompleteListTemplate)
                    }
                    name="type"
                    value={templateName}
                  />
                </label>
              </div>
            ))}
          </div>
        </div>
        <Autocomplete filmName={filmName} templateType={template} />
      </div>
    </div>
  );
};
