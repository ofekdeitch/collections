import { HashMap } from "./hashmap";

export function groupBy<T, K>(
  array: T[],
  getter: (item: T) => K,
): HashMap<K, T[]> {
  return array.reduce((result, currentValue) => {
    const key = getter(currentValue);
    const group = result.get(key) ?? [];
    group.push(currentValue);

    result.set(key, group);
    return result;
  }, new HashMap<K, T[]>());
}

export function countBy<T, K>(
  array: T[],
  getter: (item: T) => K,
): HashMap<K, number> {
  const groupedByValue = groupBy(array, getter);
  const countedByValue = new HashMap<K, number>();

  for (const key of groupedByValue.keys()) {
    const value = groupedByValue.get(key) ?? [];
    countedByValue.set(key, value.length);
  }

  return countedByValue;
}
