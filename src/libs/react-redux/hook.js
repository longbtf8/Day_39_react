import { useContext, useEffect, useState } from "react";
import Context from "./Context";

export const useStore = () => {
  const store = useContext(Context);
  if (store === undefined) {
    throw new Error(
      "Could not find react-redux context value; please ensure the component is wrapped in a Provider"
    );
  }
  return store;
};

export const useSelector = (selector) => {
  const store = useStore();
  const initState = selector(store.getState());
  const [state, setState] = useState(selector(store.getState()));
  useEffect(() => {
    if (initState === store.getState()) {
      console.warn(
        '"Selector unknown returned a different result when called with the same parameters. This can lead to unnecessary rerenders." '
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(store.getState());
    }, []);
    return unsubscribe;
  });
  return state;
};
export const useDispatch = () => {
  const store = useStore();
  return store.dispatch;
};
