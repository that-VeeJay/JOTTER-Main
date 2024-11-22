<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index(Request $request)
    {
        $type = $request->query('type', 'latest');
        $limit = $request->query('limit', 4);

        $posts = Post::with('user')
            ->when($type === 'latest', function ($query) {
                $query->orderBy('created_at', 'desc');
            })
            // ->when($type === 'popular', function($query)  {
            //     $query->orderBy('views', 'desc');
            // })
            ->when($type === 'featured', function ($query) {
                $query->where('is_featured', true);
            })
            ->limit($limit)
            ->get();

        return response()->json($posts);
    }
}
