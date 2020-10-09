<?php

namespace Database\Seeders;

use App\Models\Language;
use App\Models\Restaurant;
use Illuminate\Database\Seeder;

class LanguageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $languages = [
            'az', 'en', 'ru'
        ];

        Restaurant::all()->each(function ($restaurant) use ($languages) {
            $count = random_int(1, 3);
            while ($count--){
                $restaurant->languages()->create([
                    'title' => $languages[$count],
                ]);
            }
        });

        //
    }
}
