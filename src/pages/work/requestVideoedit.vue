<template>
  
    <!-- Modal -->
<div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
        <h5 class="modal-title" id="exampleModalLabel">Modal Title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
       
    </div>
  </div>
</div>

</template>

<script>
export default {
  props: ['show'],
  emits: ['close'],

  data() {
    return {
      showModal: this.show,
    };
  },

  watch: {
    show(newValue) {
      this.showModal = newValue;
    },
  },

  methods: {
    closeModal() {
      this.$emit('close'); 
    },
  },
};
</script>