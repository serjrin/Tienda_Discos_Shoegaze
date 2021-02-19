
//---------------------------------------------------------------------


var lineasCarrito = [];
var texto =  "";


var num_items_Carrito = 0;
var TextoHTML_Carrito = "";

var lineas_TR_carrito = [];


//--------
//--------


var productos = [
                    {
                        id: 0,

                        imagen: "img/disc0_bloody.jpg",
                        alt: "MBV - Loveless",
                        descripcion: "My Bloody Valentine - Loveless",
                        precio: 15.50
                    },

                    {
                        id: 1,

                        imagen: "img/disc1_pale.jpg",
                        alt: "Pale - Comforts",
                        descripcion: "Pale Saints - The Comforts of Madness",
                        precio: 6.90
                    },

                    {
                        id: 2,

                        imagen: "img/disc2_slow.jpg",
                        alt: "Slow - Just",
                        descripcion: "Slow Dive - Just for a day",
                        precio: 9.00
                    },

                    {   id: 3,

                        imagen: "img/disc3_ride.jpg",
                        alt: "Ride - Going",
                        descripcion: "Ride - Going Blank Again",
                        precio: 2.50
                    },

                    {
                        id: 4,

                        imagen: "img/disc4_curve.jpg",
                        alt: "Curve - Cuckoo",
                        descripcion: "Curve - Cuckoo",
                        precio: 4.50
                    },

                    {
                        id: 5,

                        imagen: "img/disc5_galaxie.jpg",
                        alt: "Galaxie - Today",
                        descripcion: "Galaxie 500 - TODAY",
                        precio: 2.20
                    },

                    {
                        id: 6,

                        imagen: "img/disc6_lush.jpg",
                        alt: "Lush - Gala",
                        descripcion: "Lush - Gala",
                        precio: 2.20
                    },

                    {
                        id: 7,

                        imagen: "img/disc7_jesus.jpg",
                        alt: "Jesus - Psycho",
                        descripcion: "Jesus & Mary Chane - Psycho Candy",
                        precio: 2.20
                    },

                    {
                        id: 8,

                        imagen: "img/disc8_verve.jpg",
                        alt: "Verve - Storm",
                        descripcion: "The Verve - A Storm in Heaven",
                        precio: 2.20
                    }

                ];


// --------------------------------------------------------------------
// --------------------------------------------------------------------
// --------------------------------------------------------------------


function f_Pintar_Productos_Cards ()
{
    
    //--------------------------
    
    productos.forEach(
                        item =>
                                {
                                    texto +=
                                            `
                                            <div class="iD_card">
    
                                                <img src="${item.imagen}" alt="${item.alt}">
    
                                                <p> ${item.descripcion} </p>
                                                <h4> ${item.precio.toFixed(2)} € </h4>
    
                                                <button id="Comp${item.id}" class="buttonComprar">Comprar</button>
    
                                            </div>
                                            `;
                                }
                    );
    
    document.getElementById("iD_divProductos").innerHTML =  texto;
    
    //generar el evento para el container
    document.getElementById("iD_divProductos").addEventListener( "click", f_Comprar );    

}

//---------------------------------------------------------------------


function f_Comprar ( e )
{
    let id_producto_comprado = parseInt( e.target.id[ 4 ] );

    // console.log( e.target );
    // console.log( e.currentTarget );    

    //console.log( e.target.className );

    //if( e.target.innerHTML === "Comprar" )
    if  ( 
            ( e.target.className === "buttonComprar" ) ||
            ( e.target.className === "newbuttonAddItem" )            
        )
    {
        let producto =  productos.find(  item =>  ( item.id == id_producto_comprado )   );

        let existe_comprado_ya = lineasCarrito.find( item =>  ( item.id == id_producto_comprado ) );
        //console.log( existe_comprado_ya );

        if ( existe_comprado_ya == null )
        {
            lineasCarrito.push  (
                                    {
                                        id:         producto.id,
                                        cantidad:   1,
                                        nombre:     producto.alt,
                                        precio:     producto.precio
                                    }
                                );
        }
        else
        {
            existe_comprado_ya.cantidad++;
            // existe_comprado_ya.precio += producto.precio;

            //console.log( existe_comprado_ya.cantidad );
        }

        num_items_Carrito++;                            

        f_ActualizarCarrito( );

        //-----

        document.getElementById( "iT_tablaCarrito" ).hidden = false;
        document.getElementById( "iD_carrito" ).hidden = false;

        document.getElementById( "iP_num_items_carro" ).hidden = false;            
        // document.getElementById( "iHR_separador_zonas" ).hidden = true; 

        document.getElementById( "iD_carrito" ).style.border = "dotted 1px grey";
        // border: dotted 1px purple;

    }
}


//---------------------------------------------------------------------

