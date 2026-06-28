const intermediateQuiz = {
  Mathematics: [
    { question: "What is the derivative of x²?", options: ["x", "2x", "x³", "2"], answer: "2x" },
    { question: "If the radius of a circle is 7, what is its circumference? (Use Pi = 22/7)", options: ["22", "44", "88", "154"], answer: "44" },
    { question: "What is the sum of the interior angles of a pentagon?", options: ["360°", "540°", "720°", "900°"], answer: "540°" },
    { question: "What is the probability of rolling a sum of 7 with two standard dice?", options: ["1/6", "1/12", "1/7", "1/36"], answer: "1/6" },
    { question: "Solve the quadratic equation x² - 5x + 6 = 0.", options: ["2 and 3", "-2 and -3", "1 and 6", "0 and 6"], answer: "2 and 3" }
  ],
  Physics: [
    { question: "What does the First Law of Thermodynamics state?", options: ["Energy cannot be created or destroyed", "Entropy always increases", "F = ma", "Every action has an equal opposite reaction"], answer: "Energy cannot be created or destroyed" },
    { question: "Which particle is responsible for electricity?", options: ["Proton", "Neutron", "Electron", "Photon"], answer: "Electron" },
    { question: "What is the SI unit of electrical resistance?", options: ["Volt", "Ampere", "Ohm", "Coulomb"], answer: "Ohm" },
    { question: "In a vacuum, do heavy objects fall faster than light objects?", options: ["Yes", "No", "Depends on the shape", "Depends on the material"], answer: "No" },
    { question: "What is the phenomenon where light bends as it passes from one medium to another?", options: ["Reflection", "Refraction", "Diffraction", "Interference"], answer: "Refraction" }
  ],
  Java: [
    { question: "Which of these is not a core principle of OOP?", options: ["Polymorphism", "Inheritance", "Compilation", "Encapsulation"], answer: "Compilation" },
    { question: "What is the default value of a local variable?", options: ["null", "0", "false", "Not assigned, causes compilation error"], answer: "Not assigned, causes compilation error" },
    { question: "Which interface is the root of the Java Collections Framework?", options: ["List", "Collection", "Map", "Set"], answer: "Collection" },
    { question: "What is the difference between '==' and '.equals()' for Strings?", options: ["No difference", "'==' checks reference, '.equals()' checks value", "'.equals()' checks reference, '==' checks value", "'==' is for strings, '.equals()' is for numbers"], answer: "'==' checks reference, '.equals()' checks value" },
    { question: "Which keyword prevents a class from being inherited?", options: ["static", "constant", "final", "abstract"], answer: "final" }
  ],
  Python: [
    { question: "What is a 'dictionary' in Python?", options: ["An ordered list of items", "A collection of key-value pairs", "A function that translates code", "A string formatting tool"], answer: "A collection of key-value pairs" },
    { question: "How do you handle exceptions in Python?", options: ["try/except", "catch/throw", "if/else", "error/handle"], answer: "try/except" },
    { question: "What does the 'self' keyword represent in a class?", options: ["The parent class", "The instance of the class", "A static variable", "A built-in module"], answer: "The instance of the class" },
    { question: "Which built-in function gives the number of items in a list?", options: ["size()", "count()", "length()", "len()"], answer: "len()" },
    { question: "What is a lambda function?", options: ["A multiline function", "An anonymous, single-expression function", "A built-in math module", "A function that runs asynchronously"], answer: "An anonymous, single-expression function" }
  ],
  GK: [
    { question: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], answer: "Mars" },
    { question: "Who wrote the Indian National Anthem?", options: ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Sarojini Naidu", "Mahatma Gandhi"], answer: "Rabindranath Tagore" },
    { question: "In which year did India gain independence?", options: ["1945", "1946", "1947", "1950"], answer: "1947" },
    { question: "Which is the smallest bone in the human body?", options: ["Femur", "Stapes", "Radius", "Ulna"], answer: "Stapes" },
    { question: "Which gas is most abundant in the Earth's atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: "Nitrogen" }
  ],
  Chemistry: [
    { question: "What is Avogadro's number?", options: ["6.022 × 10^23", "3.14159", "1.602 × 10^-19", "2.99 × 10^8"], answer: "6.022 × 10^23" },
    { question: "Which of the following is a Noble Gas?", options: ["Oxygen", "Nitrogen", "Argon", "Chlorine"], answer: "Argon" },
    { question: "What type of bond involves the sharing of electron pairs?", options: ["Ionic", "Covalent", "Metallic", "Hydrogen"], answer: "Covalent" },
    { question: "What is the atomic number of Carbon?", options: ["6", "12", "14", "8"], answer: "6" },
    { question: "Which is the most abundant element in the universe?", options: ["Oxygen", "Carbon", "Helium", "Hydrogen"], answer: "Hydrogen" }
  ],
  Biology: [
    { question: "What does DNA stand for?", options: ["Deoxyribonucleic Acid", "Diribonucleic Acid", "Dual Nitrogen Acid", "Deoxyribose Nitrogen Acid"], answer: "Deoxyribonucleic Acid" },
    { question: "Which blood type is the universal donor?", options: ["A+", "AB+", "O-", "B-"], answer: "O-" },
    { question: "What is the longest bone in the human body?", options: ["Tibia", "Fibula", "Femur", "Humerus"], answer: "Femur" },
    { question: "What process do somatic cells use to divide?", options: ["Meiosis", "Mitosis", "Fission", "Budding"], answer: "Mitosis" },
    { question: "What are enzymes made of?", options: ["Carbohydrates", "Lipids", "Proteins", "Nucleic Acids"], answer: "Proteins" }
  ],
  English: [
    { question: "What literary device uses 'like' or 'as' to compare two things?", options: ["Metaphor", "Simile", "Personification", "Hyperbole"], answer: "Simile" },
    { question: "Who wrote 'Romeo and Juliet'?", options: ["Charles Dickens", "Jane Austen", "William Shakespeare", "Mark Twain"], answer: "William Shakespeare" },
    { question: "Identify the adverb: 'She ran quickly to the store.'", options: ["She", "ran", "quickly", "store"], answer: "quickly" },
    { question: "Which sentence is in the passive voice?", options: ["The dog bit the man.", "The man was bitten by the dog.", "The man bit the dog.", "The dog is biting the man."], answer: "The man was bitten by the dog." },
    { question: "What is the structure of a Haiku?", options: ["5-7-5 syllables", "AABB rhyme scheme", "14 lines", "Iambic pentameter"], answer: "5-7-5 syllables" }
  ],
  History: [
    { question: "In what year was the Magna Carta signed?", options: ["1066", "1215", "1492", "1776"], answer: "1215" },
    { question: "The Storming of the Bastille marked the start of which revolution?", options: ["American", "Russian", "French", "Industrial"], answer: "French" },
    { question: "Who was the primary rival of the USA during the Cold War?", options: ["Germany", "Japan", "Soviet Union", "China"], answer: "Soviet Union" },
    { question: "Where did the Industrial Revolution begin?", options: ["France", "United States", "Great Britain", "Germany"], answer: "Great Britain" },
    { question: "Who was the first emperor of China?", options: ["Sun Yat-sen", "Qin Shi Huang", "Kublai Khan", "Mao Zedong"], answer: "Qin Shi Huang" }
  ],
  Geography: [
    { question: "What is the latitude of the Equator?", options: ["90 degrees", "180 degrees", "0 degrees", "45 degrees"], answer: "0 degrees" },
    { question: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Perth"], answer: "Canberra" },
    { question: "On which continent is the Sahara Desert located?", options: ["Asia", "South America", "Africa", "Australia"], answer: "Africa" },
    { question: "Which is the smallest country in the world by land area?", options: ["Monaco", "Nauru", "Vatican City", "San Marino"], answer: "Vatican City" },
    { question: "Where is the Mariana Trench located?", options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"], answer: "Pacific Ocean" }
  ],
  Computer_Science: [
    { question: "What is the main difference between RAM and ROM?", options: ["RAM is read-only, ROM is volatile", "RAM is volatile, ROM is non-volatile", "RAM is for storage, ROM is for processing", "There is no difference"], answer: "RAM is volatile, ROM is non-volatile" },
    { question: "What does IP stand for in networking?", options: ["Internet Protocol", "Internal Process", "Intranet Provider", "Internet Provider"], answer: "Internet Protocol" },
    { question: "What is the binary representation of the decimal number 5?", options: ["100", "101", "110", "111"], answer: "101" },
    { question: "What does a compiler do?", options: ["Executes code line by line", "Translates high-level code to machine code", "Finds hardware errors", "Manages database memory"], answer: "Translates high-level code to machine code" },
    { question: "What does HTTP stand for?", options: ["HyperText Transfer Protocol", "HyperText Transmission Process", "Hyperlink Transfer Technology", "HyperText Terminal Protocol"], answer: "HyperText Transfer Protocol" }
  ],
  JavaScript: [
    { question: "What is the difference between '==' and '==='?", options: ["'==' checks value and type, '===' checks only value", "'===' checks value and type, '==' checks only value", "They are exactly the same", "'==' is for strings, '===' is for numbers"], answer: "'===' checks value and type, '==' checks only value" },
    { question: "What is a closure in JavaScript?", options: ["A locked object", "A function bundled together with its lexical environment", "A syntax error", "A loop that never ends"], answer: "A function bundled together with its lexical environment" },
    { question: "Which array method creates a new array with the results of calling a provided function on every element?", options: ["forEach()", "map()", "filter()", "reduce()"], answer: "map()" },
    { question: "How do you convert a JSON string into a JavaScript object?", options: ["JSON.stringify()", "JSON.parse()", "JSON.toObject()", "Object.parse()"], answer: "JSON.parse()" },
    { question: "What object represents the eventual completion (or failure) of an asynchronous operation?", options: ["Callback", "Event", "Promise", "Thread"], answer: "Promise" }
  ],
  "React": [
    { question: "What is the main purpose of the useEffect hook?", options: ["To manage state", "To perform side effects", "To parse XML", "To handle routing"], answer: "To perform side effects" },
    { question: "Why do we need a 'key' prop when rendering lists in React?", options: ["To style the list", "To encrypt data", "To help React identify which items changed", "To link to the backend"], answer: "To help React identify which items changed" },
    { question: "What problem does the React Context API solve?", options: ["Prop drilling", "Memory leaks", "Infinite loops", "Slow rendering"], answer: "Prop drilling" },
    { question: "What does React.memo() do?", options: ["Caches API requests", "Memorizes local variables", "Optimizes performance by preventing unnecessary re-renders", "Creates a global state"], answer: "Optimizes performance by preventing unnecessary re-renders" },
    { question: "How do you conditionally render an element in JSX?", options: ["Using if/else statements inside JSX", "Using the && operator or a ternary operator", "Using a switch statement", "Using a for-loop"], answer: "Using the && operator or a ternary operator" }
  ],
  "Node.js": [
    { question: "What is the role of the Event Loop in Node.js?", options: ["To compile code", "To handle asynchronous operations", "To encrypt passwords", "To run Python scripts"], answer: "To handle asynchronous operations" },
    { question: "What is middleware in Express.js?", options: ["A database connector", "Functions that have access to the request, response, and next function", "A template engine", "A CSS preprocessor"], answer: "Functions that have access to the request, response, and next function" },
    { question: "Which file holds the metadata and dependencies of a Node.js project?", options: ["node_modules", "index.js", "package.json", "config.json"], answer: "package.json" },
    { question: "What is 'process.env' used for?", options: ["Reading environment variables", "Terminating the Node process", "Accessing the file system", "Routing requests"], answer: "Reading environment variables" },
    { question: "Which is NOT a built-in Node.js stream type?", options: ["Readable", "Writable", "Duplex", "Execute"], answer: "Execute" }
  ],
  "DBMS": [
    { question: "What are the ACID properties in a database?", options: ["Accuracy, Consistency, Isolation, Data", "Atomicity, Consistency, Isolation, Durability", "Atomicity, Concurrency, Indexing, Durability", "Action, Commit, Integrity, Delete"], answer: "Atomicity, Consistency, Isolation, Durability" },
    { question: "What is Normalization?", options: ["Adding duplicate data", "Organizing data to reduce redundancy", "Backing up a database", "Encrypting database passwords"], answer: "Organizing data to reduce redundancy" },
    { question: "What does an INNER JOIN do?", options: ["Returns all records from the left table", "Returns records that have matching values in both tables", "Returns all records from the right table", "Combines two tables into a new table"], answer: "Returns records that have matching values in both tables" },
    { question: "What is a database index used for?", options: ["To speed up data retrieval operations", "To encrypt sensitive data", "To link two tables", "To format output data"], answer: "To speed up data retrieval operations" },
    { question: "What is a 'View' in SQL?", options: ["A physical copy of a table", "A virtual table based on the result-set of an SQL statement", "A database user interface", "A backup file"], answer: "A virtual table based on the result-set of an SQL statement" }
  ],
  "Operating System": [
    { question: "What is Context Switching?", options: ["Changing the user profile", "Saving the state of a process so it can be resumed and loading another process", "Switching between Windows and Linux", "Swapping out a hard drive"], answer: "Saving the state of a process so it can be resumed and loading another process" },
    { question: "What is the difference between a Mutex and a Semaphore?", options: ["Mutex is a locking mechanism, Semaphore is a signaling mechanism", "They are exactly the same", "Semaphore is hardware, Mutex is software", "Mutex allows multiple threads, Semaphore allows one"], answer: "Mutex is a locking mechanism, Semaphore is a signaling mechanism" },
    { question: "What is Virtual Memory?", options: ["Cloud storage", "Memory on a USB drive", "A technique that uses hard disk space to simulate additional RAM", "Cache memory in the CPU"], answer: "A technique that uses hard disk space to simulate additional RAM" },
    { question: "What is 'Thrashing' in an OS?", options: ["A CPU overheating", "When a computer spends more time paging than executing instructions", "A virus attack", "Formatting a disk"], answer: "When a computer spends more time paging than executing instructions" },
    { question: "What does Spooling stand for?", options: ["System Processing Of On-Line Data", "Simultaneous Peripheral Operations On-line", "Saving Processes Object Oriented Logic", "Sequential Program Operation Online"], answer: "Simultaneous Peripheral Operations On-line" }
  ],
  "Networking": [
    { question: "How many layers are in the OSI Model?", options: ["4", "5", "6", "7"], answer: "7" },
    { question: "What is the main difference between TCP and UDP?", options: ["UDP is reliable, TCP is fast", "TCP is connection-oriented and reliable, UDP is connectionless", "They are the same protocol", "TCP is for LAN, UDP is for WAN"], answer: "TCP is connection-oriented and reliable, UDP is connectionless" },
    { question: "What is the function of DNS?", options: ["To assign IP addresses", "To translate domain names into IP addresses", "To encrypt network traffic", "To route packets"], answer: "To translate domain names into IP addresses" },
    { question: "How many bits are in a MAC address?", options: ["16 bits", "32 bits", "48 bits", "64 bits"], answer: "48 bits" },
    { question: "What does a Subnet Mask do?", options: ["Hides your IP address", "Divides an IP address into a network and host portion", "Blocks viruses", "Boosts internet speed"], answer: "Divides an IP address into a network and host portion" }
  ],
  "DSA": [
    { question: "What is the average time complexity of QuickSort?", options: ["O(1)", "O(n)", "O(n log n)", "O(n^2)"], answer: "O(n log n)" },
    { question: "What is the typical time complexity for a lookup in a Hash Table?", options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"], answer: "O(1)" },
    { question: "What property must a Binary Search Tree (BST) satisfy?", options: ["The left child is greater than the parent", "The right child is less than the parent", "The left child is less than the parent, and the right child is greater", "It must always be perfectly balanced"], answer: "The left child is less than the parent, and the right child is greater" },
    { question: "Which algorithm is commonly used for Graph traversal?", options: ["Binary Search", "Merge Sort", "Breadth-First Search (BFS)", "KMP Algorithm"], answer: "Breadth-First Search (BFS)" },
    { question: "What is a common use case for a Heap data structure?", options: ["Routing tables", "Priority Queues", "Symbol tables", "String manipulation"], answer: "Priority Queues" }
  ],
  "Current Affairs": [
    { question: "Which countries form the 'Quad' alliance?", options: ["USA, India, Japan, Australia", "UK, France, Germany, Italy", "India, Russia, China, Brazil", "USA, UK, Canada, Australia"], answer: "USA, India, Japan, Australia" },
    { question: "What does the UNFCCC deal with?", options: ["Nuclear Weapons", "Climate Change", "World Trade", "Health and Medicine"], answer: "Climate Change" },
    { question: "What is the primary role of the FATF?", options: ["Promoting global trade", "Combating money laundering and terrorism financing", "Providing loans to developing countries", "Monitoring global health crises"], answer: "Combating money laundering and terrorism financing" },
    { question: "In what year was Article 370 revoked in India?", options: ["2018", "2019", "2020", "2021"], answer: "2019" },
    { question: "What does SCO stand for?", options: ["South Asian Cooperation Organization", "Shanghai Cooperation Organisation", "Swiss Central Observatory", "State Council Office"], answer: "Shanghai Cooperation Organisation" }
  ],
  "Reasoning": [
    { question: "If 'CAT' is coded as 'DBU', how is 'DOG' coded?", options: ["EPH", "FPI", "EPH", "EPF"], answer: "EPH" },
    { question: "A clock shows 3:15. What is the angle between the hour and minute hands?", options: ["0 degrees", "7.5 degrees", "15 degrees", "22.5 degrees"], answer: "7.5 degrees" },
    { question: "If today is Monday, what day of the week will it be after 61 days?", options: ["Saturday", "Sunday", "Monday", "Tuesday"], answer: "Saturday" },
    { question: "Pointing to a man, a woman said, 'His mother is the only daughter of my mother.' How is the woman related to the man?", options: ["Aunt", "Sister", "Mother", "Grandmother"], answer: "Mother" },
    { question: "Which Venn diagram best represents the relationship between: Animals, Dogs, and Chairs?", options: ["Three intersecting circles", "Two intersecting circles inside a larger circle", "One circle inside another, and a third separate circle", "Three separate circles"], answer: "One circle inside another, and a third separate circle" }
  ]
};

export default intermediateQuiz;