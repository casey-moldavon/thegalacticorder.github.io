var navbar = `
<nav id="navbar_full" class="navbar navbar-expand-lg navbar-dark bg-dark">
<div class="container-fluid">

    <div>

        <a class="navbar-brand" href="index.html">
            <img id="tgo_logo" src="assets/images/logo.png" alt="GTO Logo">
        </a>
        
        <a id="tgo_name" class="navbar-brand align-middle">THE GALACTIC ORDER</a>

    </div>

    <a id="sign_in_link" class="nav-link" href="#"><i id="fa_nav_icon_square" class="fa-solid fa-right-to-bracket"></i>Sign-in</a>
    
</div>
</nav>
    
<nav id="navbar_bottom" class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
<div class="container-fluid">
            
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
            
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                
        <ul class="navbar-nav">

            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i id="fa_nav_icon_round" class="fa-solid fa-star"></i>Get Started
                </a>

                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown1">
                    <li><a class="dropdown-item" href="index.html#">Introduction</a></li>
                    <li><a class="dropdown-item" href="index.html#rules_laws_link">Rules & Laws</a></li>
                </ul>
            </li>


            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i id="fa_nav_icon_round" class="fa-solid fa-dice-d20"></i>Roleplay
                </a>

                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown2">
                    <li><a class="dropdown-item" href="pages/2_rp_1.html">Protocol</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="pages/2_rp_2.html">Officer Info</a></li>
                </ul>
            </li>


            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="navbarDropdown3" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i id="fa_nav_icon_square" class="fa-solid fa-address-card"></i>Org Roster
                </a>

                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown3">
                    <li><a class="dropdown-item" href="pages/3_roster_1.html">Battalions</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="pages/3_roster_2.html">Full Roster</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="pages/3_roster_3.html">Spec-Ops</a></li>
                </ul>
            </li>


            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="navbarDropdown4" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i id="fa_nav_icon_square" class="fa-solid fa-book-atlas"></i>History & Lore
                </a>

                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown4">
                    <li><a class="dropdown-item" href="pages/4_lore_0.html">Founding</a></li>
                    <li><a class="dropdown-item" href="pages/4_lore_0.html#backstories_link">Backstories</a></li>
                    <li><a class="dropdown-item" href="pages/4_lore_0.html#goals_link">Goals</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="pages/4_lore_1.html">Classifications</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="pages/4_lore_2.html">Combat Theory</a></li>
                </ul>
            </li>


            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="navbarDropdown5" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i id="fa_nav_icon_round" class="fa-solid fa-shield-halved"></i>Roles & Ranks
                </a>

                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown5">
                    <li><a class="dropdown-item" href="pages/5_ranks_1.html">Rank Informtation</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="pages/5_ranks_2.html">Rank Benefits</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="pages/5_ranks_3.html">Captain Info</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="pages/5_ranks_4.html">Agent Info</a></li>
                </ul>
            </li>
            
            <li class="nav-item">
                <a id="navbar_calendar" class="nav-link" href="pages/6_calendar.html"><i id="fa_nav_icon_square" class="fa-solid fa-calendar-days"></i>Calendar</a>
            </li>

            <li class="nav-item">
                <a id="navbar_contact_us" class="nav-link" href="pages/7_contact_us.html"><i id="fa_nav_icon_square" class="fa-solid fa-square-envelope"></i>Join Today!</a>
            </li>

        </ul>
    </div>
</div>
</nav>`;

document.body.insertAdjacentHTML("afterbegin", navbar);