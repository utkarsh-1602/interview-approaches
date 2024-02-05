-- Create Product Table
CREATE TABLE Products{
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(100),
    CategoryID INT,
    Price DECIMAL(10,2),
    StockQuantity INT,
    CONSTRAINT fk_category FOREIGN KEY (CategoryID) REFERENCES Categories(CategoryID)
}

-- Create Category Table
CREATE TABLE Categories (
    CategoryID INT PRIMARY KEY,
    CategoryName VARCHAR(50)
);
