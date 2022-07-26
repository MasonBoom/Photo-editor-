import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
	grid-template-rows: 1fr auto;
	grid-template-areas: "image sidebar" "slider sidebar";
	height: 100vh;
	width: 100vw;
	background-color: plum;
`;

export const MainImage = styled.div`
    width: 100%;
    height: auto;
    background-position: top center;
    background-size: contain;
    background-repeat: no-repeat;
    margin-top: 20px;
`;

export const SideBar = styled.div`
    grid-area: sidebar;
	background-color: hsl(265, 100%, 86%);
	border-left: 1px solid hsl(265, 100%, 56%);
	display: flex;
	flex-direction: column;
	align-items: stretch;
`;
