<template>
  <div class="row">
    <div class="col-12">
      <template v-for="task in tasks">
        <GlobalModuleTask :task="task"/>
      </template>
    </div>
  </div>
</template>

<script>
import api from "@/mixins/api";
import GlobalModuleTask from "@/components/Program/components/GlobalModuleTask.vue";
export default {
  mixins: [api],
  name: "GlobalModuleTasksListComponent",
  components: {GlobalModuleTask},
  data(){
    return {
      tasks: null
    }
  },
  created() {
    this.getTasks();
  },
  methods: {
    async getTasks(){
      this.tasks = await this.get("personal-chain/global-tasks");
    }
  }
}
</script>

<style scoped>

</style>
