import { Suspense } from "react";
import "./App.css";
import DaisyNav from "./componentens/DaisyNav/DaisyNav";
import PricingOptions from "./componentens/PricingOption/PricingOptions";
import ResultCharts from "./componentens/ResultCharts/ResultCharts";

function App() {
  const PricingPromised = fetch("PricingData.json").then((res) => res.json());

  return (
    <>
      <header>
        <DaisyNav></DaisyNav>

        <Suspense
          fallback={<span className="loading loading-spinner text-info"></span>}
        >
          <PricingOptions PricingPromised={PricingPromised}></PricingOptions>
        </Suspense>
        <ResultCharts></ResultCharts>
      </header>
      <main></main>
    </>
  );
}

export default App;
