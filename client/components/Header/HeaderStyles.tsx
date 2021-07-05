import styled from "styled-components";

export const HeaderBox = styled.div`
  height: 5rem;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const SiteLogo = styled.div`
  font-size: 3rem;
  color: #f5f5f5;
  margin: 1rem;
`;
export const MenuOptions = styled.div`
  display: flex;
  margin: 1rem;
  color: #f5f5f5;
`;
export const MenuOption = styled.a`
  opacity: 0.8;
  font-size: 2rem;
  margin: 0 1rem;
  cursor: pointer;
  transition: opacity 0.3s linear;
  &:hover {
    opacity: 1;
  }
`;
