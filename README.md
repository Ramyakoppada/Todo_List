## 🚀 Project Overview

The **todo_list** is a full-stack web application that enables users to manage daily tasks efficiently. It provides secure login/signup functionality, task creation, status tracking and dashboard analytics.

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
* GitHub
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
* 
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
## 🔗 API Endpoints

### 🔐 Authentication

**POST** `/api/signup`  
→ Register a new user  

**POST** `/api/login`  
→ Authenticate user  

---

### ✅ Tasks

**POST** `/api/tasks`  
→ Add a new task  

**GET** `/api/tasks/<user_id>`  
→ Fetch user tasks  

**PUT** `/api/tasks/status`  
→ Update task status  

**DELETE** `/api/tasks/<task_id>`  
→ Delete task  

**GET** `/api/tasks/summary/<user_id>`  
→ Dashboard summary  

---

## 🗄 Database Schema

### 👤 Users Table
- **id** — INT (Primary Key)  
- **username** — VARCHAR  
- **password** — VARCHAR  

---

### 📝 Tasks Table
- **id** — INT (Primary Key)  
- **user_id** — INT (Foreign Key)  
- **task** — TEXT  
- **status** — VARCHAR  

---

## ▶️ How to Run the Project

### 1️⃣ Clone Repository

```bash
git clone https://github.com/Ramyakoppada/Todo_List
cd To_List
```

### 2️⃣ Install Dependencies

bash
pip install flask mysql-connector-python


### 3️⃣ Setup MySQL Database

* Create database:

sql
CREATE DATABASE todo_list;


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


* **Login Page :**
  
  <img width="1920" height="1080" alt="Screenshot (96)" src="https://github.com/user-attachments/assets/b6b873f1-fb72-440e-be6a-793440cdf50f" />

  
* **Signup Page :**
  
  <img width="1920" height="1080" alt="Screenshot (97)" src="https://github.com/user-attachments/assets/d68c54f1-017f-4e77-9d75-26a71211fc90" />

* **Dashboard :**
  
  <img width="1920" height="1080" alt="Screenshot (98)" src="https://github.com/user-attachments/assets/d0a7d668-d550-4893-b411-cbf61e9a0202" />

* **Add Task :**
  
  <img width="1920" height="1080" alt="Screenshot (100)" src="https://github.com/user-attachments/assets/1cb38a0b-f45e-4422-b787-873bc32a96f4" />

* **Task List :**
  
  <img width="1920" height="1080" alt="Screenshot (99)" src="https://github.com/user-attachments/assets/f053ae8e-4d3d-4a38-a6a2-3f391048b725" />

---





