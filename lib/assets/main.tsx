import { ReactNode } from "react";

export const Main = (props: { children: ReactNode }) => {
  return (
    <main className="absolute w-full h-full grid place-content-center gap-y-6 overflow-hidden">
      {props.children}
    </main>
  );
};
