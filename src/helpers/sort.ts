export interface PropsInterface {
  items: Array<ItemsInterface>;
  property: string;
  sortOrder: string;
}

export interface ItemsInterface {
  [key: string]: any;
}

const sortItemsByProperty = ({
  items,
  property,
  sortOrder,
}: PropsInterface) => {
  const sortedItems = items.slice(0);
  sortedItems.sort((a, b) => {
    if (property === "count") {
      if (sortOrder === "asc") {
        return a[property] - b[property];
      } else if (sortOrder === "desc") {
        return b[property] - a[property];
      }
    } else if (property === "name") {
      if (sortOrder === "asc") {
        return a[property].localeCompare(b[property]);
      } else if (sortOrder === "desc") {
        return b[property].localeCompare(a[property]);
      }
    }
    console.error("Invalid sortOrder or property provided.");
    return 0;
  });
  const sortType = sortOrder === "asc" ? "desc" : "asc";

  return { sortType, sortedItems };
};

export default sortItemsByProperty;
