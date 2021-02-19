
// --------------------------------------------------------------------

function f_RealizarDistintosEjercicios ()
{

    var listado_prods =  "<h3> * LISTADO PRODUCTOS: </h3> <br>";

    for ( let i = 0; i < productos.length; i++ )
    {
        listado_prods +=    "" +
                            "<b>IDEN:</b> " + productos[ i ].id + "<br>" +
                            "<b>DESC:</b> " + productos[ i ].descripcion + "<br>" +
                            "<b>PREC:</b> " + productos[ i ].precio + "<br>" +                        

                            "<br>";
    }
    // console.log( listado_prods );
    //document.getElementById("iP_listadoProds").innerHTML =  listado_prods;

    //---

    listado_prods = "<h3> * LISTADO PRODUCTOS: </h3> <br>";

    productos.forEach(
                        item =>
                                {
                                    listado_prods +=    "" +
                                                        "<b>IDEN:</b> " + item.id + "<br>" +
                                                        "<b>DESC:</b> " + item.descripcion + "<br>" +
                                                        "<b>PREC:</b> " + item.precio + "<br>" +                        
                                
                                                        "<br>";
                                }
                    );

    document.getElementById("iP_listadoProds").innerHTML =  listado_prods;



    //---

    let id_a_buscar = 3;
    //let producto_encontrado = "";

    for ( let i = 0; i < productos.length; i++ )
    {
        if ( parseInt( productos[ i ].id ) == id_a_buscar )
        {
            let producto_encontrado = productos[ i ];

            listado_prods +=    "<br><br>" +

                                "<h3>* El producto buscado es:</h3> <br>" + 

                                "<b>IDEN:</b> " + producto_encontrado.id + "<br>" +
                                "<b>DESC:</b> " + producto_encontrado.descripcion + "<br>" +
                                "<b>PREC:</b> " + producto_encontrado.precio + "<br>" +                        

                                "<br>";   

            break;
        }
    }

    document.getElementById( "iP_listadoProds" ).innerHTML =  listado_prods;


    // --------------------------------------------------------------------


    let producto2 = productos.find( producto => producto.id == id_a_buscar );

    document.getElementById( "iP_Pruebas" ).innerHTML = "El producto seleccionado con ID " + id_a_buscar + " es " + producto2.alt;


    //---


    let numericos = [ 3, 4, 7, 79, 18, 6, 33 ];
    let mayores = [];

    for ( let i = 0; i < numericos.length; i++ )
    {
        if ( numericos[i] > 18 )
        {
            mayores.push( numericos[i] );
        }
    }

    // console.log( mayores );


    //---

    let mayoresFilter = numericos.filter( numero => ( numero > 18 ) );

    // console.log( "El resultado con filter() es: " + mayoresFilter );

    document.getElementById( "iP_Pruebas2" ).innerHTML = "El resultado con filter() es: " + mayoresFilter;

}// function f_RealizarDistintosEjercicios ()


// --------------------------------------------------------------------
// --------------------------------------------------------------------
// --------------------------------------------------------------------