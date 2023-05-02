import "../styles/tasklist.css";

function taskList() {
    function finishTask(div, btn) {
      div.remove();
      btn.remove();
    }
    
    function handleKeyDown(event) {
        if (event.key === 'Enter') {
          addTask();
        }
      }

    async function getRequest(url) {
      const response = await fetch(url);
      const data = response.json();
      return data
    }
  
  function addTask() {
      let list = document.getElementById('todo-list');
      let task = document.createElement('li');
      let newDiv = document.createElement('div');
      newDiv.className = 'task-wrapper';

      let buttonDiv = document.createElement('div');
      buttonDiv.className = 'button-wrapper';

      let inputText = document.getElementById('new-todo');
      task.textContent = inputText.value;
      inputText.value = "";

      let xBtn = document.createElement('button');
      xBtn.className = 'x-button';
      xBtn.textContent = 'X';
      xBtn.onclick = () => finishTask(newDiv, xBtn);
      

      newDiv.appendChild(task);
      buttonDiv.appendChild(xBtn);

      let a = document.createElement('div');
      a.className = 'wrapper-wrapper';
      a.appendChild(newDiv);
      a.appendChild(buttonDiv);

      list.appendChild(a);
    }
  
    return (
      <div class="container">
        <div class="form__group field">
            <input type="text" class="form__field" placeholder="" name="name" id='new-todo' onKeyDown={handleKeyDown} autoComplete="off"></input>
            <label for="name" class="form__label">enter a task</label>
        </div>
          {/* <input type="text" id="new-todo" placeholder="Enter a task" onKeyDown={handleKeyDown}></input> */}
        <div className="todoListWrapper">
            <ul id="todo-list"></ul>
        </div>            
      </div>
    );
  }
  
  
  
  export default taskList;