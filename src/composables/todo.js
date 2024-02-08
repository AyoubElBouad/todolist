import { reactive, ref } from 'vue';
const ls_id = "todo"
const to_dos = reactive(JSON.parse(localStorage.getItem(ls_id) || "[]"));

const to_do = ref({});

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


export {to_dos, to_do , setNewTask  , addTask  ,saveTasks  }