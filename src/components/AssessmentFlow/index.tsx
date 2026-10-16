import React from 'react';
import type { PsychometricAxes } from '../../services/geminiSchema';

export interface AssessmentFlowProps {
  vector: PsychometricAxes;
  onChangeAxis: (axis: keyof PsychometricAxes, value: number) => void;
}

export const AssessmentFlow: React.FC<AssessmentFlowProps> = ({
  vector,
  onChangeAxis,
}) => {
  return (
    <section className="assessment-flow">
      {(Object.keys(vector) as Array<keyof PsychometricAxes>).map((axis) => (
        <label key={axis}>
          <span>{axis}</span>
          <input
            type="range"
            min={0}
            max={100}
            value={vector[axis]}
            onChange={(e) => onChangeAxis(axis, Number(e.target.value))}
          />
        </label>
      ))}
    </section>
  );
};
