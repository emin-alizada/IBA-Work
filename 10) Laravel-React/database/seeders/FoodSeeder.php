<?php

namespace Database\Seeders;

use App\Models\Category;
use Faker\Factory;
use Illuminate\Database\Seeder;

class FoodSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Category::all()->each(function ($category) {
            $dicount_price = Factory::create()->randomFloat(2,1, 1000);
            $food = $category->food()->create([
                'price' => $dicount_price + Factory::create()->randomFloat(2,1, 20),
                'discount_price' => random_int(1,5) === 2 ? $dicount_price : null,
                'status' => random_int(1,5) === 2 ? 'deactive' : 'active',
            ]);

            $category->restaurant->languages->each(function ($language) use ($food) {
                $food->translations()->create([
                    'language_id' => $language->id,
                    'title' => $language->title . '_' .Factory::create()->name,
                    'description' => random_int(1,5) === 2 ? null : $language->title . '_' .Factory::create()->sentence(random_int(5,15))
                ]);
            });
        });
    }

}
