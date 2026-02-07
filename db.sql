CREATE DATABASE IF NOT EXISTS todo_list;
USE todo_list;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    task VARCHAR(255) NOT NULL,
    status VARCHAR(20) DEFAULT 'Yet to start',
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
