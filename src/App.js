import "./styles/style.css";

import Header from "./components/header/Header";

import Form from "./components/form-section/Form";
import Slogan from "./components/form-section/Slogan";

import Section from "./components/hotels-section/Section";
import HotelsList from "./components/hotels-section/HotelsList";

export default function App() {
  return (
    <>
      <Header />
      <Slogan>
        <div className="slogan-content">
          <h1>Znajdź miejsce na kolejny pobyt</h1>
          <h2>Szukaj ofert hoteli, domów i wielu innych obiektów...</h2>
        </div>
      </Slogan>
      <Form />
      <div className="flight-checkbox">
        <input type="checkbox" />
        <label>Szukam lotów</label>
      </div>

      <main>
        <Section
          className={"hotels-section"}
          title={"Nadal interesują Cię te obiekty?"}
        >
          <HotelsList />
        </Section>
      </main>
    </>
  );
}
