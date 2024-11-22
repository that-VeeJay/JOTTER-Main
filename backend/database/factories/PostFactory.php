<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $category = ['Travel', 'Education', 'Food', 'Gaming'];

        return [
            'title' => fake()->sentence(),
            'body' => fake()->sentence(20),
            'image' => fake()->imageUrl(600, 400, 'abstract', true),
            'category' => fake()->randomElement($category),
            'user_id' => User::factory(),
        ];
    }
}
