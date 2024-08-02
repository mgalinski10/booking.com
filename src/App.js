import "./style.css";
import Header from "./Header";
import MainSlogan from "./MainSlogan";
import Form from "./Form";

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
        </section>
      </main>
    </>
  );
}
