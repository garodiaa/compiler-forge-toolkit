## Compiler Forge Toolkit

![Version](https://img.shields.io/badge/version-1.0.0-D32F2F?style=flat)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white&style=flat)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black&style=flat)
![Tailwind](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?logo=tailwindcss&logoColor=white&style=flat)
![DaisyUI](https://img.shields.io/badge/DaisyUI-FF69B4?style=flat)
[![Netlify Status](https://api.netlify.com/api/v1/badges/6bcdb1fc-093e-4e49-8f4f-c8ce355f7717/deploy-status)](https://app.netlify.com/projects/compiler-forge/deploys)

## A web-based companion for compiler design learning.

### **Live site**: https://compiler-forge.netlify.app

### Overview

Compiler Forge Toolkit converts theoretical compiler design steps—left recursion elimination, left factoring, First/Follow computation—into instant, structured calculations. Built as part of a Compiler Design course, it minimizes handwritten mistakes and frees students to focus on conceptual understanding rather than repetitive algebra.

### Purpose

- implement core compiler construction algorithms in practice
- provide real-time feedback for grammar transformations
- reduce manual calculation errors
- bridge mathematical theory with interactive UI/UX
- act as a learning aid rather than a black-box calculator

### Problems Addressed

- eliminating direct and indirect left recursion
- performing accurate left factoring
- computing First and Follow sets for LL(1) parsing
- managing complex grammar inputs without confusion
- debugging lengthy manual derivations

### Core Functionalities

- **Left Recursion Elimination**: auto-detects and resolves recursion in grammar rules
- **Left Factoring**: restructures ambiguous grammar fragments for predictive parsing
- **First & Follow Sets**: computes sets needed for LL(1) table construction
- **Real-Time Output**: delivers formatted results instantly as users input grammar

### Educational Focus

Designed explicitly for compiler coursework, reinforcing classroom theory with deterministic JavaScript implementations and visual outputs.

### Technology Stack

| Technology | Purpose |
| --- | --- |
| HTML5 | Layout and structure |
| JavaScript | Algorithm logic and parsing |
| Tailwind CSS | Styling |
| DaisyUI | Component library |
| Netlify | Deployment and hosting |

### Implementation Philosophy

- deterministic JavaScript algorithms mirroring textbook steps
- structured grammar parsing and validation
- live UI updates with clearly separated result sections

### Impact

- reduces computational errors and saves study time
- strengthens understanding through immediate verification
- encourages experimentation with diverse grammars
- serves as a validation assistant before exams or labs

### Academic Context

Developed for the Compiler Design course to demonstrate mastery of grammar transformations, parsing logic, and the translation of theory-heavy concepts into an interactive web toolkit.
