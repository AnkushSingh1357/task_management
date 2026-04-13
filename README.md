# Task Manager API

This is a simple REST API built using Node.js and Express for managing tasks.
Users can create, update, mark tasks as completed, and delete them.
All data is stored in memory, so no database is used.

---

## How to Run the Project

1. Clone the repository:

```
git clone https://github.com/YOUR_USERNAME/task-manager-api.git
cd task-manager-api
```

2. Install dependencies:

```
npm install
```

3. Start the server:

```
npm start
```

4. The server will run on:

```
http://localhost:3000
```

---

## Task Structure

Each task has the following fields:

* id (auto-generated)
* title (required)
* description (optional)
* status (pending or done)
* createdAt (timestamp)

---

## API Endpoints

### Create Task

POST /tasks

Example:

```
curl -X POST http://localhost:3000/tasks \
-H "Content-Type: application/json" \
-d '{"title":"Learn Node.js","description":"Build API"}'
```

---

### Get All Tasks

GET /tasks

Example:

```
curl http://localhost:3000/tasks
```

---

### Get Task by ID

GET /tasks/:id

Example:

```
curl http://localhost:3000/tasks/1
```

---

### Update Task

PUT /tasks/:id

Example:

```
curl -X PUT http://localhost:3000/tasks/1 \
-H "Content-Type: application/json" \
-d '{"title":"Updated Task"}'
```

---

### Mark Task as Done

PATCH /tasks/:id/done

Example:

```
curl -X PATCH http://localhost:3000/tasks/1/done
```

---

### Delete Task

DELETE /tasks/:id

Example:

```
curl -X DELETE http://localhost:3000/tasks/1
```

---

## Bonus Features

Filter tasks by status:

```
GET /tasks?status=pending
```

Sort tasks by creation time:

```
GET /tasks?sort=createdAt
```

---

## Error Handling

* 400: Missing or invalid input (e.g., title not provided)
* 404: Task not found
* 405: Method not allowed

---

## Tech Stack

* Node.js
* Express.js

---

## Notes

* No database is used; data is stored in memory
* Restarting the server will reset all tasks
