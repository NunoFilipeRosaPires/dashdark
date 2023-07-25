interface IContaianer {
  children: JSX.Element;
  fluid?: boolean;
  fullHeight?: boolean;
}

export const Container = (props: IContaianer) => {
  const { children, fluid = false, fullHeight = false } = props;

  return <div className={`${fluid ? "container-fluid" : "container"} ${fullHeight ? "full-height" : ""}`}>{children}</div>;
};
