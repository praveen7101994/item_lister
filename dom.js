var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event 
itemList.addEventListener('click', removeItem);
// Filter Event
filter.addEventListener('keyup', filterItems);

// Add Item
function addItem(e) {
	e.preventDefault();

	// Get input value
	var newItem = document.getElementById('item').value;

	// Create new li element
	var li = document.createElement('li');
	// Add Class
	li.className = 'list-group-item';
	// Add text node with input value
	li.appendChild(document.createTextNode(newItem));

	// Create del button element
	var deleteBtn = document.createElement('button');

	// Add classes to del button
	deleteBtn.className = 'btn btn btn-danger btn-sm float-right delete';
	// Append text node
	deleteBtn.appendChild(document.createTextNode('X'));

	// Append button to li
	li.appendChild(deleteBtn);

	// Append li to list
	itemList.appendChild(li);


	itemList.appendChild(li);
}

function removeItem(e){
	if(e.target.classList.contains('delete')){
		if(confirm('Are you sure')){
			var li = e.target.parentElement;
			itemList.removeChild(li);
		}
	}
	
}

// Filter Items
function filterItems(e){
	// Convert text to lowercase
	var text = e.target.value.toLowerCase();
	// Get list
	var items = itemList.getElementsByTagName('li');
	// Convert to an array
	Array.from(items).forEach(function(item){
		var itemName = item.firstChild.textContent;
		// console.log(itemName);
		if(itemName.toLowerCase().indexOf(text) != -1){
			item.style.display = 'block';
		} else {
			item.style.display = 'none';
		}
	})
}