<?php

namespace App\Helper;

class ResponseHelper
{
    /**
     * Create a new class instance.
     */
    public function __construct()
    {
        //
    }

    /**
     * Common function to display success json response
     * @param string $status
     * @param string $message
     * @param array $data
     * @param string $token
     * @param integer $statusCode
     * @return response
     */
    public static function success($status = 'success', $message = null, $data = [], $token = null)
    {
        return response()->json([
            'status' => $status,
            'message' => $message,
            'data' => $data,
            'token' => $token,
        ]);
    }

     /**
     * Common function to display error json response
     * @param string $status
     * @param string $message
     * @param integer $statusCode
     * @return response
     */
    public static function error($status = 'error', $message = null, $errors = null)
    {
        return response()->json([
            'status' => $status,
            'message' => $message,
            'errors' => $errors,
        ]);
    }
}
