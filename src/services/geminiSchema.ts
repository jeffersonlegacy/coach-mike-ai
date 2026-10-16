/**
 * Strict Gemini API Structured Output Schema Contract (`responseSchema`)
 * Guarantees zero JSON parsing failures for quantitative psychometric graphing.
 */

export interface PsychometricAxes {
  analyticalPrecision: number;
  executionVelocity: number;
  interpersonalEmpathy: number;
  ambiguityTolerance: number;
  systemsAbstraction: number;
  cognitiveResilience: number;
}

export interface CoachingSynthesisPayload {
  schemaVersion: '2026.1-deterministic';
  archetypeTitle: string;
  confidenceScore: number;
  candidateVector: PsychometricAxes;
  targetRoleBenchmark: PsychometricAxes;
  alignmentIndex: number;
  frictionVectors: Array<{
    axis: keyof PsychometricAxes;
    delta: number;
    diagnosticNote: string;
  }>;
  interventions: Array<{
    phase: string;
    protocol: string;
    measurableOutcome: string;
  }>;
}

export const GEMINI_PSYCHOMETRIC_RESPONSE_SCHEMA = {
  type: 'OBJECT',
  required: [
    'schemaVersion',
    'archetypeTitle',
    'confidenceScore',
    'candidateVector',
    'targetRoleBenchmark',
    'alignmentIndex',
    'frictionVectors',
    'interventions',
  ],
  properties: {
    schemaVersion: { type: 'STRING' },
    archetypeTitle: { type: 'STRING' },
    confidenceScore: { type: 'NUMBER' },
    alignmentIndex: { type: 'NUMBER' },
    candidateVector: {
      type: 'OBJECT',
      required: [
        'analyticalPrecision',
        'executionVelocity',
        'interpersonalEmpathy',
        'ambiguityTolerance',
        'systemsAbstraction',
        'cognitiveResilience',
      ],
      properties: {
        analyticalPrecision: { type: 'INTEGER', minimum: 0, maximum: 100 },
        executionVelocity: { type: 'INTEGER', minimum: 0, maximum: 100 },
        interpersonalEmpathy: { type: 'INTEGER', minimum: 0, maximum: 100 },
        ambiguityTolerance: { type: 'INTEGER', minimum: 0, maximum: 100 },
        systemsAbstraction: { type: 'INTEGER', minimum: 0, maximum: 100 },
        cognitiveResilience: { type: 'INTEGER', minimum: 0, maximum: 100 },
      },
    },
  },
} as const;
