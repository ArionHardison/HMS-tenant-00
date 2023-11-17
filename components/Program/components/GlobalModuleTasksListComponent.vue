<template>
  <div class="row">
      <template v-for="task in tasks">
        <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-2 mt-2">
          <GlobalModuleTask :task="task"/>
        </div>
      </template>
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
