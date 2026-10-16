import type {
  PsychometricAxes,
  CoachingSynthesisPayload,
} from './geminiSchema';

export function computeAlignmentIndex(
  candidate: PsychometricAxes,
  benchmark: PsychometricAxes
): number {
  const keys = Object.keys(candidate) as Array<keyof PsychometricAxes>;
  const totalDiff = keys.reduce(
    (sum, k) => sum + Math.abs(candidate[k] - benchmark[k]),
    0
  );
  const meanDiff = totalDiff / keys.length;
  return Math.max(0, Math.min(100, Math.round(100 - meanDiff)));
}

export function synthesizePsychometricPayload(
  candidate: PsychometricAxes,
  benchmark: PsychometricAxes
): CoachingSynthesisPayload {
  const alignmentIndex = computeAlignmentIndex(candidate, benchmark);
  const keys = Object.keys(candidate) as Array<keyof PsychometricAxes>;

  const frictionVectors = keys
    .map((axis) => ({
      axis,
      delta: candidate[axis] - benchmark[axis],
      diagnosticNote:
        candidate[axis] >= benchmark[axis]
          ? `Surplus capacity (+${candidate[axis] - benchmark[axis]} pts) — leverage for architecture ownership.`
          : `Calibration gap (${candidate[axis] - benchmark[axis]} pts) — mitigate via structured checklists.`,
    }))
    .sort((a, b) => Math.abs(b.delta) - Math.abs(a.delta))
    .slice(0, 3);

  const archetypeTitle =
    candidate.systemsAbstraction >= 85 && candidate.executionVelocity >= 80
      ? 'High-Velocity Systems Architect'
      : candidate.interpersonalEmpathy >= 85
      ? 'Forward-Deployed Cognitive Strategist'
      : 'Deterministic Analytical Operator';

  return {
    schemaVersion: '2026.1-deterministic',
    archetypeTitle,
    confidenceScore: 0.98,
    candidateVector: candidate,
    targetRoleBenchmark: benchmark,
    alignmentIndex,
    frictionVectors,
    interventions: [
      {
        phase: 'Phase 1 · Cognitive Load Calibration',
        protocol: 'Externalize ambiguous stakeholder asks into typed JSON contracts within 15 minutes of intake.',
        measurableOutcome: 'Eliminates mid-sprint scope drift and reduces context-switching overhead by 40%.',
      },
      {
        phase: 'Phase 2 · Interpersonal Telemetry Loop',
        protocol: 'Pair high-velocity code drops with 90-second visual demos and explicit tradeoff notes.',
        measurableOutcome: 'Accelerates cross-functional design/product sign-off within a single review cycle.',
      },
    ],
  };
}
