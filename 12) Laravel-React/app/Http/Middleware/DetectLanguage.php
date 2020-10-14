<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class DetectLanguage
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if ($request->lang == null && !session()->has('lang')) abort(404, "Language not found");

        if ($request->lang != null)
        {
            session()->put('lang', $request->lang);
        }

        return $next($request);
    }
}
