import React from "react";
import { Container } from "./styles";

type Props = {
  icon: React.ReactElement; // ReactElement é uma maneira de aceitar componentes React como propriedades.
  label: string;
};

export default function Menu({ icon, label }: Props) {
  return (
    <Container>
        {icon}
        <p>{label}</p>
    </Container>
  );
}
