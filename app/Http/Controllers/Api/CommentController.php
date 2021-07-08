<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CommentStoreRequest;
use App\Http\Resources\CommentResource;
use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function index()
    {
      //return Comment::all();
      //trabajando con Resource
     return CommentResource::collection(Comment::paginate(6));  
    }

    public function store(CommentStoreRequest $request)
    {
      //sleep(3);
      if ($request->hasFile('thumbnail'))
      {
        $filename = $request->thumbnail->getClientOriginalName();
        info($filename);//log
      }

      $comment = Comment::create($request->validated());

      return new CommentResource($comment);
    }

}
