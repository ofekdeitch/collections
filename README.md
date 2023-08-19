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
