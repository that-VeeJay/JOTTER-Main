<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::controller(AuthController::class)->group(function () {
    Route::post("/register", 'register');
    Route::post("/logout", 'logout')->middleware('auth:sanctum');
    Route::post("/login", 'login');
});


Route::get("/posts", [PostController::class, 'index']);


