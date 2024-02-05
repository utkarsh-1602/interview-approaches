-- Create Employee Table
CREATE TABLE Employee {
    Employee_ID INTEGER PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    DepartmentID INTEGER, 
    Salary DECIMAL(10, 2),
    StockQuantity INTEGER,
    CONSTRAINT fk_department FOREIGN KEY (DepartmentID) REFERENCES Departments(DepartmentID)

}

-- Create Department Table