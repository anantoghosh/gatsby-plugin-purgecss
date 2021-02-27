/* eslint-disable @typescript-eslint/prefer-readonly-parameter-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */

declare type Primitive =
  | null
  | undefined
  | string
  | number
  | boolean
  | symbol
  | bigint;

declare type ReadonlyDeep<T> = T extends
  | Primitive
  | ((...arguments: any[]) => unknown)
  ? T
  : T extends ReadonlyMap<infer KeyType, infer ValueType>
  ? ReadonlyMapDeep<KeyType, ValueType>
  : T extends ReadonlySet<infer ItemType>
  ? ReadonlySetDeep<ItemType>
  : T extends object
  ? ReadonlyObjectDeep<T>
  : unknown;

type ReadonlyMapDeep<KeyType, ValueType> = ReadonlyMap<
  ReadonlyDeep<KeyType>,
  ReadonlyDeep<ValueType>
>;

type ReadonlySetDeep<ItemType> = ReadonlySet<ReadonlyDeep<ItemType>>;

type ReadonlyObjectDeep<ObjectType extends object> = {
  readonly [KeyType in keyof ObjectType]: ReadonlyDeep<ObjectType[KeyType]>;
};
