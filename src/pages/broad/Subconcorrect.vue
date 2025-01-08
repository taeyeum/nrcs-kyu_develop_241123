

<template>
  
    <!-- Modal -->
<div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog text-black">
    <div class="modal-content">
            <div class="modal-header">
              <h6 class="modal-title" id="exampleModalLabel">부조정실일정 수정</h6>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

                       
            <div class="modal-body">                                  
                    <div class="row mx-1">                
                    <!-- /.card-header -->   
              
                        <div class="col-lg-12">                     
                            <div class="input-group ">
                              부조정실&ensp;
                              <select class="form-select form-select-sm" aria-label="Default select example" >
                                  <option selected>1부조정실</option>
                                  
                                </select>                    
                            </div>
                        </div>
                    
                        <div class="col-lg-12 mt-2">
                            <div class="input-group  ">
                              &ensp;&ensp;&ensp;&ensp;제목&ensp;
                            <input type="text" class="form-control form-control-sm " placeholder="하늘에서 본 적조 피해"  aria-describedby="basic-addon2" 
                            style="">                               
                           </div>
                           
                        </div>
                    
                        <div class="col-lg-6">
                            <div class="input-group  mt-2">
                            방송예정&ensp;
                            <input type="time" class="form-control form-control-sm " placeholder="07:00:00"  aria-describedby="basic-addon2" v-model="currentTime">     
                                          
                                                        
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="input-group  mt-2">
                            소요시간&ensp;
                            <input type="text" class="form-control form-control-sm " placeholder="1"  aria-describedby="basic-addon2"
                            style="">&ensp;&ensp;시간                          
                                                        
                            </div>
                        </div>
                     
                     
                        <div class="col-lg-12 mt-2">
                      
                            <div class="input-group ">
                            &ensp;&ensp;신청자&ensp;
                             <select class="form-select form-select-sm" aria-label="Default select example" >
                                  <option selected></option>
                                  
                                </select> &ensp;    
                            <input type="text" class="form-control form-control-sm" placeholder="정치부"  aria-describedby="basic-addon2">                        
                            </div>
                          </div>
                     
                        <div class="col-lg-12">
                            <div class="input-group mt-2">
                            방송내용&ensp;
                                <textarea id="compose-textarea" class="form-control" >
                            
                                
                                </textarea>
                            </div>
                        </div>

                     
                        <div class="col-lg-12">
                            <div class="input-group mt-2 ">
                                &ensp;&ensp;&ensp;&ensp;비고&ensp;
                                <textarea id="compose-textarea" class="form-control" >
                            
                                
                                </textarea>
                            </div>
                        </div>

                        <div class="col-lg-12">
                            <div class="input-group mt-2 ">
                            배정내용&ensp;
                                <textarea id="compose-textarea" class="form-control">
                            
                                
                                </textarea>
                            </div>
                        </div>
                    
                        <div class="col-lg-12 mt-2">
                        <div class="modal-footer  justify-content-right">
                    
                           <div class="btn-group ">                            
                             <button class="btn btn-sm btn-primary text-toggle" type="button" data-bs-toggle="text" aria-expanded="false"
                             >
                             요청  
                             </button>  
                          </div>
                        
                          <div class="btn-group">    
                            <button type="button" class="btn btn-secondary btn-sm " data-bs-dismiss="modal"
                              >취소</button>
                          </div>
                        </div>
                     
                 
                     </div>     
                    </div>
                  </div>
                </div>
              </div>
            </div>
      
  </template>
  
 
<script >

import {ref} from 'vue';
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-alpine.css";
import {ClientSideRowModelModule} from "@ag-grid-community/client-side-row-model";
import { AgGridVue } from 'ag-grid-vue3';


import { ModalsContainer, useModal } from 'vue-final-modal'

export default {
  components: {
    AgGridVue
  },
  data() {
    return {
    
      currentTime: '',
       
    
   }
  },
  computed: {
    formattedTime() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      return `${hours}:${minutes}`;
    }
  },

   watch: {
    formattedTime(newValue) {
      this.currentTime = newValue;
    }
  },
  mounted() {
    this.currentTime = this.formattedTime;
  },
  methods: {
    onGridReady(params) {
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;
     
    },


  },


}
</script>
  
<style>

</style>
  
<style>

</style>