import * as React from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { Film } from "../../models";
import { apiCall } from "../../api/apiCall";
import * as templates from "./templates";
import { useRoveFocus } from "../../utils";

export type AutocompleteListTemplate = keyof typeof templates;

export type AutocompleteProps = {
  filmName: string;
  templateType: AutocompleteListTemplate;
};

const useFindFilm = (filmName: string) => {
  const [error, setError] = React.useState(null);
  const [query, setQuery] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [items, setItems] = React.useState<Film[]>([]);

  const fetchFilms = async () => {
    try {
      setLoading(true);
      setQuery(true);
      const result = await apiCall(filmName);
      setLoading(false);
      setItems(result.results);
    } catch (error) {
      setItems([]);
      setError(error);
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (filmName !== "") {
      const timeout = setTimeout(() => fetchFilms(), 700);
      return () => clearTimeout(timeout);
    }
  }, [filmName]);

  return { items, loading, error, query };
};

export const Autocomplete: React.FC<AutocompleteProps> = (props) => {
  const { templateType, filmName } = props;
  const { items, loading, error, query } = useFindFilm(filmName);
  const Template = templates[templateType];
  const films = templateType === "Poster" ? items.slice(0, 3) : items;
  const [focus, setFocus] = useRoveFocus(films.length);

  if (error) {
    return (
      <div className={styles.autocompleteStyling}>An error has occured.</div>
    );
  }

  if (loading) {
    return <div className={styles.autocompleteStyling}>Loading...</div>;
  }

  if (!query) {
    return null;
  }

  if (query && items.length === 0) {
    return <div className={styles.autocompleteStyling}>No results</div>;
  }

  if (query && items.length > 0) {
    return (
      <div className={styles.autocompleteStyling}>
        <div
          className={classNames(styles.autocompleteItems, {
            [styles.posters]: templateType === "Poster",
          })}
        >
          {films.map((film, i) => (
            <Template
              {...film}
              key={film.id}
              index={i}
              items={films}
              focus={focus === i}
              setFocus={setFocus}
            />
          ))}
        </div>
      </div>
    );
  }
};
