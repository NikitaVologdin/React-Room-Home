import { ReactNode } from "react";

interface props {
  children: ReactNode;
}

export default function Main({ children }: props) {
  return <main className="main">{children}</main>;
}
