import { Film } from "./Film";

export type TemplateProps = {
  index: number;
  items: Film[];
  focus: boolean;
  setFocus: (index: number) => void;
} & Film;
