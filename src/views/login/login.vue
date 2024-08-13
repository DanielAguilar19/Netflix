<template>  
  <Div id="Cuadrado"> 
  
  <header>
          <img class="logoHeader" src="../../assets/Net.png" alt="">
  </header>
  
  <section id="Formulario">
      <h1>Iniciar Sesión</h1>
      <input class="botones" type="text" placeholder="Ingrese su correo" id="boxcorreo">

      <input class="botones" type="password" placeholder="Ingrese su contraseña" id="boxcontra">

      <router-link to="/profiles">
        <button class="botones" id="inicio" type="submit">Iniciar Sesión</button>
      </router-link>

      <label class="bottom"><input type="checkbox" name="Check" id="checkbox"> Recordarme</label>

     <a href="/new/user" class="bottom a links" id="link">¿Necesitas ayuda?</a> 
     <br><br>
  
     <label class="pie">¿Primera vez en Netflix?</label> 
     <routter-link to="/new/user">
         <a href="/new/user" class="pie a links" id="link2">Subscribete Ahora</a> 
     </routter-link>
     
     <br><br>
     <p class="pie">
      Esta página está protegida por Google reCAPTCHA para comprobar que no eres un robot. 
      <a href="google.com" class="links" id=link3>Más info.</a> 
     </p>
  </section>
  
  </Div>
</template>

<script>
export default {

}
</script>

<style>
*{
    margin: 0px;
}

body{   
    height: 100vh;
    background-image: url(../../assets/fondo.jpg);

}
#Cuadrado{
    height: 100vh;
}

div{
    background-color: rgba(0, 0, 0, 0.5);
}

.logoHeader{
padding-left: 10px;
height: 14vh;
}

section{
    height: 85vh;
    width: 58vh;
    color: aliceblue;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 5px;
    padding: 30px 60px;
    margin-left: 35%;
    margin-right: 65%;
    margin-bottom: 20px;

}
h1{
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 30px;
}

.botones{
    width: 100%;
    padding: 15px;
    box-sizing: border-box;
    font-size: 1rem;
    margin-bottom: 15px; 
    background-color: rgba(65, 64, 64,0.7);
    border-radius: 5px;
    border-width: 0;
    color: rgb(209, 209, 209);
}

#inicio{
    margin-top: 20px;
    margin-bottom: 35px;
    background-color: rgb(192, 0, 0);
    font-weight: bold;
}
#inicio:hover{
    background-color: red;
    cursor: pointer;
}
.a{
    padding-left: 20%;
}
#checkbox{
    padding-right: 40%;
}
.bottom{
    color:rgb(97, 97, 97) ;
    font-size: 15px;
}
.pie{
    color:rgb(97, 97, 97) ;
    font-size: 15px;
    padding-bottom: 10px;
}
#link2{
    padding-left: 5%;

}
#link3{
    color: blue;

}
.links{
    text-decoration: none;
}

</style>