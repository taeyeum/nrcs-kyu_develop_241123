<template>
  <Panel title="부조정실 일정">
    <div class="row">
      <div class="col-lg-12">
        <div class="card card-primary" style="height:800px;">
          <div class="card-header">
            <h3 class="card-title">검색바</h3>
          </div>
 
       
          <div class="card-body row">
            <div class="col-lg-5">
              <div class="form-group"> 
                <div class="row">                  
                  <div class="col-5">
                    <div class="form-check-inline">               
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                      <label class="form-check-label" for="flexRadioDefault1">
                        전체
                      </label>
                    </div>
                    <div class="form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                      <label class="form-check-label" for="flexRadioDefault2">
                        요청
                      </label>                  
                    </div>
                    <div class="form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" checked>
                      <label class="form-check-label" for="flexRadioDefault2">
                        배정완료
                      </label>                  
                    </div>
                  </div>

                  <div class="col-3 ml-n5 mt-n2">
                    <div class="dropdown">
                      <button class="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        전체
                      </button>
                      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3">
              <div class="input-group"> 
                <div class="row">                  
                  <div class="col-4">
                      <div
                      class="input-group date"
                      id="reservationdate"
                      data-target-input="nearest"
                      >
                      <input
                          type="text"
                          class="form-control datetimepicker-input"
                          data-target="#reservationdate"
                      />
                      <div
                          class="input-group-append"
                          data-target="#reservationdate"
                          data-toggle="datetimepicker"
                      >
                      <div class="input-group-text">
                      <i class="fa fa-calendar"></i>
                      </div>
                  </div>
                </div>
              </div>
              <div class="col-4">
                    <div
                    class="input-group date"
                    id="reservationdate"
                    data-target-input="nearest"
                    >
                    <input
                        type="text"
                        class="form-control datetimepicker-input"
                        data-target="#reservationdate"
                    />
                    <div
                        class="input-group-append"
                        data-target="#reservationdate"
                        data-toggle="datetimepicker"
                    >
                        <div class="input-group-text">
                        <i class="fa fa-calendar"></i>
                        </div>
                    </div>
                  </div>
                </div>

                <div class="col-3">
                      <button class="btn btn-info btn-sm mr-2 mb-2">
                          검색
                      </button>
                  </div>
                </div>
              </div>
            </div>
          
 

            <div class="col-lg-4">
              <div class="form-group">
                <button @click="() => openModal1()"  class="btn btn-info btn-sm mr-2 mb-2">
                  신규
                </button><ModalsContainer/>
                <button  @click="() => openModal1()" class="btn btn-info btn-sm mr-2 mb-2">
                  수정
                </button>
                <button class="btn btn-info btn-sm mr-2 mb-2">
                  삭제</button>
                <button @click="() => openModal2()" class="btn btn-info btn-sm mr-2 mb-2">               
                  배정
                </button><ModalsContainer/>
                <button class="btn btn-info btn-sm mr-2 mb-2">                
                  배정취소
                </button>               
                <button class="btn btn-info btn-sm mr-2 mb-2">                
                  인쇄
                </button>
              </div>
            </div>
          </div>
    
        
                <div class="row">
                <div class="col-lg-8">
                    <ag-grid-vue
                        :columnDefs="columnDefs"
                        :modules="modules"
                        :rowData="rowData"
                        :groupHeaders="true"
                        :defaultColDef="defaultColDef"
                        class="ag-theme-alpine"
                        style="flex: 1 1 auto; height: 670px; "
                    >
                    </ag-grid-vue>
                </div>
    
                <div class="col-md-4">
                    <div class="card card-primary card-outline" style="height:500px;">   
                        <div class="row">
                        <div class="col-11">
                            <div class="form-group mt-2 ml-2">
                              &ensp;부조정실&ensp;
                            <button class="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"
                        >
                                1부조정실
                            </button>                      
                            </div>
                        </div>
    
                        <div class="col-10">
                            <div class="input-group ml-5 mt-n2">
                            제목&ensp;
                            <input type="text" class="form-control form-control-sm " placeholder="하늘에서 본 적조 피해"  aria-describedby="basic-addon2"
                            style="">                               
                           </div>
                           
                        </div>
    
                        <div class="col-5">
                            <div class="input-group ml-3 mt-2">
                            방송예정&ensp;
                            <input type="time" class="form-control form-control-sm " placeholder="07:00:00"  aria-describedby="basic-addon2"
                            style="">                              
                                                        
                            </div>
                        </div>

                        <div class="col-5">
                            <div class="input-group ml-5 mt-2">
                            소요시간&ensp;
                            <input type="text" class="form-control form-control-sm " placeholder="1"  aria-describedby="basic-addon2"
                            style="">&ensp;시간                          
                                                        
                            </div>
                        </div>
                      </div>

                      <div class="row ">
                     
                        <div class="col-lg-6 mt-2 ml-4">
                      
                            <div class="input-group ">
                            &ensp;신청자&ensp;
                            <button class="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"
                                    >
                                    아무개
                                    </button>&ensp;
                            <input type="text" class="form-control form-control-sm" placeholder="정치부"  aria-describedby="basic-addon2">                        
                            </div>
                          </div>
                      </div>


                      <div class="row">
                        <div class="col-11">
                            <div class="input-group mt-2 ml-3">
                            방송내용&ensp;
                                <textarea id="compose-textarea" class="form-control" style="height: 100px">
                            
                                
                                </textarea>
                            </div>
                        </div>

                        <div class="col-11">
                            <div class="input-group mt-2 ml-3">
                                &ensp;&ensp;&ensp;&ensp;비고&ensp;
                                <textarea id="compose-textarea" class="form-control" style="height: 100px">
                            
                                
                                </textarea>
                            </div>
                        </div>

                        <div class="col-11">
                            <div class="input-group mt-2 ml-3">
                            배정내용&ensp;
                                <textarea id="compose-textarea" class="form-control">
                            
                                
                                </textarea>
                            </div>
                        </div>
                    <!-- /.card-body -->   
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Panel>
  </template>
  <script setup lang="ts">
  
  
  import { Panel } from "../../components";
  import { ref } from "vue";
  import "@ag-grid-community/styles/ag-grid.css";
  import "@ag-grid-community/styles/ag-theme-alpine.css";
  import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
  import { AgGridVue } from "@ag-grid-community/vue3";
  
  import CellComponentRenderer from "../../components/grid/CellComponentRenderer.vue";
  import CellComponentEditor from "../../components/grid/CellComponentEditor.vue";
  import DateComponent from "../../components/grid/DateComponent.vue";
  import HeaderGroupComponent from "../../components/grid/HeaderGroupComponent.vue";
  
  
  import { ModalsContainer, useModal } from 'vue-final-modal'
  import subconplan1 from '../../components/broad/subcon/subconplan1.vue'
  import subconplan2 from '../../components/broad/subcon/subconplan2.vue'

  const {open: openModal1} = useModal({
  component: subconplan1,
  attrs: {
    title: '부조정실일정 등록',
  },
  slots: {
    default: '<p>The content of the modal</p>',
  },
})
  
