/**
 * In this function we define some basic design tools
 * for the user such as an eraser, ability clear grid
 * and the ability to create a totally new grid.
 */
function designTools(){
    $('#clearGrid').on('click', function(){
        $('.pixel').css('background', 'white');
    });

    $('#newGrid').on('click', function(){
        $('#pixelCanvas').children().remove();
        $('.properties.designTools').hide();
        $('.properties.gridSize').show();
        
    });

    $('#eraser').on('click', function(){
        $('#colorPicker').val('#ffffff');
    });
}

/**
 * This function lets the user create a grid on the 
 * design canvas of any size
 */
function makeGrid(numRows,numCols){
    
    var pixelCanvas = $('#pixelCanvas');

    pixelCanvas.children().remove();
    
    //create table rows equal to numRows
    for(var i = 0; i < numRows; i++){
        pixelCanvas.append('<tbody class="tableRow"></tbody>');
    }

    //for each .tableRow append table cells equal to numCols
    $('.tableRow').each(function(){
        for(var j = 0; j < numCols; j++){
            $(this).append('<tr class="pixel"></tr>');
        }
    });
    
    // when the user clicks on a block(.pixel), change the backgound color of the block
    $('#pixelCanvas').on('click', '.pixel', function(){
        $(this).css('background', $('#colorPicker').val());
    });

    /** 
     * Once the grid has been created hide the form
     * for creating the grid and show design tools(.i.e.
     * colorPicker, eraser, etc)
     */
    $('.properties.gridSize').hide();
    $('.properties.designTools').show();
      
    //load the design tools
    designTools();
}

$('#submit').click(function(evl){
    var numRows = Number($('#inputHeight').val());
    var numCols = Number($('#inputWeight').val());
    /**
     * Note that for consistency, the size of the grid
     * is limited to 20 rows and 53 columns though the
     * makeGrid() function can create a grid of any size.
     */
    if(numRows > 20 || numCols > 53){
        $('#errorMessage').css('display', 'inline');
    } else {
        $('#errorMessage').hide();
        makeGrid(numRows, numCols);
    }
    
});



