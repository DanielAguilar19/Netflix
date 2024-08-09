<template>
    <div class="p-10 w-full h-screen bg-black text-white">
        <h1 class="flex justify-center">Llene sus datos</h1>
        <form class="flex justify-items-center" action="" method="post">
            <div class="w-80vw">
                <FloatLabel class="mt-10">
                    <AutoComplete v-model="value" inputId="ac" :suggestions="items" @complete="search" />
                    <label for="ac">Ingrese su nombre</label>
                </FloatLabel>
                <FloatLabel class="mt-10">
                    <AutoComplete v-model="value" inputId="ac" :suggestions="items" @complete="search" />
                    <label for="ac">Ingrese su Apellido</label>
                </FloatLabel>
            </div>
        </form>
    </div>

</template>

<script setup>
import FloatLabel from 'primevue/floatlabel';
import AutoComplete from 'primevue/autocomplete';
</script>

<style>

</style>