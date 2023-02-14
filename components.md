# Data

## Data layer

- Todos
  - id: number
  - name: string
  - isDone: boolean

## Data modification

- set a new todo list (load)
- add new todo
- delete a todo
- toggle isDone status

# Store

# Components

## App

- Shows layout component

## Layout

- Shows "My To-do list" title in a heading
- Shows Form component
- Shows ToDoList component

## ToDo Component

- Receives toggle isDone action
- Receives delete task action
- Receives a new task
- Shows task name inside a heading
- Shows a button component to toggle the isDone status
- Shows button component to delete task
- Sends a check to button component that shows isDone status
- Sends an empty check-box to button component that shows tha is not-isDone status
- Sends a "X" to button component to delete a task
- Sends toggle isDone action to button component that shows status
- Sends delete task action to button component that deletes task

## ToDoList Component

- Receives list of tasks
- Shows a task component for every task in the list of tasks
- Sends a task from the list to each task component

## Button Component

- On click executes the received action

## Form Component

- Receives the add task action
- Shows an input for the task name with the label "Add new task"
- Shows a button "Add" to submit the form
- On submit executes the received add task action
