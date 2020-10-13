<?php

namespace App\Http\Controllers;

use App\Models\Restaurant;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class RestaurantController extends Controller
{
    public function index()
    {
        return Restaurant::all();
    }

    public function show(Restaurant $restaurant)
    {
        return $restaurant;
    }

    public function store(Request $request)
    {
        $validate = Validator::make($request->all(), [
           'title' => 'required'
        ]);

        if ($validate->fails()) return response()->json($validate->errors(), 415);


        Restaurant::create($request->all());
    }
    //
}
