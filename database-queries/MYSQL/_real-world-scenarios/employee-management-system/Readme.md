# Employee Management System
A scenario where you need to manage employee information in a company.

### concepts used in this section 

- In MySQL, INTEGER and INT are synonyms, and you can use them interchangeably when defining a column's data type. Both INTEGER and INT are used to represent integer values. 

        Employee_ID INTEGER PRIMARY KEY
        Employee_ID INT PRIMARY KEY


- **VARCHAR**:  stands for "variable character" and is a character data type used in relational database systems like MySQL. The VARCHAR data type is designed to store variable-length character strings. This means that the storage size of a VARCHAR column is based on the actual length of the data stored in it, rather than a fixed length.

- **DECIMAL(10,2)**: 
- Precision (10): It indicates the total number of digits, both to the left and right of the decimal point. In this case, the Salary column can store up to 10 digits in total.
- Scale (2): It specifies the number of digits to the right of the decimal point. In this case, the Salary column can have up to 2 digits after the decimal point.

**FOREIGN KEY**: 
- A foreign key is a column or a set of columns in a relational database table that refers to the primary key of another table. It establishes a link between the data in two tables, creating a relationship.
- Primary Key (PK): A unique identifier for a record in a table.
- Foreign Key (FK): A column in a table that refers to the primary key in another table. It establishes a connection between the two tables, often representing a relationship between the data in those tables.

**REFERENCES**:
- In the context of a relational database, the term "REFERENCES" is used when defining a foreign key constraint. It specifies the relationship between two tables by indicating that a column or a set of columns in one table refers to the primary key of another table.
- Let's consider a scenario where you have two tables: one for storing information about students and another for storing information about courses they are enrolled in.

                -- Create Students Table
                CREATE TABLE Students (
                StudentID INT PRIMARY KEY,
                FirstName VARCHAR(50),
                LastName VARCHAR(50),
                CONSTRAINT pk_student_id UNIQUE (StudentID)
                );

                -- Create Courses Table
                CREATE TABLE Courses (
                CourseID INT PRIMARY KEY,
                CourseName VARCHAR(100),
                Instructor VARCHAR(50),
                CONSTRAINT pk_course_id UNIQUE (CourseID)
                );

                -- Create Enrollments Table with Foreign Keys
                CREATE TABLE Enrollments (
                EnrollmentID INT PRIMARY KEY,
                StudentID INT,
                CourseID INT,
                EnrollmentDate DATE,
                CONSTRAINT fk_student FOREIGN KEY (StudentID) REFERENCES Students(StudentID),
                CONSTRAINT fk_course FOREIGN KEY (CourseID) REFERENCES Courses(CourseID)
                );

- The foreign key constraints (fk_student and fk_course) in the Enrollments table indicate that the StudentID column refers to the StudentID column in the Students table, and the CourseID column refers to the CourseID column in the Courses table.



**CONSTRAINT fk_department FOREIGN KEY (DepartmentID) REFERENCES Departments(DepartmentID)**: 
- This SQL statement is creating a foreign key constraint named fk_department on the DepartmentID column in a table, and it references the DepartmentID column in another table named Departments.
- CONSTRAINT fk_department: This is just a name given to the foreign key constraint. In this case, it's named fk_department, but you could choose a different name.
- FOREIGN KEY (DepartmentID): This part specifies that the DepartmentID column in the current table is going to be a foreign key.
- REFERENCES Departments(DepartmentID): This indicates that the foreign key in the current table (DepartmentID) refers to the primary key in another table (Departments), specifically the DepartmentID column in the Departments table.

