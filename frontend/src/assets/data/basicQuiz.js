const basicQuiz = {
  Mathematics: [
    { question: "What is the value of Pi to two decimal places?", options: ["3.12", "3.14", "3.16", "3.18"], answer: "3.14" },
    { question: "What is 15% of 200?", options: ["20", "25", "30", "35"], answer: "30" },
    { question: "Solve for x: 2x + 5 = 15", options: ["5", "10", "15", "20"], answer: "5" },
    { question: "What is the square root of 144?", options: ["10", "12", "14", "16"], answer: "12" },
    { question: "How many degrees are in a full circle?", options: ["90", "180", "270", "360"], answer: "360" }
  ],
  Physics: [
    { question: "What is the standard unit of force?", options: ["Joule", "Watt", "Newton", "Pascal"], answer: "Newton" },
    { question: "What is the speed of light in a vacuum?", options: ["300,000 km/s", "150,000 km/s", "3,000 km/s", "30,000 km/s"], answer: "300,000 km/s" },
    { question: "Which planet has the strongest gravity in our solar system?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Jupiter" },
    { question: "What type of energy is stored in a stretched rubber band?", options: ["Kinetic", "Thermal", "Potential", "Chemical"], answer: "Potential" },
    { question: "What is the formula for calculating speed?", options: ["Distance / Time", "Mass × Acceleration", "Work / Time", "Force × Distance"], answer: "Distance / Time" }
  ],
  Java: [
    { question: "Which data type is used to create a variable that should store text?", options: ["String", "string", "Txt", "Text"], answer: "String" },
    { question: "How do you create a variable with the numeric value 5?", options: ["num x = 5", "float x = 5;", "int x = 5;", "x = 5;"], answer: "int x = 5;" },
    { question: "Which method can be used to find the length of a string?", options: ["getSize()", "length()", "len()", "size()"], answer: "length()" },
    { question: "How do you insert comments in Java code?", options: ["# This is a comment", "// This is a comment", "/* This is a comment", "<-- This is a comment -->"], answer: "// This is a comment" },
    { question: "Which keyword is used to create a class in Java?", options: ["className", "class", "MyClass", "class()"], answer: "class" }
  ],
  Python: [
    { question: "How do you output 'Hello World' in Python?", options: ["echo 'Hello World'", "print('Hello World')", "p('Hello World')", "console.log('Hello World')"], answer: "print('Hello World')" },
    { question: "Which of the following is a correct way to create a list?", options: ["myList = (1, 2, 3)", "myList = [1, 2, 3]", "myList = {1, 2, 3}", "myList = 1, 2, 3"], answer: "myList = [1, 2, 3]" },
    { question: "How do you start a function in Python?", options: ["function myFunc():", "create myFunc():", "def myFunc():", "def myFunc()"], answer: "def myFunc():" },
    { question: "Which character is used for a single-line comment?", options: ["//", "/*", "#", "--"], answer: "#" },
    { question: "What is the correct file extension for Python files?", options: [".pyth", ".pt", ".py", ".pyt"], answer: ".py" }
  ],
  GK: [
    { question: "What is the capital of India?", options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"], answer: "New Delhi" },
    { question: "Who is known as the Father of the Nation in India?", options: ["Jawaharlal Nehru", "Bhagat Singh", "Mahatma Gandhi", "Subhas Chandra Bose"], answer: "Mahatma Gandhi" },
    { question: "Which is the largest continent by area?", options: ["Africa", "Asia", "North America", "Europe"], answer: "Asia" },
    { question: "How many states are there in India?", options: ["27", "28", "29", "30"], answer: "28" },
    { question: "Which is the longest river in the world?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], answer: "Nile" }
   ],
  Chemistry: [
    { question: "What is the chemical formula for water?", options: ["H2O", "CO2", "O2", "NaCl"], answer: "H2O" },
    { question: "What gas do humans exhale?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"], answer: "Carbon Dioxide" },
    { question: "What is the common name for sodium chloride?", options: ["Sugar", "Baking Soda", "Salt", "Bleach"], answer: "Salt" },
    { question: "What is the center of an atom called?", options: ["Proton", "Electron", "Nucleus", "Shell"], answer: "Nucleus" },
    { question: "What is the pH of pure water?", options: ["0", "7", "14", "10"], answer: "7" }
  ],
  Biology: [
    { question: "What is known as the powerhouse of the cell?", options: ["Nucleus", "Ribosome", "Mitochondria", "Chloroplast"], answer: "Mitochondria" },
    { question: "What organ pumps blood through the human body?", options: ["Brain", "Lungs", "Liver", "Heart"], answer: "Heart" },
    { question: "How many bones are in the adult human body?", options: ["206", "208", "210", "212"], answer: "206" },
    { question: "What gives plants their green color?", options: ["Melanin", "Chlorophyll", "Carotene", "Hemoglobin"], answer: "Chlorophyll" },
    { question: "What animal is known as the king of the jungle?", options: ["Elephant", "Tiger", "Lion", "Gorilla"], answer: "Lion" }
  ],
  English: [
    { question: "Which of the following is a vowel?", options: ["B", "C", "E", "D"], answer: "E" },
    { question: "What is a synonym for 'Happy'?", options: ["Sad", "Joyful", "Angry", "Tired"], answer: "Joyful" },
    { question: "What is the past tense of 'Go'?", options: ["Goes", "Going", "Went", "Gone"], answer: "Went" },
    { question: "What is the antonym of 'Fast'?", options: ["Quick", "Slow", "Rapid", "Speedy"], answer: "Slow" },
    { question: "What is the plural of 'Child'?", options: ["Childs", "Childrens", "Children", "Childes"], answer: "Children" }
  ],
  History: [
    { question: "Who was the first President of the United States?", options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"], answer: "George Washington" },
    { question: "What ancient civilization built the pyramids?", options: ["Romans", "Greeks", "Egyptians", "Mayans"], answer: "Egyptians" },
    { question: "In what year did the Titanic sink?", options: ["1905", "1912", "1920", "1915"], answer: "1912" },
    { question: "Who is credited with inventing the telephone?", options: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Albert Einstein"], answer: "Alexander Graham Bell" },
    { question: "Which war ended in 1945?", options: ["World War I", "World War II", "Vietnam War", "Cold War"], answer: "World War II" }
  ],
  Geography: [
    { question: "Which is the largest ocean on Earth?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], answer: "Pacific" },
    { question: "What is the capital of France?", options: ["Rome", "Madrid", "Paris", "Berlin"], answer: "Paris" },
    { question: "How many continents are there?", options: ["5", "6", "7", "8"], answer: "7" },
    { question: "Which is the highest mountain in the world?", options: ["K2", "Mount Everest", "Mount Kilimanjaro", "Denali"], answer: "Mount Everest" },
    { question: "Which country has the largest land area?", options: ["Canada", "China", "United States", "Russia"], answer: "Russia" }
  ],
  Computer_Science: [
    { question: "What is known as the brain of the computer?", options: ["RAM", "Hard Drive", "CPU", "Motherboard"], answer: "CPU" },
    { question: "How many bits make up a byte?", options: ["4", "8", "16", "32"], answer: "8" },
    { question: "Who invented the World Wide Web?", options: ["Bill Gates", "Steve Jobs", "Tim Berners-Lee", "Mark Zuckerberg"], answer: "Tim Berners-Lee" },
    { question: "Which of the following is an Operating System?", options: ["Microsoft Word", "Google Chrome", "Windows", "Intel"], answer: "Windows" },
    { question: "Which of these is an input device?", options: ["Monitor", "Printer", "Keyboard", "Speaker"], answer: "Keyboard" }
  ],
  JavaScript: [
    { question: "Which HTML tag is used to link a JavaScript file?", options: ["<js>", "<script>", "<javascript>", "<code>"], answer: "<script>" },
    { question: "How do you write 'Hello World' in an alert box?", options: ["msg('Hello World');", "alertBox('Hello World');", "alert('Hello World');", "prompt('Hello World');"], answer: "alert('Hello World');" },
    { question: "Which keyword is used to declare a variable in ES6?", options: ["var", "let", "int", "string"], answer: "let" },
    { question: "How do you print something to the developer console?", options: ["print()", "console.log()", "log.console()", "document.write()"], answer: "console.log()" },
    { question: "How do you create an empty array in JavaScript?", options: ["let arr = {};", "let arr = [];", "let arr = ();", "let arr = array();"], answer: "let arr = [];" }
  ],
  "React": [
    { question: "What is React?", options: ["A database", "A JavaScript library for building user interfaces", "A CSS framework", "A backend language"], answer: "A JavaScript library for building user interfaces" },
    { question: "What does JSX stand for?", options: ["JavaScript XML", "Java Syntax Extension", "JSON X", "JavaScript X-style"], answer: "JavaScript XML" },
    { question: "Which hook is used to manage state in a functional component?", options: ["useEffect", "useReducer", "useState", "useContext"], answer: "useState" },
    { question: "How do you pass data from a parent component to a child component?", options: ["State", "Hooks", "Props", "Context"], answer: "Props" },
    { question: "Which method is used to render a React element into the DOM in React 18?", options: ["ReactDOM.render()", "createRoot().render()", "React.mount()", "DOM.render()"], answer: "createRoot().render()" }
  ],
  "Node.js": [
    { question: "What is Node.js?", options: ["A frontend framework", "A database", "A JavaScript runtime environment", "A browser"], answer: "A JavaScript runtime environment" },
    { question: "Which engine powers Node.js under the hood?", options: ["SpiderMonkey", "Chakra", "V8", "WebKit"], answer: "V8" },
    { question: "What is the default package manager for Node.js?", options: ["yarn", "npm", "pip", "brew"], answer: "npm" },
    { question: "Which core module is used to create a web server?", options: ["fs", "path", "http", "url"], answer: "http" },
    { question: "How do you import a module in CommonJS?", options: ["import module", "include('module')", "require('module')", "load('module')"], answer: "require('module')" }
  ],
  "DBMS": [
    { question: "What does DBMS stand for?", options: ["Data Block Management System", "Database Management System", "Data Backup Management System", "Database Memory System"], answer: "Database Management System" },
    { question: "What does SQL stand for?", options: ["Structured Query Language", "Standard Query Logic", "Simple Query Language", "System Query Language"], answer: "Structured Query Language" },
    { question: "Which key uniquely identifies a record in a table?", options: ["Foreign Key", "Composite Key", "Primary Key", "Candidate Key"], answer: "Primary Key" },
    { question: "What is a row in a database table commonly called?", options: ["Field", "Record or Tuple", "Attribute", "Column"], answer: "Record or Tuple" },
    { question: "Which command is used to retrieve data from a database?", options: ["GET", "EXTRACT", "SELECT", "PULL"], answer: "SELECT" }
  ],
  "Operating System": [
    { question: "What is an Operating System?", options: ["A hardware component", "An interface between hardware and the user", "A web browser", "An antivirus program"], answer: "An interface between hardware and the user" },
    { question: "What does GUI stand for?", options: ["Graphical User Interface", "General Utility Interface", "Global User Index", "Graphic Unix Interface"], answer: "Graphical User Interface" },
    { question: "Which of the following is an open-source OS?", options: ["Windows", "macOS", "Linux", "iOS"], answer: "Linux" },
    { question: "What is the main function of the kernel?", options: ["To display images", "To manage system resources and hardware", "To connect to the internet", "To compile code"], answer: "To manage system resources and hardware" },
    { question: "What is a program in execution called?", options: ["A file", "A process", "A hard drive", "A sector"], answer: "A process" }
  ],
  "Networking": [
    { question: "What does LAN stand for?", options: ["Large Area Network", "Local Area Network", "Long Area Network", "Logical Area Network"], answer: "Local Area Network" },
    { question: "Which port does HTTP use by default?", options: ["21", "22", "80", "443"], answer: "80" },
    { question: "What identifies a device on a network?", options: ["MAC address", "IP address", "Both IP and MAC address", "Serial Number"], answer: "Both IP and MAC address" },
    { question: "What device forwards data packets between computer networks?", options: ["Switch", "Hub", "Router", "Modem"], answer: "Router" },
    { question: "What does Wi-Fi stand for?", options: ["Wireless Fidelity", "Wired Fiber", "Wireless Fiber", "It doesn't stand for anything"], answer: "Wireless Fidelity" }
  ],
  "DSA": [
    { question: "Which data structure operates on a Last In, First Out (LIFO) principle?", options: ["Queue", "Array", "Stack", "Tree"], answer: "Stack" },
    { question: "Which data structure operates on a First In, First Out (FIFO) principle?", options: ["Queue", "Stack", "Graph", "Heap"], answer: "Queue" },
    { question: "What is the time complexity of searching an element in an unsorted array?", options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"], answer: "O(n)" },
    { question: "What is the prerequisite for Binary Search?", options: ["The array must be reversed", "The array must be sorted", "The array must contain only integers", "The array must be empty"], answer: "The array must be sorted" },
    { question: "What do you call each element in a Linked List?", options: ["Block", "Node", "Vertex", "Edge"], answer: "Node" }
  ],
  "Current Affairs": [
    { question: "Which organization launched the Chandrayaan-3 mission?", options: ["NASA", "ESA", "ISRO", "Roscosmos"], answer: "ISRO" },
    { question: "Which country hosted the G20 Summit in 2023?", options: ["Brazil", "India", "Indonesia", "USA"], answer: "India" },
    { question: "What is the currency of Japan?", options: ["Yuan", "Won", "Yen", "Rupee"], answer: "Yen" },
    { question: "Which international organization's headquarters is in Geneva, Switzerland?", options: ["UN", "WHO", "UNESCO", "IMF"], answer: "WHO" },
    { question: "How many countries are originally part of the BRICS group?", options: ["4", "5", "6", "7"], answer: "5" }
  ],
  "Reasoning": [
    { question: "Complete the series: 2, 4, 6, 8, ?", options: ["9", "10", "11", "12"], answer: "10" },
    { question: "Which word is the odd one out?", options: ["Apple", "Banana", "Carrot", "Chair"], answer: "Chair" },
    { question: "If your mother's brother is your uncle, what is your father's brother to you?", options: ["Cousin", "Nephew", "Uncle", "Grandfather"], answer: "Uncle" },
    { question: "In which direction does the sun rise?", options: ["North", "South", "East", "West"], answer: "East" },
    { question: "If A = 1, B = 2, C = 3, what is D?", options: ["2", "3", "4", "5"], answer: "4" }
  ]
};

export default basicQuiz;