function addUser()
{
    player1_name = document.getElementById("player1_name_input").value;
    player2_name = document.getElementById("player2_name_input").value;

    localStorage.setItem("player1name", player1_name);
    localStorage.setItem("player2name", player2_name);

    window.location = "m_quiz_page.html";
}
function  Multiplication()
{
    window.location = "m_quiz_game.html";
}
function  Division()
{
    window.location = "d_quiz_game.html";
}
function addUserD()
{
    player1_name = document.getElementById("player1_name_input").value;
    player2_name = document.getElementById("player2_name_input").value;

    localStorage.setItem("player1name", player1_name);
    localStorage.setItem("player2name", player2_name);

    window.location = "d_quiz_page.html";
}
function  Addition()
{
    window.location = "a_quiz_game.html";
}
function addUserA()
{
    player1_name = document.getElementById("player1_name_input").value;
    player2_name = document.getElementById("player2_name_input").value;

    localStorage.setItem("player1name", player1_name);
    localStorage.setItem("player2name", player2_name);

    window.location = "a_quiz_page.html";
}
function  Subtraction()
{
    window.location = "s_quiz_game.html";
}
function addUserS()
{
    player1_name = document.getElementById("player1_name_input").value;
    player2_name = document.getElementById("player2_name_input").value;

    localStorage.setItem("player1name", player1_name);
    localStorage.setItem("player2name", player2_name);

    window.location = "s_quiz_page.html";
}
