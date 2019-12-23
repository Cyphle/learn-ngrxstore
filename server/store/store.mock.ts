export const store = (() => {
  const store = {};
  const read = (selector: Function) => selector(store);

  const write = (reducer: any, action: any) => {
    reducer(store, action);
  };

  return {
    read,
    write
  }
})();
