from flask import Flask, render_template, request, jsonify
import mysql.connector

app = Flask(__name__)

def get_db_cursor():
    db = mysql.connector.connect(
        host="127.0.0.1",
        user="root",
        password="PWD#sql",
        database="task_manager"
    )
    return db, db.cursor(dictionary=True)

# ---------- PAGES ----------
@app.route("/")
def login_page():
    return render_template("login.html")

@app.route("/signup")
def signup_page():
    return render_template("signup.html")

@app.route("/dashboard")
def dashboard():
    return render_template("dashboard.html")

# ---------- AUTH ----------
@app.route("/api/signup", methods=["POST"])
def signup():
    data = request.json
    try:
        db, cursor = get_db_cursor()
        cursor.execute(
            "INSERT INTO users (username, password) VALUES (%s,%s)",
            (data["username"], data["password"])
        )
        db.commit()
        db.close()
        return jsonify(success=True)
    except:
        return jsonify(success=False, message="User already exists")

@app.route("/api/login", methods=["POST"])
def login():
    data = request.json
    db, cursor = get_db_cursor()
    cursor.execute(
        "SELECT * FROM users WHERE username=%s AND password=%s",
        (data["username"], data["password"])
    )
    user = cursor.fetchone()
    db.close()
    if user:
        return jsonify(success=True, user_id=user["id"])
    return jsonify(success=False)

# ---------- TASKS ----------
@app.route("/api/tasks", methods=["POST"])
def add_task():
    data = request.json
    db, cursor = get_db_cursor()
    cursor.execute(
        "INSERT INTO tasks (user_id, task) VALUES (%s,%s)",
        (data["user_id"], data["title"])
    )
    db.commit()
    db.close()
    return jsonify(success=True)

@app.route("/api/tasks/<int:user_id>")
def get_tasks(user_id):
    db, cursor = get_db_cursor()
    cursor.execute("SELECT * FROM tasks WHERE user_id=%s", (user_id,))
    tasks = cursor.fetchall()
    db.close()
    return jsonify(tasks)

@app.route("/api/tasks/status", methods=["PUT"])
def update_status():
    data = request.json
    db, cursor = get_db_cursor()
    cursor.execute(
        "UPDATE tasks SET status=%s WHERE id=%s",
        (data["status"], data["task_id"])
    )
    db.commit()
    db.close()
    return jsonify(success=True)

@app.route("/api/tasks/summary/<int:user_id>")
def summary(user_id):
    db, cursor = get_db_cursor()
    cursor.execute("""
        SELECT
        COUNT(*) total,
        SUM(status='Completed') completed,
        SUM(status='In progress') in_progress,
        SUM(status='Yet to start') yet_to_start
        FROM tasks WHERE user_id=%s
    """, (user_id,))
    r = cursor.fetchone()
    db.close()
    return jsonify({
        "total": r["total"] or 0,
        "completed": r["completed"] or 0,
        "in_progress": r["in_progress"] or 0,
        "yet_to_start": r["yet_to_start"] or 0
    })

@app.route("/api/tasks/<int:task_id>", methods=["DELETE"])
def delete_task(task_id):
    try:
        db, cursor = get_db_cursor()
        cursor.execute("DELETE FROM tasks WHERE id=%s", (task_id,))
        db.commit()
        db.close()
        return jsonify(success=True)
    except Exception as e:
        return jsonify(success=False, message=str(e))

# ---------- MAIN ----------
if __name__ == "__main__":
    app.run(debug=True)
