import { Container, Content } from "./styles";
import { CgComment, CgCheckR, CgPlayButtonR, CgHome } from "react-icons/cg";
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useUser } from "../../hooks/userContext";

export function Header() {
  const { updateUserLogged } = useUser();

  function handleUpdatLoggedUser(selectedUser: number) {
    updateUserLogged(selectedUser);
  }

  return (
    <Container>
      <Content>
        <div>
          <Link to="/">
            <CgHome /> Info
          </Link>
        </div>
        <div>
          <Link to="/todo">
            <CgCheckR /> TO-DOs
          </Link>
        </div>
        <div>
          <Link to="/posts">
            <CgComment /> Posts
          </Link>
        </div>
        <div>
          <Link to="/albums">
            <CgPlayButtonR /> Albums
          </Link>
        </div>
        <label>
          <BiUser /> User
          <select
            onChange={(event) =>
              handleUpdatLoggedUser(parseInt(event.target.value))
            }
          >
            <option className="teste" value="1">
              Mrs. 1
            </option>
            <option className="teste" value="2">
              Mr. 2
            </option>
            <option value="3">Mr. 3</option>
            <option value="4">Mrs. 4</option>
          </select>
        </label>
      </Content>
    </Container>
  );
}
