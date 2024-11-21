<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\User;
use Illuminate\Http\Request;
use App\Helper\ResponseHelper;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        try {
            $fields = $request->validate([
                'name' => ['required', 'string', 'max:255' , "regex:/^[\pL\s\-]+$/u"], // Allows only letters, spaces, and hyphens
                'email' => ['required', 'email' ,'unique:users,email', 'max:255'],
                'password' => ['required','string', 'confirmed', 'min:3', ],
            ]);

            $user = User::create($fields);

            if ($user) {
                $token = $user->createToken($request->name);
                return ResponseHelper::success(
                    message: "Your registration was successful", 
                    data: $user, 
                    token: $token->plainTextToken
                );
            }   

            return ResponseHelper::error(message: "Unable to register user. Please try again.");
        
        } catch (ValidationException $e){
            return ResponseHelper::error(
                message: 'Validation failed.',
                errors: $e->errors(),
            );

        } catch (Exception $e) {
            Log::error('Registration error: ' . $e->getMessage());
            return ResponseHelper::error(message: "Unable to register user. Please try again.");
        }
    }

    public function login(Request $request)
    {
        try {
            $request->validate([
                'email' => ['required', 'email', 'max:255'],
                'password' => ['required'],
            ]);

            $user = User::where('email', '=', $request->email)->first();

            if (!$user || !Hash::check($request->password, $user->password)) {
                return ResponseHelper::error(
                    message: "Unable to login user. Please try again.", 
                    errors: ['email' => "The provided credentials are incorrect"
                ]);
            }

            $token = $user->createToken($user->name);

            return ResponseHelper::success(
                message: "User has been logged in successfully.", 
                data: $user, token: $token->plainTextToken
            );
         
        } catch (ValidationException $e){
            return ResponseHelper::error(
                message: 'Validation failed.',
                errors: $e->errors(),
            );
        } catch (Exception $e) {
            Log::error('Registration error: ' . $e->getMessage());
            return ResponseHelper::error(
                message: "Unable to login user. Please try again."
            );
        }
    }

    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();

        return ResponseHelper::success(message: "You are logged out.");
    }

}
