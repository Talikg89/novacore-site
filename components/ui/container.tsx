import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function Container({ children, className = "", id }: ContainerProps) {
  return (
    <section className={`section section-anchor ${className}`.trim()} id={id}>
      {children}
    </section>
  );
}
