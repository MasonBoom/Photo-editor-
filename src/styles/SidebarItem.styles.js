import styled from "styled-components";

export const SidebarItem = styled.button`
    cursor: pointer;
    border: none;
    outline: none;
    background-color: hsl(265, 100%, 86%);
    padding: 1rem;
    position: relative;
    transition: background-color 150ms;
    &:hover {
       background-color: hsl(265, 100%, 76%);
    }
    &:focus {
        background-color: hsl(265, 100%, 76%);
    }
    &::after {
        content: '';
        position: absolute;
        width: 80%;
        left: 10%;
        bottom: 0;
        height: 1px;
        background-color: hsl(265, 100%, 46%);
    }
    &:last-child {
        &::after {
            display: none;
       }
    }
    &.active {
        background-color: hsl(265, 100%, 66%);
    }
`;