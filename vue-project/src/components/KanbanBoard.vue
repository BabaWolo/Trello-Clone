<template>
  <v-container fluid>
    <v-row>
      <v-col cols="4" v-for="(list, index) in lists" :key="index">
        <div v-if="!list.isEditing">
          <h2 @dblclick="enableEditing(index)">{{ list.title }}:</h2>
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn icon="mdi-dots-horizontal" v-bind="props"></v-btn>
            </template>
            <v-list>
              <v-list-item @click="deleteList(index)">
                <v-list-item-title>Delete</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Copy</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Move</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Add card</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          
        </div>
        <div v-else>
          <v-text-field v-model="list.title" @keyup.enter="disableEditing(index)" autofocus></v-text-field>
          <v-btn @click="disableEditing(index)">Save</v-btn>
        </div>
        <v-card
          v-for="(item, itemIndex) in list.description"
          :key="itemIndex"
          class="mb-4"
        >
          <v-card-text>{{ item.description }}</v-card-text>
          <v-card-actions>
            <v-menu>
              <template v-slot:activator="{ props }">
                <v-btn icon="mdi-dots-horizontal" v-bind="props"></v-btn>
              </template>
              <v-list>
                <v-list-item @click="editItem(index, itemIndex)">
                  <v-list-item-title>Edit</v-list-item-title>
                </v-list-item>
                <v-list-item @click="deleteItem(index, itemIndex)">
                  <v-list-item-title>Delete</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card-actions>
        </v-card>
        <div v-if="list.isAddingTask">
          <v-text-field v-model="list.newTaskTitle" @keyup.enter="addTask(index)" autofocus></v-text-field>
          <v-btn @click="addTask(index)">Add Card</v-btn>
          <v-btn @click="cancelAddTask(index)"><v-icon>mdi-close</v-icon></v-btn>
        </div>
        <v-btn v-else @click="enableAddTask(index)">Add New Task</v-btn>
      </v-col>
      <div>
        <v-btn large color="primary" @click="addList">Add New List</v-btn>
      </div>
    </v-row>
  </v-container>
</template>

<script lang="ts">

export default {
  data() {
    return {
      lists: [{ title: 'New Task', description: [], isEditing: false, newTaskTitle: '', isAddingTask: false},
      // more tasks...
      ],
    }
  },
  methods: {
    addTask(listIndex) {
      this.lists[listIndex].description.push({ description: this.lists[listIndex].newTaskTitle });
      this.lists[listIndex].isAddingTask = false;
      this.lists[listIndex].newTaskTitle = '';
    },
    cancelAddTask(listIndex) {
      this.lists[listIndex].isAddingTask = false;
      this.lists[listIndex].newTaskTitle = '';
    },
    enableAddTask(listIndex) {
      this.lists[listIndex].isAddingTask = true;
    },
    editItem(listIndex, itemIndex) {
      // Edit the item at itemIndex in the list at listIndex...
    },
    deleteItem(listIndex, itemIndex) {
      this.lists[listIndex].description.splice(itemIndex, 1);
    },
    deleteList(index) {
      this.lists.splice(index, 1);
    },
    addList() {
      this.lists.push({ title: 'New Task', description: [] });
    },
    enableEditing(index) {
      this.lists[index].isEditing = true;
    },
    disableEditing(index) {
      this.lists[index].isEditing = false;
    },
  },
}
</script>