export class ProgrammingTipsRepository {

    private readonly tips = [
        "Comment your code like you're explaining it to a rubber duck - quack quack!",
        "Indentation is your friend - make your code look pretty, not like a chaotic noodle bowl!",
        "Variable names are not a game of Scrabble - use descriptive names, not 'x' or 'y'",
        "Bugs are just unexpected features - embrace the chaos (but fix them anyway)",
        "The best code is no code at all - keep it simple, silly!",
        "Git commit often, or risk losing your sanity (and your work)",
        "Semicolons are like sprinkles on code - some languages need them, others don't",
        "Your code doesn't need to be a one-liner to impress - readability wins every time",
        "Debugging is like being a detective, but the culprit is always you",
        "Don't reinvent the wheel - unless you're making a really cool hexagonal wheel",
        "Loops are like merry-go-rounds - fun until you forget the exit condition",
        "Functions are like tiny robots - train them well, and they'll do your bidding",
        "Arrays start at 0, just like your programming knowledge when you began - and that's okay!",
        "Whitespace is free - use it liberally to make your code breathe",
        "Code reviews are not personal attacks - they're group hugs for your code",
        "The compiler is your brutally honest friend - listen to its advice",
        "Refactoring is like cleaning your room - painful but necessary",
        "Rubber duck debugging works - bonus points if you use a real duck",
        "Don't optimize prematurely - make it work first, make it fast later",
        "Stack Overflow is your friend, but don't copy-paste blindly - understand the solution",
        "Version control is like a time machine for your code - use it wisely",
        "Testing is not just for QA - be your own worst critic",
        "Recursion is like Inception - dreams within dreams, functions within functions",
        "Error messages are treasure maps - follow them to the gold (bug)",
        "Pair programming is like a dance - lead, follow, and step on each other's toes occasionally",
        "Code documentation is like love letters to your future self",
        "Naming conventions are the fashion police of programming - follow them or risk public shaming",
        "Logic errors are the ninjas of bugs - silent, deadly, and hard to spot",
        "Regular expressions are like magic spells - powerful but easy to miscast",
        "Don't fear the command line - embrace your inner hacker",
        "Keyboard shortcuts are like cheat codes for productivity - learn them!",
        "Code formatting tools are your personal stylists - let them make you look good",
        "Modular code is like LEGO - build complex structures from simple pieces",
        "Hardcoding values is like writing in permanent marker - flexible, it is not",
        "Logging is like breadcrumbs in a forest - help yourself find your way back",
        "Memory management is like tidying up - clean as you go or face the mess later",
        "API documentation is your map in the coding wilderness - don't leave home without it",
        "Continuous integration is like having a robot assistant - let it do the repetitive work",
        "Code smells are like bad cheese - they only get worse with time",
        "Design patterns are like dance moves - learn the basics, then improvise",
        "Polymorphism is like having shape-shifting superpowers - use it responsibly",
        "Encapsulation is like a secret diary - keep the private stuff private",
        "Inheritance is like genetics - sometimes it's better to compose than to inherit",
        "Don't repeat yourself (DRY) - copy-paste is not a design pattern",
        "User input is like a box of chocolates - you never know what you're gonna get",
        "Multithreading is like juggling - exciting but easy to drop the ball",
        "Code without tests is like a ship without a compass - you'll get lost eventually",
        "Technical debt is like credit card debt - pay it off regularly or suffer the consequences",
        "Premature abstraction is the root of much evil - and confusion",
        "The principle of least astonishment - make your code behave as expected",
        "YAGNI (You Ain't Gonna Need It) - don't build features for imaginary future scenarios",
        "Rubber banding code is like stretching a rubber band - it'll snap back and hit you",
        "Coding standards are like table manners - follow them to avoid offending others",
        "Edge cases are like the Spanish Inquisition - nobody expects them!",
        "Big O notation is like a speedometer for your algorithms - keep an eye on it",
        "Defensive programming is like wearing a seatbelt - it might save your life (or your app)",
        "Code reviews are like potlucks - everyone brings something to the table",
        "Micro-optimizations are like rearranging deck chairs on the Titanic - focus on the iceberg",
        "Scalability is like planning a party - account for unexpected guests",
        "Coding conventions are like driving on the correct side of the road - stick to them",
        "Simplicity is the ultimate sophistication - in life and in code",
        "Dependency injection is like ordering pizza - let someone else handle the preparation",
        "State management is like herding cats - challenging but necessary",
        "Functional programming is like cooking with pure ingredients - no side effects",
        "Object-oriented programming is like playing with LEGO - everything is an object",
        "Asynchronous programming is like planting seeds - set it and forget it (for a while)",
        "Code organization is like arranging your closet - keep related items together",
        "Mocking in tests is like stunt doubles in movies - fake it till you make it",
        "Interface segregation is like a Swiss Army knife - many specific tools are better than one bulky one",
        "Liskov substitution principle is like duck typing - if it quacks like a duck, treat it like a duck",
        "Single responsibility principle is like a good employee - do one job and do it well",
        "Open/closed principle is like a good board game - extendable but with solid core rules",
        "Dependency inversion is like building with LEGO - high-level modules shouldn't depend on low-level ones",
        "SOLID principles are like the Force - let them guide you to clean code",
        "Imperative vs declarative is like giving directions vs providing a map - both get you there",
        "Immutability is like writing in stone - unchangeable and predictable",
        "Pure functions are like vending machines - same input, same output, no surprises",
        "Closures are like a function's backpack - carrying around its environment",
        "Promises are like IOUs - a guarantee for future results",
        "Event-driven programming is like a restaurant kitchen - respond to orders as they come",
        "Lazy evaluation is like JIT (Just-In-Time) inventory - compute only when necessary",
        "Memoization is like a cheat sheet - store results for quick future reference",
        "Containerization is like packing for a trip - everything you need in one neat package",
        "Infrastructure as Code is like a LEGO instruction manual - rebuild your environment easily",
        "Feature flags are like light switches - easily turn features on and off",
        "A/B testing is like being a mad scientist - experiment to find what works best",
        "Fuzzing is like letting a toddler play with your app - expect the unexpected",
        "Cache invalidation is one of the hardest problems - like knowing when the milk in your fridge goes bad",
        "Naming things is the other hardest problem - like naming a pet or a band",
        "Microservices are like a potluck dinner - everyone brings a dish, but coordination is key",
        "Monoliths are like one-pot meals - simple but can become a mess if you're not careful",
        "Database normalization is like organizing your spice rack - everything in its right place",
        "Denormalization is like meal prep - sometimes redundancy is more efficient",
        "Big data is like trying to drink from a fire hose - you need the right tools",
        "Machine learning is like teaching a dog new tricks - it takes lots of data and patience",
        "DevOps is like harmony between dev and ops teams - make beautiful music together",
        "Agile is like jazz - structured improvisation towards a common goal",
        "Waterfall is like classical music - beautifully structured but not always practical",
        "Technical interviews are like first dates - be yourself and don't try too hard to impress",
        "Impostor syndrome is the most common bug in a developer's mind - everyone has it, you're not alone",
        "Programming languages are like musical instruments - master one, and the others become easier",
        "Refactoring is like rearranging furniture - same functionality, better flow",
        "Code kata is like practicing scales - repetition leads to mastery",
        "Premature optimization is the root of all evil - as is premature pessimization",
        "The Zen of Python applies to all languages - simplicity, explicitness, and one obvious way to do it"
      ];

      public get():string {
        const tip = this.tips[Math.floor(Math.random() * this.tips.length)];
        return tip;
      }

      public getAll():string[] {
        return this.tips;
      }
}   