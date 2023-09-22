<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $users = User::all(); 
        return response()->json($users, 200);
    }

    public function create(Request $request)
    {

        $validatedData = $request->validate([
            'full_name' => 'required|string',
            'email' => 'required|email|unique:users,email',
            'roles' => 'required|array',
        ]);

        $user = new User();
        $user->full_name = $validatedData['full_name'];
        $user->email = $validatedData['email'];
        $user->roles = json_encode($validatedData['roles']);
        $user->save();

        return response()->json(['message' => 'User created successfully'], 201);
    }
}
