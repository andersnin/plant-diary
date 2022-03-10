import "./App.scss";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading) {
    return <main className="loading-container">Loading...</main>;
  }

  return (
    <>
      {isAuthenticated ? (
        <main></main>
      ) : (
        <main className="welcome">
          <img
            src="https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_zz-plant_variant_medium_grant_terracotta_ace812df-95ef-495f-a32b-c4c12c57e915_768x.jpg?v=1645643525"
            alt=""
          />
        </main>
      )}
    </>
  );
}

export default App;
