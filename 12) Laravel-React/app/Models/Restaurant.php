<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Restaurant extends Model
{
    use HasFactory;

    protected $guarded = ['created_at', 'updated_at'];
    protected $hidden = ['created_at', 'updated_at'];

    public function categories()
    {
        return $this->hasMany(Category::class);
    }

    public function languages()
    {
        return $this->hasMany(Language::class);
    }

    public function tables()
    {
        return $this->hasMany(Table::class);
    }

}
