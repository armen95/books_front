import "./sectionlisttitle.scss";
export default function SectionListTitle({ icon, title }) {
  return (
    <div className="section_list_title">
      <img src={icon} />
      <span>{title}</span>
    </div>
  );
}
