<scrip type="text/javascript">
	function validarN(e){
		tecla = (document.all) ? e.keyCode : e.which;
		if(tecla == 8) return true;
		patron = /[qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM]/;
		te = String.fromCharCode(tecla);
		if(patron.test(te)) {
			alert('SOLO SE ACEPTAN NUMEROS');
			return false;
		}
	}
	
	function validarL(e){
		tecla = (document.all) ? e.keyCode : e.which;
		if(tecla == 8) return true;
		patron = /[123456789]/;
		te = String.fromCharCode(tecla);
		if(patron.test(te)) {
			alert('SOLO SE ACEPTAN LETRAS');
			return false;
		}
	}
</scrip>

//esto va en el campodonde se quiere 
//onkeypress="return validarN(event)"