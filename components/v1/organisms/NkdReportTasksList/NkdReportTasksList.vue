<template>
  <div>
    <NkdReportTask
      v-for="task in tasks"
      :key="'task' + task.id"
      :task="task"
      :report="report"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import NkdReportTask from '@/components/v1/molecules/NkdReportTask/NkdReportTask.vue'

export default defineComponent({
  components: {
    NkdReportTask,
  },
  props: {
    tasks: {
      type: Array as PropType<Task[]>,
    },
    report: {
      type: Object,
    },
  },
  setup(_props, context) {
    return {}
  },
})
</script>
<style scoped></style>
