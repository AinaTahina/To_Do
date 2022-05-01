
const input = document.querySelector("#input")
const add = document.querySelector("#add")
const clear = document.querySelector("#clear")
const list = document.querySelector("#list")

//nouvelle instance d'array storage pour la cle ' tasks '
const storage = new arrayStorage('tasks')

// onr recupere le tab de tache
const tasks = storage.list

function taskToDOM(task) {
	// si on a une chaine non-vide
	if (typeof task === 'string' && task){
		
		const li = document.createElement('li')
		const remove = document.createElement('button')

		li.textContent = task
		remove.textContent = 'REMOVE'

		remove.addEventListener('click' , () => {
			const value = remove.parentNode.firstChild.textContent
			storage.remove(value)
			list.removeChild(remove.parentNode)
		})

		li.appendChild(remove)
		list.insertBefore(li , list.firstChild)

		return true
	}
	return false
}

// ajout de chaque task a la liste a puce
tasks.forEach(task => taskToDOM(task))

//gerer l'ajout de tache avec le bouton ADD et la touche 'Enter'
function newTask(){
	if (storage.list.indexOf(input.value) === -1 && taskToDOM(input.value)){
		storage.set(input.value)
		input.value = ''
	}
	input.focus()
}

add.addEventListener("click" , newTask)
input.addEventListener('keydown' , e => {
	if(e.key === 'Enter'){
		newTask()
	}
})

clear.addEventListener("click" , () => {
	storage.clear()
	list.innerHTML = ''
})

 

/*

storage methode
	x = new arrayStorage('tasks')
	x.list
	x.list.indexOf('tast value')
	x.remove('string value')
	x.set('value')
	x.clear()

*/


