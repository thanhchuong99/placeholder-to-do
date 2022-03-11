import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from "react";
import { placeholder } from "../api/api";
import { useUser } from "./userContext";

interface Album {
  userId: number;
  id: number;
  title: string;
}

interface AlbumsProviderProps {
  children: ReactNode;
}

interface AlbumsContextData {
  albums: Album[];
}

const AlbumsContext = createContext<AlbumsContextData>({} as AlbumsContextData);

export function AlbumsProvider({ children }: AlbumsProviderProps) {
  const [albums, setAlbums] = useState<Album[]>([]);
  const { user } = useUser();

  useEffect(() => {
    placeholder
      .get(`/users/${user.userId}/albums`)
      .then((response) => setAlbums(response.data));
  }, [user]);

  return (
    <AlbumsContext.Provider value={{ albums }}>
      {children}
    </AlbumsContext.Provider>
  );
}

export function useAlbums() {
  const context = useContext(AlbumsContext);

  return context;
}
