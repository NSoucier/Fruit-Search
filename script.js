// DELETE THIS
// css style to create color gradient on background of body
// dipslay search input type centered on viewport with placeholder search fruit with emojis
// as user starts typing, display text(with different background color) of matches below
//		addEventListeners for "keydown", update dropdown in here
// as mouse hovers over options, change background color
// when option is clicked on, add text to search bar input as 'value'

const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];
const lowerCaseFruit = fruit.map(frt => frt.toLowerCase());

// function that returns list of fruits that contain the string (whatever keys have been pressed)
const search = str => lowerCaseFruit.filter(fruit => fruit.includes(str));

let userInput = '';
function searchHandler(e) {
	let char = e.key.toLowerCase();
	if (char === 'backspace') { // removes character from userInput string
		userInput = userInput.slice(0, -1);
	} else { // change to only add alphabet letters to string, not things like 'enter' or '8'              FIX THIS FIRST!!! THEN STEP SEVEN!
		userInput = userInput + char;
	}

	// returns list of first 5 matching results
	search(userInput).slice(0,5) 
	
	// call showSuggestions fnc
	console.log(userInput);
	console.log(search(userInput).slice(0,5));
}

function showSuggestions(results, inputVal) {
	// step seven
	// reveals first 5 suggestions in ul with style

	// bold the letters that are typed
}

function useSuggestion(e) {
	// code when user clicks on dropdown item and adds value to input
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);