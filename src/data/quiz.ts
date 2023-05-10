export const QUIZ = [
  {
    id: '1',
    title: 'Using States',
    level: 1,
    questions: [
      {
        title: 'The Hooks are a way to work with functions in React instead of using classes. Hooks such as useState and useEffect are well-known examples of hooks. However, it is not yet possible to create our own hooks.',
        alternatives: [
          'True',
          'False'
        ],
        correct: 0
      },
      {
        title: 'Immutability in React is very important because if we change the value of a state directly instead of replacing it with a new value, the component will not be correctly re-rendered.',
        alternatives: [
          'True',
          'False'
        ],
        correct: 0
      },
      {
        title: 'Regarding rendering in React, choose the incorrect statement:',
        alternatives: [
          'There are two common cases in which a React component is rendered: the initial rendering of the component and state updates.',
          'Re-renderings usually do not remount all components like the initial rendering.',
          'A state update of a parent component can cause the re-rendering of a nested child component.',
          'React does not follow a defined flow when rendering a screen, so the steps of the process can vary greatly.'
        ],
        correct: 0  
      },
    ]
  },
  {
    id: '2',
    title: 'Using Typescript',
    level: 2,
    questions: [
      {
        title: "What kind of assignment is this variable, `const fullName: string = 'Dylan Israel';`?",
        alternatives: [
          'Explicit',
          'Implicit'
        ],
        correct: 0
      },
      {
        title: "What is the type of `const exemple = ['Dylan']`?",
        alternatives: [
          '`unknown[ ]`',
          '`string`',
          '`string[ ]`',
          '`any[ ]`'
        ],
        correct: 2
      },
      {
        title: "keyof can be used with index signatures to extract the index type.",
        alternatives: [
          'True',
          'False',
        ],
        correct: 0
      },
    ]
  },
  {
    id: '3',
    title: 'React Navigation',
    level: 2,
    questions: [
      {
        title: 'What is the best description to identify the Stack Navigator?',
        alternatives: [
          'It adds a fixed menu at the bottom of the device, making it easier to access frequently used screens.',
          'When opening a new screen, the new screen is placed on top of the navigation stack, and when returning to screens, they are removed from this stack.',
          'It adds a side menu that occupies the full height of the device. Initially, this menu is hidden, and you can open the menu by swiping the screen.'
        ],
        correct: 1
      },
      {
        title: 'By typing routes, you have the advantage of knowing, at the moment of navigation, whether a route receives parameters or not and the format of the parameters.',
        alternatives: [
          'True.',
          'False'
        ],
        correct: 0
      },
      {
        title: 'Regarding the NavigationContainer, it is correct to say that:',
        alternatives: [
          'NavigationContainer is the component in which we create a route in the application, passing the "name" and "component" properties to it.',
          'NavigationContainer is a "hook" exported from the React Navigation library that allows us to access functions like "navigate" and "goBack".',
          'NavigationContainer is a context that shares all the routes and navigation properties with our application.'
        ],
        correct: 2
      },
    ]
  },
  {
    id: '4',
    title: 'Styled Components',
    level: 3,
    questions: [
      {
        title: 'CSS-in-JS is the styling strategy in which JavaScript is used to style components.',
        alternatives: [
          'True',
          'False'
        ],
        correct: 0
      },
      {
        title: 'Select the option below that does not correspond to a feature of Styled Components.',
        alternatives: [
          'Perform the default import of "styled" and use it to create components (e.g., styled.View).',
          'It is possible to both create predefined styled components using "styled" and pass custom components to it using styled().',
          'The way of styling components is quite similar to what we use when working directly with CSS (lowercase, separated by hyphens, and semicolon at the end).',
          "It is possible to customize only the component's stylizations (style prop) via styled, which means it is not possible to configure other properties/attributes of the component."
        ],
        correct: 1
      },
      {
        title: "With Styled Components, it is possible to isolate the component's structure from its styling.",
        alternatives: [
          'True',
          'False'
        ],
        correct: 0
      },
    ]
  },
  {
    id: '5',
    title: 'Local Storage',
    level: 2,
    questions: [
      {
        title: 'Which of the following methods saves information in AsyncStorage?',
        alternatives: [
          'AsyncStorage.removeItem',
          'AsyncStorage.setItem',
          'AsyncStorage.getItem'
        ],
        correct: 1
      },
      {
        title: 'What best describes Prop Drilling?',
        alternatives: [
          'Strategy where you pass properties between components until you reach the desired component.',
          'Strategy where you save information locally on the device (storage) and access it when needed.',
          'Strategy where you share information between components through contexts (Context API).'
        ],
        correct: 1
      },
      {
        title: 'Which one is the correct way to save objects in AsyncStorage?',
        alternatives: [
          "await AsyncStorage.setItem('@app:key', { id: 1, name: 'Item 1' });",
          "await AsyncStorage.getItem('@app:key', JSON.stringify({ id: 1, name: 'Item 1' }));",
          "await AsyncStorage.setItem('@app:key', JSON.stringify({ id: 1, name: 'Item 1' }));"
        ],
        correct: 2
      },
    ]
  },
  {
    id: '6',
    title: 'React Native',
    level: 1,
    questions: [
      {
        title: 'Select the correct statement about React Native:',
        alternatives: [
          'React Native is a JavaScript framework based on React that can create applications only for Android and iOS.',
          'Unlike React, React Native is entirely community-driven and has no affiliation with Facebook.',
          'With React Native, you can maintain almost the entire application in JavaScript and manipulate native code if necessary.',
          'Despite the prominence of ReactJS on the web, React Native is not widely used in the current job market for mobile development.'
        ],
        correct: 2
      },
      {
        title: 'Select the incorrect statement about React Native CLI and Expo:',
        alternatives: [
          'Both React Native CLI and Expo can be used to create applications for iOS and Android.',
          'React Native CLI is the more "raw" way of creating a React Native project, while Expo builds upon this foundation and provides additional functionalities, such as Expo Go.',
          "With Expo, it is possible to test iOS applications using Expo Go even if you don't have a macOS system, which is not possible with React Native CLI.",
          'The official React Native documentation recommends only React Native CLI, without even mentioning Expo.'
        ],
        correct: 3
      },
      {
        title: 'Regarding Expo, select the correct statement:',
        alternatives: [
          'Expo offers two traditional paths when creating a project: Managed Workflow and Bare Workflow.',
          'Managed Workflow is the way to create projects where you have access to your native code from the beginning.',
          'With Bare Workflow, you cannot use Expo Go at any point.',
          'The configuration of the React Native environment for Managed Workflow is more complex than for Bare Workflow.'
        ],
        correct: 3
      },
      {
        title: 'Regarding componentization in React Native, choose the incorrect statement:',
        alternatives: [
          'Componentizing is a way to reuse code snippets in various parts of your code.',
          'One of the advantages of componentization is simplifying a highly complex component into multiple smaller components, thus facilitating code maintenance.',
          'Despite helping with code reuse and simplification, componentization does not reduce project productivity and code readability.',
          'None of the above.'
        ],
        correct: 3
      },
    ]
  },
];