import { Footer, Navbar } from "./components";
import { Contact, Home } from "./pages";

const App = () => {
  return (
    <main>
      <Navbar />
      <Home />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
