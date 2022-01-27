function addUser(){
    player_1_id = document.getElementById("player_1_name_input").value;
    player_2_id = document.getElementById("player_2_name_input").value;

    localStorage.setItem("player_1_name_input" , player_1_id);
    localStorage.setItem("player_2_name_input" , player_1_id);

    window.location = "game_page.html";
}