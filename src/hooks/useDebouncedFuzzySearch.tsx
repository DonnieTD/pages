import { matchSorter } from "match-sorter";
import { useDebounce } from "./useDebounce";

const baseSearch = (rows: any[], filterValue: string) => {
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
) => {
  const debouncedValue = useDebounce(value, delay);

  return baseSearch(rows, debouncedValue);
};
