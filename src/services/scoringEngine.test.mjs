import assert from 'node:assert/strict';

function computeAlignmentIndex(candidate, benchmark) {
  const keys = Object.keys(candidate);
  const totalDiff = keys.reduce((s, k) => s + Math.abs(candidate[k] - benchmark[k]), 0);
  return Math.max(0, Math.min(100, Math.round(100 - totalDiff / keys.length)));
}

const vec = { a: 90, b: 85, c: 80, d: 88, e: 92, f: 86 };
assert.equal(computeAlignmentIndex(vec, vec), 100);
console.log('Coach Mike AI scoringEngine unit tests passed.');
