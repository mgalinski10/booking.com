export default function Hotel({ hotelObj }) {
  return (
    <li>
      <div className="container">
        <div className="hotel-image">
          <img src={hotelObj.img}></img>
          <div className="heart"></div>
        </div>
        <div className="description">
          <h2>{hotelObj.name}</h2>
          <p>
            {hotelObj.city}, {hotelObj.country}
          </p>
          <div className="rating">
            <div className="rate">{hotelObj.rating}</div>
            <p>
              {hotelObj.description} · {hotelObj.ratings}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}
