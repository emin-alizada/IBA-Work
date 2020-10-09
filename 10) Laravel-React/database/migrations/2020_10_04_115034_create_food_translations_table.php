<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFoodTranslationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('food_translations', function (Blueprint $table) {
            $table->id();

            $table->foreignId('food_id')->references('id')->on('food')->onDelete('cascade');
            $table->foreignId('language_id')->references('id')->on('languages')->onDelete('cascade');
            $table->string('title');
            $table->string('description')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('food_translations');
    }
}
