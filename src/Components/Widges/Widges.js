import "./widges.scss";

function Widges({ count, subTitle, title, color }) {
  return (
    <div className="widget" style={{ backgroundColor: `${color}` }}>
      <div className="top">
        <div className="title">{title}</div>
      </div>
      <div className="bottom">
        <span>{subTitle}</span>
        <span>{count}</span>
      </div>
    </div>
  );
}

export default Widges;
