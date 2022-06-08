export interface FoldersType {
  id: number;
  parentId: number | null;
  name: string;
  children: FoldersType[];
  hasChild: boolean;
}