function f_Eliminar ( e )
{

    let str_comienzo = e.target.id.slice( 0, 3 );


    if ( str_comienzo === "Eli" )
    {
        // alert( str_comienzo );

        let id_producto_eliminar = parseInt(  e.target.id[ 4 ]  );

        // console.log( e.target );
        // console.log( e.currentTarget );    
    
        //console.log( e.target.className );
    
        //if( e.target.innerHTML === "Comprar" )
        if( e.target.className === "buttonEliminar" )
        {
            //console.log( id_producto_eliminar );
            //let producto =  productos.find(  item =>  ( item.id == id_producto_eliminar )   );
    
            let producto_comprado_ya = lineasCarrito.find(  item =>  ( item.id == id_producto_eliminar )  );


            if ( producto_comprado_ya.cantidad > 1 )
            {
                producto_comprado_ya.cantidad--;
                // producto_comprado_ya.precio -= producto_comprado_ya.precio;
            }
            else    // <= 1
            {
                // console.log( lineasCarrito );
                // console.log( "ID: " + id_producto_eliminar + " - NOMBRE: " + producto_comprado_ya.nombre );
                
                let pos_array_lineas_Carrito_Elim =  lineasCarrito.indexOf( producto_comprado_ya );

                // console.log( "pos_array_lineas_Carrito_Elim: " + pos_array_lineas_Carrito_Elim );

                lineasCarrito.splice( pos_array_lineas_Carrito_Elim, 1 );

                // lineasCarrito.splice( pos_array_lineas_Carrito_Elim, 1 );
                
                /*
                lineasCarrito.pop  (
                                        {
                                            id:         producto.id,
                                            cantidad:   1,
                                            nombre:     producto.alt,
                                            precio:     producto.precio
                                        }
                                    );
                */
                                   
            }
    
            num_items_Carrito--; 
            f_ActualizarCarrito( ); 
            // console.log( lineasCarrito );

            if ( num_items_Carrito == 0 )
            {
                document.getElementById( "iT_tablaCarrito" ).hidden = true;
                document.getElementById( "iD_carrito" ).hidden = true;
    
                document.getElementById( "iP_num_items_carro" ).hidden = true;            
                // document.getElementById( "iHR_separador_zonas" ).hidden = true; 
    
                document.getElementById( "iD_carrito" ).style.border = "none";
                // border: dotted 1px purple;
            }
        }  
    }
}



//---------------------------------------------------------------------

function f_ActualizarCarrito ( )
{

    let textoCarrito =  `
                        <table id="iT_tablaCarrito">
                            <caption> Carrito </caption>

                            <tr>
                                <th> id.Venta.Producto </th>                            
                                <th> Cantidad </th>
                                <th> Producto </th>
                                <th> Precio </th>
                                <th> Total </th>
                            </tr>
                        `;

    let total = 0;
    let num_item = 0;

    // let Total_Cuenta = 0;

    lineasCarrito.forEach(
                            item =>
                            {
                                num_item++;

                                total += ( item.precio * item.cantidad );

                                textoCarrito += `
                                                <tr id="">

                                                    <td class="centrado"> ivp${num_item} </td>
                                                
                                                    <td class="centrado"> ${item.cantidad} </td>



                                                    <td> ${item.nombre} </td>


                                                    <td class="num"> ${item.precio.toFixed(2)} € </td>


                                                    <td class="num"> ${(item.precio * item.cantidad).toFixed(2)} € </td>

                                                    <!--<td class="num"> <button id="Elim${item.id}_orig" class="buttonEliminar"> Eliminar </button> </td>-->


                                                    <td class="num"> <button id="Add_${item.id}" class="newbuttonAddItem"> + </button> </td>

                                                    <td class="num"> <button id="Elim${item.id}" class="buttonEliminar"> - </button> </td>

                                                </tr>
                                                `;
                            }
                        );

    textoCarrito += `   
                        <tr>                            
                            <td colspan="4"> <b>TOTAL CUENTA:</b> </td>

                            <td class="num"> <b>${total.toFixed(2)} €</b> </td>
                            </b>                            
                        </tr>

                    </table>
                    `;

    //-----------------------

    document.getElementById("iD_carrito").innerHTML =  textoCarrito;

    TextoHTML_Carrito =  textoCarrito;

    //------------


    let new_buttons_eliminar = document.getElementsByClassName( "buttonEliminar" );
    let new_buttons_AddItem = document.getElementsByClassName( "newbuttonAddItem" );

    //console.log( buttons_eliminar.length );    
    //console.log( buttons_eliminar.item(0) );

    for ( let i = 0; i < new_buttons_eliminar.length; i++ )
    {
        new_buttons_eliminar.item( i ).addEventListener( "click", f_Eliminar );
    }

    for ( let i = 0; i < new_buttons_AddItem.length; i++ )
    {
        new_buttons_AddItem.item( i ).addEventListener( "click", f_Comprar );
    }
    

    // buttons_eliminar.item.forEach(
    //                             item =>
    //                                     {
    //                                         let id_item = ( e.target.id[ 4 ] );
    //                                         //item.getElementById(id_item).addEventListener( "click", f_Eliminar );
    //                                     }
       //                         );


    //------

    document.getElementById("iP_num_items_carro").innerHTML = "Num. Items. Carrito: <b>" + num_items_Carrito + "</n>";

}



//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------