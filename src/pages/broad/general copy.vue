<template>
    <Panel title="종편실 기본일정">
      <div class="row">
        <div class="col-lg-12">
          <div class="card card-primary" style="height:800px;">
            <div class="card-header">
              <h3 class="card-title">검색바</h3>
            </div>
  
   
            <div class="card-body row">
              <div class="col-lg-9">
                <div class="input-group"> 
                  <div class="row">                  
                      <div class="col-5">
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
                    <div class="col-5">
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

                    <div class="col-2">
                        <button class="btn btn-info btn-sm mr-2 mb-2">
                            검색
                        </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-3">
                    <div class="form-group">
                    <button class="btn btn-info btn-sm mr-2 mb-2">
                        신규
                    </button>
                    <button  @click="() =>  openModal1()" class="btn btn-info btn-sm mr-2 mb-2">
                        수정
                    </button><ModalsContainer/>
                    <button class="btn btn-info btn-sm mr-2 mb-2">
                        삭제</button> 
                    <button  @click="() => openModal2()" class="btn btn-info btn-sm mr-2 mb-2">
                        배정</button><ModalsContainer/>                                 
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
                            <div class="form-group mt-2 ml-4">
                                &ensp;종편실&ensp;
                            <button class="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"
                        >
                                1종편실
                            </button>                      
                            </div>
                        </div>
    
                        <div class="col-10">
                            <div class="input-group ml-5 mt-n2">
                            제목&ensp;
                            <input type="text" class="form-control form-control-sm " placeholder="아침날씨 중계"  aria-describedby="basic-addon2"
                            style="">                               
                           </div>
                           
                        </div>
    
                        <div class="col-5">
                            <div class="input-group ml-3 mt-2">
                            예정시간&ensp;
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

                        <div class="col-11">
                    <div class="input-group ml-3 mt-2">
                     방송요일&ensp;
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

                        <div class="col-5">
                            <div class="input-group mt-2 ml-3">
                            시작일자&ensp;
                            <input type="date" class="form-control form-control-sm " placeholder="1"  aria-describedby="basic-addon2"
                            style="">
                            </div>
                        </div>

                        <div class="col-5">
                            <div class="input-group mt-2 ml-5">
                            종료일자&ensp;
                            <input type="date" class="form-control form-control-sm " placeholder="1"  aria-describedby="basic-addon2"
                            style="">
                          
                             </div>
                        </div>

                        <div class="col-11">
                            <div class="input-group ml-3 mt-2">
                            부조감독&ensp;
                            <input type="text" class="form-control form-control-sm " placeholder="아침날씨 중계"  aria-describedby="basic-addon2"
                            style="">                               
                           </div>
                           
                        </div>
                    </div>
                    <!-- /.card-body -->   
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
  import generalplan1 from '../../components/broad/general/generalplan1.vue'
  import generalplan2 from '../../components/broad/general/generalplan2.vue'

  const {open: openModal1} = useModal({
  component: generalplan1,
  attrs: {
    title: '종편실기본일정 등록',
  },
  slots: {
    default: '<p>The content of the modal</p>',
  },
})
  

const {open: openModal2} = useModal({
  component: generalplan2,

  attrs: {
    title: '종편실 배정', 
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
  