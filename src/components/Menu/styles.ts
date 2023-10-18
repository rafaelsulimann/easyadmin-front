import styled from "styled-components";

export const Container = styled.li`
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  border-radius: 4px;

  p {
    font-size: 16px;
    color: #eaeaea;
  }

  cursor: pointer;

  &:hover {
    background-color: #464646; // Você pode escolher a cor que preferir aqui.
  }
`;
