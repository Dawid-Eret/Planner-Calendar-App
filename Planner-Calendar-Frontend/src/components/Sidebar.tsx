import { FcCloseUpMode } from "react-icons/fc";
import SidebarLi from "./SidebarLi";
import { PiHouseLine } from "react-icons/pi";
import { PiNote } from "react-icons/pi";
import { PiCheckSquareOffset } from "react-icons/pi";
import { PiCalendarDots } from "react-icons/pi";
import { useState } from "react";

const sidebarIcons = [
  <PiHouseLine size="32px" />,
  <PiNote size="32px" />,
  <PiCheckSquareOffset size="32px" />,
  <PiCalendarDots size="32px" />,
];

const sidebarHREF = ["#home", "#notes", "#tasks", "#deadlines"];

interface Props {
  onPageChange: (page: number) => void;
  width: string;
}

const SidebarSlim = ({ onPageChange, width }: Props) => {
  const [selectedID, setSelectedID] = useState("-1");

  return (
    <div
      className="d-flex flex-column flex-shrink-0"
      style={{
        width: width,
        position: "fixed",
        height: "100%",
        backgroundColor: "rgb(255, 255, 255)",
        border: "0px",
        borderRight: "1px",
        borderStyle: "solid",
        borderColor: "rgb(0, 0, 0)",
      }}
    >
      <a
        href="/"
        className="d-block p-3 link-body-emphasis text-decoration-none rounded-0 text-center"
      >
        <FcCloseUpMode size="40" />
      </a>
      <ul className="nav-link nav-pills nav-flush flex-column mb-auto text-center">
        {sidebarIcons.map((icon, index) => (
          <SidebarLi
            id={"sidebarIcon-" + index}
            key={"sidebarIcon-" + index}
            selectedID={selectedID}
            href={sidebarHREF[index]}
            defaultSelected="sidebarIcon-0"
            onClick={() => {
              setSelectedID("sidebarIcon-" + index);
              onPageChange(index);
            }}
            children={icon}
          />
        ))}
      </ul>
    </div>
  );
};

export default SidebarSlim;
