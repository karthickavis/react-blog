// src/data/blogData.js
const blogData = [
  {
    id: 1,
    title: 'Mastering React Hooks',
    description: 'Learn how to use useState, useEffect, and custom hooks to build powerful components.',
    content:'React Hooks revolutionized how we build components by allowing functional components to manage state and side effects without classes. With useState, we can store and update values, while useEffect handles lifecycle events like fetching data or updating the DOM. useContext enables global state sharing without prop drilling, and useRef helps access DOM elements or persist values without causing re-renders. Custom hooks let us encapsulate and reuse logic, making code cleaner and more maintainable. Hooks eliminate the need for class components in most cases and promote breaking down UI logic into smaller, composable functions. Understanding the dependency array in useEffect is crucial for avoiding unwanted behavior. React’s strict rules of hooks ensure predictable execution, and performance can be improved using useMemo and useCallback. Overall, mastering hooks is essential for writing modern, efficient, and scalable React applications.',
    image: 'https://static.vecteezy.com/system/resources/previews/003/815/991/large_2x/female-programmer-doing-software-coding-free-vector.jpg',
  },
  {
    id: 2,
    title: 'Tailwind CSS Tips & Tricks',
    description: 'Boost your UI skills with these useful Tailwind patterns and responsive tricks.',
    content: 'Tailwind CSS is a utility-first framework that enables rapid UI development with pre-defined classes, reducing the need to write custom CSS. Instead of switching between HTML and CSS files, you can style components directly within your markup. One powerful tip is to use responsive prefixes like sm:, md:, and lg: to create mobile-first designs effortlessly. Tailwind also supports dark mode, hover states, and group interactions with simple class additions. Using @apply in custom CSS helps combine frequently used classes for cleaner code. The space-x and space-y utilities help control spacing between elements without adding extra margins. Flexbox and grid utilities make layout creation intuitive. Additionally, you can extend the Tailwind config to define custom colors, fonts, and breakpoints for consistent branding. IntelliSense extensions enhance productivity by auto-suggesting utility classes. Combining Tailwind with component libraries like Headless UI or DaisyUI brings design and accessibility together. Mastering Tailwind’s utility approach results in faster development and cleaner, scalable code.',
    image: 'https://cdni.iconscout.com/illustration/premium/thumb/coding-project-1884980-1597918.png',
  },
  {
    id: 3,
    title: 'JavaScript Interview Prep',
    description: 'Top JavaScript questions asked in frontend interviews with sample answers and code.',
    content: 'Preparing for JavaScript interviews requires mastering both core concepts and problem-solving techniques. Start with understanding the fundamentals like variables, data types, scopes, hoisting, closures, and the this keyword. Dive into advanced topics such as asynchronous programming using callbacks, promises, and async/await, which are crucial in real-world applications. Explore the event loop, microtasks, and the call stack to understand JavaScript’s concurrency model. Proficiency in ES6+ features like destructuring, template literals, arrow functions, spread/rest operators, and modules adds weight to your skills. Learn how functions work in JavaScript, including higher-order functions, pure functions, and immutability. Deepen your knowledge in array methods like map, filter, and reduce, as they are frequently tested in coding rounds. Practice data structures and algorithms like arrays, strings, objects, sets, stacks, queues, and recursion using JavaScript. Solve real interview problems on platforms like LeetCode or HackerRank. Lastly, understand common patterns like currying, memoization, and debouncing. A strong foundation with consistent practice will help you crack frontend interviews with confidence.',
    image: 'https://static-00.iconduck.com/assets.00/coding-illustration-512x350-w7mj8rpj.png',
  },
  {
    id: 4,
    title: 'Vite vs Webpack',
    description: 'Why Vite is becoming the preferred choice for fast React development.',
    content: 'Vite and Webpack are two powerful build tools in modern frontend development, but they differ significantly in architecture and performance. Webpack has been the industry standard for years, known for its extensive plugin ecosystem and configuration flexibility. However, it bundles everything before serving, which leads to slower startup and rebuild times in development. Vite, on the other hand, leverages native ES modules and modern browser features to offer blazing-fast development with near-instant hot module replacement (HMR). Vite only bundles code during production, making it significantly faster for local development. Its configuration is simpler and more intuitive, especially for React, Vue, and TypeScript projects. Webpack still holds ground in large-scale applications needing deep customization, but Vite is becoming the go-to tool for developers prioritizing speed and simplicity. Vite also supports out-of-the-box features like TypeScript, PostCSS, and dynamic imports. With its optimized build using Rollup under the hood, Vite ensures smaller bundle sizes and improved production performance. Choosing between the two depends on your project scale and specific needs, but for most new projects, Vite offers a compelling developer experience.',
    image: 'https://ouch-cdn2.icons8.com/cpeq4ddSI3Eok5FHqzLlVnJuixJpku8EAW1DcqHpKMA/rs:fit:502:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNTUv/NTgzNjM2MzEtZDcz/NC00NGJlLTgwYmMt/NWE0YTNlYWNiOWIx/LnN2Zw.png',
  },
  {
    id: 5,
    title: 'Building Reusable Components',
    description: 'Make your UI scalable by breaking it into reusable and clean components.',
    content: 'Building reusable components is a core principle of efficient and scalable frontend development. Reusability reduces code duplication, improves maintainability, and accelerates development by allowing you to use the same component across multiple parts of an application. In React, components can be split into logical, smaller pieces like buttons, modals, cards, and form inputs, each accepting props for dynamic behavior. By designing with reusability in mind, developers ensure components are flexible and context-agnostic. Best practices include using default props, prop-types or TypeScript for validation, and separating styling using utility classes or component-specific CSS. Leveraging composition over inheritance allows combining simple components into complex UIs. Naming conventions, folder structures, and documentation also play a key role in managing reusable components at scale. Reusable components should be tested independently to ensure reliability across use cases. A good UI component library like Storybook helps visualize and manage them. Whether for internal use or open-source contribution, reusable components speed up delivery, foster consistency in design, and support team collaboration effectively.',
    image: 'https://static.vecteezy.com/system/resources/previews/004/491/062/original/programmer-working-concept-for-web-banner-man-work-with-code-and-programming-at-computer-creates-software-modern-person-scene-illustration-in-flat-cartoon-design-with-people-characters-vector.jpg',
  },
  {
    id: 6,
    title: 'Understanding Props and State',
    description: 'The basics of React: how props and state control your app’s behavior.',
    content: 'Understanding props and state is essential to mastering React. Props (short for properties) are read-only values passed from a parent to a child component, allowing dynamic data flow and component reusability. They help keep components modular by separating concerns and making UI elements configurable. State, on the other hand, is local and mutable, managed within the component using the useState hook. It allows components to respond to user interactions and maintain dynamic behavior. Props are immutable, while state can be updated to trigger re-renders. Proper usage of props and state determines whether a component is presentational or container-type. Props help manage input values, toggle views, or pass callbacks to handle events. State handles internal UI logic like toggling modals, form inputs, or API response handling. Knowing when to lift state up to a parent component or use context for shared state improves scalability. Misusing state can cause unnecessary re-renders, so performance considerations are key. By mastering props and state, developers can write clean, predictable, and maintainable components in any React application.',
    image: 'https://static.vecteezy.com/system/resources/previews/004/865/921/original/programmer-people-concept-use-laptop-and-programming-code-program-icon-spreading-with-modern-flat-style-free-vector.jpg',
  },
   
];

export default blogData;
