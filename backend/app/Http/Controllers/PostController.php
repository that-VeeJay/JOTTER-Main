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

    public function store(Request $request)
    {
        $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'category' => ['required'],
            'image' => ['required', 'mimes:jpeg,png,jpg', 'max:5000'],
            'body' => ['required', 'string', 'min:3'],
        ]);

        try {
            $imagePath = $request->file('image')->store('posts', 'public');

            $imageUrl = asset('storage/' . $imagePath);

            $post = $request->user()->posts()->create([
                'title' => $request->title,
                'category' => $request->category,
                'image' => $imageUrl, 
                'body' => $request->body,
            ]);

            return response()->json([
                'msg' => 'success',
                'post' => [
                    'id' => $post->id,
                    'title' => $post->title,
                    'category' => $post->category,
                    'image_url' => $post->image, 
                    'body' => $post->body,
                ],
            ]);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function show(Post $post)
    {
        // return ['post' => $post, 'user' => $post->user];

        return array_merge($post->toArray(), ['user' => $post->user]);
    }
}
