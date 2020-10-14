<?php

namespace Database\Seeders;

use App\Models\Language;
use Facade\Ignition\Tabs\Tab;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            RestaurantSeeder::class,
            UserSeeder::class,
            LanguageSeeder::class,
            CategorySeeder::class,
            FoodSeeder::class,
            TableSeeder::class,
            OrderSeeder::class
        ]);
    }
}
