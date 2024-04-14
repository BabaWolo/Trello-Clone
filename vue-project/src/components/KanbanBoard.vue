<template>
  <v-container fluid>
    <v-row>
      <v-col cols="2" v-for="(list, index) in lists" :key="index">
        <div class="title-container" v-if="!list.isEditing">
          <h4 class="title" @dblclick="enableEditing(index)">{{ list.title }}:</h4>
          <v-menu class="menu">
            <template v-slot:activator="{ props }">
              <v-btn x-small color="transparent" elevation="0" size="25" icon="mdi-dots-horizontal" v-bind="props"></v-btn>
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
        <draggable v-model="list.items" :group="{ name: 'tasks' }">
          <v-card
            :style="{ background: 'linear-gradient(45deg, #ffc796, #de893e)'}"
            v-for="(item, itemIndex) in list.items"
            :key="itemIndex"
            class="mb-4 task"
          >
          <div class="title-container">
            <v-card-title v-if="!item.isEditing" @dblclick="editItem(index, itemIndex)">{{ item.title }}</v-card-title>
            <v-text-field v-else v-model="item.title" placeholder="Enter title" keyup.esc="cancelItemEditing(index, itemIndex)" @keyup.enter="disableItemEditing(index, itemIndex)" autofocus></v-text-field>
            <v-menu class="menu">
              <template v-slot:activator="{ props }">
                <v-btn v-if="!item.isEditing" class="hover-btn" x-small color="transparent" elevation="0" size="25" icon="mdi-pencil" v-bind="props"></v-btn>
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
          </div>
          <div class="title-container">
            <v-card-text v-if="!item.isEditing" @dblclick="editItem(index, itemIndex)">{{ item.description }}</v-card-text>
            <v-text-field v-else v-model="item.description" placeholder="Enter description" @keyup.enter="disableItemEditing(index, itemIndex)" @keyup.esc="cancelItemEditing(index, itemIndex)" autofocus>
            </v-text-field> 
          </div> 
            <div class="edit-btns" v-if="item.isEditing"> 
              <v-btn @click="disableItemEditing(index, itemIndex)">Save</v-btn>
              <v-btn @click="cancelItemEditing(index, itemIndex)"><v-icon>mdi-close</v-icon></v-btn>
            </div>
        </v-card>
        </draggable>
        <div v-if="list.isAddingTask">
          <v-text-field 
            v-model="list.newTaskTitle" 
            @keyup.enter="addTask(index)" 
            @keyup.esc="cancelAddTask(index)" 
            placeholder="Title" 
            autofocus>
          </v-text-field>
          <v-text-field 
            v-model="list.description" 
            @keyup.enter="addTask(index)" 
            @keyup.esc="cancelAddTask(index)" 
            placeholder="Description" 
            autofocus>
          </v-text-field>
          <div class="edit-btns">
            <v-btn @click="addTask(index)">Add Card</v-btn>
            <v-btn @click="cancelAddTask(index)"><v-icon>mdi-close</v-icon></v-btn>
          </div>
        </div>
        <v-btn color="transparent" class="task" v-else @click="enableAddTask(index)">
          <v-icon>mdi-plus</v-icon>
          Add Task
        </v-btn>
      </v-col>
      <div class="newTask">
        <v-btn large color="transparent" @click="addList">
          <v-icon>mdi-plus</v-icon>
          Add New List
        </v-btn>
      </div>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { VueDraggableNext } from 'vue-draggable-next'
export default defineComponent({
  components: {
    draggable: VueDraggableNext,
  },
  data() {
    return {
      lists: [
      { title: 'Todo', items: [], isEditing: false, isAddingTask: false},
      { title: 'In Progress', items: [], isEditing: false, isAddingTask: false},
      { title: 'Done', items: [], isEditing: false, isAddingTask: false},
      ],
    }
  },
  methods: {
    addTask(index) {
      this.lists[index].items.push({ 
        title: this.lists[index].newTaskTitle, 
        description: this.lists[index].description 
      });
      this.lists[index].newTaskTitle = '';
      this.lists[index].description = '';
      this.cancelAddTask(index);
    },
    cancelAddTask(listIndex) {
      this.lists[listIndex].isAddingTask = false;
      this.lists[listIndex].description = '';
    },
    enableAddTask(listIndex) {
      this.lists[listIndex].isAddingTask = true;
    },
    editItem(listIndex, itemIndex) {
      this.lists[listIndex].items[itemIndex].originalDescription = this.lists[listIndex].items[itemIndex].description;
      this.lists[listIndex].items[itemIndex].originalTitle = this.lists[listIndex].items[itemIndex].title;
      this.lists[listIndex].items[itemIndex].isEditing = true;
    },
    deleteItem(listIndex, itemIndex) {
      this.lists[listIndex].items.splice(itemIndex, 1);
    },
    deleteList(index) {
      this.lists.splice(index, 1);
    },
    addList() {
      this.lists.push({ title: 'New Task', items: [] });
    },
    enableEditing(index) {
      this.lists[index].isEditing = true;
    },
    disableEditing(index) {
      this.lists[index].isEditing = false;
    },
    disableItemEditing(listIndex, itemIndex) {
      this.lists[listIndex].items[itemIndex].isEditing = false;
    },
    cancelItemEditing(listIndex, itemIndex) {
      this.lists[listIndex].items[itemIndex].description = this.lists[listIndex].items[itemIndex].originalDescription;
      this.lists[listIndex].items[itemIndex].title = this.lists[listIndex].items[itemIndex].originalTitle;
      this.lists[listIndex].items[itemIndex].isEditing = false;
    },
  },
})
</script>