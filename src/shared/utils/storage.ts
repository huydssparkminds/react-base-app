/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

export const enum StorageType {
  SESSION,
  LOCAL,
}

/**
 * Get either localStorage or sessionStorage
 * @param type storage type
 */
export const getStorage = (type: StorageType): Storage => {
  if (type === StorageType.SESSION) {
    return window.sessionStorage;
  }
  return window.localStorage;
};

/**
 * Set an item into storage
 * @param type storage type
 * @param key key to set
 * @param value value to set
 */
const setItem = (type: StorageType) => (key: string, value: any) => {
  getStorage(type).setItem(key, JSON.stringify(value));
};

/**
 * Get an item from storage
 * @param type storage type
 * @param key key to get
 * @param defaultVal value to return if key doesnt exist
 */
const getItem = (type: StorageType) => (key: string, defaultVal?: any) => {
  const val = getStorage(type).getItem(key);
  if (!val || val === 'undefined') return defaultVal;
  try {
    return JSON.parse(val);
  } catch (e) {
    return val;
  }
};

/**
 * Remove item from storage
 * @param type storage type
 * @param key key to remove
 */
const removeItem = (type: StorageType) => (key: string) => {
  getStorage(type).removeItem(key);
};

export type getItemType = (key: string, defaultVal?: any) => any;
export type setItemType = (key: string, value: any) => void;
export type removeItemType = (key: string) => void;

export interface StorageAPI {
  get: getItemType;
  set: setItemType;
  remove: removeItemType;
}

export interface StorageService {
  session: StorageAPI;
  local: StorageAPI;
}

export const Storage: StorageService = {
  session: {
    get: getItem(StorageType.SESSION),
    set: setItem(StorageType.SESSION),
    remove: removeItem(StorageType.SESSION),
  },
  local: {
    get: getItem(StorageType.LOCAL),
    set: setItem(StorageType.LOCAL),
    remove: removeItem(StorageType.LOCAL),
  },
};
