

<template>
  
    <!-- Modal -->
<div class="modal fade " id="exampleModal6" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" :show="show" @hidden="$emit('close')">
  <div class="modal-dialog modal-md text-black">
    <div class="modal-content">
            <div class="modal-header">
              <h6 class="modal-title" id="exampleModalLabel">선택</h6>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

                       
            <div class="modal-body " style="height:130px; color:black;">
                                     
             <template v-if="infos">
              <span> {{ infos.program }} </span><br>
              <span> {{ infos.date }} {{ infos.stime }}~{{ infos.etime }} </span>
            </template>

            </div>

            <div class="modal-footer justify-content-right">
               
               <button type="button" class="btn btn-primary btn-sm" data-bs-dismiss="modal" @click="Write">
                  작성
                </button> 
                

                 <button type="button" class="btn btn-primary btn-sm">조회</button>
                  <button type="button" class="btn btn-primary btn-sm">영상정보</button>
                  <button type="button" class="btn btn-secondary btn-sm " data-bs-dismiss="modal"
                >취소</button>
            </div>
           
         
        </div> 
     </div>
  </div>


</template>



<script>


import {ref } from 'vue';
import {ClientSideRowModelModule} from "@ag-grid-community/client-side-row-model";
import { AgGridVue } from 'ag-grid-vue3';

 
export default {
  
    components: {
      AgGridVue, 
    },
 
  props: {     //부모 ag-grid-vue에서 받음
    infos: [],
    show: {
      type: Boolean,
      required: true,
    },
    
  }, data() {
    return { 
 
     rinfos:this.infos
     
      
     
    }
  },

  methods: {
    
    Write() {

      console.log('close=====1'+ JSON.stringify(this.rinfos))    
      this.$emit('childEvent', this.rinfos)
       
      this.$emit('close') 
      
     }
}
   

    
  }


</script>