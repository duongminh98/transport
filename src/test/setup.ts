/*
Test-generation note (Oct 22, 2025):
- Scope: generate tests only for files in git diff against base 'main'.
- Result: No changed files (git diff --name-only main..HEAD returned empty; HEAD=89debed, main=8cef567).
- Action: No tests added in this change. Documenting rationale per automation rules.
*/
import '@testing-library/jest-dom';