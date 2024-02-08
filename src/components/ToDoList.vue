<template>
	<h1>Ajouter une Tâche :</h1>
	<label for="tach">Decription de la tâche: </label>
	<input class="inp" type="text" v-model="to_do.desc">
	<button @click="addTask">Ajouter</button>

	<ol>
		<li v-for="(todo) in to_dos">
			<OneToDo :todo="todo"/>
			
		</li>
	</ol>
	
</template>
<script setup>
import OneToDo from './oneToDo.vue';
import {to_dos ,to_do, addTask  } from '../../src/composables/todo'

</script>
<style>
li {
	display :flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 5px;
}
button {
	width: 80px;
	height: 40px;
	background-color: #003378;
	color: #fff;
	cursor: pointer;
	border-radius: 10px;
}
.inp{
	height:  30px;
	width: 260px;
}

</style>