export default interface IButtons {
  title: string;
  content: Array<IButtonsContent>
}

export interface IButtonsContent {
  id: number;
  name: string;
  state: boolean;
}

export const buttons: IButtons[] = [
  {
    title: 'uiEngineering',
    content: [
      {
        id: 1,
        name: 'Web Performance',
        state: false,
      },
      {
        id: 2,
        name: 'Browser API',
        state: false,
      },
      {
        id: 3,
        name: 'Advanced JavaScript',
        state: false,
      },
      {
        id: 4,
        name: 'Software LifeCycle, e.g.',
        state: false,
      },
      {
        id: 5,
        name: 'SL: Deployment',
        state: false,
      },
      {
        id: 6,
        name: 'SL: Monitoring',
        state: false,
      },
      {
        id: 7,
        name: 'SL: Scalability',
        state: false,
      }
    ]
  }
]

// export const codeQuality: IButtons[] = [
//   {
//     id: 11,
//     name: 'Testing, e.g',
//     state: false,
//   },
//   {
//     id: 12,
//     name: 'Integration tests',
//     state: false,
//   },
//   {
//     id: 13,
//     name: 'E2E tests',
//     state: false,
//   },
//   {
//     id: 14,
//     name: 'Patterns to structure tests',
//     state: false,
//   },
//   {
//     id: 15,
//     name: 'Mocks and spies',
//     state: false,
//   },
//   {
//     id: 16,
//     name: 'Effectively measure test coverage',
//     state: false,
//   },
//   {
//     id: 17,
//     name: 'Tooling',
//     state: false,
//   },
//   {
//     id: 18,
//     name: 'Leverage your IDE',
//     state: false,
//   },
//   {
//     id: 19,
//     name: 'Language fundamentals',
//     state: false,
//   }
// ]

// export const softwareArchitecture: IButtons[] = [
//   {
//     id: 21,
//     name: 'Architecture styles',
//     state: false,
//   },
//   {
//     id: 22,
//     name: 'Tradeoffs analysis',
//     state: false,
//   }
// ]

// export const softwareLifecycle: IButtons[] = [
//   {
//     id: 31,
//     name: 'Deployment best practices',
//     state: false,
//   },
//   {
//     id: 32,
//     name: 'Docker',
//     state: false,
//   },
//   {
//     id: 33,
//     name: 'CI/CD paradigms(deployment styles, availability, etc)',
//     state: false,
//   }
// ]

// export const fullstackThinking: IButtons[] = [
//   {
//     id: 41,
//     name: 'HTTP',
//     state: false,
//   },
//   {
//     id: 42,
//     name: 'Leverage client and frontend side',
//     state: false,
//   },
//   {
//     id: 43,
//     name: 'Web Engineering mechanisms, e.g.CORS, Content Negotiation',
//     state: false,
//   },
//   {
//     id: 44,
//     name: 'Authentication and authorization',
//     state: false,
//   },
//   {
//     id: 45,
//     name: 'Caching',
//     state: false,
//   },
//   {
//     id: 46,
//     name: 'Scalability',
//     state: false,
//   }
// ]

// export const algoData: IButtons[] = [
//   {
//     id: 51,
//     name: 'Units like Arrays & Hashmaps',
//     state: false,
//   },
//   {
//     id: 52,
//     name: 'Recursion',
//     state: false,
//   },
//   {
//     id: 53,
//     name: 'Big O Notation',
//     state: false,
//   }
// ]