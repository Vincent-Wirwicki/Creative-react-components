import { CSSProperties } from "react";

type Positions = [number, number, number, number];

interface Props {
  defaultPos?: Positions;
  sm?: Positions;
  md?: Positions;
  lg?: Positions;
  xl?: Positions;
  element: "div" | "section" | "article";
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}

const GridElement: React.FC<Props> = ({
  sm,
  md,
  lg,
  xl,
  element,
  className,
  style,
  children,
  defaultPos,
}) => {
  const gridPos = ["col-start-", "col-end-", "row-start-", "row-end-"];

  const addGridPosition = (arr: Positions, txt: string): string =>
    arr.map((pos, index) => txt + gridPos[index] + pos).join(" ");

  const gridSm = sm ? addGridPosition(sm, "sm:") : " ";
  const gridMd = md ? addGridPosition(md, "md:") : " ";
  const gridLg = lg ? addGridPosition(lg, "lg:") : " ";
  const gridXl = xl ? addGridPosition(xl, "xl:") : " ";
  const gridDefault = defaultPos ? addGridPosition(defaultPos, "") : " ";

  const grid =
    gridDefault.length > 0 ? gridDefault : gridSm + gridMd + gridLg + gridXl;

  const child = children ? children : null;

  const cssClass = grid + " " + className;

  if (element === "article") {
    return (
      <article className={cssClass} style={{ ...style }}>
        {child}
      </article>
    );
  }

  if (element === "section") {
    return (
      <section className={cssClass} style={{ ...style }}>
        {child}
      </section>
    );
  }

  if (element === "div") {
    return (
      <div className={cssClass} style={{ ...style }}>
        {child}
      </div>
    );
  }
};

export default GridElement;
