export interface IFoldersItem {
  id: number;
  parentId?: number;
  name: string;
}

export interface IFolder {
  folder: [{ id: number; parentId?: number; name: string }];
}
