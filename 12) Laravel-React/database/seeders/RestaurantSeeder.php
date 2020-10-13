<?php

namespace Database\Seeders;

use App\Models\Restaurant;
use Illuminate\Database\Seeder;

class RestaurantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
//        Restaurant::factory(5)->create();
        $restaurants = [
            [
                'title' => 'Nusr@',
                'slug' => 'nusret'
            ],
            [
                'title' => 'Atmosphere Lounge',
                'slug' => 'atmosphere'
            ],
            [
                'title' => 'Il Futuro',
                'slug' => 'il-futuro'
            ],
            [
                'title' => 'Starbucks Coffees',
                'slug' => 'starbucks'
            ],
            [
                'title' => 'Avtosh Doner',
                'slug' => 'avtosh'
            ]
        ];

        foreach ($restaurants as $restaurant)
        {
            Restaurant::create($restaurant);
        }

        //
    }
}
