<?php

namespace Database\Seeders;

use App\Models\Restaurant;
use App\Models\Table;
use Illuminate\Database\Seeder;

class OrderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Restaurant::all()->each(function ($restaurant) {
            $restaurantTables = $restaurant->tables;
            $restaurantTables->random(random_int(1, $restaurantTables->count()))->each(function ($table) use ($restaurant) {
                $orderCount = random_int(1, 10);
                while ($orderCount--) {
                    $order = $table->orders()->create([
                        'status' => 'closed'
                    ]);
                    $orderItemCount = random_int(1, 10);
                    while ($orderItemCount--) {
                        $order->items()->create([
                            'food_id' => $restaurant->categories->random()->food->random()->id,
                            'count' => random_int(1, 5),
                            'status' => 'delivered'
                        ]);
                    }
                }

                $order = $table->orders->random();
                $order->update(['status' => 'open']);
                $order->items->each(function ($orderItem) {
                    $orderItem->update([
                        'status' => random_int(0, 1) ? 'accepted' : (random_int(0, 1) ? 'delivered' : 'requested')
                    ]);
                });
            });
        });
        //
    }
}
