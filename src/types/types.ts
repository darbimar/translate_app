export type Word = {
  id: number;
  word: string;
};

export type Section = {
  id: number;
  items: Word[];
};
