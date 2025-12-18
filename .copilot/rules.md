# AI-Copilot Custom Rules and Guidelines

## Code Quality Standards

### General Principles
1. **Readability First**: Code should be self-documenting and easy to understand
2. **DRY Principle**: Don't Repeat Yourself - avoid code duplication
3. **SOLID Principles**: Follow object-oriented design principles
4. **Consistent Formatting**: Use Prettier and ESLint configurations

### File Organization
- Components should be in `src/components/`
- Layouts should be in `src/layouts/`
- Pages should be in `src/pages/`
- Utilities should be in `src/lib/` or `src/utils/`
- Styles should be scoped to components when possible

### Naming Conventions
- **Files**: Use PascalCase for components (e.g., `BlogCard.astro`)
- **Variables**: Use camelCase (e.g., `blogPosts`, `userName`)
- **Constants**: Use UPPER_SNAKE_CASE (e.g., `API_URL`, `MAX_POSTS`)
- **Types/Interfaces**: Use PascalCase (e.g., `BlogPost`, `UserData`)

## Astro-Specific Rules

### Component Structure
```astro
---
// 1. Imports first
import Component from './Component.astro';

// 2. Props and type definitions
interface Props {
  title: string;
  content: string;
}

const { title, content } = Astro.props;

// 3. Logic and data fetching
const processedContent = await processMarkdown(content);
---

<!-- 4. HTML template -->
<div class="component">
  <h2>{title}</h2>
  <div>{processedContent}</div>
</div>

<!-- 5. Styles (scoped) -->
<style>
  .component {
    /* styles */
  }
</style>
```

### Performance Guidelines
1. Use `client:load` directives sparingly
2. Prefer `client:visible` or `client:idle` for non-critical components
3. Optimize images using Astro's Image component
4. Minimize bundle size by code-splitting

## Security Rules

### Input Validation
- Always validate and sanitize user inputs
- Use TypeScript types to enforce data structures
- Never trust data from external sources

### Sensitive Data
- Never commit API keys, tokens, or credentials
- Use environment variables for sensitive configuration
- Keep `.env` files in `.gitignore`

### Dependencies
- Regularly update dependencies
- Review security advisories
- Use `npm audit` or `pnpm audit` before commits

## Testing Requirements

### Unit Tests
- Test all utility functions
- Aim for >80% code coverage
- Use descriptive test names

### Integration Tests
- Test critical user flows
- Verify component interactions
- Test API endpoints

### E2E Tests
- Test main user journeys
- Verify responsive behavior
- Test across different browsers

## Documentation Standards

### Code Comments
```typescript
/**
 * Fetches blog posts from the API
 * @param limit - Maximum number of posts to fetch
 * @returns Array of blog post objects
 */
async function fetchBlogPosts(limit: number): Promise<BlogPost[]> {
  // Implementation
}
```

### README Files
- Include setup instructions
- Document environment variables
- Provide usage examples
- List dependencies and requirements

## Git Workflow

### Commit Messages
Follow conventional commits format:
```
type(scope): subject

body (optional)

footer (optional)
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code formatting
- `refactor`: Code restructuring
- `test`: Test additions/changes
- `chore`: Maintenance tasks

### Branch Naming
- `feature/` for new features
- `fix/` for bug fixes
- `hotfix/` for urgent fixes
- `refactor/` for code improvements

## AI-Specific Directives

### Automated Tasks
The AI should:
1. Always create a backup before major refactoring
2. Run tests after code modifications
3. Update documentation when changing APIs
4. Generate changelog entries for significant changes

### Review Criteria
Before approving AI-generated code:
- [ ] Code follows naming conventions
- [ ] No security vulnerabilities introduced
- [ ] Tests are included
- [ ] Documentation is updated
- [ ] Performance impact is acceptable

### Prohibited Actions
The AI must NOT:
- Delete files without explicit confirmation
- Modify configuration files without review
- Execute deployment commands automatically
- Override security settings
- Commit without running tests

## Content Guidelines

### Blog Posts
- Use proper markdown formatting
- Include meta descriptions
- Add relevant tags/categories
- Optimize images for web
- Include alt text for images

### Code Examples
- Provide syntax highlighting
- Include comments for complex logic
- Show complete, working examples
- Add error handling

## Accessibility Standards

### WCAG Compliance
- Maintain WCAG 2.1 AA compliance
- Use semantic HTML
- Provide alt text for images
- Ensure keyboard navigation
- Test with screen readers

### Color Contrast
- Minimum 4.5:1 for normal text
- Minimum 3:1 for large text
- Avoid color-only information

## Performance Metrics

### Target Metrics
- Lighthouse Score: >90
- First Contentful Paint: <1.8s
- Time to Interactive: <3.8s
- Cumulative Layout Shift: <0.1

### Optimization Strategies
- Lazy load images
- Minimize JavaScript
- Use CDN for static assets
- Implement caching strategies

## Error Handling

### User-Facing Errors
- Provide clear error messages
- Suggest corrective actions
- Log errors for debugging
- Gracefully degrade functionality

### Development Errors
- Use try-catch blocks appropriately
- Implement error boundaries
- Log detailed error information
- Never expose stack traces to users

---

**Last Updated**: Auto-managed by AI-Copilot
**Version**: 1.0.0
