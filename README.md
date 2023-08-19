# @jocular/collections
<br/>

## Installing

Using npm:
```bash
$ npm install @jocular/collections
```

Using yarn:
```bash
$ yarn add @jocular/collections
```
## Table of Contents

#### Data Structures

- [HashMap](https://github.com/ofekdeitch/collections#hashmap)
- [HashSet](https://github.com/ofekdeitch/collections#hashset)

#### Utils

- [groupBy](https://github.com/ofekdeitch/collections#groupby)
- [countBy](https://github.com/ofekdeitch/collections#countby)

## HashMap

A TypeScript implementation of the HashMap [data structure]([url](https://en.wikipedia.org/wiki/Hash_table)).
Items with the same keys are stored in buckets.

```ts
const map = new HashMap<number, string>();
map.set(1, 'foo');
map.get(1); // 'foo'
map.get(2); // null
```

**Important:**
Keys are evaluated by value and not by reference:
```ts
interface Point {
  x: number,
  y: number
}

const map = new HashMap<Point, number>();
const point1: Point = { x: 1, y: 2 };
const point2: Point = { x: 1, y: 2 };

map.set(point1, 1);
map.set(point2, 2);

map.get(point1); // 2
map.get(point2); // 2
```

<br />

### `keys()`
Return an array of keys found in the map. No order is guaranteed, as a HashMap does not promise any sorting.

```ts
const map = new HashMap<number, string>();

for (const key of map.keys()) {
    // do something
}
```

<br />

### `values()`
Return an array of values found in the map. No order is guaranteed, as a HashMap does not promise any sorting.

```ts
const map = new HashMap<number, string>();

for (const value of map.values()) {
    // do something
}
```

<br />

### `entries()`
Return an array of `[key, value]` pairs. No order is guaranteed, as a HashMap does not promise any sorting.

```ts
const map = new HashMap<number, string>();

for (const [key, value] of map.entries()) {
    // do something
}
```
<br/>

## HashSet

A TypeScript implementation of the HashSet data structure.
Implemented using the HashMap included in this library.

<br/>

### `add(value)`

Adds an value to the set. Does not throw an error in case of the value already existing.

```ts
const set = new HashSet<number>();
set.add(1);
set.add(2);
```

<br/>

### `contains(value)`

Returns `true` if the value exists in the set, and `false` otherwise.

```ts
const set = new HashSet<number>();
set.add(1);
set.contains(1); // true
set.contains(2); // false
```


<br/>

### `values()`
Return an array of values found in the set. No order is guaranteed, as a HashSet does not promise any sorting.

```ts
const set = new HashSet<number>();
set.add(1);
set.add(2);
set.values(); // [1, 2]
```


<br/>

### `copy()`
Creates a new HashSet that contains the same values as the original set.

```ts
const set = new HashSet<number>();
set.add(1);

const copy = set.copy();
copy.values(); // [1]
```

<br />

## Utils


### `groupBy<T, K>(array: T[], getter: (T) => K): HashMap<K, T[]>`
Given `getter` which receives an item from `array` and returns its key, the `groupBy` method returns a HashMap where all values of `array` are grouped together according to the value `getter` returns for them. Hence the keys of the new HashMap would be of type `K` and the value would be an array of `T`s.

For example:

```ts
const fruits = ['banana', 'strawberry', 'lemon', 'orange'];
const fruitsByColor: HashMap<Color, string[]> = groupBy(fruits, (fruit) => getColor(fruit));

fruitsByColor.get(Color.Yellow); // ['banana', 'lemon']
fruitsByColor.get(Color.Orange); // ['orange']
fruitsByColor.get(Color.Red); // ['strawberry']
```

<br />

### `countBy<T, K>(array: T[], getter: (T) => K): HashMap<K, number>`
Given `getter` which receives an item from `array` and returns its key, the `groupBy` method returns a HashMap where all values of `array` are grouped together and counter according to the value `getter` returns for them. Hence the keys of the new HashMap would be of type `K` and the value would be the number of items that have a given key.

For example:

```ts
const fruits = ['banana', 'strawberry', 'lemon', 'orange'];
const fruitsByColor: HashMap<Color, number> = countBy(fruits, (fruit) => getColor(fruit));

fruitsByColor.get(Color.Yellow); // 2
fruitsByColor.get(Color.Orange); // 1
fruitsByColor.get(Color.Red); // 1
```
