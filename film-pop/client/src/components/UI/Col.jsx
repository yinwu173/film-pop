// mod 20 act 20
// set column "size" property instead of its className

function Col(props) {
  const size = props.size
    .split(" ")
    .map((size) => `col-${size}`)
    .join(" ");

  return <div className={size}>{props.children}</div>;
}

export default Col;
