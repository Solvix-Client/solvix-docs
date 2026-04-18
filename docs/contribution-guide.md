---
title: Contribution Guide
---

# Contribution Guide

Thank you for your interest in contributing to Solvix!

This guide will help you understand how to contribute effectively and maintain the quality of the project.

## Why Contribute?

By contributing to Solvix, you help:

- Improve reliability and performance
- Fix bugs and edge cases
- Add new features
- Enhance documentation
- Grow the open-source ecosystem

## Ways to Contribute

You can contribute in multiple ways:

- Reporting bugs
- Suggesting features
- Improving documentation
- Writing tests
- Submitting code improvements

## Getting Started

### 1. Fork the Repository

Click the **Fork** button on GitHub.

### 2. Clone Your Fork

```bash
git clone https://github.com/Solvix-Client/solvix.git
cd solvix
```

### 3. Install Dependencies

```bash
npm install
```

or

```bash
pnpm install
```

---

### 4. Create a Branch

```bash
git checkout -b feature/your-feature-name
```

## Development Guidelines

### Code Style

- Use TypeScript
- Follow existing patterns
- Keep code modular and clean
- Avoid unnecessary dependencies

### Commit Messages

Use clear and descriptive commit messages:

```
feat: add retry backoff strategy
fix: resolve token refresh race condition
docs: update installation guide
```

### Testing

Before submitting:

- Run all tests
- Ensure no regressions
- Test edge cases

## Pull Request Process

1. Push your branch:

```bash
git push origin feature/your-feature-name
```

2. Open a Pull Request
3. Add a clear description
4. Link related issues (if any)

## PR Guidelines

- Keep PRs focused and small
- Add explanation of changes
- Include examples if needed
- Update docs if required

## Code Review Process

Your PR will be reviewed for:

- Code quality
- Performance impact
- Compatibility
- Documentation

You may be asked to make changes before merging.

## Issue Guidelines

When creating an issue:

- Provide clear description
- Include reproduction steps
- Add screenshots/logs if needed

## Project Structure Overview

```
src/
  client/
  core/
  retry/
  rate-limit/
  circuit-breaker/
  token-refresh/
  utils/
```

## Best Practices

- Write readable code
- Avoid breaking existing APIs
- Keep performance in mind
- Add comments where necessary

## Community

- Be respectful
- Provide constructive feedback
- Help others

## Release Flow (Simplified)

- Development happens on `dev` branch
- Releases are prepared in `release/*`
- Final code is merged into `main`

## Final Note

Every contribution matters.

Even small improvements help make Solvix better for everyone.

## Thank You

Thanks for being part of the Solvix journey 🚀
