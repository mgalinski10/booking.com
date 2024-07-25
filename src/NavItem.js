export default function NavItem({ itemObj }) {
  return (
    <li>
      {itemObj.icon}&nbsp;&nbsp;{itemObj.name}
    </li>
  );
}
