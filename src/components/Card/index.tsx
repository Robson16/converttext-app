import React, { ReactNode } from "react";
import { Container } from "./styles";

interface CardProps {
  title: string;
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <Container className="card">
      <h2>{title}</h2>
      {children}
    </Container>
  );
}

export default Card;