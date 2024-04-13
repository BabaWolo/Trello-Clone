<template>
  <v-container fluid>
    <v-row>
      <v-col cols="2" v-for="(list, index) in lists" :key="index">
        <div v-if="!list.isEditing">
          <h2 @dblclick="enableEditing(index)">{{ list.title }}:</h2>
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn class="sub-menu-btn" icon="mdi-dots-horizontal" v-bind="props"></v-btn>
            </template>
            <v-list class="sub-menu">
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
        <draggable v-model="list.items" :group="{ name: 'board' }">
        <v-card
          v-for="(item, itemIndex) in list.items"
          :key="itemIndex"
          class="mb-4"
        >
          <v-card-title v-if="!item.isEditing" @dblclick="editItem(index, itemIndex)">{{ item.title }}</v-card-title>
          <v-text-field v-else v-model="item.title" @keyup.esc="cancelItemEditing(index, itemIndex)" @keyup.enter="disableItemEditing(index, itemIndex)" autofocus></v-text-field>
          <v-card-text v-if="!item.isEditing" @dblclick="editItem(index, itemIndex)">{{ item.description }}</v-card-text>
          <v-text-field v-else v-model="item.description" @keyup.enter="disableItemEditing(index, itemIndex)" @keyup.esc="cancelItemEditing(index, itemIndex)" autofocus>
          <v-btn @click="disableItemEditing(index, itemIndex)">Save</v-btn>
          <v-btn @click="cancelItemEditing(index, itemIndex)"><v-icon>mdi-close</v-icon></v-btn>
          </v-text-field>  
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
        </draggable>
        <div v-if="list.isAddingTask">
          <v-text-field v-model="list.description" @keyup.enter="addTask(index)" @keyup.esc="cancelAddTask(index)" autofocus></v-text-field>
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
import { defineComponent } from 'vue'
import { VueDraggableNext } from 'vue-draggable-next'
export default defineComponent({
  components: {
    draggable: VueDraggableNext,
  },
  data() {
    return {
      lists: [{ title: 'Todo', items: [{title: "New Task", description: ''}], isEditing: false, isAddingTask: false},
      { title: 'In Progress', items: [], isEditing: false, description: '', isAddingTask: false},
      { title: 'Done', items: [], isEditing: false, description: '', isAddingTask: false},
      // more tasks...
      ],
    }
  },
  methods: {
    addTask(listIndex, taskTitle) {
      this.lists[listIndex].items.push({title: taskTitle, description: this.lists[listIndex].description });
      this.lists[listIndex].isAddingTask = false;
      this.lists[listIndex].description = '';
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