const takeParagraph = document.getElementById("time");
    // object date
let date = new Date();

dia = date.getDate() 
mes = parseInt(date.getMonth()) + 1 
año = date.getFullYear()

takeParagraph.innerHTML = `Date: ${dia}/${mes}/${año}`
const takeContainer = document.getElementById("data-content");


class choices{
    constructor (choice){
        this.choice = choice;
    }
}

class UI{

    addTask(Choice){
        if(task.value == ''){
            Swal.fire({
                icon: 'error',
                title: 'please fill in the fields'
            })
        }else{
             // add elements to DOM

             //create elements 
             const createList = document.createElement("li")
             createList.classList.add("list-li")
             createList.setAttribute("id", "li");

             createList.innerText = `${task.value}`
             takeContainer.appendChild(createList)
        }
    }

    removeTask(){
        let list = document.getElementById("li");
        list.addEventListener("click", function(){
            takeContainer.removeChild(list)
        })
    }

    clearTask(){
    }


}

const takeBtn = document.getElementById('btn').addEventListener("click", (e)=>{
    // data input
    const task = document.getElementById('task');

    // add task to choice
    const Choice = new choices(task);
    const ui = new UI()
    ui.addTask()
    ui.removeTask();
    e.preventDefault();
})