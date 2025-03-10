function cal () {
    let ciudad = document.getElementById("ciudad").value;
    let num_per = document.getElementById("num-personas").value;
    let tip_pago = document.getElementById("tipo-pago").value;    

   
    document.getElementById("sc").textContent = "cambie :"+ciudad;
    let nuevoParrafo = document.createElement("h1");

    document.getElementById("for-rep").insertAdjacentHTML("beforeend",'<h5 id="obj" style="color: green;">hola mundo</h5>');

    
}


function limp() {
    alert ("funcionando");
    let elemento = document.getElementById("obj");
    elemento.remove();
    
}