
import './App.css';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import DashboardPage from "./pages/DashboardPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <div className="App">
      <Header />
      <DashboardPage />
      <HomePage />
      <LoginPage />
      <SignupPage />

      <Footer />
    </div>
  );
}

export default App;
