<?php

namespace App\Http\Controllers;

use App\Models\Restaurant;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index(Request $request, Restaurant $restaurant)
    {
        $lang = session('lang');

        $categories = $restaurant->categories->map(function ($category) use ($lang) {
            return [
                'id' => $category->id,
                'title' => $category->translation($lang)->title
            ];
        });

        return $categories;

    }
    //
}
