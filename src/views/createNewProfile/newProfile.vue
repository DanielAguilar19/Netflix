<template>
    <div class="p-10 w-full h-screen bg-black text-white">
        <router-link to="/profiles">
            <Button icon="pi pi-angle-left" severity="secondary" rounded aria-label="Filter"/>
        </router-link>
        <h1 class="flex justify-center">Llene sus datos</h1>
        <form action="" method="post">
            <div class="w-80vw">
                <FloatLabel class="mt-10">
                    <label for="ac">Ingrese su nombre</label>
                </FloatLabel>
                <FloatLabel class="mt-10">
                    <label for="ac">Ingrese su edad</label>
                </FloatLabel>
                <FloatLabel class="mt-10">
                    <label for="ac">Eliga su perfil</label>
                </FloatLabel>
                <router-link to="/profiles">
                    <Button class="mt-10" label="Enviar" severity="danger" raised/>
                </router-link>
            </div>
        </form>
    </div>

</template>

<script setup>
import FloatLabel from 'primevue/floatlabel';
import Button from 'primevue/button';
</script>

<style>
form{
    display: flex;
    justify-content: center;
}
button{
    width: 200px;
}
</style>