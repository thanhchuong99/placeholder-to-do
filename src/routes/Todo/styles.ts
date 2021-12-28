import { transparentize } from "polished";
import styled from "styled-components";

interface InputBoxProps{
    isActive: boolean;
    activeColor: 'green' | 'red';
}

const colors = {
    green: '#E52E4D',
    red: '#33CC95'
};

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    grid-gap: 16px;

    max-width: 1120px;
    margin: 0 auto;
    padding: 2.5rem 1rem;
`;

export const InputBox = styled.span<InputBoxProps>`
    padding: 0.3rem 1rem;
    background: ${(props)=> props.isActive 
    ? transparentize(0.6, colors['green']) 
    : transparentize(0.6, colors['red']) };
    border: hidden;

    border-radius: 0.35rem;
    box-shadow: 0px 6px 6px 2px #363f5f54;
    
    transition: filter 0.2s;
    &:hover {
        filter: brightness(0.9);
        cursor: pointer;
        box-shadow: 0px 3px 6px 2px #363f5f54;
    }

    p:first-letter, h4:first-letter  {
        text-transform: uppercase;
    }
`;


interface SpinnerProps{
    isLoading: boolean;
}

export const Spinner = styled.div<SpinnerProps>`
    position: absolute;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    left: 0;
    top: 0;
    align-items: center;
    z-index:99;
    cursor: wait;
    background: #cccccc61;

    display:${(props)=> props.isLoading 
    ? 'flex'
    : 'none' };

    .loader,
    .loader:after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
    }
    .loader {
    margin: 0 auto;
    font-size: 10px;
    position: relative;
    text-indent: -9999em;
    border-top: 1.1em solid rgba(255, 255, 255, 0.2);
    border-right: 1.1em solid rgba(255, 255, 255, 0.2);
    border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
    border-left: 1.1em solid #ffffff;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: load8 1.1s infinite linear;
    animation: load8 1.1s infinite linear;
    }
    @-webkit-keyframes load8 {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
    }
    @keyframes load8 {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
    }
`