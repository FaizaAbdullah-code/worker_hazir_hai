

var dataSet1 = [ 
    [ "Name", "Profile Picture", "Email", "Mobile No", "CNIC", "Address", "City", "Actions" ],  
];
    
var dataSet = [ 
    [ "Tiger", "System", "Edinburgh", "03366024505", "000000000000", "Gulshan", "Karachi", "1" ],  
    [ "Garrett Wintersrrrrrrrrrr", "Accountant", "Tokyo", "03366024505", "000000000000", "Gulshan", "Karachi", "2" ],  
    [ "Ashton Cox", "Junior Technical Author", "San Francisco", "03366024505", "000000000000", "Gulshan", "Karachi", "3" ],  
    [ "Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "03366024505", "000000000000", "Gulshan", "Karachi", "4" ],  
    [ "Airi Satou", "Accountant", "Tokyo", "03366024505", "000000000000", "Gulshan", "Karachi", "5" ],  
    [ "Brielle Williamson", "Integration Specialist", "New York", "03366024505", "000000000000", "Gulshan", "Karachi","6" ],  
    [ "Herrod Chandler", "Sales Assistant", "San Francisco", "03366024505", "000000000000", "Gulshan", "Karachi","7" ],  
    [ "Rhona Davidson", "Integration Specialist", "Tokyo", "03366024505", "000000000000", "Gulshan", "Karachi","8" ],  
    [ "Colleen Hurst", "Javascript Developer", "San Francisco", "03366024505", "000000000000", "Gulshan", "Karachi","9" ],  
    [ "Sonya Frost", "Software Engineer", "Edinburgh", "03366024505", "000000000000", "Gulshan", "Karachi","10" ],  
    [ "Jena Gaines", "Office Manager", "London", "03366024505", "000000000000", "Gulshan", "Karachi","11" ],  
    [ "Quinn Flynn", "Support Lead", "Edinburgh", "03366024505", "000000000000", "Gulshan", "Karachi","12" ],  
    [ "Charde Marshall", "Regional Director", "San Francisco", "03366024505", "000000000000", "Gulshan", "Karachi","13" ],  
    [ "Haley Kennedy", "Senior Marketing Designer", "London","03366024505", "000000000000", "Gulshan", "Karachi", "14" ],  
    [ "Tatyana Fitzpatrick", "Regional Director", "London","03366024505", "000000000000", "Gulshan", "Karachi","15" ],  
    [ "Michael Silva", "Marketing Designer", "London","03366024505", "000000000000", "Gulshan", "Karachi", "16" ],  
    [ "Paul Byrd", "Chief Financial Officer (CFO)", "New York", "03366024505", "000000000000", "Gulshan", "Karachi", "17" ]  
];  



var tblId = document.getElementById("myTable");  
// Create tbody element.  
var bodyOfTable = document.createElement("tbody");    
// create rows from the array.  
var dataRow = ''; 
$.each(dataSet1,function(index,value){  
    dataRow += '<tr>'+
 
            '<td>'+value[0]+'</td>'+  
            '<td>'+value[1]+'</td>'+  
            '<td>'+value[2]+'</td>'+ 
            '<td>'+value[3]+'</td>'+
            '<td>'+value[4]+'</td>'+
            '<td>'+value[5]+'</td>'+
            '<td>'+value[6]+'</td>'+
            '<td>'+value[7]+'</td>'+ 
            
        '</tr>';  
});    
       
$.each(dataSet,function(index,value){  
    dataRow += '<tr>'+
 
            '<td>'+value[0]+'</td>'+  
            '<td>'+value[1]+'</td>'+  
            '<td>'+value[2]+'</td>'+ 
            '<td>'+value[3]+'</td>'+
            '<td>'+value[4]+'</td>'+
            '<td>'+value[5]+'</td>'+
            '<td>'+value[6]+'</td>'+ 
            '<td>'+  
                '<a href="#"> <span style="color:Green;" > <b> Edit </span></a> | '+  
                '<a href="#"> <span style="color:Red"; >  Delete </span></a> | '+
                '<a href="#">View</a>'+  
            '</td>'+  
        '</tr>';  
});

 
// bind the rows to the table body.  
var addBody = bodyOfTable.innerHTML = dataRow;  
// bind the table body to the table.  
tblId.innerHTML = addBody;



