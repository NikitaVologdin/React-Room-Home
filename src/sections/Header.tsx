import { ReactNode } from "react";

interface props {
  children: ReactNode;
}

export default function Header({ children }: props) {
  return <header className="header">{children}</header>;
}
