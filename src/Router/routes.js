import AddFolderForm from "../components/Folders/AddFolderForm";
import EditNotes from "../Pages/EditNotes";
import Home from "../Pages/Home";
import Notes from "../Pages/Notes";
import {
  CREATE_FOLDER_ROUTE,
  CREATE_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  NOTES_ROUTE,
  SEARCH_ROUTE,
} from "../utils/constants";

export const routes = [
  {
    path: HOME_ROUTE,
    component: Home,
  },
  {
    path: LOGIN_ROUTE,
  },
  {
    path: CREATE_ROUTE,
    component: EditNotes,
  },
  {
    path: NOTES_ROUTE,
    component: Notes,
  },
  {
    path: SEARCH_ROUTE,
  },
  {
    path: CREATE_FOLDER_ROUTE,
    component: AddFolderForm,
  },
];
