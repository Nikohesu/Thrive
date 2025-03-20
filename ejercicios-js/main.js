

function cal () {
    let ciudad = document.getElementById("ciudad").value;
    let num_per = document.getElementById("num-personas").value;
    num_per = num_per!=="" ? (parseInt(num_per)<0? num_per=0:parseInt(num_per)) : 0 ;
    let tip_pago = document.getElementById("tipo-pago").value;  
    
    
    let tot_com_p=tot_com_t=tot_aloj_p=tot_aloj_t=des_tiq_t=des_tiq_l=val_tiq_t_n=val_tiq_t=des_t_t=mul_t=des_t=val_t_n=val_t=0;


    let viajes = [["Ciudad A",5,15000,100000,9000],
                ["Ciudad B",4,12000,120000,11000],
                ["Ciudad C",8,14000,110000,12000],
                ["Ciudad D",6,17000,115000,10000]];


    tot_com_p = viajes[ciudad][1] * viajes[ciudad][4];
    tot_com_t = tot_com_p*num_per;//
    tot_aloj_p = viajes[ciudad][1] * viajes[ciudad][2];
    tot_aloj_t =tot_aloj_p*num_per;//
    val_tiq_p = viajes[ciudad][3];
    val_tiq_t_n= num_per * viajes[ciudad][3];
    des_tiq_l =  ciudad == 0 || ciudad == 1 ? val_tiq_t_n*0.02  : ciudad==2 || ciudad==3 ? val_tiq_t_n*0.05:false;
    des_tiq_t = tip_pago == "Efectivo" ? des_tiq_l+((val_tiq_t_n-des_tiq_l)*0.04): des_tiq_l;
        // 0 = Ciudad A, 1= Ciudad B, 2=Ciudad C, 3=Ciudad D
    val_tiq_t =val_tiq_t_n- des_tiq_t;//
    val_t_n= tot_com_p+tot_aloj_t+val_tiq_t;

    des_t_t = num_per >=10 ? val_t_n*0.15 : num_per >=5 && num_per<10 ? val_t_n * 0.10: 0;
    mul_t= tip_pago == "Tarjeta" ? val_t_n*0.015 : 0 ;

    des_t=des_tiq_t+des_t_t;

    val_t = val_t_n+mul_t-des_t_t;



    



    let valor_t = document.getElementById("valor-t").value = val_t ;
    let descu = document.getElementById("descuento").value = des_t;
    let valor_n_p = document.getElementById("valor-n-p").value = val_t_n;
}