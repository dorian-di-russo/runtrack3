<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>leapyear</title>

    
</head>
<body>
Input Year: <input type="text" id = "year"/>
      
      <input type="button" id="button" onClick="isLeapYear()"
              value="Check Leap Year">
        
      <p id="GFG"></p>
        
<script src="script.js">
function isLeapYear() {
  var year = document.getElementById("year").value;

  document.getElementById("GFG").innerHTML
    = (year % 100 === 0) ? (year % 400 === 0 )
                         : (year % 4 === 0);

  
}
</script>

    
</body>
</html>