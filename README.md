## 🚀 Project Overview

The **Todo_List** is a full-stack web application that enables users to manage daily tasks efficiently. It provides secure login/signup functionality, task creation, status tracking and dashboard analytics.

This project demonstrates strong system design, API development, database integration and frontend-backend communication.

---

## 🛠 Tech Stack

### **Frontend**

* HTML
* CSS
* JavaScript 

### **Backend**

* Python
* Flask

### **Database**

* MySQL

### **Tools**

* VS Code
* Git & GitHub
* REST APIs

---

## ⚙️ Features

### ✅ User Authentication

* Secure signup
* Login validation
* Local storage-based session handling
* Logout functionality

### ✅ Task Management

* Add new tasks
* View all tasks
* Update task status:

  * Yet to Start
  * In Progress
  * Completed
* Delete tasks

### ✅ Dashboard Analytics

Displays real-time task statistics:

* Total Tasks
* Completed
* In Progress
* Pending

### ✅ RESTful APIs

Fully integrated backend APIs for seamless frontend communication.

---

## 📂 Project Structure

```
TODO_LIST/
│
├── static/
│   ├── script.js
│   └── style.css
│
├── templates/
│   ├── login.html
│   ├── signup.html
│   └── dashboard.html
│
├── app.py
└── db.sql
```

---

## 🔌 API Endpoints

### Authentication

| Method | Endpoint      | Description         |
| ------ | ------------- | ------------------- |
| POST   | `/api/signup` | Register a new user |
| POST   | `/api/login`  | Authenticate user   |

### Tasks

| Method | Endpoint                       | Description        |
| ------ | ------------------------------ | ------------------ |
| POST   | `/api/tasks`                   | Add a new task     |
| GET    | `/api/tasks/<user_id>`         | Fetch user tasks   |
| PUT    | `/api/tasks/status`            | Update task status |
| DELETE | `/api/tasks/<task_id>`         | Delete task        |
| GET    | `/api/tasks/summary/<user_id>` | Dashboard summary  |

---

## 🗄 Database Schema

### **Users Table**

| Column   | Type     |
| -------- | -------- |
| id       | INT (PK) |
| username | VARCHAR  |
| password | VARCHAR  |

### **Tasks Table**

| Column  | Type     |
| ------- | -------- |
| id      | INT (PK) |
| user_id | INT (FK) |
| task    | TEXT     |
| status  | VARCHAR  |

---

## ▶️ How to Run the Project

### 1️⃣ Clone Repository

```bash
git clone <your-repo-url>
cd task-manager
```

### 2️⃣ Install Dependencies

```bash
pip install flask mysql-connector-python
```

### 3️⃣ Setup MySQL Database

* Create database:

```sql
CREATE DATABASE todo_list;
```

* Import `db.sql`

### 4️⃣ Configure Database Credentials

Update in **app.py**:

```python
host="127.0.0.1",
user="root",
password="YOUR_PASSWORD",
database="todo_list"
```

### 5️⃣ Run the Application

```bash
python app.py
```

Visit:

```
http://127.0.0.1:5000
```

---

## 📸 Screenshots 

Include:

* Login Page
* Signup Page
* Dashboard
* Add Task
* Task List

---



|---------|--------
|        |
|--------|
|
