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
  <VueFinalModal
    class="modal modal-dialog-centered modal-content pt-5"
    content-class="mt-5 h-auto bg-white min-vw-90 mw-100 mh-100"
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
        <p>One fine body…fdfasdfasdfasdfadfadfafdasdfasdfasdfdfasdfasdfadfadfadfadfadffafds</p>
      <slot />
    </div>
    <div class="modal-footer justify-content-between">
      <button type="button" class="btn btn-default" data-dismiss="modal"  @click="emit('update:modelValue', false)">Close</button>
      <button type="button" class="btn btn-primary">Save changes</button>
    </div>
  </div>  
  </VueFinalModal>
</template>