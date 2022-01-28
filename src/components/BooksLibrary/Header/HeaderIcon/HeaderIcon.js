import "./headericon.scss";

export default function HeaderIcon({ icon, onClick, backgroundColor }) {
  return (
    <div
      className="icon_block"
      style={{ background: backgroundColor }}
      onClick={onClick}
    >
      <img src={icon} />
    </div>
  );
}
