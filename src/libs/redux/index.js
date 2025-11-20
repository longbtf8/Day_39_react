const createStore = (reducer, preloadedState) => {
  let state = reducer(preloadedState, { type: "@@redux/INITj.l.z.h.t.o" });
  const listeners = [];
  return {
    getState: () => {
      return state;
    },
    dispatch: (action) => {
      reducer(state, action);
      listeners.forEach((listener) => listener());
    },
    subscribe: (listener) => {
      listeners.push(listener);
      return () => {
        const idx = listeners.indexOf(listener);
        listeners.splice(idx, 1);
      };
    },
  };
};

export default createStore;
