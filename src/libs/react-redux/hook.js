import { useContext, useEffect, useState } from "react";
import Context from "./Context";

export const useStore = () => {
  const store = useContext(Context);
  return store;
};

export const useSelector = (selector) => {
  const store = useStore();
  const [state, setState] = useState(selector(store.getState()));
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
