import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "./layout/Navbar";
import LoginComponent from "./auth0Component/LoginComponent";
import Footer from "./layout/Footer";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <h3>Loading..</h3>;
  }

  console.log(isAuthenticated);

  return (
    <>
      {isAuthenticated ? (
        <>
          <Navbar />
          <Footer />
        </>
      ) : (
        <LoginComponent />
      )}
    </>
  );
}

export default App;
