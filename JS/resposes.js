function getBotResponse(input) {
   

// Programming related question
    if (input == "What is Computer programming") {
        return "Computer Programming is also known as programming or coding. Programming is a process which includes processes such as coding, maintaining, updating, debugging, writing, designing (algorithm), etc.";
    } else if (input == "What is debugging") {
        return "Debugging is the process of finding and removing errors in a program. In this process, the program is thoroughly checked for errors. Then errors are pointed out and debugged";
    }else if (input == "debugging") {
        return "Debugging is the process of finding and removing errors in a program. In this process, the program is thoroughly checked for errors. Then errors are pointed out and debugged";
    } 
    else if (input == "What is an algorithm") {
        return "An algorithm is a finite set of steps which, if followed, accomplish a particular task. An algorithm must be clear, finite and effective.";
    }else if (input == " What are variables") {
        return "Variables are named memory locations (memory cells) which are used to store the program’s input and its computational results during program execution. As the name suggests, the value of a variable may change during the program execution.";
    }else if (input == "What are reserved words") {
        return "Reserved words or keywords are the words, which have predefined meanings. They have predefined uses and cannot be used or redefined for any other purpose in a programming language.";
    }else if (input == "What are loops") {
        return "The loop is a structure which can repeat a set of statements up to a fixed number of times or until a certain criterion is satisfied.";
    }else if (input == "Name different types of loops") {
        return "Different types of loops are FOR, WHILE LOOP, DO..WHILE ";
    }else if (input == "Define Operators") {
        return "Operators are symbols which are used to perform certain operations on a data. These include arithmetic, relational, logical, and assignment operators";
    }else if (input == "Operators") {
        return "Operators are symbols which are used to perform certain operations on a data. These include arithmetic, relational, logical, and assignment operators";
    }
    else if (input == "What is an Array") {
        return "An array is a collection of contiguous memory locations which can store data of the same type.";
    }else if (input == " What are numeric variables") {
        return "You already have tons of question on numeric variables. Replace this  The variables which can store numeric values are called number variables. Numeric values include both floating point numbers and whole numbers.";
    }else if (input == "What is Beta version") {
        return "The beta version of a software is that version which is not ready for release and can be changed after the feedback from the users. Beta version comes after alpha version.";
    }else if (input == "What is the purpose of the assignment operator") {
        return "The assignment operator is used to store a value, string or a computational result in a variable.";
    }else if (input == "What are commands") {
        return "Commands are executable instructions which are operated in the direct mode. They do not require a preceding line number. Incorrect info";
    }else if (input == "What are numeric variables") {
        return "The variables which can store numeric values are called number variables. Numeric values include both floating point numbers and whole numbers.";
    }else if (input == "variables") {
        return "The variables which can store numeric values are called number variables. Numeric values include both floating point numbers and whole numbers.";
    } else if (input == "What is software testing") {
        return "Software testing a process in which software is tested under certain conditions to test the quality of a program. Testing a program is also required to check whether the software provides a good user experience or not.";
    }else if (input == "What is reliability") {
        return "It is the proper working of software during a specific period of time. If a program doesn’t work properly during the required period then it’s not reliable.";
    }else if (input == "List some programming languages") {
        return "Some programming languages are listed below: C, C++, JAVA, Javascript, "
        
        ;
    }else if (input == "What is Documentation") {
        return "Documentation is a detailed description of a program’s algorithm, design, coding method, testing, and proper usage. Documentation is valuable for the users who rely upon the program on a day-to-day basis, and for the programmer who may be called on to modify or update it.";
    }else if (input == "For") {
        return "When it is known in advance how many times the loop must be repeated the FOR…NEXT Loop is the most effective option. FOR…NEXT Loop is used to repeat a set of statements to a specific number of times.";
    }else if (input == "what is for loop") {
        return "When it is known in advance how many times the loop must be repeated the FOR…NEXT Loop is the most effective option. FOR…NEXT Loop is used to repeat a set of statements to a specific number of times.";
    }else if (input == "WHILE") {
        return "The While loop keeps repeating an action until an associated condition becomes false. This is useful where the programmer does not know in advance how many times the loop will be executed.";
    }else if (input == "java") {
        return "Java is a widely used object-oriented programming language and software platform that runs on billions of devices, including notebook computers, mobile devices, gaming consoles, medical devices and many others. The rules and syntax of Java are based on the C and C++ languages";
    }else if (input == "c") {
        return "The C programming language is a procedural and general-purpose language that provides low-level access to system memory. A program written in C must be run through a C compiler to convert it into an executable that a computer can run.";
    }else if (input == "js") {
        return "Javascript is used by programmers across the world to create dynamic and interactive web content like applications and browsers. JavaScript is so popular that it's the most used programming language in the world, used as a client-side programming language by 97.0% of all websites";
    }else if (input == "Python") {
        return "Python is an interpreted, object-oriented, high-level programming language with dynamic semantics developed by Guido van Rossum. It was originally released in 1991";
    }else if (input == "python") {
        return "Python is an interpreted, object-oriented, high-level programming language with dynamic semantics developed by Guido van Rossum. It was originally released in 1991";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else if (input == "hi") {
        return "hello!";
    }
     else {
        return "Try asking something else!";
    }
}