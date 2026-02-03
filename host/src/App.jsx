import React, { Suspense } from "react";
import styled from "styled-components";

const AlertSender = React.lazy(() => import("alert_sender/App"));
const AlertDashboard = React.lazy(() => import("alert_dashboard/App"));

const Page = styled.div`
  min-height: 100vh;
  padding: 32px;
  background: linear-gradient(140deg, #f7f7f2 0%, #e8eef6 100%);
  color: #1a1a1a;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const Title = styled.h1`
  margin: 0 0 8px;
  font-size: 28px;
  font-weight: 700;
`;

const Subtitle = styled.p`
  margin: 0 0 24px;
  color: #3d4958;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
`;

const Panel = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
`;

const Loading = styled.div`
  padding: 12px 0;
  color: #5c6b7a;
`;

export default function App() {
  return (
    <Page>
      <Title>Sistema de Alertas Académicas</Title>
      <Subtitle>Host de microfrontends (sin lógica de negocio)</Subtitle>
      <Grid>
        <Panel>
          <Suspense fallback={<Loading>Cargando Alert Sender...</Loading>}>
            <AlertSender />
          </Suspense>
        </Panel>
        <Panel>
          <Suspense fallback={<Loading>Cargando Alert Dashboard...</Loading>}>
            <AlertDashboard />
          </Suspense>
        </Panel>
      </Grid>
    </Page>
  );
}
