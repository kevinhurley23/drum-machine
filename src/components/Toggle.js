export default function Toggle({
  topText,
  leftText,
  rightText,
  textColor,
  divColor,
  state,
  func,
}) {
  return (
    <div className="toggle container">
      <p className="m-0 text-center" style={{ color: textColor }}>
        {topText}
      </p>
      <div className="row">
        <p className="col m-0 text-end" style={{ color: textColor }}>
          {leftText}
        </p>
        <div onClick={func} className="select col g-0 align-self-center">
          {state === "acousticKit" ? (
            <div className="inner" style={{ backgroundColor: divColor }}></div>
          ) : state === false ? (
            <div className="inner" style={{ backgroundColor: divColor }}></div>
          ) : (
            <div
              className="inner"
              style={{ float: "right", backgroundColor: divColor }}
            ></div>
          )}
        </div>
        <p className="col m-0 text-start" style={{ color: textColor }}>
          {rightText}
        </p>
      </div>
    </div>
  );
}
