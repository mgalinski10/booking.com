export default function Section({ children, title, className }) {
  return (
    <div className={className}>
      <h2 className="main-title">{title}</h2>
      {children}
    </div>
  );
}
