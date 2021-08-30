function passGen() {
    var password = "";
    var characters = "0123456789@#$%!-&*ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var long = "30";
    for(var i = 0; i < long; i++) {
    gen = characters.charAt(Math.floor(Math.random() * characters.length));
    password += gen
    }
    document.getElementById("pass").value = password
    }
function copy() {
    var copyText = document.getElementById("pass");
    
    // Set selection range to copy longer text on mobile devices
    
    copyText.setSelectionRange(0, 9999);
    
    //Copy the text from the text field
    
    navigator.clipboard.writeText(copyText.value);
    
    var toast = document.getElementById("toast");
    toast.className = "show";
    
    // Show toast for 3sec
    
    setTimeout(function(){
    toast.className = toast.className.replace("show", "");
    }, 3000)
    
}
