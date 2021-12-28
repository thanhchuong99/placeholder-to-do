import styled from "styled-components";

export const Content = styled.span`
    max-width: 1120px;
    margin: 0 auto;
    border-radius: 0.35rem;
    box-shadow: 7px 7px 10px 5px #363f5f54;

    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.5rem 2rem;
        background: var(--blue-light);
        border: hidden;
        
        transition: filter 0.2s;
        &:hover {
            filter: brightness(0.9);
            cursor: pointer;
        }
    }
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(23rem, 1fr));
    grid-gap: 16px;

    max-width: 1120px;
    margin: 0 auto;
    padding: 2.5rem 1rem;
`;