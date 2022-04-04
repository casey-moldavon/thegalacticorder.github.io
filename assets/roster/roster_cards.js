var full_roster = `

<div id="full_roster_container" class="container container-fluid">

    <div id="full_roster_title" class="container text-center">
        FULL ROSTER
    </div>

    <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Leadership Division Start ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
    <div class="container container-fluid">

        <button id="leadership_division_button" type="button" data-bs-toggle="collapse" data-bs-target="#leadership_division_dropdown" aria-expanded="false" aria-controls="leadership_division_dropdown">
            Leadership Division
        </button>
        
        <div class="collapse" id="leadership_division_dropdown">
            <div class="container container-fluid row">


                <div id="leadership_card" class="card mb-2">
                    <div class="row g-0">

                        <div class="col-md-4">
                            <img id="card_image" src="../assets/ranks/badges/5-admiral.png" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8 text-center">

                            <div id="leadership_note_small" class="card-body">
                                <p>Gerard "Holland" Augustinus</p>
                                <a>Holland Hammer#9185</a>
                            </div>

                        </div>
                    </div>
                </div>

                <div id="leadership_card" class="card mb-2">
                    <div class="row g-0">

                        <div class="col-md-4">
                            <img id="card_image" src="../assets/ranks/badges/5-admiral.png" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8 text-center">

                            <div id="leadership_note_small" class="card-body">
                                <p>Cosmo "Cr4zy" Remington</p>
                                <a>Captain CR4ZY#3241</a>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
    <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Leadership Division End ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

    <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Combat Division Start ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
    <div id="combat_division_container" class="container container-fluid">

        <button id="combat_division_button" type="button" data-bs-toggle="collapse" data-bs-target="#combat_division_dropdown" aria-expanded="false" aria-controls="combat_division_dropdown">
            Combat Division
        </button>
        
        <div class="collapse" id="combat_division_dropdown">
            <div class="container container-fluid row">


                <div id="combat_card" class="card mb-2">
                    <div class="row g-0">

                        <div class="col-md-4">
                            <img id="card_image" src="../assets/ranks/emblems/emblem_1_trooper.png" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8 text-center">

                            <div id="combat_note_small" class="card-body">
                                <p>Test Name of Testingson</p>
                                <a>Captain TEST#3241</a>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
    <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Combat Division End ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

    <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Engineer Division Start ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
    <div id="engineer_division_container" class="container container-fluid">

        <button id="engineer_division_button" type="button" data-bs-toggle="collapse" data-bs-target="#engineer_division_dropdown" aria-expanded="false" aria-controls="engineer_division_dropdown">
            Engineer Division
        </button>
        
        <div class="collapse" id="engineer_division_dropdown">
            <div class="container container-fluid row">


                <div id="engineer_card" class="card mb-2">
                    <div class="row g-0">

                        <div class="col-md-4">
                            <img id="card_image" src="../assets/ranks/emblems/emblem_1_trooper.png" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8 text-center">

                            <div id="engineer_note_small" class="card-body">
                                <p>Test Name of Testingson</p>
                                <a>Captain TEST#3241</a>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
    <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Engineer Division End ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

    <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Medical Division Start ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
    <div id="medical_division_container" class="container container-fluid">

        <button id="medical_division_button" type="button" data-bs-toggle="collapse" data-bs-target="#medical_division_dropdown" aria-expanded="false" aria-controls="medical_division_dropdown">
            Medical Division
        </button>
        
        <div class="collapse" id="medical_division_dropdown">
            <div class="container container-fluid row">


                <div id="medical_card" class="card mb-2">
                    <div class="row g-0">

                        <div class="col-md-4">
                            <img id="card_image" src="../assets/ranks/emblems/emblem_3_medic.png" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8 text-center">

                            <div id="medical_note_small" class="card-body">
                                <p>Test Name of Testingson</p>
                                <a>Captain TEST#3241</a>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
    <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Medical Division End ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

        <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Novitiate Division Start ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
        <div id="novitiate_division_container" class="container container-fluid">

            <button id="novitiate_division_button" type="button" data-bs-toggle="collapse" data-bs-target="#novitiate_division_dropdown" aria-expanded="false" aria-controls="novitiate_division_dropdown">
                Novitiate Division
            </button>
            
            <div class="collapse" id="novitiate_division_dropdown">
                <div class="container container-fluid row">
    
    
                    <div id="novitiate_card" class="card mb-2">
                        <div class="row g-0">
    
                            <div class="col-md-4">
                                <img id="card_image" src="../assets/ranks/badges/0-novitiate.png" class="img-fluid rounded-start" alt="...">
                            </div>
                            <div class="col-md-8 text-center">
    
                                <div id="novitiate_note_small" class="card-body">
                                    <p>Test Name of Testingson</p>
                                    <a>Captain TEST#3241</a>
                                </div>
    
                            </div>
                        </div>
                    </div>
    
    
                </div>
            </div>
        </div>
        <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Novitiate Division End ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->



</div>

`;document.body.insertAdjacentHTML("beforeend", full_roster);