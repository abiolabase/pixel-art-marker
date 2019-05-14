// This enables other parts of the app load before applying jQuery
$(function(){

	// This creates a default canvass of 5 by 5
	const height= $('#inputHeight').val();
	const weight= $('#inputWeight').val();
	makeGrid(height,weight);

	// Select size input
	$('#sizePicker').submit(function(event){
		event.preventDefault();
		const height= $('#inputHeight').val();
		const weight= $('#inputWeight').val();

		// When size is submitted by the user, call makeGrid()
		makeGrid(height,weight);
	});

	$("table").on("click",".cells",function(){
		
		// Select color input
		const currentColor= $('#colorPicker').val();

		// Input selected color on clicked cell
		$(this).css("background-color",currentColor);

	});
	// Create a makeGrid funtion for the canvass
	function makeGrid(cellHeight,cellWidth) {
		const table = $("#pixelCanvas");
		
		// Ensure table contains no cell
		table.empty();

		// Build the table using the current input
		var tableRow = '';
		for (let i = 0; i < cellHeight; i++) {
			tableRow+='<tr>';
			for (let j = 0 ;j < cellWidth; j++) {
				tableRow+='<td class="cells"></td>';
			}
			tableRow +='</tr>';
		}
		table.append(tableRow);

		
	}

});

