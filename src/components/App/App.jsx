import { Component } from "react";
import s from "./App.module.scss";

const STORAGE_KEY = "contacts";

class App extends Component {

  render() {

    return (
      <main>
        <section>
          <div className={s.container}>
            Privet
          </div>
        </section>
      </main>
    );
  }
}

export default App;
