// @flow
import { createContext, useContext } from 'react';
export const IconDictionaryContext = /*#__PURE__*/createContext({});
const emptyObj = {};
export const useIconDictionary = () => useContext(IconDictionaryContext) || emptyObj;
//# sourceMappingURL=icon-dictionary.js.map