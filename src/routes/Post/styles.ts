import styled from "styled-components";

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(23rem, 1fr));
  grid-gap: 16px;

    max-width: 1120px;
    margin: 0 auto;
    padding: 2.5rem 1rem;

    div{
        padding: 0.3rem 1rem;
        background: var(--blue-light);
        border: hidden;

        border-radius: 0.35rem;
        box-shadow: 0px 1px 3px 2px #363f5f54;
        
        transition: filter 0.2s;
        &:hover {
            filter: brightness(0.9);
            cursor: pointer;
            box-shadow: 0px 3px 6px 2px #363f5f54;
        }

        p:first-letter, h4:first-letter  {
            text-transform: uppercase;
        }
    }
`;