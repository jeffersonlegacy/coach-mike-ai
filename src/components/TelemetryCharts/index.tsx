import React from 'react';
import type { CoachingSynthesisPayload } from '../../services/geminiSchema';

export const TelemetryCharts: React.FC<{ payload: CoachingSynthesisPayload }> = ({
  payload,
}) => {
  return (
    <section className="telemetry-charts">
      <h3>{payload.archetypeTitle}</h3>
      <p>Alignment Index: {payload.alignmentIndex}%</p>
      <canvas id="psychometric-radar-canvas" />
    </section>
  );
};
