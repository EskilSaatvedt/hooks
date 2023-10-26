import { useLayoutEffect, useMemo, useState } from "react";

export const saveToLocalStorage = <T>(key: string, object: T) => {
  try {
    const serializedObject = JSON.stringify(object);
    localStorage.setItem(key, serializedObject);
  } catch (e) {
    console.warn(e);
  }
};

export const loadFromLocalStorage = <T>(key: string, emptyObject: T): T => {
  try {
    const serializedObject = localStorage.getItem(key);
    if (!serializedObject) return emptyObject;
    return JSON.parse(serializedObject) as T;
  } catch (e) {
    console.warn(e);
    return emptyObject;
  }
};

export const useLocalStorage = <T>(
  key: string,
  defaultValue?: T
): [T | undefined, (object: T) => void] => {
  const [value, setValue] = useState<T | undefined>(defaultValue);

  useLayoutEffect(() => {
    const obj = loadFromLocalStorage<T | undefined>(key, defaultValue);

    setValue(obj);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const saveToStorage = useMemo(() => {
    // @ts-ignore
    const save = (v) => {
      saveToLocalStorage<T>(key, v);
      setValue(v);
    };

    return save;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [saveToLocalStorage, setValue]);

  return [value, saveToStorage];
};
