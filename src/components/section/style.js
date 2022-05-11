import React from "react";
import styled from "styled-components";


export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 200px;
`;

export const Form = styled.form`
    background-color: #7dbeb8;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 500px;
    border-radius: 10px;
`;

export const Input = styled.input`
    margin: ${props => props.margin};
    border-radius: 5px;
    border: none;
    outline: none;
    height: ${props => props.height};
    padding: 10px;
`

export const Textarea = styled.textarea`
    max-width: 351px;
    min-width: 351px;
    max-height: 173px;
    min-height: 173px;
    outline: none;
    border: none;
    border-radius: 10px;
    padding: 10px;
`