import { useState } from "react";
import { Footer } from "./components/Footer";
import { Home } from "./components/pages/home/Home";
import { Library } from "./components/pages/library/Library";
import { Profile } from "./components/pages/profile/Profile";
import { Cart } from "./components/pages/cart/Cart";

function App() {
  const [activePage, setActivePage] = useState("home"); // Corrected typo here

  const renderRoute = () => {
    switch (activePage) {
      case "home":
        return <Home />;
      case "library":
        return <Library />;
      case "profile":
        return <Profile />;
      case "cart":
        return <Cart />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      {renderRoute()}
      <Footer activePage={activePage} setActivePage={setActivePage} />
    </div>
  );
}

export default App;
