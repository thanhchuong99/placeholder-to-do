import { useAlbums } from "../../hooks/useAlbums";
import { Container, Content } from "./styles";
export function Album() {
  const { albums } = useAlbums();

  return (
    <Container>
      <Content>
        {albums.map((album) => {
          return (
            <div key={album.id}>
              <p>
                {album.id} - {album.title}
              </p>
            </div>
          );
        })}
      </Content>
    </Container>
  );
}
