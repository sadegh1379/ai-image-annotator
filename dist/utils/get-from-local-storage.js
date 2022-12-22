export default (function (key, defaultValue) {
  try {
    return JSON.parse(window.localStorage['__REACT_IMAGE_ANNOTATE_'.concat(key)]);
  } catch (e) {
    return defaultValue;
  }
});
//# sourceMappingURL=get-from-local-storage.js.map