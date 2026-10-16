import React, { useState, useMemo } from 'react';
import type { PsychometricAxes } from './services/geminiSchema';
import { synthesizePsychometricPayload } from './services/scoringEngine';
import { AssessmentFlow } from './components/AssessmentFlow';
import { TelemetryCharts } from './components/TelemetryCharts';
import { CoachingReport } from './components/CoachingReport';

export function App() {
  const [candidate, setCandidate] = useState<PsychometricAxes>({
    analyticalPrecision: 92,
    executionVelocity: 88,
    interpersonalEmpathy: 85,
    ambiguityTolerance: 90,
    systemsAbstraction: 94,
    cognitiveResilience: 89,
  });

  const benchmark: PsychometricAxes = {
    analyticalPrecision: 85,
    executionVelocity: 85,
    interpersonalEmpathy: 80,
    ambiguityTolerance: 85,
    systemsAbstraction: 88,
    cognitiveResilience: 85,
  };

  const payload = useMemo(
    () => synthesizePsychometricPayload(candidate, benchmark),
    [candidate]
  );

  return (
    <main className="coach-mike-shell">
      <AssessmentFlow
        vector={candidate}
        onChangeAxis={(axis, value) =>
          setCandidate((prev) => ({ ...prev, [axis]: value }))
        }
      />
      <TelemetryCharts payload={payload} />
      <CoachingReport payload={payload} />
    </main>
  );
}

export default App;
