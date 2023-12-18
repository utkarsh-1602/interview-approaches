-- Create (insert)
INSERT INTO users (username, email, password)
VALUES('John', 'johncena@gmail.com', '12345')
SELECT *
FROM users;
UPDATE users
SET email = 'john.doe@example.com'
WHERE username = 'JohnDoe';
DELETE FROM users
WHERE username = 'JohnDoe';