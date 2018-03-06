$(document).ready(function () {

    // Unique ID Function
    function uniqId() { /*To generate Unique Id's for the child elements*/
        return Math.round(new Date().getTime() + (Math.random() * 100));
    }

    //initialize niceSelect
    $('select').niceSelect();

    

});