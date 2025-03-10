

function cal () {
    let ciudad = document.getElementById("ciudad").value;
    let num_per = document.getElementById("num-personas").value;
    num_per = num_per!=="" ? num_per : 0 ;
    let tip_pago = document.getElementById("tipo-pago").value;  
    
    
    let tot_com_p=tot_com_t=tot_aloj_p=tot_aloj_t=val_tiq_p=val_tiq_p_n=des_tiq_p=des_tiq_t=val_tiq_t_n=val_tiq_t=val_t_n=val_t_n_p=val_t_p=val_t=0;

    if (ciudad == "Ciudad A") {
        console.log("cd a");

    }
    else if (ciudad == "Ciudad B") {
        console.log("cd b");

    }
    else if (ciudad == "Ciudad C") {
        console.log("cd c");

    }
    else {
        console.log("cd d");
    }






    let valor_t = document.getElementById("valor-t").value = val_t ;
    let descu = document.getElementById("descuento").value = num_per;
    let valor_n_p = document.getElementById("valor-n-p").value = des_tiq_p ;
}
