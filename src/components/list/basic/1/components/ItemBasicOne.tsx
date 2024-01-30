interface Props {
  className?: string;
  titles: string[];
  handleMouseEnterItem: ({
    currentTarget,
  }: React.MouseEvent<Element, MouseEvent>) => void;
}

const ItemsBasicOne: React.FC<Props> = ({
  className,
  titles,
  handleMouseEnterItem,
}) => (
  <>
    {titles.map((title, index) => (
      <li
        key={index}
        data-index={index}
        onMouseEnter={handleMouseEnterItem}
        className={className}
      >
        <span>{title}</span>
        <span> + </span>
      </li>
    ))}
  </>
);

export default ItemsBasicOne;
