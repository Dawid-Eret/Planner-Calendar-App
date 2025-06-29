import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  href?: string;
  id: string;
  selectedID: string;
  defaultSelected: string;
  onClick: () => void;
}

const SidebarSlimLi = ({
  children,
  href,
  id,
  selectedID = "-1",
  defaultSelected,
  onClick,
}: Props) => {
  if (selectedID === "-1") {
    selectedID = defaultSelected;
  }

  let isPressed = { color: "black", backgroundColor: "" };
  if (id === selectedID)
    isPressed = { color: "white", backgroundColor: "rgb(63, 127, 255)" };

  return (
    <li className="nav-item">
      <a
        href={href}
        className="nav-link py-3 rounded-0"
        aria-current="page"
        style={isPressed}
        onClick={onClick}
      >
        {children}
      </a>
    </li>
  );
};

export default SidebarSlimLi;
