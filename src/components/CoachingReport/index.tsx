import React from 'react';
import type { CoachingSynthesisPayload } from '../../services/geminiSchema';

export const CoachingReport: React.FC<{ payload: CoachingSynthesisPayload }> = ({
  payload,
}) => {
  return (
    <section className="coaching-report">
      <h4>Structured Action Plan</h4>
      <ul>
        {payload.interventions.map((item) => (
          <li key={item.phase}>
            <strong>{item.phase}:</strong> {item.protocol} ({item.measurableOutcome})
          </li>
        ))}
      </ul>
    </section>
  );
};
