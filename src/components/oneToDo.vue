<template lang="">
	<div>
		<input  type="checkbox"  v-model="todo.checked" @change="saveTasks"/>
		<span>{{ todo.desc }}</span> 
		<input v-if="toggle" type="text"  v-model="todo.desc" class="inp"/>
	</div>
	<div>
		<button @click="deleteTask(todo)">Delete</button>
		<button :style="{backgroundColor: toggle ? 	'#42b883' : '#fbbf24'}" @click="updateTask()">{{ toggle ? 'Valider' : 'Modifier' }}</button>
	</div>
</template>
<script setup>
const props = defineProps({
	todo: Object,
	required : true
});

import { ref } from 'vue';
import {to_dos  ,setNewTask ,saveTasks  } from '../../src/composables/todo';


const toggle = ref(false);


function deleteTask (todo){
	const ind = to_dos.indexOf(todo);
	to_dos.splice(ind, 1);
	saveTasks();
}
function updateTask (){
	toggle.value = !toggle.value;
	setNewTask ();
	saveTasks();
}
</script>
<style lang="">
	
</style>