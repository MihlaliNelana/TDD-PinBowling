$(document).ready(function() {


    // frames array create array
    //var frameArray = ();
    
    //get values from input
    //var inputText = document.getElementById('inputText').value;
    function getThrow(id){
        var currentSumInput = $('#currentSum');
        var currentSum = $(currentSumInput).val();
    
        var inp1 = $('#' + id + '_1').val();
        var inp2 = $('#' + id + '_2').val();
    
        var sum = parseInt(inp1) + parseInt(inp2);
        currentSumInput.val(sum + parseInt(currentSum));
        return sum;
    }

    // function whoseTurn(){
    //     return null;
    // }
    
    var inp = $(".inputBottom");
    
    
    $(inp).focus(function(){
       var id = $(this).attr("desc-data");
    
        $(this).val(getThrow(id));
        var cs = $('#currentSum').val();
        console.log("Your score for " +id+ " is " + cs);
        });
    });

    
