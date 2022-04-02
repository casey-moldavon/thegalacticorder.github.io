var sign_in = `

<div class="modal fade" id="signInModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
        <div id="sign_in_modal" class="modal-content">
            <div class="modal-header">

                <p class="modal-title" id="sign_in_text">Sign-In <a id="leadership_note">(Officers Only)</a> </p>
    
                <a type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                    <i id="sign_in_modal_close_button" class="fa-solid fa-square-xmark"></i>
                </a>
            </div>
            
            <div id="modal_body" class="modal-body">
    
                <form>
                <div class="form-group">
                    <label id="combat_division_text" for="user_text" class="col-form-label">Username or Email:</label>
                    <input type="text" class="form-control" id="user_text">
                </div>
    
                <div class="form-group">
                    <label id="combat_division_text" for="password_text" class="col-form-label">Password:</label>
                    <input type="text" class="form-control" id="password_text"></input>
                </div>
                </form>
    
            </div>
            <div class="modal-footer">
                <button id="sign_up_button" type="button">
                    <i id="fa_nav_icon_square" class="fa-solid fa-star"></i>Sign-Up
                </button>
                <button id="sign_in_button" type="button">
                    <i id="fa_nav_icon_square" class="fa-solid fa-right-to-bracket"></i>Sign-In
                </button>
            </div>

        </div>
    </div>
</div>`;

document.body.insertAdjacentHTML("afterbegin", sign_in);