import { Suspense } from "react";
import "./App.css";
import DaisyNav from "./componentens/DaisyNav/DaisyNav";
import PricingOptions from "./componentens/PricingOption/PricingOptions";
import ResultCharts from "./componentens/ResultCharts/ResultCharts";
// import axios from "axios";
import MarkCharts from "./componentens/MarkesCharts/MarkCharts";

const PricingPromised = fetch("PricingData.json").then((res) => res.json());

// const marksPromised = axios.get("MarkData.json");
function App() {
  return (
    <>
      <header>
        <DaisyNav></DaisyNav>
      </header>
      <main>
        <Suspense
          fallback={<span className="loading loading-spinner text-info"></span>}
        >
          <PricingOptions PricingPromised={PricingPromised}></PricingOptions>
        </Suspense>

        <ResultCharts></ResultCharts>

        {/* <Suspense>
          <MarkCharts marksPromised={marksPromised}></MarkCharts>
        </Suspense> */}
      </main>
    </>
  );
}

export default App;
