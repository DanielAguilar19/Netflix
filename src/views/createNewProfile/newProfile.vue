<template>
    <div class="p-10 w-full h-screen bg-black text-white">
        <Button icon="pi-chevron-left" severity="secondary" rounded aria-label="Filter" />
        <h1 class="flex justify-center">Llene sus datos</h1>
        <form action="" method="post">
            <div class="w-80vw">
                <FloatLabel class="mt-10">
                    <AutoComplete v-model="nombre" inputId="ac" />
                    <label for="ac">Ingrese su nombre</label>
                </FloatLabel>
                <FloatLabel class="mt-10">
                    <AutoComplete v-model="edad" inputId="ac" />
                    <label for="ac">Ingrese su edad</label>
                </FloatLabel>
                <FloatLabel class="mt-10">
                    <AutoComplete v-model="perfil" inputId="ac" />
                    <label for="ac">Eliga su perfil</label>
                </FloatLabel>
                <Button class="mt-10" label="Enviar" severity="danger" raised/>
            </div>
        </form>
    </div>

</template>

<script setup>
import FloatLabel from 'primevue/floatlabel';
import AutoComplete from 'primevue/autocomplete';
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