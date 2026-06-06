<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;

class TaskController extends Controller
{
    // Get latest 5 incomplete tasks
    public function index()
    {
        $tasks = Task::where('completed', false)
            ->latest()
            ->take(5)
            ->get();

        return response()->json($tasks);
    }

    // Create task
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string'
        ]);

        $task = Task::create([
            'title' => $request->title,
            'description' => $request->description,
            'completed' => false
        ]);

        return response()->json($task, 201);
    }

    // Update task
    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string'
        ]);

        $task = Task::findOrFail($id);

        $task->update([
            'title' => $request->title,
            'description' => $request->description
        ]);

        return response()->json($task);
    }

    // Mark task as completed
    public function done($id)
    {
        $task = Task::findOrFail($id);

        $task->completed = true;
        $task->save();

        return response()->json([
            'message' => 'Task completed successfully'
        ]);
    }

    // Delete task
    public function destroy($id)
    {
        $task = Task::findOrFail($id);

        $task->delete();

        return response()->json([
            'message' => 'Task deleted successfully'
        ]);
    }
}