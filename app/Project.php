<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = [
        'name', 'spot_id', 'status_id'
    ];
/*
    protected $dispatchesEvents = [
        'updated' => \App\Events\ProjectUpdated::class,
    ]; */

    public function spot()
    {
        return $this->belongsTo('App\Spot');
    }

    public function status()
    {
        return $this->belongsTo('App\Status');
    }
}
