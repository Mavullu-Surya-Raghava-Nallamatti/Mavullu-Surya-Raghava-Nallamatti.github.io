# Contact Flow Audit

## Date
2026-08-08

## Issue
The portfolio contact actions were failing to open a usable email draft from the deployed site. The page used a fragile mailto flow and still exposed outdated contact references.

## Changes made
- Updated the hero button to open a Gmail compose window directly.
- Updated the contact section email link to use the new Gmail address.
- Replaced the contact form submission with a script-driven compose flow that pre-fills the draft with the entered values.
- Added a helper module for mailto and Gmail compose URL generation.
- Added regression tests for the compose URL generation.

## Files changed
- portfolio/index.html
- portfolio/script.js
- portfolio/contact-utils.js
- portfolio/contact-utils.test.js
- portfolio/files folder/Surya_Nallamatti_Resume.md

## Verification
- Ran: node --test contact-utils.test.js
- Result: 3 tests passed, 0 failed
