import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import PageNotes from "./components/PageNotes";

const sidebarWidth = "4.5rem";

const layoutStyle = {
  position: "sticky" as any,
  top: 0,
  left: 0,
  height: "100%",
};

const layoutStyleB = {
  position: "fixed" as any,
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgb(255, 255, 255)",
  padding: "0px",
  zIndex: -1,
};

const pages = [<PageNotes />, <PageNotes />, <PageNotes />, <PageNotes />];

function App() {
  const [pageSelected, setPage] = useState(0);

  return (
    <div>
      <div>
        <div className="fixed" style={layoutStyle}>
          <Sidebar width={sidebarWidth} onPageChange={setPage} />
        </div>
        {pages.map(
          (page, index) =>
            pageSelected === index && (
              <div key={"page-" + index} style={layoutStyleB}>
                {page}
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default App;
