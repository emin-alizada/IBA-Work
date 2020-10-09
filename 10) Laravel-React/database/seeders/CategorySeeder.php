<?php

namespace Database\Seeders;

use App\Models\Restaurant;
use Faker\Factory;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $restaurants = Restaurant::all();

        $restaurants->each(function ($restaurant) {
            $count = 7;
            while ($count--) {
                $category = $restaurant->categories()->create([
                    'restaurant_id' => $restaurant->id
                ]);

                $restaurant->languages->each(function ($language) use ($category) {
                    $category->translations()->create([
                        'language_id' => $language->id,
                        'title' => $language->title . '_' .Factory::create()->name
                    ]);
                });
            }
        });
        //
    }
}
