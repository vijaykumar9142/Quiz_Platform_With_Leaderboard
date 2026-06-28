const advancedQuiz = {
  Mathematics: [
    { question: "What is the integral of 1/x dx?", options: ["x", "-1/x²", "ln|x| + C", "e^x + C"], answer: "ln|x| + C" },
    { question: "What is the determinant of a 2x2 matrix with rows [a, b] and [c, d]?", options: ["ad + bc", "ab - cd", "ad - bc", "ac - bd"], answer: "ad - bc" },
    { question: "In topology, a coffee mug is homeomorphic to which shape?", options: ["A sphere", "A torus (donut)", "A cube", "A Mobius strip"], answer: "A torus (donut)" },
    { question: "What does Euler's formula state?", options: ["e^(iπ) + 1 = 0", "a² + b² = c²", "F = ma", "E = mc²"], answer: "e^(iπ) + 1 = 0" },
    { question: "What is the Taylor series expansion of e^x at x=0?", options: ["1 - x + x²/2!...", "x - x³/3! + x⁵/5!...", "1 + x + x²/2! + x³/3!...", "1 - x²/2! + x⁴/4!..."], answer: "1 + x + x²/2! + x³/3!..." }
  ],
  Physics: [
    { question: "What is the Heisenberg Uncertainty Principle?", options: ["Energy is always conserved", "You cannot simultaneously know the exact position and momentum of a particle", "Light acts as both a wave and a particle", "Gravity bends space-time"], answer: "You cannot simultaneously know the exact position and momentum of a particle" },
    { question: "What particle is proposed as the carrier of the gravitational force?", options: ["Gluon", "Boson", "Graviton", "Fermion"], answer: "Graviton" },
    { question: "According to special relativity, what happens to time as you approach the speed of light?", options: ["It speeds up", "It stays the same", "It dilates (slows down)", "It moves backward"], answer: "It dilates (slows down)" },
    { question: "What defines an ideal black body?", options: ["It reflects all radiation", "It absorbs all incident electromagnetic radiation", "It emits no radiation", "It has zero mass"], answer: "It absorbs all incident electromagnetic radiation" },
    { question: "What are the four fundamental forces of nature?", options: ["Gravity, Electromagnetism, Strong Nuclear, Weak Nuclear", "Gravity, Friction, Tension, Magnetism", "Kinetic, Potential, Thermal, Chemical", "Earth, Water, Air, Fire"], answer: "Gravity, Electromagnetism, Strong Nuclear, Weak Nuclear" }
  ],
  Java: [
    { question: "What is the purpose of the 'volatile' keyword?", options: ["To make a variable immutable", "To prevent a variable from being cached thread-locally", "To speed up loop execution", "To allow multiple inheritance"], answer: "To prevent a variable from being cached thread-locally" },
    { question: "In the JVM, where are objects dynamically allocated?", options: ["The Stack", "The Metaspace", "The Heap", "The Program Counter"], answer: "The Heap" },
    { question: "What is the difference between fail-fast and fail-safe iterators?", options: ["Fail-fast operates on a clone, fail-safe operates on the original", "Fail-fast throws ConcurrentModificationException if modified during iteration", "There is no difference", "Fail-safe throws exceptions instantly"], answer: "Fail-fast throws ConcurrentModificationException if modified during iteration" },
    { question: "How does the 'synchronized' keyword work?", options: ["It compresses data", "It restricts access to a block of code to one thread at a time using an intrinsic lock", "It syncs data to the cloud", "It formats the code layout"], answer: "It restricts access to a block of code to one thread at a time using an intrinsic lock" },
    { question: "What feature was introduced in Java 8 to support functional-style operations on streams of elements?", options: ["Annotations", "Generics", "Stream API", "Reflection"], answer: "Stream API" }
  ],
  Python: [
    { question: "What is the Global Interpreter Lock (GIL)?", options: ["A security feature", "A mutex that protects access to Python objects, preventing multiple native threads from executing Python bytecodes at once", "A tool to lock packages", "A module for database connection"], answer: "A mutex that protects access to Python objects, preventing multiple native threads from executing Python bytecodes at once" },
    { question: "What are Python metaclasses?", options: ["Classes that inherit from multiple parents", "Classes of classes that define how a class behaves", "Abstract base classes", "Built-in error classes"], answer: "Classes of classes that define how a class behaves" },
    { question: "How do decorators work in Python?", options: ["They style the GUI", "They modify the behavior of a function or class by wrapping it", "They format strings", "They hide variables from the global scope"], answer: "They modify the behavior of a function or class by wrapping it" },
    { question: "What is the purpose of the 'yield' keyword?", options: ["To pause execution of a function and return a generator", "To stop a loop completely", "To merge two lists", "To skip an iteration"], answer: "To pause execution of a function and return a generator" },
    { question: "What is 'duck typing'?", options: ["A testing framework", "A programming concept where an object's suitability is determined by its methods and properties rather than its actual type", "A way to compress variables", "A syntax error type"], answer: "A programming concept where an object's suitability is determined by its methods and properties rather than its actual type" }
  ],
  GK: [
    { question: "Which international treaty was signed in 1919 to end World War I?", options: ["Treaty of Paris", "Treaty of Versailles", "Treaty of Tordesillas", "Geneva Convention"], answer: "Treaty of Versailles" },
    { question: "Who was the first woman to win a Nobel Prize?", options: ["Mother Teresa", "Rosalind Franklin", "Marie Curie", "Ada Lovelace"], answer: "Marie Curie" },
    { question: "What is the hardest naturally occurring substance on Earth?", options: ["Graphene", "Titanium", "Lonsdaleite", "Diamond"], answer: "Diamond" },
    { question: "In economics, what is the term for a period of economic decline characterized by a fall in GDP?", options: ["Inflation", "Recession", "Stagflation", "Boom"], answer: "Recession" },
    { question: "Which article of the Indian Constitution gives special status to Jammu and Kashmir (before its revocation)?", options: ["Article 370", "Article 356", "Article 21", "Article 14"], answer: "Article 370" }
  ],
  Chemistry: [
    { question: "What is the hybridization of the central carbon atom in methane (CH4)?", options: ["sp", "sp2", "sp3", "sp3d"], answer: "sp3" },
    { question: "What does the First Law of Thermodynamics state?", options: ["Entropy of an isolated system always increases", "Energy cannot be created or destroyed", "Absolute zero cannot be reached", "PV = nRT"], answer: "Energy cannot be created or destroyed" },
    { question: "What is a chiral molecule?", options: ["A molecule that is superimposable on its mirror image", "A molecule with no stereocenters", "A molecule that is non-superimposable on its mirror image", "A noble gas"], answer: "A molecule that is non-superimposable on its mirror image" },
    { question: "What is the minimum energy required to start a chemical reaction called?", options: ["Kinetic Energy", "Potential Energy", "Activation Energy", "Ionization Energy"], answer: "Activation Energy" },
    { question: "In the Ideal Gas Law (PV = nRT), what does 'R' represent?", options: ["Resistance", "Universal Gas Constant", "Rate of Reaction", "Radius"], answer: "Universal Gas Constant" }
  ],
  Biology: [
    { question: "Where does the Krebs cycle occur in a eukaryotic cell?", options: ["Cytoplasm", "Mitochondrial Matrix", "Nucleus", "Golgi Apparatus"], answer: "Mitochondrial Matrix" },
    { question: "What is a bacteriophage?", options: ["A bacteria that eats other bacteria", "A virus that infects bacteria", "A type of white blood cell", "A fungal spore"], answer: "A virus that infects bacteria" },
    { question: "What is the Central Dogma of molecular biology?", options: ["RNA -> DNA -> Protein", "Protein -> RNA -> DNA", "DNA -> RNA -> Protein", "DNA -> Protein -> RNA"], answer: "DNA -> RNA -> Protein" },
    { question: "What is CRISPR primarily used for in modern biology?", options: ["Cloning entire organisms", "Gene editing", "Synthesizing artificial blood", "Creating vaccines"], answer: "Gene editing" },
    { question: "What is the specific role of tRNA during translation?", options: ["It unzips the DNA", "It forms the ribosome structure", "It carries specific amino acids to the ribosome", "It creates the mRNA strand"], answer: "It carries specific amino acids to the ribosome" }
  ],
  English: [
    { question: "What is iambic pentameter?", options: ["A poem with 5 lines", "A line of verse with five metrical feet, each consisting of one short syllable followed by one long syllable", "A rhyming scheme of AABB", "A story with five main characters"], answer: "A line of verse with five metrical feet, each consisting of one short syllable followed by one long syllable" },
    { question: "Which author wrote the stream-of-consciousness novel 'Ulysses'?", options: ["Virginia Woolf", "F. Scott Fitzgerald", "James Joyce", "Ernest Hemingway"], answer: "James Joyce" },
    { question: "What is 'synecdoche'?", options: ["A figure of speech in which a part is made to represent the whole", "An exaggerated statement", "A contradiction in terms", "Giving human traits to objects"], answer: "A figure of speech in which a part is made to represent the whole" },
    { question: "Which mood is used to express wishes, proposals, or conditions contrary to fact?", options: ["Indicative", "Imperative", "Subjunctive", "Interrogative"], answer: "Subjunctive" },
    { question: "What philosophical movement heavily influenced authors like Jean-Paul Sartre and Albert Camus?", options: ["Romanticism", "Transcendentalism", "Existentialism", "Realism"], answer: "Existentialism" }
  ],
  History: [
    { question: "Who fought in the Peloponnesian War?", options: ["Rome and Carthage", "Athens and Sparta", "Persia and Greece", "Egypt and Hittites"], answer: "Athens and Sparta" },
    { question: "What did the Treaty of Tordesillas do?", options: ["Ended the Thirty Years' War", "Divided the newly discovered lands outside Europe between Portugal and the Crown of Castile", "Established the borders of modern France", "Ended the Napoleonic Wars"], answer: "Divided the newly discovered lands outside Europe between Portugal and the Crown of Castile" },
    { question: "In what year did the Fall of Constantinople occur?", options: ["1066", "1215", "1453", "1492"], answer: "1453" },
    { question: "What was the Meiji Restoration?", options: ["The reinstatement of the Russian Tsar", "An event that restored practical imperial rule to the Empire of Japan in 1868", "The rebuilding of London after the Great Fire", "The unification of Germany"], answer: "An event that restored practical imperial rule to the Empire of Japan in 1868" },
    { question: "The Defenestration of Prague helped trigger which major European conflict?", options: ["The Hundred Years' War", "The Seven Years' War", "The Thirty Years' War", "World War I"], answer: "The Thirty Years' War" }
  ],
  Geography: [
    { question: "How is an oxbow lake formed?", options: ["Glacial melting", "A wide meander of a river is cut off, creating a free-standing body of water", "Volcanic crater filling with rain", "Meteor impact"], answer: "A wide meander of a river is cut off, creating a free-standing body of water" },
    { question: "What is the capital of Canada?", options: ["Toronto", "Vancouver", "Montreal", "Ottawa"], answer: "Ottawa" },
    { question: "What type of tectonic plate boundary creates a mid-ocean ridge?", options: ["Convergent", "Divergent", "Transform", "Subduction"], answer: "Divergent" },
    { question: "The Prime Meridian runs through which astronomical observatory?", options: ["Palomar", "Mauna Kea", "Greenwich", "Hubble"], answer: "Greenwich" },
    { question: "What does the 'albedo effect' measure?", options: ["Wind speed", "Ocean depth", "The proportion of the incident light or radiation that is reflected by a surface", "Seismic activity"], answer: "The proportion of the incident light or radiation that is reflected by a surface" }
  ],
  Computer_Science: [
    { question: "What is a Turing machine?", options: ["The first physical computer", "A mathematical model of computation that defines an abstract machine", "A machine used to break the Enigma code", "A brand of microprocessors"], answer: "A mathematical model of computation that defines an abstract machine" },
    { question: "What does Big O notation primarily describe?", options: ["The amount of memory a computer has", "The limiting behavior of a function when the argument tends towards a particular value or infinity (Time/Space complexity)", "Network bandwidth", "Database size"], answer: "The limiting behavior of a function when the argument tends towards a particular value or infinity (Time/Space complexity)" },
    { question: "What defines an NP-complete problem?", options: ["It can be solved in polynomial time", "No algorithm can solve it", "It is both in NP and NP-hard", "It only applies to networking protocols"], answer: "It is both in NP and NP-hard" },
    { question: "What is a 'deadlock' in operating systems?", options: ["The computer loses power", "A situation where a set of processes are blocked because each process is holding a resource and waiting for another resource acquired by some other process", "A hard drive failure", "A CPU overheating"], answer: "A situation where a set of processes are blocked because each process is holding a resource and waiting for another resource acquired by some other process" },
    { question: "In a hash table, what is a collision?", options: ["When the table runs out of memory", "When two different keys hash to the same index", "When the hashing function throws an error", "When the data is corrupted"], answer: "When two different keys hash to the same index" }
  ],
  JavaScript: [
    { question: "How does the JavaScript Event Loop work?", options: ["It executes asynchronous callbacks immediately", "It constantly checks if the call stack is empty, and if so, it pushes the first task from the task queue to the call stack", "It handles CSS animations", "It blocks the main thread until data is fetched"], answer: "It constantly checks if the call stack is empty, and if so, it pushes the first task from the task queue to the call stack" },
    { question: "What is prototypal inheritance?", options: ["Inheriting from classical Java classes", "A feature where objects can inherit properties directly from other objects", "Using the 'extends' keyword only", "A way to prevent inheritance"], answer: "A feature where objects can inherit properties directly from other objects" },
    { question: "What is 'currying' in JavaScript?", options: ["A library for styling", "The technique of evaluating a function with multiple arguments, into a sequence of functions with a single argument", "A way to fetch data", "Compressing a JavaScript file"], answer: "The technique of evaluating a function with multiple arguments, into a sequence of functions with a single argument" },
    { question: "What is a key difference between Map and WeakMap?", options: ["WeakMap can only store numbers", "Keys in a WeakMap must be objects and are weakly held (eligible for garbage collection)", "Map is faster", "WeakMap is used for CSS"], answer: "Keys in a WeakMap must be objects and are weakly held (eligible for garbage collection)" },
    { question: "What is the primary use case for Service Workers?", options: ["Rendering the DOM", "Running background scripts for features like push notifications and offline caching", "Database management", "Styling components"], answer: "Running background scripts for features like push notifications and offline caching" }
  ],
  "React": [
    { question: "What is the primary difference between useMemo and useCallback?", options: ["useMemo caches a function, useCallback caches a value", "useMemo caches a value, useCallback caches a function definition", "There is no difference", "useCallback is for async operations only"], answer: "useMemo caches a value, useCallback caches a function definition" },
    { question: "What is React Fiber?", options: ["A new CSS engine", "A routing library", "React's core reconciliation algorithm", "A global state manager"], answer: "React's core reconciliation algorithm" },
    { question: "How does React handle synthetic events behind the scenes?", options: ["It attaches an event listener to every single node", "It uses event delegation at the root of the document", "It bypasses the browser's event system entirely", "It uses WebSockets"], answer: "It uses event delegation at the root of the document" },
    { question: "What is a Higher-Order Component (HOC)?", options: ["A component that renders at the top of the DOM", "A function that takes a component and returns a new component", "A component connected to Redux", "A class component with lifecycle methods"], answer: "A function that takes a component and returns a new component" },
    { question: "In React 18, what is the purpose of the startTransition API?", options: ["To animate CSS transitions", "To handle page routing", "To mark state updates as non-urgent to keep the UI responsive", "To delay component mounting"], answer: "To mark state updates as non-urgent to keep the UI responsive" }
  ],
  "Node.js": [
    { question: "How can you take advantage of multi-core systems in Node.js?", options: ["Using the cluster module", "Using the http module", "It happens automatically", "Node.js cannot use multiple cores"], answer: "Using the cluster module" },
    { question: "What are Worker Threads used for?", options: ["Handling network requests", "Executing CPU-intensive JavaScript operations without blocking the event loop", "Parsing JSON", "Managing databases"], answer: "Executing CPU-intensive JavaScript operations without blocking the event loop" },
    { question: "What is backpressure in Node.js streams?", options: ["When a readable stream reads data faster than a writable stream can process it", "When the event loop crashes", "When a network request times out", "When memory leaks occur"], answer: "When a readable stream reads data faster than a writable stream can process it" },
    { question: "What design pattern does the EventEmitter implement?", options: ["Singleton", "Factory", "Observer (Pub/Sub)", "Decorator"], answer: "Observer (Pub/Sub)" },
    { question: "How do you detect memory leaks in a Node.js application?", options: ["Console.log tracking", "Using heap snapshots and profiling tools", "Using the fs module", "Memory leaks do not happen in Node.js"], answer: "Using heap snapshots and profiling tools" }
  ],
  "DBMS": [
    { question: "What is the difference between a B-Tree and a B+ Tree index?", options: ["There is no difference", "B+ Trees only store data pointers at the leaf nodes, making range queries faster", "B-Trees are only used for text", "B+ Trees cannot be balanced"], answer: "B+ Trees only store data pointers at the leaf nodes, making range queries faster" },
    { question: "What is Two-Phase Locking (2PL) used for?", options: ["Encrypting tables", "Ensuring serializability in transaction concurrency control", "Creating backups", "Joining multiple databases"], answer: "Ensuring serializability in transaction concurrency control" },
    { question: "Which of the following is the strictest transaction isolation level?", options: ["Read Uncommitted", "Read Committed", "Repeatable Read", "Serializable"], answer: "Serializable" },
    { question: "What does the CAP theorem state?", options: ["A distributed database can only guarantee two out of three: Consistency, Availability, and Partition tolerance", "A database must have Columns, Attributes, and Primary keys", "SQL is faster than NoSQL", "Consistency always overrides Availability"], answer: "A distributed database can only guarantee two out of three: Consistency, Availability, and Partition tolerance" },
    { question: "What is the purpose of Write-Ahead Logging (WAL)?", options: ["To log user logins", "To ensure atomicity and durability by writing changes to a log before applying them to the database", "To track query execution times", "To optimize SELECT statements"], answer: "To ensure atomicity and durability by writing changes to a log before applying them to the database" }
  ],
  "Operating System": [
    { question: "What are the four necessary conditions for a Deadlock?", options: ["Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait", "Paging, Segmentation, Swapping, Thrashing", "Read, Write, Execute, Terminate", "Fork, Exec, Wait, Exit"], answer: "Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait" },
    { question: "What is Priority Inversion?", options: ["When a high-priority process finishes before a low-priority process", "When a low-priority process holds a lock needed by a high-priority process", "When all processes have the same priority", "When the OS randomizes priority"], answer: "When a low-priority process holds a lock needed by a high-priority process" },
    { question: "What is the purpose of the Translation Lookaside Buffer (TLB)?", options: ["To store user files", "To act as a memory cache that stores recent translations of virtual memory to physical memory", "To buffer network packets", "To manage printer queues"], answer: "To act as a memory cache that stores recent translations of virtual memory to physical memory" },
    { question: "In Unix-like systems, what is an 'inode'?", options: ["A terminal command", "A data structure that stores information about a file, such as permissions and disk block locations", "A type of network protocol", "A graphical desktop environment"], answer: "A data structure that stores information about a file, such as permissions and disk block locations" },
    { question: "What does the Completely Fair Scheduler (CFS) in Linux aim to do?", options: ["Give all CPU time to the root user", "Maximize CPU utilization while providing fair CPU time to all runnable processes", "Prevent memory leaks", "Schedule disk defragmentation"], answer: "Maximize CPU utilization while providing fair CPU time to all runnable processes" }
  ],
  "Networking": [
    { question: "What is BGP (Border Gateway Protocol)?", options: ["A local area network protocol", "The protocol that makes core routing decisions on the Internet", "A protocol for assigning IP addresses dynamically", "A wireless encryption standard"], answer: "The protocol that makes core routing decisions on the Internet" },
    { question: "What are the steps of the TCP 3-way handshake?", options: ["REQ, ACK, DONE", "SYN, SYN-ACK, ACK", "PING, PONG, ACK", "OPEN, SEND, CLOSE"], answer: "SYN, SYN-ACK, ACK" },
    { question: "What is the primary function of NAT (Network Address Translation)?", options: ["To block spam emails", "To map multiple private non-routable IP addresses to a single public IP address", "To translate domain names to MAC addresses", "To boost Wi-Fi range"], answer: "To map multiple private non-routable IP addresses to a single public IP address" },
    { question: "What routing algorithm does OSPF (Open Shortest Path First) use?", options: ["Distance-Vector", "Link-State (Dijkstra's Algorithm)", "Path-Vector", "Spanning Tree"], answer: "Link-State (Dijkstra's Algorithm)" },
    { question: "How does the Transport layer perform multiplexing and demultiplexing?", options: ["Using MAC addresses", "Using IP addresses", "Using Port numbers", "Using URLs"], answer: "Using Port numbers" }
  ],
  "DSA": [
    { question: "What algorithm is used to find the shortest path from a source vertex to all other vertices in a weighted graph?", options: ["Depth-First Search", "Kruskal's Algorithm", "Dijkstra's Algorithm", "Merge Sort"], answer: "Dijkstra's Algorithm" },
    { question: "What is the main difference between an AVL Tree and a Red-Black Tree?", options: ["AVL trees are strictly balanced; Red-Black trees are less strictly balanced but provide faster insertions/deletions", "Red-Black trees are strictly balanced; AVL trees are not", "AVL trees only store integers", "There is no difference"], answer: "AVL trees are strictly balanced; Red-Black trees are less strictly balanced but provide faster insertions/deletions" },
    { question: "What are the two key characteristics a problem must have to be solved using Dynamic Programming?", options: ["Optimal substructure and overlapping subproblems", "Recursion and loops", "Greedy choice property and optimal substructure", "Divide and conquer"], answer: "Optimal substructure and overlapping subproblems" },
    { question: "What is the KMP (Knuth-Morris-Pratt) algorithm used for?", options: ["Sorting arrays", "Graph traversal", "String pattern matching", "Matrix multiplication"], answer: "String pattern matching" },
    { question: "Which data structure is most efficient for detecting cycles in an undirected graph?", options: ["Stack", "Queue", "Disjoint Set (Union-Find)", "Binary Tree"], answer: "Disjoint Set (Union-Find)" }
  ],
  "Current Affairs": [
    { question: "The Basel Convention is primarily concerned with the control of what?", options: ["Nuclear proliferation", "Transboundary movements of hazardous wastes and their disposal", "International maritime borders", "Free trade tariffs"], answer: "Transboundary movements of hazardous wastes and their disposal" },
    { question: "What is UNCLOS?", options: ["United Nations Convention on the Law of the Sea", "United Nations Council for Lunar Operations and Space", "United Nations Committee on Law of Outer Space", "United Nations Commission on Life Sciences"], answer: "United Nations Convention on the Law of the Sea" },
    { question: "The TRIPS agreement is an international legal agreement regarding what?", options: ["Travel Visas", "Intellectual Property Rights", "Climate Change targets", "Nuclear Disarmament"], answer: "Intellectual Property Rights" },
    { question: "What are Special Drawing Rights (SDR)?", options: ["A cryptocurrency", "An international reserve asset created by the IMF", "A type of World Bank loan", "A tax on international trade"], answer: "An international reserve asset created by the IMF" },
    { question: "What is the primary focus of the Sendai Framework?", options: ["Space exploration", "Disaster Risk Reduction", "Global vaccination", "Refugee resettlement"], answer: "Disaster Risk Reduction" }
  ],
  "Reasoning": [
    { question: "In a certain code language, 'COMPUTER' is written as 'RFUVQNPC'. How will 'MEDICINE' be written in that code?", options: ["EOJDJEFM", "MFEDJJOE", "EOJDEJFM", "MFEJDJOE"], answer: "EOJDJEFM" },
    { question: "If A + B means A is the brother of B; A - B means A is the sister of B, and A x B means A is the father of B. Which of the following means that C is the son of M?", options: ["M - N x C + F", "F - C + N x M", "M x N - C + F", "M x C + N - F"], answer: "M x C + N - F" },
    { question: "Statement: 'A warning on a cigarette packet says: Cigarette smoking is injurious to health.' Assumption I: People read warnings. Assumption II: People take notice of warnings.", options: ["Only I is implicit", "Only II is implicit", "Both I and II are implicit", "Neither I nor II is implicit"], answer: "Both I and II are implicit" },
    { question: "Five persons are sitting in a row. One of the two persons at the extreme ends is intelligent and other one is fair. A fat person is sitting to the right of a weak person. A tall person is to the left of the fair person and the weak person is sitting between the intelligent and the fat person. Tall person is at which place counting from right?", options: ["First", "Second", "Third", "Fourth"], answer: "Second" },
    { question: "Statement: All dogs are cats. Some cats are rats. Conclusion I: Some rats are dogs. Conclusion II: Some cats are dogs.", options: ["Only Conclusion I follows", "Only Conclusion II follows", "Both follow", "Neither follows"], answer: "Only Conclusion II follows" }
  ]
};

export default advancedQuiz;