<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;

Route::get('/tasks', [TaskController::class, 'index']);

Route::post('/tasks', [TaskController::class, 'store']);

Route::put('/tasks/{id}', [TaskController::class, 'update']);

Route::patch('/tasks/{id}/done', [TaskController::class, 'done']);

Route::delete('/tasks/{id}', [TaskController::class, 'destroy']);