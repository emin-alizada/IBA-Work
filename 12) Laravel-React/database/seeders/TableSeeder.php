<?php

namespace Database\Seeders;

use App\Models\Restaurant;
use Faker\Factory;
use Illuminate\Database\Seeder;

class TableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Restaurant::all()->each(function ($restaurant) {
            $tableCount = random_int(5, 15);

            $tableNameType = random_int(0, 1);
            while ($tableCount--) {
                $restaurant->tables()->create([
                    'title' =>  $tableNameType ? Factory::create()->firstName : $tableCount
                ]);
            }
        });
        //
    }
}
