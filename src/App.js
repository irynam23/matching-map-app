import { Nav } from "../src/components/Nav/Nav";
import { Routes, Route } from "react-router-dom";

import { TextArea } from "./components/TextArea/TextArea";
import { CatList } from "./components/CatList/CatList";
import { RegionsList } from "./components/RegionsList/RegionsList";
import { WritersList } from "./components/WritersList/WritersList";

import { AboutMe } from "./pages/AboutMe/AboutMe";
import { FindMore } from "./pages/FindMore/FindMore";
import { Homepage } from "./pages/Homepage/Homepage";
import { FlagsList } from "./components/Flags/FlagsList";
import { CoatsList } from "./components/Coats/CoatsList";
import { StyledApp } from "./App.styled";

function App() {
  return (
    <StyledApp>
      <Routes>
        {/* <Route path="/" element={<Map />}>
          <Route index element={<TextArea />} />
          <Route path="categories" element={<CatList />}>
            <Route path="regions" element={<RegionsList />} />
          </Route>
          <Route path="writers" element={<WritersList />} />
        </Route> */}
        <Route path="/" element={<Homepage />}>
          <Route index element={<TextArea />} />
          <Route path="categories" element={<CatList />}>
            <Route path="regions" element={<RegionsList />} />
            <Route path="writers" element={<WritersList />} />
            <Route path="flags" element={<FlagsList />} />
            <Route path="coats-of-arms" element={<CoatsList />} />
          </Route>
        </Route>
        <Route path="/findmore" element={<FindMore />} />
        <Route path="/aboutme" element={<AboutMe />} />
      </Routes>
      <Nav />
    </StyledApp>
  );
}

export default App;
