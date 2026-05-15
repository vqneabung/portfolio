export type Locale = "vi" | "en";

export const LOCALES: { value: Locale; label: string }[] = [
  { value: "vi", label: "VI" },
  { value: "en", label: "EN" },
];

export const DEFAULT_LOCALE: Locale = "vi";

/**
 * Recursive type that converts all string literals in T to `string`,
 * keeping the object structure intact. This allows both vi and en
 * translations to satisfy the same type regardless of literal values.
 */
type DeepStringify<T> = {
  [K in keyof T]: T[K] extends string
    ? string
    : T[K] extends readonly string[]
      ? string[]
      : T[K] extends object
        ? DeepStringify<T[K]>
        : T[K];
};

export type Translation = DeepStringify<typeof import("./locales/vi").default>;