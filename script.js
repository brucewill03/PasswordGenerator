
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max-min+1)) + min;
}
function generatePassword(lowerCase,upperCase,digits,specialCharacters) {
  var passwordLength = getRandomInt( 8, 128);
   console.log(passwordLength);
  
  var passwordLength;
  var uppercaseCheck;
  var numberCheck;
  var specialCheck;
}
// Function that will determine length of the password
function determineLength() {
  passwordLength = prompt("Choose how many characters you want your password to be (between 8-128 characters): ");

    if (passwordLength<8){
      alert("Password must be between 8-128 characters");
      determineLength();
    }else if (passwordLength>128){
      alert("Password must be between 8-128 characters");
      determineLength();
    }else if (isNaN(passwordLength)){
      alert("Password length must be a number between 8-128 characters");
      determineLength();
    }else{
    alert("The next three screens will ask you what types of characters you would like to be included in your password.\nIf you choose 'No' for all, your password will only contain lowercase letters.");
    }
    return passwordLength;
}
//Function to determine if uppercase cahracters are wanted in password
function determineUppercase(){
  uppercaseCheck = prompt("Do you want uppercase letters included in your password? (Yes or No)");
  uppercaseCheck = uppercaseCheck.toLowerCase();

    if (uppercaseCheck === null || uppercaseCheck === ""){
      alert("Please answer Yes or No");
      determineUppercase();

    }else if (uppercaseCheck === "yes" || uppercaseCheck ==="y"){
      uppercaseCheck = true;
      return uppercaseCheck;

    }else if (uppercaseCheck === "no" || uppercaseCheck ==="n"){
      uppercaseCheck = false;
      return uppercaseCheck;
    
    }else {
      alert("Please answer Yes or No");
      determineUppercase();
    }
    return uppercaseCheck;
}    
 //Function used to determine whether the user wants to include lowercase characters in the password
function determineLowercase(){
  lowercaseCheck = prompt("Do you want to include lowercase letters in your password? \n(Yes or No)");
    lowercaseCheck = lowercaseCheck.toLowerCase();

    if (lowercaseCheck === null || lowercaseCheck === ""){
      alert("Please answer Yes or No");
      determineLowercase();

    }else if (lowercaseCheck === "yes" || lowercaseCheck ==="y"){
      lowercaseCheck = true;
      return lowercaseCheck;

    }else if (lowercaseCheck === "no" || lowercaseCheck ==="n"){
      lowercaseCheck = false;
      return lowercaseCheck;
    
    }else {
      alert("Please answer Yes or No");
      determineLowercase();
    }
    return lowercaseCheck; 
  }  
//Function used to determine whether the user wants to include numbers in the password
function determineNumbers(){
  numberCheck = prompt("Do you want to include numbers in your password? \n(Yes or No)");
    numberCheck = numberCheck.toLowerCase();

    if (numberCheck === null || numberCheck === ""){
      alert("Please answer Yes or No");
      determineNumbers();

    }else if (numberCheck === "yes" || numberCheck ==="y"){
      numberCheck = true;
      return numberCheck;

    }else if (numberCheck === "no" || numberCheck ==="n"){
      numberCheck = false;
      return numberCheck;
    
    }else {
      alert("Please answer Yes or No");
      determineNumbers();
    }
    return numberCheck;
}

//Function is the user wants to use a special character
function determineSpecial(){
  specialCheck = prompt("Do you want to include special characters in your password? \n(Yes or No)");
    specialCheck = specialCheck.toLowerCase();

    if (specialCheck === null || specialCheck === ""){
      alert("Please answer Yes or No");
      determineSpecial();

    }else if (specialCheck === "yes" || specialCheck ==="y"){
      specialCheck = true;
      return specialCheck;

    }else if (specialCheck === "no" || specialCheck === "n"){
      specialCheck = false;
      return specialCheck;
    
    }else {
      alert("Please answer Yes or No");
      determineSpecial();
    }
    return specialCheck;

}

//Function in order to use all the previous entries and generate a password using the random number generator

function generatePassword(){
  determineLength();
  console.log(passwordLength);
  determineUppercase();
  console.log(uppercaseCheck);
  determineLowercase();
  console.log(lowercaseCheck);
  determineNumbers();
  console.log(numberCheck);
  determineSpecial();
  console.log(specialCheck);
  var lowercaseChar = ["a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"];
  var uppercaseChar = ["A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"];
  var numberChar = ["0,1,2,3,4,5,6,7,8,9"];
  var specialChar = ["!,@,#,$,%,^,&,*,(,)"];
  var characters = lowercaseChar;
var password = "";
if (uppercaseCheck && numberCheck && specialCheck){
  characters += uppercaseChar + numberChar + specialChar;

}else if (uppercaseCheck && numberCheck){
  characters += uppercaseChar + numberChar;

}else if (numberCheck && specialCheck){
  characters += numberChar + specialChar;

}else if (uppercaseCheck && specialCheck){
  characters += uppercaseChar + specialChar;

}else if (uppercaseCheck){
  characters += uppercaseChar;

}else if(numberCheck){
  characters += numberChar;

}else if (specialCheck){
  characters += specialChar;

}else{
  characters === lowercaseChar;
}

  for(var i = 0; i < passwordLength; i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  console.log(password);
  return password;
}

//Writing the password to the #Password Input
function writePassword() {
  var password1 = "";
  password1 = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password1;
}


 //Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//Get references to the #generate element
var generateBtn = document.querySelector("#generateBtn");

 //Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);
