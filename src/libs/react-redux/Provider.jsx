import Context from "./Context";

const Provider = ({ children, store }) => {
  return <Context value={store}>{children}</Context>;
};
export default Provider;
