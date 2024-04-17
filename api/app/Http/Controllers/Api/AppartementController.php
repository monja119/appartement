<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Appartement;
use Illuminate\Http\Request;

class AppartementController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $appartements = Appartement::orderBy('updated_at', 'desc')->get();
        $response = [
            'message' => 'Liste des appartements',
            'data' =>  $appartements
        ];
        return response()->json($response, 200);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $numero = $request->numero;
        $loyer = $request->loyer;
        $design = $request->design;

        // verification si l'appartement existe
        $appartement = Appartement::where('numero', $numero)->first();
        if ($appartement) {
            $response = [
                'message' => 'Le numéro appartement existe déjà'
            ];
            return response()->json($response, 200);
        }

        $data = [
            'numero' => $numero,
            'loyer' => $loyer,
            'design' => $design
        ];

        $appartement = Appartement::create(
            [
                'numero' => $numero,
                'loyer' => $loyer,
                'design' => $design
            ]
        );

        $response = [
            'message' => 'Appartement créé',
            'data' =>  $appartement
        ];

        return response()->json($response, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Appartement $appartement)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Appartement $appartement)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Appartement $appartement)
    {
        $numero = $request->numero;
        $loyer = $request->loyer;
        $design = $request->design;

        $appartement->update(
            [
                'numero' => $numero,
                'loyer' => $loyer,
                'design' => $design
            ]
        );

        $response = [
            'message' => 'Appartement modifié',
            'data' =>  $appartement
        ];

        return response()->json($response, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Appartement $appartement)
    {
        $appartement->delete();
        $response = [
            'message' => 'Appartement supprimé'
        ];
        return response()->json($response, 200);
    }
}
