import { hotels } from "./hotels";

import Hotel from "./Hotel";

export default function HotelsList() {
  return (
    <ul className="hotels-list">
      {hotels.map((hotel) => (
        <Hotel hotelObj={hotel} />
      ))}
    </ul>
  );
}
