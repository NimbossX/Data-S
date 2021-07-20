studentarray=[];
function submit(){
  var displaystudentarray=[];
  for (let j = 1; j <= 4; j++) {
    var nameofthestudent=document.getElementById("student"+j).value;
   console.log(nameofthestudent) 
    studentarray.push(nameofthestudent)
  }
  console.log(studentarray)  
var lengthofthestudent=studentarray.length
  console.log(lengthofthestudent);
 for (let k = 0; k < lengthofthestudent; k++) {
   displaystudentarray.push("<h4>NAME-" +studentarray[k]+"</h4>")
   console.log(displaystudentarray)
   
 }
 console.log(displaystudentarray)
 document.getElementById("displaynamewithcomas").innerHTML=studentarray
 var removecomas=studentarray.join(" ")
 console.log(removecomas)
 document.getElementById("displaynamewithoutcomas").innerHTML=removecomas
 document.getElementById("sumbitbutton").style.display="none"
 document.getElementById("sortbutton").style.display="inline-block"
}

function sort()
{
 studentarray.sort()
 console.log(studentarray) 
 var studentarraysort=[]
 var lengthofthestudent=studentarray.length
 for (let k = 0; k < lengthofthestudent; k++) {
   studentarraysort.push("<h4>NAME-" +studentarray[k]+"</h4>")
 console.log(studentarraysort)  
 }
 var removecomas=studentarray.join(" ")
 console.log(removecomas)
 document.getElementById("displaynamewithoutcomas").innerHTML=removecomas
}