import "./styles/style.css";

import Header from "./components/header/Header";

import Form from "./components/form-section/Form";
import MainSlogan from "./components/form-section/MainSlogan";

import Section from "./components/hotels-section/Section";
import HotelsList from "./components/hotels-section/HotelsList";

export default function App() {
  return (
    <>
      <Header />
      <content>
        <MainSlogan />
      </content>
      <main>
        <section className="form-section">
          <Form />
          <div className="flight-checkbox">
            <input type="checkbox" />
            <label>Szukam lotów</label>
          </div>
        </section>
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
