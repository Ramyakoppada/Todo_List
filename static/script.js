
const userId = localStorage.getItem("userId");

/* ---------- AUTH ---------- */

function login() {
    fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            username: username.value,
            password: password.value
        })
    })
    .then(r => r.json())
    .then(d => {
        if (d.success) {
            localStorage.setItem("userId", d.user_id);
            location.href = "/dashboard";
        } else {
            alert("Invalid login");
        }
    });
}

function signup() {
    fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            username: newUsername.value,
            password: newPassword.value
        })
    })
    .then(() => location.href = "/");
}

function logout() {
    localStorage.removeItem("userId");
    location.href = "/";
}

/* ---------- UI HELPERS ---------- */

function hideAll() {
    summaryCards.style.display = "none";
    addTaskBox.style.display = "none";
    taskListBox.style.display = "none";
}

function showDashboard() {
    hideAll();
    summaryCards.style.display = "grid";
    loadSummary();
}

function showAddTask() {
    hideAll();
    addTaskBox.style.display = "block";
}

function showTasks() {
    hideAll();
    taskListBox.style.display = "block";
    loadTasks();
}

/* ---------- TASK ACTIONS ---------- */

function addTask() {
    if (!taskInput.value.trim()) return;

    fetch("/api/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            user_id: userId,
            title: taskInput.value
        })
    }).then(() => {
        // show success message
        msg.innerText = "Task Successfully Added";
        msg.style.opacity = 1;

        taskInput.value = "";
        loadSummary();

        // hide message after 2 seconds
        setTimeout(() => {
            msg.style.opacity = 0;
            setTimeout(() => {
                msg.innerText = "";
            }, 500);
        }, 500);
    });
}
function loadTasks() {
    fetch(`/api/tasks/${userId}`)
        .then(r => r.json())
        .then(tasks => {
            taskList.innerHTML = "";
            tasks.forEach(t => {
                taskList.innerHTML += `
                <li>
                    <span>${t.task}</span>
                    <div style="display:flex; gap:10px; align-items:center;">
                        <select onchange="updateStatus(${t.id}, this.value)">
                            <option ${t.status === "Yet to start" ? "selected" : ""}>Yet to start</option>
                            <option ${t.status === "In progress" ? "selected" : ""}>In progress</option>
                            <option ${t.status === "Completed" ? "selected" : ""}>Completed</option>
                        </select>
                        <button class="delete-btn" onclick="deleteTask(${t.id})">Delete</button>
                    </div>
                </li>`;
            });
        });
}
function deleteTask(taskId) {
    if (!confirm("Are you sure you want to delete this task?")) return;

    fetch(`/api/tasks/${taskId}`, {
        method: "DELETE"
    })
    .then(() => {
        loadTasks();    // Reload the task list
        loadSummary();  // Update the dashboard summary
    })
    .catch(err => {
        console.error("Error deleting task:", err);
    });
}


function updateStatus(id, status) {
    fetch("/api/tasks/status", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            task_id: id,
            status: status
        })
    }).then(loadSummary);
}

/* ---------- SUMMARY ---------- */

function loadSummary() {
    fetch(`/api/tasks/summary/${userId}`)
        .then(r => r.json())
        .then(d => {
            totalTasks.innerText = d.total;
            completedTasks.innerText = d.completed;
            progressTasks.innerText = d.in_progress;
            pendingTasks.innerText = d.yet_to_start;
        });
}


/* ---------- PAGE LOAD ---------- */

if (location.pathname === "/dashboard") {
    if (!userId) {
        location.href = "/";
    } else {
        showDashboard();
    }
}

