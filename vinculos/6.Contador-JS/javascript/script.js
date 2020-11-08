var contador = 0;
		function agregaLinea(){
			var oTbl = document.getElementById("tblUno");
			var oLin = oTbl.insertRow(-1);
			var oCelda1 = oLin.insertCell(0);
			var oCelda2 = oLin.insertCell(1);
			
			oCelda1.innerHTML += "Fila #" + ++contador;
			oCelda2.innerHTML = 'Texto y campo ' +
			'<input type="text" name="campo"/>';
			
			if(contador % 2 == 0) 
			oCelda1.style.color="green";
				else 
				oCelda1.style.color="#FFC312";
		}
		

		function eliminaLinea(){
			var oTbl = document.getElementById("tblUno");
			oTbl.deleteRow(-1) + contador--;
		}