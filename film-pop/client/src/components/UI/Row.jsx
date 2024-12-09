// mod 20 act 20
function Row(props) {
  return (
    <div className={`row${props.fluid ? "-fluid" : ""}`}>{props.children}</div>
  );
}

export default Row;
