import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/slim/blog',
    component: ComponentCreator('/slim/blog', 'b2f'),
    exact: true
  },
  {
    path: '/slim/blog/archive',
    component: ComponentCreator('/slim/blog/archive', '981'),
    exact: true
  },
  {
    path: '/slim/blog/first-blog-post',
    component: ComponentCreator('/slim/blog/first-blog-post', 'c9d'),
    exact: true
  },
  {
    path: '/slim/blog/long-blog-post',
    component: ComponentCreator('/slim/blog/long-blog-post', 'ad9'),
    exact: true
  },
  {
    path: '/slim/blog/mdx-blog-post',
    component: ComponentCreator('/slim/blog/mdx-blog-post', '760'),
    exact: true
  },
  {
    path: '/slim/blog/tags',
    component: ComponentCreator('/slim/blog/tags', 'bd5'),
    exact: true
  },
  {
    path: '/slim/blog/tags/docusaurus',
    component: ComponentCreator('/slim/blog/tags/docusaurus', '5ee'),
    exact: true
  },
  {
    path: '/slim/blog/tags/facebook',
    component: ComponentCreator('/slim/blog/tags/facebook', '8ba'),
    exact: true
  },
  {
    path: '/slim/blog/tags/hello',
    component: ComponentCreator('/slim/blog/tags/hello', 'f74'),
    exact: true
  },
  {
    path: '/slim/blog/tags/hola',
    component: ComponentCreator('/slim/blog/tags/hola', '68d'),
    exact: true
  },
  {
    path: '/slim/blog/welcome',
    component: ComponentCreator('/slim/blog/welcome', '1b1'),
    exact: true
  },
  {
    path: '/slim/markdown-page',
    component: ComponentCreator('/slim/markdown-page', 'baa'),
    exact: true
  },
  {
    path: '/slim/docs',
    component: ComponentCreator('/slim/docs', '420'),
    routes: [
      {
        path: '/slim/docs/about/',
        component: ComponentCreator('/slim/docs/about/', '8ab'),
        exact: true,
        sidebar: "aboutSidebar"
      },
      {
        path: '/slim/docs/about/CODE_OF_CONDUCT',
        component: ComponentCreator('/slim/docs/about/CODE_OF_CONDUCT', '194'),
        exact: true,
        sidebar: "aboutSidebar"
      },
      {
        path: '/slim/docs/about/GOVERNANCE',
        component: ComponentCreator('/slim/docs/about/GOVERNANCE', 'e72'),
        exact: true,
        sidebar: "aboutSidebar"
      },
      {
        path: '/slim/docs/category/documentation',
        component: ComponentCreator('/slim/docs/category/documentation', 'a19'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/slim/docs/category/governance',
        component: ComponentCreator('/slim/docs/category/governance', '2f5'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/slim/docs/category/software-lifecycle',
        component: ComponentCreator('/slim/docs/category/software-lifecycle', '72b'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/slim/docs/contribute/contributing/',
        component: ComponentCreator('/slim/docs/contribute/contributing/', '029'),
        exact: true,
        sidebar: "contributeSidebar"
      },
      {
        path: '/slim/docs/contribute/contributing/development-process',
        component: ComponentCreator('/slim/docs/contribute/contributing/development-process', 'd2a'),
        exact: true,
        sidebar: "contributeSidebar"
      },
      {
        path: '/slim/docs/contribute/contributing/introduction',
        component: ComponentCreator('/slim/docs/contribute/contributing/introduction', '56b'),
        exact: true,
        sidebar: "contributeSidebar"
      },
      {
        path: '/slim/docs/contribute/contributing/know-before-contribute',
        component: ComponentCreator('/slim/docs/contribute/contributing/know-before-contribute', 'dab'),
        exact: true,
        sidebar: "contributeSidebar"
      },
      {
        path: '/slim/docs/contribute/contributing/ways-to-contribute',
        component: ComponentCreator('/slim/docs/contribute/contributing/ways-to-contribute', 'bd1'),
        exact: true,
        sidebar: "contributeSidebar"
      },
      {
        path: '/slim/docs/contribute/submit-best-practice',
        component: ComponentCreator('/slim/docs/contribute/submit-best-practice', '129'),
        exact: true,
        sidebar: "contributeSidebar"
      },
      {
        path: '/slim/docs/guides/documentation/change-log/',
        component: ComponentCreator('/slim/docs/guides/documentation/change-log/', '961'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/slim/docs/guides/documentation/documentation-hosts/',
        component: ComponentCreator('/slim/docs/guides/documentation/documentation-hosts/', '934'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/slim/docs/guides/documentation/documentation-hosts/trade-study-hostingdocs-user',
        component: ComponentCreator('/slim/docs/guides/documentation/documentation-hosts/trade-study-hostingdocs-user', '2de'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/slim/docs/guides/documentation/documentation-hosts/use-cases',
        component: ComponentCreator('/slim/docs/guides/documentation/documentation-hosts/use-cases', 'fce'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/slim/docs/guides/documentation/readme/',
        component: ComponentCreator('/slim/docs/guides/documentation/readme/', '919'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/slim/docs/guides/documentation/readme/README-TEMPLATE',
        component: ComponentCreator('/slim/docs/guides/documentation/readme/README-TEMPLATE', 'bef'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/slim/docs/guides/governance/contributions/',
        component: ComponentCreator('/slim/docs/guides/governance/contributions/', '3c4'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/slim/docs/guides/governance/contributions/change-request-templates/',
        component: ComponentCreator('/slim/docs/guides/governance/contributions/change-request-templates/', 'bba'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/slim/docs/guides/governance/contributions/change-request-templates/github/PULL_REQUEST_TEMPLATE',
        component: ComponentCreator('/slim/docs/guides/governance/contributions/change-request-templates/github/PULL_REQUEST_TEMPLATE', '257'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/slim/docs/guides/governance/contributions/code-of-conduct/',
        component: ComponentCreator('/slim/docs/guides/governance/contributions/code-of-conduct/', '0f4'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/slim/docs/guides/governance/contributions/contributing-guide/',
        component: ComponentCreator('/slim/docs/guides/governance/contributions/contributing-guide/', '6ed'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/slim/docs/guides/governance/contributions/contributing-guide/CONTRIBUTING',
        component: ComponentCreator('/slim/docs/guides/governance/contributions/contributing-guide/CONTRIBUTING', '6a2'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/slim/docs/guides/governance/contributions/developer-certificate-origin/',
        component: ComponentCreator('/slim/docs/guides/governance/contributions/developer-certificate-origin/', 'd6a'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/slim/docs/guides/governance/contributions/issue-templates/',
        component: ComponentCreator('/slim/docs/guides/governance/contributions/issue-templates/', '081'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/slim/docs/guides/governance/contributions/issue-templates/github/bug_report',
        component: ComponentCreator('/slim/docs/guides/governance/contributions/issue-templates/github/bug_report', '4e3'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/slim/docs/guides/governance/contributions/issue-templates/github/bug_report.yml',
        component: ComponentCreator('/slim/docs/guides/governance/contributions/issue-templates/github/bug_report.yml', '43b'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/slim/docs/guides/governance/contributions/issue-templates/github/new_feature',
        component: ComponentCreator('/slim/docs/guides/governance/contributions/issue-templates/github/new_feature', 'bc8'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/slim/docs/guides/governance/contributions/issue-templates/github/new_feature.yml',
        component: ComponentCreator('/slim/docs/guides/governance/contributions/issue-templates/github/new_feature.yml', '3a8'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/slim/docs/guides/governance/governance-model/',
        component: ComponentCreator('/slim/docs/guides/governance/governance-model/', '277'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/slim/docs/guides/governance/governance-model/GOVERNANCE-TEMPLATE',
        component: ComponentCreator('/slim/docs/guides/governance/governance-model/GOVERNANCE-TEMPLATE', '1f5'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/slim/docs/guides/search',
        component: ComponentCreator('/slim/docs/guides/search', 'aa9'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/slim/docs/guides/software-lifecycle/application-starter-kits/',
        component: ComponentCreator('/slim/docs/guides/software-lifecycle/application-starter-kits/', '801'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/slim/docs/guides/software-lifecycle/application-starter-kits/python-starter-kit/',
        component: ComponentCreator('/slim/docs/guides/software-lifecycle/application-starter-kits/python-starter-kit/', 'd83'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/slim/docs/guides/software-lifecycle/continuous-integration/',
        component: ComponentCreator('/slim/docs/guides/software-lifecycle/continuous-integration/', 'f7d'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/slim/docs/guides/software-lifecycle/continuous-integration/continuous-integration-frameworks/',
        component: ComponentCreator('/slim/docs/guides/software-lifecycle/continuous-integration/continuous-integration-frameworks/', 'a92'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/slim/docs/guides/software-lifecycle/continuous-integration/continuous-integration-frameworks/',
        component: ComponentCreator('/slim/docs/guides/software-lifecycle/continuous-integration/continuous-integration-frameworks/', '4da'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/slim/docs/guides/software-lifecycle/continuous-integration/reference-architecture/',
        component: ComponentCreator('/slim/docs/guides/software-lifecycle/continuous-integration/reference-architecture/', '035'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/slim/docs/guides/software-lifecycle/continuous-testing/',
        component: ComponentCreator('/slim/docs/guides/software-lifecycle/continuous-testing/', '27d'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/slim/docs/guides/software-lifecycle/continuous-testing/testing-frameworks',
        component: ComponentCreator('/slim/docs/guides/software-lifecycle/continuous-testing/testing-frameworks', 'fde'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/slim/docs/guides/software-lifecycle/security/',
        component: ComponentCreator('/slim/docs/guides/software-lifecycle/security/', '526'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/slim/docs/guides/software-lifecycle/security/dependabot/',
        component: ComponentCreator('/slim/docs/guides/software-lifecycle/security/dependabot/', 'be7'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/slim/docs/guides/software-lifecycle/security/secrets-detection/',
        component: ComponentCreator('/slim/docs/guides/software-lifecycle/security/secrets-detection/', '853'),
        exact: true,
        sidebar: "guidesSidebar"
      }
    ]
  },
  {
    path: '/slim/',
    component: ComponentCreator('/slim/', '987'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
