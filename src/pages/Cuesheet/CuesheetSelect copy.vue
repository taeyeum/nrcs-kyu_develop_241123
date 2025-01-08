

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
                                     
             <template v-if="rowData">
              <span> {{ rowData.program }} </span><br>
              <span> {{ rowData.date }} {{ rowData.stime }}~{{ rowData.etime }} </span>
            </template>

            </div>

            <div class="modal-footer justify-content-right">
               
                <router-link to="/Cuesheetcreate/{{rowData}} "><button type="button" class="btn btn-primary btn-sm" data-bs-dismiss="modal" >
                  작성
                </button></router-link>
                

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

import ChildComponent from './Cuesheetcreate.vue';

export default {
  
    components: {
      AgGridVue,
 ChildComponent

    },
  data() {
    return { 

     
     
      
     
    }
  },
  props: {     //부모 ag-grid-vue에서 받음
    rowData: String,
    show: {
      type: Boolean,
      required: true,
    },
    
  },

   methods: {
     Write() {
        this.$emit('Cuesheetcreate')
  }
}
   

    
  }


</script>