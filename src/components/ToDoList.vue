<template>
	<h1>Ajouter une Tâche :</h1>
	<label for="tach">Decription de la tâche: </label>
	<input class="inp" type="text" v-model="to_do.desc">

	<button @click="addTask">Ajouter</button>

	<ol>
		<li v-for="(todo) in to_dos">
			<div>
				<input  type="checkbox"  v-model="todo.checked" @change="saveTasks"/>
				<span>{{ todo.desc }}</span> 
				<input v-if="toggle" type="text"  v-model="todo.desc" class="inp"/>

			</div>
			<div>
				<button @click="deleteTask(todo)">Delete</button>
				<button @click="updateTask()">Modifier</button>
			</div>
			
		</li>
	</ol>
	
</template>
<script setup>
import { reactive, ref } from 'vue';
const ls_id = "todo"
const to_dos = reactive(JSON.parse(localStorage.getItem(ls_id) || "[]"));

const to_do = ref({});
const toggle = ref(false);

setNewTask();

function setNewTask (){
	to_do.value = {
		id: crypto.randomUUID(),
		desc : "",
		checked: false,
		date: new Date()
	};
}

function addTask () {
	to_dos.push(to_do.value);
	setNewTask ();
	saveTasks();
}

function saveTasks() {
	localStorage.setItem("todo",JSON.stringify(to_dos));
}
function deleteTask (todo){
	const ind = to_dos.indexOf(todo);
	to_dos.splice(ind, 1);
	saveTasks();
}
function updateTask (){
	toggle.value = true;
	setNewTask ();
	saveTasks();
}
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
}

</style>