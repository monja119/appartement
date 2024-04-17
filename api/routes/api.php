<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\AppartementController;

Route::apiResource('appartements', AppartementController::class);

