import { matchSorter } from "match-sorter";
import { useDebounce } from "./useDebounce";

const baseSearch = (
  rows: any[], // array of data [{a: "a", b: "b"}, {a: "c", b: "d"}]
  //   keys: string[], // keys to search ["a", "b"]
  filterValue: string // potentially multi-word search string "two words"
) => {
  if (!filterValue || !filterValue.length) {
    return rows;
  }

  const terms = filterValue.split(" ");
  if (!terms) {
    return rows;
  }

  return terms.reduceRight(
    (results, term) => matchSorter(results, term, { keys: ["text"] }),
    rows
  );
};

export const useDebouncedFuzzySearch = (
  value: any,
  delay: number,
  rows: any[]
  //   keys: string[]
) => {
  const debouncedValue = useDebounce(value, delay);

  return baseSearch(rows, debouncedValue);
};
