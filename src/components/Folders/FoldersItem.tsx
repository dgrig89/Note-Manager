import React, { useState } from "react";
import SubFolderItem from "./SubFolderItem";
export type Item = {
  selected: boolean;
  id: number;
  name: string;
  parentId: number;
  level: number;
  item: Item[];
};
export type child = {
  id: number;
  parentId: number;
  name: string;
};

const FoldersItem: React.FC<Item> = ({ item, level }) => {
  const [selected, setSelected] = useState<boolean>(item.selected ?? false);
  const hasSubfolder = item.parentId && item.parentId !== undefined;
  const renderDirectories = () => {
    if (hasSubfolder) {
      const nextLevel = level + 1;

      return item.map((child) => {
        return <FoldersItem key={child.id} item={child} level={nextLevel} />;
      });
    }
    return null;
  };

  const toggleHandler = () => {
    setSelected((prev) => !prev);
  };

  return (
    <li>
      <div>
        <SubFolderItem
          item={item}
          level={level}
          selected={selected}
          onToggle={toggleHandler}
        />
      </div>
      {selected && renderDirectories()}
    </li>
  );
};

export default FoldersItem;
