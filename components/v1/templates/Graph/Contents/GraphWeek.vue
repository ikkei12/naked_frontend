<template>
  <div class="min-h-full tasks-group">
    <div class="epic-tasks__group ml-5 mb-5">
      <h2 class="text-xl mb-3 mt-2">今週</h2>
      <p v-if="week.length <= 0" class="pl-10">タスクはありません</p>
      <NkdGraphTaskItemsList
        v-else-if="week.length >= 1"
        :tasks="week"
        :graphType="'week'"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, inject } from '@vue/composition-api'
import NkdGraphTaskItemsList from '@/components/v1/organisms/NkdGraphTaskItemsList/NkdGraphTaskItemsList.vue'
import taskPageStoreKey from '@/components/v1/storeKeys/TaskPageStoreKey'
export default defineComponent({
  props: {
    week: {
      type: Array as PropType<Task[]>,
      required: false,
    },
  },
  components: {
    NkdGraphTaskItemsList,
  },
  setup(props, context) {
    const taskPageStore = inject(taskPageStoreKey)
    return { taskPageStore }
  },
})
</script>
<style scoped lang="scss">
.tasks-group__day {
  z-index: 10;
}

.tasks-group::after {
  content: '';
  height: 50px;
  display: block;
}
</style>
