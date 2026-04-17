import styled from "styled-components";

export const Title = styled.h1`
    font-size: 40px;
    color: black;
    display: block;
    transition: all .4s ease;
`;
export const Button = styled.button`
    font-size: 20px;
    color: black;
    padding: 10px 20px;
    border-radius: 14px;
    background-color: aliceblue;
    border: 1px solid #ccc;
    display: inline-block;
    transition: all .4s ease;

    &:hover {
        background-color: #ccc;
    }
`