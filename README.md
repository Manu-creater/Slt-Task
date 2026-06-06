# SLT Task Management Application

## Technologies Used

* Laravel 13
* React + Vite
* SQLite
* Axios

## Features

* Create tasks
* Edit tasks
* Mark tasks as completed
* Delete tasks
* Display latest 5 incomplete tasks

## Backend Setup

```bash
cd backend
composer install
php artisan migrate
php artisan serve
```

Backend runs on:

```
http://127.0.0.1:8002
```

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## API Endpoints

GET /api/tasks

POST /api/tasks

PUT /api/tasks/{id}

PATCH /api/tasks/{id}/done

DELETE /api/tasks/{id}

## Database

SQLite

## Author

Manusha Kalpani
