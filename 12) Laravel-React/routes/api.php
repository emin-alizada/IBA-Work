<?php

namespace App\Http\Controllers;

use App\Http\Middleware\DetectLanguage;
use App\Http\Middleware\DetectRestaurant;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

//auth
Route::middleware(['first', 'second'])->group(function () {
    Route::get('/', function () {
        // Uses first & second middleware...
    });

    Route::get('user/profile', function () {
        // Uses first & second middleware...
    });
});

Route::apiResource('restaurants', RestaurantController::class);
//Route::apiResource('restaurants/{restaurant}', RestaurantController::class);

//Route::get('/restaurants', RestaurantController::class);


// client view

Route::get('{restaurant:slug}/languages', [LanguageController::class, 'index']); // Returns Categories
Route::middleware(DetectLanguage::class)->group(function () {
    Route::get('{restaurant:slug}/categories', [CategoryController::class, 'index']); // Returns Categories
});
