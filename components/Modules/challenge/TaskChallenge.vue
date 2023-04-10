<template>
  <CheckboxField
    :key="`task-${challengeTask.result.id}`"
    v-model="challengeTask.result.task_finished"
    :disabled="!challengeTask.isCurrent"
    :name="`task-${challengeTask.id}`"
    @input="setResult(challengeTask.result.id)"
    >{{ challengeTask.task_name }}
  </CheckboxField>
</template>

<script>
import CheckboxField from "@/components/Forms/Fields/CheckboxField";

export default {
  name: "TaskChallenge",
  components: { CheckboxField },
  props: {
    taskDisabled: {
      type: Boolean,
      default: false,
    },
    challengeTask: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  methods: {
    setResult(taskId) {
      this.$emit("finish", {
        task: taskId,
      });
    },
  },
};
</script>

<style scoped></style>
