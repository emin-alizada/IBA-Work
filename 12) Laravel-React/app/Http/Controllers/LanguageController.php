<?php

namespace App\Http\Controllers;

use App\Models\Restaurant;

class LanguageController extends Controller
{
    public function index(Restaurant $restaurant)
    {
        $languages = $restaurant->languages->map(function ($language) {
            return [
              'id' => $language->id,
              'title' => $language->title
            ];
        });

        return $languages;
    }
    //
}
