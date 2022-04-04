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
    
                <div id="leadership_card" class="card text-center bg-dark" type="button" data-bs-toggle="modal" data-bs-target="#captain">
                    <img id="card_image" src="../assets/ranks/badges/5-admiral.png" class="card-img-top">
                    <ul class="list-group list-group-flush">
                        <li id="leadership_card_text" class="list-group-item bg-dark">Captain Cr4zy</li>
                    </ul>
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
            <div id="combat_division_members" class="card card-body">

            </div>
        </div>

    </div>
    <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Combat Division End ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->



</div>`;

document.body.insertAdjacentHTML("beforeend", full_roster);