# AI-Copilot Integration Instructions

## Overview
This repository is integrated with an AI-powered assistant system that can execute tasks, analyze code, and help with development workflows.

## How to Communicate with the AI Assistant

When you need the AI assistant to perform tasks on this repository, use the following patterns:

### Pattern 1: Direct Task Execution
```
@copilot execute: [your task description]
```

Example:
```
@copilot execute: analyze all components in src/ and create documentation
```

### Pattern 2: Code Analysis
```
@copilot analyze: [what to analyze]
```

Example:
```
@copilot analyze: check for security vulnerabilities in dependencies
```

### Pattern 3: File Operations
```
@copilot file: [operation] [path]
```

Example:
```
@copilot file: create src/components/NewComponent.astro
```

## Supported Commands

- `execute`: Run automated tasks
- `analyze`: Perform code analysis
- `file`: File operations (create, update, delete)
- `test`: Run tests and report results
- `deploy`: Deployment operations
- `refactor`: Code refactoring suggestions
- `document`: Generate documentation

## Integration Points

1. **GitHub Issues**: Tag issues with `ai-task` label to queue for AI processing
2. **Pull Requests**: Comment with `@copilot review` for automated code review
3. **Commits**: Use commit messages with `[ai-execute]` prefix for post-commit automation

## Configuration

The AI assistant respects the following configuration files:
- `.copilot/config.json` - Main configuration
- `.copilot/rules.md` - Custom rules and guidelines
- `.github/workflows/` - CI/CD integration

## Examples

### Example 1: Documentation Generation
```
@copilot execute: generate API documentation for all exported functions in src/lib/
```

### Example 2: Code Quality Check
```
@copilot analyze: find unused imports and dead code
```

### Example 3: Component Creation
```
@copilot file: create src/components/BlogCard.astro with props for title, date, and excerpt
```

## Best Practices

1. Be specific in your task descriptions
2. Reference file paths when applicable
3. Use labels and tags for better organization
4. Review AI-generated changes before merging

## Limitations

- The AI cannot access external systems without proper authentication
- Sensitive operations require manual approval
- Large-scale refactoring should be reviewed carefully

---

**Note**: This integration is designed to enhance productivity while maintaining code quality and security standards.
