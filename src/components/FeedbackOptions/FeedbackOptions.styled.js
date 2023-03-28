import styled from "styled-components";

export const Container = styled.div`
display: flex;
gap: 10px;
margin-top: 30px;
padding-left: 20px;
`

export const Button = styled.button`
font-size: 18px;
padding: 5px 10px;
border: 1px solid black;
border-radius: 5px;
cursor: pointer;

&:hover {
    background-color: lightblue;
}
`