import styled from "styled-components";

export const Container = styled.header`
    background: var(--purple);
    width: 100%;
    padding: 1rem 5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 600px){
        padding: 1rem;
    }
`;

export const Content = styled.div`
    padding: 2rem 1rem 2rem;
    display: flex;
    width: 100%;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
    
    @media (max-width: 600px){
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 16px;
    }
    a, button{
        font-size: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.5rem 2rem;
        border-radius: 0.35rem;
        background: var(--gray-light);
        border: hidden;
        box-shadow: 4px 4px 10px 0px #363f5f7a;
        text-decoration: none;  
        color:  var(--text-title)

        transition: filter 0.2s;
        &:hover {
            box-shadow: 4px 4px 6px 0px #363f5f7a;
            filter: brightness(0.9);
            cursor: pointer;
        }
        svg{
            margin-right: 10px;
        }
    }

    select{
        margin-left: 1rem;
        padding: 0.6rem;
        border: hidden;
        border-radius: 0.35rem;
        outline: none;
        font-size: 0.8rem;
    }
`;