const {open: openModal2} = useModal({
  component: subconplan2,
  attrs: {
    title: '부조정실 배정',
  },
  slots: {
    default: '<p>The content of the modal</p>',
  },
})
   


  const modules = ref([ClientSideRowModelModule]);
  
  const defaultColDef = {
    flex: 1,
  };
  
  
  const columnDefs = ref([
    {
      headerName: "기본 헤더",
      headerGroupComponent: "HeaderGroupComponent",
      headerClass: "text-center",
      children: [
        { field: "no", headerName: "승인", cellStyle: { textAlign: "center" } },
        {
          field: "compilation",
          headerName: "구분",
          cellStyle: { textAlign: "center" },
          autoSizeStrategy: { type: "fitCellContents" },
        },
        {
          field: "program",
          headerName: "제목",
          minWidth: 250,
          maxWidth: 460,
          suppressSizeToFit: true,
        },
        {
          field: "broadcastDate",
          headerName: "기자",
          cellStyle: { textAlign: "center" },
          suppressSizeToFit: true,
        },
        {
          field: "startTime",
          headerName: "촬영",
          cellStyle: { textAlign: "center" },
          suppressSizeToFit: true,
        },
        {
          field: "endTime",
          headerName: "중계차",
          cellStyle: { textAlign: "center" },
          suppressSizeToFit: true,
        },
        {
          field: "studio",
          headerName: "M(촬영)",
          cellStyle: { textAlign: "center" },
          suppressSizeToFit: true,
        },
        {
          field: "control",
          headerName: "M(중계)",
          cellStyle: { textAlign: "center" },
          suppressSizeToFit: true,
        },
        {
          field: "article",
          headerName: "배차",
          cellStyle: { textAlign: "center" },
          suppressSizeToFit: true,
        },
        {
          field: "article",
          headerName: "콘텐츠",
          cellStyle: { textAlign: "center" },
          suppressSizeToFit: true,
        },
        {
          field: "broadcast",
          headerName: "기사",
          cellStyle: { textAlign: "center" },
          suppressSizeToFit: true,
        },
      ],
    },
  ]);
  
  const rowData = ref([
    {
      no: 10,
      compilation: "편집",
      program: "프로그램명1",
      broadcastDate: new Date(2000, 0, 1),
      startTime: "11:11",
      endTime: "12:11",
      studio: "스튜디오1",
      control: "2부조",
      article: 3,
      broadcast: "방송완료",
    },
    {
      no: 9,
      compilation: "편집",
      program: "프로그램명2",
      broadcastDate: new Date(2000, 0, 1),
      startTime: "11:11",
      endTime: "12:11",
      studio: "스튜디오1",
      control: "2부조",
      article: 3,
      broadcast: "방송완료",
    },
    {
      no: 8,
      compilation: "편집",
      program: "프로그램명3",
      broadcastDate: new Date(2000, 0, 1),
      startTime: "11:11",
      endTime: "12:11",
      studio: "스튜디오1",
      control: "2부조",
      article: 3,
      broadcast: "방송완료",
    },
    {
      no: 7,
      compilation: "편집",
      program: "프로그램명4",
      broadcastDate: new Date(2000, 0, 1),
      startTime: "11:11",
      endTime: "12:11",
      studio: "스튜디오1",
      control: "2부조",
      article: 3,
      broadcast: "방송완료",
    },
    {
      no: 6,
      compilation: "편집",
      program: "프로그램명5",
      broadcastDate: new Date(2000, 0, 1),
      startTime: "11:11",
      endTime: "12:11",
      studio: "스튜디오1",
      control: "2부조",
      article: 3,
      broadcast: "방송완료",
    },
    {
      no: 5,
      compilation: "편집",
      program: "프로그램명6",
      broadcastDate: new Date(2000, 0, 1),
      startTime: "11:11",
      endTime: "12:11",
      studio: "스튜디오1",
      control: "2부조",
      article: 3,
      broadcast: "방송완료",
    },
    {
      no: 4,
      compilation: "편집",
      program: "프로그램명7",
      broadcastDate: new Date(2000, 0, 1),
      startTime: "11:11",
      endTime: "12:11",
      studio: "스튜디오1",
      control: "2부조",
      article: 3,
      broadcast: "방송완료",
    },
    {
      no: 3,
      compilation: "편집",
      program: "프로그램명8",
      broadcastDate: new Date(2000, 0, 1),
      startTime: "11:11",
      endTime: "12:11",
      studio: "스튜디오1",
      control: "2부조",
      article: 3,
      broadcast: "방송완료",
    },
    {
      no: 2,
      compilation: "편집",
      program: "프로그램명9",
      broadcastDate: new Date(2000, 0, 1),
      startTime: "11:11",
      endTime: "12:11",
      studio: "스튜디오1",
      control: "2부조",
      article: 3,
      broadcast: "방송완료",
    },
    {
      no: 1,
      compilation: "편집",
      program: "프로그램명10",
      broadcastDate: new Date(2000, 0, 1),
      startTime: "11:11",
      endTime: "12:11",
      studio: "스튜디오1",
      control: "2부조",
      article: 3,
      broadcast: "방송완료",
    },
  ]);
  
  defineExpose({
    CellComponentRenderer,
    CellComponentEditor,
    agDateInput: DateComponent,
    HeaderGroupComponent,
  });
  
  
  
  </script>
  