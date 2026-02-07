(function () {
  'use strict';

  const taskInput = document.getElementById('taskInput');
  const addBtn = document.getElementById('addBtn');
  const taskList = document.getElementById('taskList');
  const counter = document.getElementById('counter');
  const clearDoneBtn = document.getElementById('clearDone');

  let tasks = [];

  function loadTasks() {
    try {
      const saved = localStorage.getItem('todo-list-tasks');
      if (saved) tasks = JSON.parse(saved);
    } catch (_) {
      tasks = [];
    }
    render();
  }

  function saveTasks() {
    localStorage.setItem('todo-list-tasks', JSON.stringify(tasks));
    render();
  }

  function addTask(text) {
    const trimmed = (text || '').trim();
    if (!trimmed) return;
    tasks.push({ id: Date.now(), text: trimmed, done: false });
    saveTasks();
    taskInput.value = '';
    taskInput.focus();
  }

  function toggleDone(id) {
    const t = tasks.find(function (task) { return task.id === id; });
    if (t) {
      t.done = !t.done;
      saveTasks();
    }
  }

  function deleteTask(id) {
    tasks = tasks.filter(function (task) { return task.id !== id; });
    saveTasks();
  }

  function clearDone() {
    tasks = tasks.filter(function (task) { return !task.done; });
    saveTasks();
  }

  function render() {
    const total = tasks.length;
    const doneCount = tasks.filter(function (t) { return t.done; }).length;

    counter.textContent = total === 0 ? '0 görev' : total + ' görev' + (doneCount ? ' (' + doneCount + ' tamamlandı)' : '');

    if (tasks.length === 0) {
      taskList.innerHTML = '<li class="empty-message">Henüz görev yok. Yukarıdan yeni bir görev ekleyin.</li>';
      return;
    }

    taskList.innerHTML = '';
    tasks.forEach(function (task) {
      const li = document.createElement('li');
      li.className = 'task-item' + (task.done ? ' done' : '');
      li.setAttribute('data-id', task.id);

      const check = document.createElement('button');
      check.type = 'button';
      check.className = 'task-checkbox';
      check.setAttribute('aria-label', task.done ? 'Tamamlandı işaretini kaldır' : 'Tamamlandı işaretle');
      check.addEventListener('click', function () { toggleDone(task.id); });

      const span = document.createElement('span');
      span.className = 'task-text';
      span.textContent = task.text;

      const del = document.createElement('button');
      del.type = 'button';
      del.className = 'task-delete';
      del.setAttribute('aria-label', 'Görevi sil');
      del.textContent = '×';
      del.addEventListener('click', function () { deleteTask(task.id); });

      li.appendChild(check);
      li.appendChild(span);
      li.appendChild(del);
      taskList.appendChild(li);
    });
  }

  addBtn.addEventListener('click', function () {
    addTask(taskInput.value);
  });

  taskInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      addTask(taskInput.value);
    }
  });

  clearDoneBtn.addEventListener('click', clearDone);

  loadTasks();
  taskInput.focus();
})();
