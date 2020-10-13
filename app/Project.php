<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = [
        'name', 'spot_id', 'status_id'
    ];

    protected $dispatchesEvents = [
        'updated' => \App\Events\ProjectUpdated::class,
    ];
}
