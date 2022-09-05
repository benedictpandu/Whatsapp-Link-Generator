 
    var inputNumber = document.querySelector("#number")
    var inputText = document.querySelector("#text")
    var notifText = document.querySelector("#notifText")
    var notifNumber = document.querySelector("#notifNumber")
    


const generate = (event) =>{
    var number = String(inputNumber.value)
    var text = encodeURIComponent(inputText.value)
    console.log(text)
    if (number ===  "") {
        notifNumber.classList.add("text-red-600")
        notifNumber.innerHTML = "Harap Masukan Nomor"
        inputNumber.classList.add("focus:outline-red-600")
        inputNumber.focus()
        return false;
    }else{
        notifNumber.classList.remove("text-red-600")
        inputNumber.classList.remove("focus:outline-red-600")
        inputNumber.classList.add("focus:outline-green-600")
    }
    if(text === "%20") {
        notifText.classList.add("text-red-600")
        notifText.innerHTML = "Harap Masukan Nomor"
        inputText.classList.add("focus:outline-red-600")
        inputText.focus()
        return false;
    }else{
        notifText.classList.remove("text-red-600")
        inputText.classList.remove("focus:outline-red-600")
        inputText.classList.add("focus:outline-green-600")
    }

        if (number[0] == 0) {
            number = number.replace("0", "+62")
        }else if(number[0] == 6 && number[1] == 2){
            number = "+" + number
        }else if(number[0] == 8){
            number = "+62" + number
        }
        var link = "https://api.whatsapp.com/send/?phone="+number+"&text="+text;
        
        document.querySelector("#result").innerHTML = "<div class='bg-green-500 p-1 text-center rounded'><a href='" +link +"' target=_blank>"+link+"</a href=''></div>"
    
    

    
}   

