// JavaScript Document

//Zapisanie imienia po wpisaniu go do formularza i po kliknięciu w button. Wpisanie go do diva id "myName" na drugiej karcie. AJAX?????

//suma punktów z trzech kości, powtarzane co każdą rundę (5)

//przycisk let's roll uruchamia rzut kośćmi, który będzie liczbą pomiędzy 1 a 6 (jedna kość)

//komputer/user szacuje czy liczba będzie większa od poprzedniej sumy, jeśli tak, to on wygrywa (dopisywane są mu punkty), jeśli nie, wygrywa drugi gracz.

//napis round 1, zamienia się w round 2, 5 po każdej rundzie

//po pięciu rundach, ktoś z największą sumą punktow wygrywa mecz (weee!.mp3)

//przycisk wybierz, który pojawia się po wygranej całości, który definiuje kto teraz zaczyna od nowa (ja, komputer)


function rollDice() {
	var dice1 = document.getElementById("dice-container1").innerHTML= Math.floor((Math.random() * 6) + 1);
	var dice2 = document.getElementById("dice-container2").innerHTML= Math.floor((Math.random() * 6) + 1);
	var dice3 = document.getElementById("dice-container3").innerHTML= Math.floor((Math.random() * 6) + 1);
	var sum = dice1 + dice2 + dice3;
}
	
function changeRound() {
	var number = document.getElementById("roundNumber").value;
	var number = 1
	number ++ 
	if (number>5) {
		number = 1;
	}
}

	
	






