import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 700;
`;

const AlertCard = styled.div`
  border-radius: 16px;
  padding: 18px;
  background: ${(props) => props.$bg};
  color: #ffffff;
  min-height: 96px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.12);
`;

const AlertType = styled.span`
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  opacity: 0.9;
`;

const AlertMessage = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
`;

const Empty = styled.div`
  border-radius: 12px;
  padding: 16px;
  background: #f0f2f5;
  color: #45515f;
`;

const COLORS = {
  EXAMEN: "#2f6fed",
  TAREA: "#1f9d55",
  CANCELACION: "#e03a3a",
};

const LABELS = {
  EXAMEN: "Examen",
  TAREA: "Tarea",
  CANCELACION: "Clase cancelada",
};

export default function App() {
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    const handler = (event) => {
      setAlert(event.detail);
    };

    window.addEventListener("academic-alert", handler);
    return () => window.removeEventListener("academic-alert", handler);
  }, []);

  return (
    <Container>
      <Title>Alert Dashboard</Title>
      {alert ? (
        <AlertCard $bg={COLORS[alert.type] || "#2f6fed"}>
          <AlertType>{LABELS[alert.type] || "Alerta"}</AlertType>
          <AlertMessage>{alert.message}</AlertMessage>
        </AlertCard>
      ) : (
        <Empty>No hay alertas activas.</Empty>
      )}
    </Container>
  );
}

