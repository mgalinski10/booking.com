export default function NavItem({ itemObj }) {
  return (
    <li
      onClick={(e) => {
        // e.target.classList.remove("nav-item--active");
        e.target.classList.add("nav-item--active");
      }}
    >
      {itemObj.icon}&nbsp;&nbsp;{itemObj.name}
    </li>
  );
}
