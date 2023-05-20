const textArea = document.querySelector(".text-area");
const message = document.querySelector(".message");

function encrypt(){
	const encryptedText = encrypt(textArea.value)
	message.value = encryptedText
	textArea.value = "";
	message.style.backgroundImage = "none";
}

function encrypt(encryptingString){
	let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
	encryptingString = encryptingString.toLowerCase()

	for(let i = 0; i < matrizCodigo.length; i++){
		if(encryptingString.includes(matrizCodigo[i][0])){
			encryptingString = encryptingString.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
		}
	}
	return encryptingString
}

function decrypt(){
	const decryptedText = decrypt(textArea.value)
	message.value = decryptedText
	textArea.value = "";
	message.style.backgroundImage = "none";
}

function decrypt(decryptingString){
	let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
	decryptingString = decryptingString.toLowerCase()

	for(let i = 0; i < matrizCodigo.length; i++){
		if(decryptingString.includes(matrizCodigo[i][1])){
			decryptingString = decryptingString.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
		}
	} 
	return decryptingString
}

