<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Project;
use App\Events\ChangeProjectStatus;
use Illuminate\Support\Facades\Log;

use Illuminate\Http\Request;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        /* Juste pour info !!
        $start = microtime(true);
        foreach (Project::orderBy('id', 'DESC')->get() as $project){
            Log::info($project->name . " // " .  $project->status->name . " // " .$project->spot->name);
        }
        $time = microtime(true) - $start;
        Log::info($time);
        $start = microtime(true);
        foreach (Project::orderBy('id', 'DESC')->with('spot','status')->get() as $project){
            Log::info($project->name . " // " .  $project->status->name . " // " .$project->spot->name);
        }
        $time = microtime(true) - $start;
        Log::info($time);
        */
        return Project::orderBy('id', 'DESC')->get();

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $Project = new Project();
        $Project->name = $request->name;
        $Project->spot_id =$request->spot_id;
        $Project->status_id = 1;
        $Project->save();
        event(new ChangeProjectStatus($Project));
        return Project::orderBy('id', 'DESC')->get();

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $Project = Project::findOrFail($id);
        $Project->name = $request->name;
        $Project->spot_id =$request->spot_id;
        $Project->save();
        return Project::orderBy('id', 'DESC')->get();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Project::where('id',$id)->delete();
        return Project::orderBy('id', 'DESC')->get();
    }
}
