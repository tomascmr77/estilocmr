// ================================
// BUSCADOR
// ================================

const buscador = document.getElementById("buscar");

if (buscador) {

    buscador.addEventListener("keyup", function () {

        const texto = this.value.toLowerCase();

        const productos = document.querySelectorAll(".card");

        productos.forEach(producto => {

            const nombre = producto.querySelector("h3").textContent.toLowerCase();

            if (nombre.includes(texto)) {

                producto.style.display = "block";

            } else {

                producto.style.display = "none";

            }

        });

    });

}



// ================================
// FILTROS
// ================================

const botones = document.querySelectorAll(".filtros button");

botones.forEach(boton => {

    boton.addEventListener("click", () => {

        const filtro = boton.dataset.filtro;

        document.querySelectorAll(".card").forEach(producto => {

            if (filtro == "todos") {

                producto.style.display = "block";

            } else {

                if (producto.dataset.categoria == filtro) {

                    producto.style.display = "block";

                } else {

                    producto.style.display = "none";

                }

            }

        });

    });

});



// ================================
// COMPRAR POR WHATSAPP
// ================================

document.querySelectorAll(".comprar").forEach(boton => {

    boton.addEventListener("click", function () {

        const producto = this.dataset.producto;

        const precio = this.dataset.precio;

        const talle = this.parentElement.querySelector("select").value;

        const mensaje = `Hola 👋

Me interesa comprar este producto.

🧥 Producto: ${producto}

📏 Talle: ${talle}

💲 Precio: ${precio}

¿Está disponible?`;

        window.open(

            "https://wa.me/5491125571206?text=" +

            encodeURIComponent(mensaje),

            "_blank"

        );

    });

});
// ===================================
// ANIMACIÓN AL HACER SCROLL
// ===================================

const productos = document.querySelectorAll(".producto");

function mostrarProductos() {

    productos.forEach(producto => {

        const posicion = producto.getBoundingClientRect().top;

        const pantalla = window.innerHeight;

        if (posicion < pantalla - 100) {

            producto.style.opacity = "1";
            producto.style.transform = "translateY(0px)";

        }

    });

}

productos.forEach(producto => {

    producto.style.opacity = "0";
    producto.style.transform = "translateY(50px)";
    producto.style.transition = "0.6s";

});

window.addEventListener("scroll", mostrarProductos);

mostrarProductos();



// ===================================
// BOTÓN VOLVER ARRIBA
// ===================================

const botonArriba = document.createElement("button");

botonArriba.innerHTML = "↑";

botonArriba.id = "btnArriba";

document.body.appendChild(botonArriba);

botonArriba.style.position = "fixed";
botonArriba.style.right = "25px";
botonArriba.style.bottom = "105px";
botonArriba.style.width = "55px";
botonArriba.style.height = "55px";
botonArriba.style.borderRadius = "50%";
botonArriba.style.border = "none";
botonArriba.style.background = "#b58a68";
botonArriba.style.color = "white";
botonArriba.style.fontSize = "26px";
botonArriba.style.cursor = "pointer";
botonArriba.style.display = "none";
botonArriba.style.boxShadow = "0 5px 20px rgba(0,0,0,.25)";
botonArriba.style.transition = ".3s";
botonArriba.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        botonArriba.style.display = "block";

    } else {

        botonArriba.style.display = "none";

    }

});

botonArriba.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
// ===========================
// ANIMACIÓN AL HACER SCROLL
// ===========================

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("visible");

}

});

},{threshold:0.15});

document.querySelectorAll(".card").forEach(card=>{

observer.observe(card);

});

// ===========================
// BOTÓN VOLVER ARRIBA
// ===========================

const arriba=document.createElement("button");

arriba.innerHTML="↑";

arriba.id="arriba";

document.body.appendChild(arriba);

arriba.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

arriba.style.display="flex";

}else{

arriba.style.display="none";

}

});
// ===========================
// EFECTO HOVER EN BOTONES
// ===========================

document.querySelectorAll(".comprar").forEach(boton=>{

    boton.addEventListener("mouseenter",()=>{

        boton.style.transform="scale(1.03)";

    });

    boton.addEventListener("mouseleave",()=>{

        boton.style.transform="scale(1)";

    });

});


// ===========================
// SCROLL SUAVE MENÚ
// ===========================

document.querySelectorAll('nav a').forEach(link=>{

    link.addEventListener('click',function(e){

        e.preventDefault();

        const destino=document.querySelector(this.getAttribute("href"));

        destino.scrollIntoView({

            behavior:"smooth"

        });

        menu.classList.remove("active");

    });

});


// ===========================
// ANIMACIÓN DEL HEADER
// ===========================

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        header.style.height="70px";
        header.style.background="rgba(255,255,255,.98)";
        header.style.boxShadow="0 10px 30px rgba(0,0,0,.12)";

    }else{

        header.style.height="85px";
        header.style.background="rgba(255,255,255,.97)";
        header.style.boxShadow="0 5px 20px rgba(0,0,0,.08)";

    }

});


// ===========================
// EFECTO EN LAS IMÁGENES
// ===========================

document.querySelectorAll(".card img").forEach(img=>{

    img.addEventListener("mousemove",()=>{

        img.style.transform="scale(1.08)";

    });

    img.addEventListener("mouseleave",()=>{

        img.style.transform="scale(1)";

    });

});
const botonesCategorias=document.querySelectorAll(".categoria");
const cards=document.querySelectorAll(".card");

botonesCategorias.forEach(btn=>{

btn.addEventListener("click",()=>{

document.querySelector(".categoria.active").classList.remove("active");

btn.classList.add("active");

const categoria=btn.dataset.categoria;

cards.forEach(card=>{

if(categoria==="todos"){

card.style.display="block";

}else{

if(card.dataset.categoria===categoria){

card.style.display="block";

}else{

card.style.display="none";

}

}

});

});

});
