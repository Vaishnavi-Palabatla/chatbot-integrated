$(document).ready(function() {
    // $("#btnFetch1").click(function(event){
    //     <b>alert($(this).prop("value"));</b>
    //    });
        
    // $("btnFetch2").click(function(event){
    //     <b>alert($(this).prop("name"));</b>
    //    });

    $(":button").click(function(event){
        var text=$(this).prop("id")
        $(this).prop("disabled", true);
        $("#timetaking").html('<section><i class="fa fa-circle-o-notch fa-spin"></i> loading...It takes time to get trained</section>');
        // $("#timetaking").html('<p> It takes time to get trained</p>');

        console.log(text)
        $.get("/typebot", {types:text}).done(function(data) {
            console.log(data)
        window.location.replace('/indexfile');
      
    });
});


    // if($(this).prop("value") == "tfidf"){
    //     $(this).prop("disabled", true);
    // $(this).html(
    // '<i class="fa fa-circle-o-notch fa-spin"></i> loading...'
    // );
    // $.get('/typebot',function(data){
    //     console.log(data)
    //     window.location.replace('http://127.0.0.1:5000/indexfile');
      
    // });
        
    // }
    // else if($(this).prop("value") == "synonym"){
    //     $(this).prop("disabled", true);
    // $(this).html(
    // '<i class="fa fa-circle-o-notch fa-spin"></i> loading...'
    // );
    // $.get('/typebot',function(data){
    //     console.log(data)
    //     window.location.replace('http://127.0.0.1:5000/indexfile');
      
    // });
    // }
    // else {
    //     $(this).prop("disabled", true);
    // $(this).html(
    // '<i class="fa fa-circle-o-notch fa-spin"></i> loading...'
    // );
    // $.get('/typebot',function(data){
    //     console.log(data)
    //     window.location.replace('http://127.0.0.1:5000/indexfile');
      
    // });
    // }
   
       

    // $("#btnFetch").click(function() {
    // var text = $(this).attr('value'); 
    // alert(text);
    // // disable button
    // $(this).prop("disabled", true);
    // // add spinner to button
    // $(this).html(
    // '<i class="fa fa-circle-o-notch fa-spin"></i> loading...'
    // );
    // $.get('/typebot',function(data){
    //     // $(location).prop('href', 'index.html');
    //     // var x='<form action='
    //     console.log(data)
    //     window.location.replace('http://127.0.0.1:5000/indexfile');
      
    // });
    return false; 
    
    });
    
