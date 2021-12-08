// Code en JQUERY

$(function(){

    
    //  ***************** Code executed starts *****************
    var inputs = $("input");
    inputs.each(function() {
        
        // === Change Events starts ===
        $(this).change(function() {
                
             const unite = $(this).attr("data-unite");

            // document.documentElement.style.setProperty('--your-variable', '#YOURCOLOR');
            $(':root').css(`--${$(this).attr("name")}`, `${$(this).val()}${unite}`);

            });
        // === Change Events ends ===

        // === Change onmousemove starts ===
        $(this).mousemove(function() {
                
             const unite = $(this).attr("data-unite"); 
            /* How to change CSS root color variables in JavaScript */
            $(':root').css(`--${$(this).attr("name")}`, `${$(this).val()}${unite}`);

            });
        // === Change onmousemove ends ===



    });
    //  ***************** Code executed ends *****************

});


// var inputs = document.querySelectorAll('input');
    // var inputs = $("input");
    // alert(inputs);

    // // const handleChange = (e, item) => {
    // //     // const unite = item.dataset.unite;
    // //     alert(item);
    // //     const unite = item.data("unite");
        
    // //     /* How to change CSS root color variables in JavaScript */
    // //     // document.documentElement.style.setProperty('--your-variable', '#YOURCOLOR');
    // //     // document.documentElement.style.setProperty(`--${item.name}`, `${item.value}${unite}`);
    // //     $(':root').css(`--${item.name}`, `${item.value}${unite}`);
        
    // // }
    // // const handleChange = function(item) {
    // //     alert($(item));
    // // }

    // // const applyEvent = (item) => {
    // //     // alert(item);
    // //     // item.change = (e) => handleChange(e, item);
    // //     item.change = () => {
    // //         alert("text");
    // //     }
    // //     // item.mousemove = (e) => handleChange(e, item);


    // // }
    // const applyEvent = () => {
    //         // alert($(item));
    //         // $(item).change = () => handleChange($(item));
    //         $(this).change = () => {
    //             console.log("text");
    //         };
    // }

    // inputs.each($(item) => applyEvent($(item)) );









