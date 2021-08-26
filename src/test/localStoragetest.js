// eslint-disable-next-line func-names
const localStorage = (function () {
  // eslint-disable-next-line prefer-const
  let data = {};
  return {
    getItem(key) {
      return data[key] || null;
    },
    setItem(key, value) {
      data[key] = value.toString();
    },
  };
}());

Object.defineProperty(global, 'localStorage', {
  value: localStorage,
});
