import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Claude Skills Library',
  description: 'Prompts that adapt to your team — copy-paste Claude Code skills for every engineering domain.',
  base: '/',

  themeConfig: {
    nav: [
      { text: 'Install', link: '/how-to-install' },
      { text: 'Team Specs', link: '/specs' },
      {
        icon: 'github',
        link: 'https://github.com/szk-git/szk-git.github.io'
      }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'How to Install', link: '/how-to-install' },
          { text: 'Team Specs', link: '/specs' }
        ]
      },
      {
        text: 'Backend',
        items: [
          { text: 'API Design', link: '/backend/api-design' },
          { text: 'Database', link: '/backend/database' },
          { text: 'Auth', link: '/backend/auth' },
          { text: 'Performance', link: '/backend/performance' }
        ]
      },
      {
        text: 'Frontend',
        items: [
          { text: 'Component', link: '/frontend/component' },
          { text: 'Styling', link: '/frontend/styling' },
          { text: 'Accessibility', link: '/frontend/accessibility' }
        ]
      },
      {
        text: 'Testing',
        items: [
          { text: 'Unit Tests', link: '/testing/unit-tests' },
          { text: 'Integration Tests', link: '/testing/integration' },
          { text: 'E2E Tests', link: '/testing/e2e' },
          { text: 'Coverage', link: '/testing/coverage' }
        ]
      },
      {
        text: 'Design',
        items: [
          { text: 'UX Review', link: '/design/ux-review' },
          { text: 'Design System', link: '/design/design-system' },
          { text: 'Wireframe Critique', link: '/design/wireframe-critique' }
        ]
      },
      {
        text: 'QA',
        items: [
          { text: 'Code Review', link: '/qa/code-review' },
          { text: 'PR Review', link: '/qa/pr-review' },
          { text: 'Security Audit', link: '/qa/security-audit' }
        ]
      },
      {
        text: 'DevOps',
        items: [
          { text: 'Docker', link: '/devops/docker' },
          { text: 'CI/CD', link: '/devops/ci-cd' },
          { text: 'Deploy', link: '/devops/deploy' }
        ]
      },
      {
        text: 'Agents',
        items: [
          { text: 'Architect', link: '/agents/architect' },
          { text: 'Reviewer', link: '/agents/reviewer' },
          { text: 'Sprint Planner', link: '/agents/sprint-planner' }
        ]
      }
    ],

    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/szk-git/szk-git.github.io/edit/main/docs/:path',
      text: 'Edit on GitHub'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/szk-git/szk-git.github.io' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Claude Skills Library'
    }
  }
})
