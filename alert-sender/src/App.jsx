import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 700;
`;

const Description = styled.p`
  margin: 0;
  color: #4d5966;
`;

const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const Button = styled.button`
  border: none;
  border-radius: 12px;
  padding: 12px 18px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 120ms ease, box-shadow 120ms ease;
  background: ${(props) => props.$bg};
  color: #ffffff;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.12);

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.16);
  }
`;

const ALERTS = {
  EXAMEN: {
    label: "Examen",
    message: "Se ha programado un examen para esta semana.",
    color: "#2f6fed",
  },
  TAREA: {
    label: "Tarea",
    message: "Nueva tarea asignada con entrega el viernes.",
    color: "#1f9d55",
  },
  CANCELACION: {
    label: "Clase cancelada",
    message: "La clase de hoy ha sido cancelada.",
    color: "#e03a3a",
  },
};

const dispatchAlert = (type) => {
  const detail = { type, message: ALERTS[type].message };
  window.dispatchEvent(new CustomEvent("academic-alert", { detail }));
};

export default function App() {
  return (
    <Container>
      <Title>Alert Sender</Title>
      <Description>Emite alertas académicas al sistema.</Description>
      <ButtonRow>
        {Object.entries(ALERTS).map(([key, config]) => (
          <Button key={key} $bg={config.color} onClick={() => dispatchAlert(key)}>
            {config.label}
          </Button>
        ))}
      </ButtonRow>
    </Container>
  );
}
