import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>Journal</h1>
      </header>
      <main>
        <form action="submit">
          <h2>NEW ENTRY</h2>
          <label htmlFor="motto">Motto</label>
          <input type="text" name="motto" id="motto" />
          <label htmlFor="notes">Notes</label>
          <input type="text" name="motto" id="motto" />
          <button>Create</button>
        </form>
        <div className="counters">
          <h3>All Entries</h3>
          <span>3</span>
          <h3>Favorites</h3>
          <span>1</span>
        </div>
        <section>
          <span>Feb 27, 2028</span>
          <h4>Thats Life in the City </h4>
          <img src="" alt="" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem,
            ut possimus aut totam error minima velit unde quos pariatur deserunt
            a, nam, ipsam animi expedita quia vero porro autem. Quas!
          </p>
        </section>
      </main>
      <footer>
        <span>Journal App - 2028</span>
      </footer>
    </>
  );
}

export default App;
