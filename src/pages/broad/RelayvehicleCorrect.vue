
<template>
    <!-- Modal -->
<div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-md text-black">
    <div class="modal-content ">
            <div class="modal-header">
              <h6 class="modal-title" id="exampleModalLabel">중계차기본일정 수정</h6>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            

            <div class="modal-body">
              <div class="row">
                <div class="col-lg-12">
                  
                    <div class="row mx-1">
                
                    <!-- /.card-header -->   
                
               
              
                    <div class="col-lg-5 mt-2">
                        <div class="input-group">
                          &ensp;&ensp;&ensp;&ensp;요청&ensp;     
                          <select class="form-select form-control-sm " aria-label="Default select example" >
                              <option selected></option>
                              
                            </select>                         
                        </div>
                      </div>

                      <div class="col-lg-3 mt-2">
                        <div class="form-check ">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" >
                          <label class="form-check-label" for="flexCheckDefault">
                            배차필요
                          </label>
                        </div>
                      </div>

                        <div class="col-lg-4 mt-2">
                          <div class="input-group">
                            <select class="form-select form-select-sm" aria-label="Default select example" >
                                  <option selected></option>
                                  
                                </select>     
                                
                          </div>
                        </div>

                        <div class="col-lg-12 mt-2">
                          <div class="input-group   ">
                            &ensp;&ensp;&ensp;&ensp;제목&ensp;
                            <input type="text" class="form-control form-control-sm " placeholder=""  aria-describedby="basic-addon2" >                               
                    
                                
                            
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="input-group mt-2">
                            예정시간&ensp;
                            <input type="time" class="form-control form-control-sm " aria-describedby="basic-addon2" v-model="currentTime">
                                           
                    
                          </div>
                      </div>
                      <div class="col-lg-6">
                          <div class="input-group  mt-2">
                            소요시간&ensp;
                            <input type="text" class="form-control form-control-sm " placeholder="1"  aria-describedby="basic-addon2"
                          style="">&ensp;&ensp;시간                          
                    
                       </div>
                    </div>

                    
                    <div class="col-lg-6">
                            <div class="input-group   mt-2">
                                귀사예정&ensp;
                                <input type="time" class="form-control form-control-sm "  aria-describedby="basic-addon2"
                            style="">                               
                        
                            </div>
                    </div>

                    <div class="col-lg-12">
                        <div class="input-group   mt-2">
                        중계요일&ensp;
                        <div class="form-check form-check-inline ml-2">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                            <label class="form-check-label" for="inlineCheckbox1">월</label>
                            </div>
                            <div class="form-check form-check-inline ml-2">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                            <label class="form-check-label" for="inlineCheckbox2">화</label>
                            </div>
                            <div class="form-check form-check-inline ml-2">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled>
                            <label class="form-check-label" for="inlineCheckbox3">수</label>
                            </div>
                            <div class="form-check form-check-inline ml-2">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                            <label class="form-check-label" for="inlineCheckbox1">목</label>
                            </div>
                            <div class="form-check form-check-inline ml-2">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                            <label class="form-check-label" for="inlineCheckbox2">금</label>
                            </div>
                            <div class="form-check form-check-inline ml-2">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled>
                            <label class="form-check-label" for="inlineCheckbox3">토</label>
                            </div>   
                            <div class="form-check form-check-inline ml-2">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled>
                            <label class="form-check-label text-red" for="inlineCheckbox3">일</label>
                            </div>   
                        </div>                  
                    </div>                 

                        <div class="col-lg-12">
                            <div class="input-group mt-2  ">
                                중계장소&ensp;
                                <input type="text" class="form-control form-control-sm " placeholder="숭례문"  aria-describedby="basic-addon2"
                                style="">                               
                            
                            </div>
                        </div>

                        <div class="col-lg-12">
                            <div class="input-group mt-2  ">
                                중계내용&ensp;
                                <textarea id="compose-textarea" class="form-control" rows="2">
                                
                                
                                </textarea>
                            </div>
                        </div>
                    
                        <div class="col-lg-12">
                            <div class="input-group mt-2  ">
                                &ensp;&ensp;&ensp;&ensp;비고&ensp;
                                <textarea id="compose-textarea" class="form-control" rows="2">
                                
                                
                                </textarea>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="input-group   mt-2">
                                시작일자&ensp;
                                <input type="time" class="form-control form-control-sm "  aria-describedby="basic-addon2"
                            style="">                               
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="input-group  mt-2">
                                종료일자&ensp;
                                <input type="time" class="form-control form-control-sm "  aria-describedby="basic-addon2"
                            style="">                               
                            </div>
                        </div>

                        <div class="col-lg-12">
                                    <div class="input-group   mt-2">
                                    중계차량&ensp;
                                    <select class="form-select form-select-sm" aria-label="Default select example" >
                                  <option selected>OVAN</option>
                                 
                                </select>                     
                                </div>
                            </div>

                            <div class="col-lg-12">
                            <div class="input-group   mt-2">
                                중계감독&ensp;
                                <input type="text" class="form-control form-control-sm " placeholder=""  aria-describedby="basic-addon2"
                                style="">                               
                            
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="input-group   mt-2">
                                중계요원&ensp;
                                <input type="text" class="form-control form-control-sm " placeholder=""  aria-describedby="basic-addon2"
                                style="">                               
                            
                            </div>
                        </div>
                   

                  
                      <div class="col-lg-12 mt-2">
                        <div class="modal-footer  justify-content-right">
                          <div class="form-check ">
                              <input class="form-check-input mt-0" type="checkbox" value="" id="flexCheckDefault"
                              style="width:20px;height:20px; "> &ensp;   
                              <label class="form-check-label" for="flexCheckDefault">
                                  배정/배차시SMS수신 &ensp;                                   
                              </label>
                          </div>

                    
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
   

  },


}
</script>
  
<style>

</style>