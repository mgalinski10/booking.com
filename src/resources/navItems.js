import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faPlane,
  faEarthAmericas,
  faPeopleGroup,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";

export const navItems = [
  { name: "Pobyty", icon: <FontAwesomeIcon icon={faBed} />, key: 0 },
  { name: "Loty", icon: <FontAwesomeIcon icon={faPlane} />, key: 1 },
  {
    name: "Lot + Hotel",
    icon: <FontAwesomeIcon icon={faEarthAmericas} />,
    key: 2,
  },
  { name: "Atrakcje", icon: <FontAwesomeIcon icon={faPeopleGroup} />, key: 3 },
  {
    name: "Taksówki lotniskowe",
    icon: <FontAwesomeIcon icon={faTaxi} />,
    key: 4,
  },
];
