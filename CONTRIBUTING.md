# Contributing to Dhamma Mirror

Thank you for your interest in contributing to Dhamma Mirror. Before you begin, please read this guide and our [MANIFESTO.md](MANIFESTO.md).

---

## The Most Important Thing

**Dhamma Mirror is a mirror, not a guru.**

Before contributing anything, ask yourself:

> "Does this help someone see more clearly?"

If yes, proceed.  
If no, reconsider.  
If "it helps them feel better" — that's not our purpose.

---

## What We Need

### High Priority

| Area | What We Need |
|------|--------------|
| **Static Flows** | More question flows for different situations (anger, grief, anxiety) |
| **Pali Dictionary** | Additional terms with proper attribution |
| **Translations** | Especially crisis resources in different languages |
| **Accessibility** | Screen reader improvements, keyboard navigation |
| **Testing** | Unit tests, integration tests |

### Medium Priority

| Area | What We Need |
|------|--------------|
| **Documentation** | Clearer explanations, more examples |
| **UX Improvements** | Simpler flows, better mobile experience |
| **Bug Fixes** | See Issues tab |

### Low Priority (Proceed with Caution)

| Area | Notes |
|------|-------|
| **New Features** | Less is often more. Read the manifesto first. |
| **AI Improvements** | The system prompt is carefully crafted. Changes need discussion. |

---

## What We Don't Want

Please **do not** submit PRs that:

- ❌ Add gamification (streaks, points, badges, achievements)
- ❌ Add social features (sharing, following, comparing)
- ❌ Add engagement tracking
- ❌ Add notifications
- ❌ Give advice instead of asking questions
- ❌ Claim to teach meditation technique
- ❌ Reproduce copyrighted content (VRI publications, discourses)

These will be closed without merge.

---

## Before You Start

### 1. Read the Manifesto

Seriously. Read [MANIFESTO.md](MANIFESTO.md). It explains why we do things the way we do.

### 2. Check Existing Issues

Someone may already be working on what you want to do.

### 3. Open a Discussion First

For anything significant, open a GitHub Discussion before starting work. This saves everyone time.

### 4. Understand the Philosophy

| Principle | What It Means for Code |
|-----------|------------------------|
| Questions, not answers | AI should ask, not tell |
| Body first | Always check somatic state before mental analysis |
| Protect the pause | Don't rush users through flows |
| Know our limits | Direct to human support when needed |
| Respect the tradition | Attribute sources, link to dhamma.org |

---

## Development Setup

### Prerequisites

- Node.js 18+
- npm or yarn

### Getting Started

```bash
# Clone your fork
git clone https://github.com/YOUR-USERNAME/dhamma-mirror.git
cd dhamma-mirror

# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

# Build for production
npm run build
```

### Project Structure

```
dhamma-mirror/
├── src/
│   ├── pages/           # Main page components
│   ├── components/      # Reusable UI components
│   ├── features/        # Feature-specific modules
│   ├── lib/             # Utilities and helpers
│   ├── content/         # Static content (dictionary, flows)
│   └── styles/          # Global styles
├── docs/                # Documentation
└── public/              # Static assets
```

---

## Contribution Types

### 1. Static Question Flows

These are the pre-written question sequences that work without AI.

**Location:** `src/content/staticFlows/`

**Format:**
```json
{
  "id": "flow-name",
  "name": "Display Name",
  "description": "When to use this flow",
  "steps": [
    {
      "id": "step-1",
      "type": "question",
      "content": "The question text",
      "options": [
        { "label": "Option A", "value": "a", "next": "step-2a" },
        { "label": "Option B", "value": "b", "next": "step-2b" }
      ]
    }
  ]
}
```

**Guidelines:**
- Always start with a body check
- Questions, not advice
- Include "I'm not sure" options
- End with grounding/closing
- Test the flow yourself first

### 2. Pali Dictionary Terms

**Location:** `src/content/paliDictionary.ts`

**Format:**
```typescript
{
  term: 'pali-word',
  pronunciation: 'pronunciation-guide',
  meaning: 'Clear definition',
  etymology: 'Word roots',
  relatedTerms: ['related', 'terms'],
  suttas: [
    { reference: 'MN 10', context: 'How it appears' }
  ],
  practiceRelevance: 'Why it matters for practice',
  category: 'category-name',
  goenkaEmphasis: 'Optional: tradition-specific note'
}
```

**Guidelines:**
- Use public domain sources (Nyanatiloka, PTS Dictionary)
- Always include sutta references
- Write practice relevance in plain English
- Goenka notes must be in your own words (not copied from VRI)

### 3. Documentation

- Fix typos, improve clarity
- Add examples
- Improve accessibility of language
- Translate (especially crisis resources)

### 4. Code

- Follow existing patterns
- Write tests for new functionality
- Keep components small and focused
- Use TypeScript properly

---

## Pull Request Process

### 1. Fork and Branch

```bash
git checkout -b feature/your-feature-name
```

Use prefixes:
- `feature/` — New functionality
- `fix/` — Bug fixes
- `docs/` — Documentation
- `content/` — Dictionary, flows, etc.

### 2. Make Your Changes

- Follow the code style
- Test your changes
- Update documentation if needed

### 3. Commit Messages

Use clear, descriptive commit messages:

```
Add grief processing flow

- Includes body check at start
- Covers loss of person, relationship, identity
- Links to relevant suttas
- Emphasizes human support
```

### 4. Submit PR

- Fill out the PR template
- Link any related issues
- Explain what and why

### 5. Review Process

- Maintainers will review within a week
- Be open to feedback
- Philosophy-related changes need careful discussion

---

## Code Style

### TypeScript

```typescript
// Use explicit types
function processFlow(flowId: string): FlowResult {
  // ...
}

// Use interfaces for objects
interface FlowStep {
  id: string;
  type: 'question' | 'message' | 'pause';
  content: string;
}
```

### React Components

```tsx
// Functional components with TypeScript
interface Props {
  title: string;
  onComplete: () => void;
}

export function FlowStep({ title, onComplete }: Props) {
  return (
    // JSX
  );
}
```

### CSS (Tailwind)

- Use Tailwind utilities
- Keep it simple and readable
- Mobile-first approach

---

## Testing

### Running Tests

```bash
npm test           # Run all tests
npm test:watch     # Watch mode
npm test:coverage  # Coverage report
```

### What to Test

- Static flows: Test all paths
- Components: Test rendering and interactions
- Utilities: Test edge cases

---

## Content Guidelines

### Language

- Australian English spelling
- Plain language (avoid jargon)
- Compassionate tone
- No spiritual claims we can't support

### Pali Terms

- Always include pronunciation
- Use diacritics correctly (ā, ī, ū, ṃ, ṅ, ñ, ṭ, ḍ, ṇ, ḷ)
- Link to authoritative sources

### Crisis Resources

- Always include multiple options
- Use official numbers only
- Update if numbers change
- Add translations for new languages

---

## Questions?

- **General questions:** Open a GitHub Discussion
- **Bug reports:** Open an Issue
- **Security issues:** Email mani@manipadisetti.com directly

---

## Recognition

Contributors are acknowledged in:
- ATTRIBUTION.md
- Release notes
- The app's About section (for significant contributions)

---

## Code of Conduct

Be kind. Be patient. Be helpful.

Remember: This project exists to help people in difficult moments. Let's treat each other with the same care we want to offer users.

---

*Thank you for helping make Dhamma Mirror better.*

*Sabbē sattā sukhī hontu*  
*May all beings be happy.*
