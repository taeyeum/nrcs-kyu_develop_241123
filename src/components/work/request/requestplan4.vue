<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal'


defineProps<{
  title?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', modelValue: boolean): void
}>()


</script>

<template>
   <VueFinalModal id="modal"
    class="flex justify-center items-center"
    content-class="flex flex-col p-4 bg-white dark:bg-black rounded border border-gray-100 dark:border-gray-800"
    style="height:300px;"
    @update:model-value="val => emit('update:modelValue', val)"
  >
   <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" v-if="title">{{ title }} 1</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="emit('update:modelValue', false)">
        <span aria-hidden="true">×</span>
        </button>
      </div>

      <div class="modal-body">
        <div class="input-group mt-4">
          <span class="input-group-date" id="basic-addon1">일자</span>&ensp;
          <input type="date" class="form-control form-control-sm" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
        </div>   
        <slot />
      </div>
      <div class="modal-footer justify-content-between">
        <button type="button" class="btn btn-default" data-dismiss="modal"  @click="emit('update:modelValue', false)">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>

  </VueFinalModal>
</template>

<style>

#modal{
  width:400px;
  height:auto;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10%;
  font-size: 12px;

}

#modal-content{
  width:400px;  
  height:auto;
}
</style>