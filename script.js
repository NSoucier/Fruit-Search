const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const selection = document.querySelector('ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];
const lowerCaseFruit = fruit.map(frt => frt.toLowerCase());
const regex = /^[a-zA-Z]+$/; // alphabet (A-Z or a-z)

// function that returns list of fruits that contain the string (whatever keys have been pressed)
const search = str => lowerCaseFruit.filter(fruit => fruit.includes(str));

let userInput = '';
const dropdown = document.querySelector('.suggestions');
function searchHandler(e) {
	// clear prior suggestions list
	suggestions.innerHTML = '';

	let char = e.key.toLowerCase();
	if (char === 'backspace') { // removes character from userInput string
		userInput = userInput.slice(0, -1);
		if (input.value === "") {userInput = '';}
	} else if (regex.test(char) && char.length === 1) { // checks if it's in the alphabet (or space) and only one character (avoids 'enter', etc.) 
		userInput = userInput + char;
	} else {
		alert ('Please only enter a letter from the alphabet');
		userInput = userInput + char;
	}

	// only input list of first 5 matching results to showSuggestions
	showSuggestions(search(userInput).slice(0,5), userInput);
}

function showSuggestions(results, inputVal) {
	if (input.value === "") { // clear suggestions if there's no input
		suggestions.innerHTML = '';
	} else {
		for (frt of results) {
			const item = document.createElement('li');
			// adds fruit from list to dropdown with the user input style as BOLD
			//item.innerHTML = `${frt.slice(0, frt.indexOf(inputVal))}<b>${inputVal}</b>${frt.slice(frt.indexOf(inputVal)+inputVal.length)}`
			item.style.backgroundColor = '#ffcb8f';
			item.innerText = frt;
			suggestions.appendChild(item);
		}
	}
	
}

function useSuggestion(e) {
	// code when user clicks on dropdown item and adds value to input
	input.value = e.target.innerText;

	// clear prior suggestions list
	suggestions.innerHTML = '';

}

// highlights selection of ONLY mouseover
function highlightFruit(e) {

	const list = selection.children;
	[...list].forEach(li => li.style.backgroundColor = '#ffcb8f');
	e.target.style.backgroundColor = 'orange';

}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
selection.addEventListener('mouseover', highlightFruit);