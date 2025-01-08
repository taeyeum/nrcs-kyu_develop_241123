<template>
    <Panel title="취재/제작일정">
      <div class="row">
        <div class="col-lg-12">
          <div class="card card-primary" style="height:800px;">
            <div class="card-header">
              <h3 class="card-title">검색바</h3>
            </div>
  
   
            <div class="card-body row">
              <div class="col-lg-3">
                <div class="input-group">                
                  <div class="row">
                    <div class="col-6">
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
                   
                    <div class="col-lg-4">
                      <div class="form-group">
                    <button class="btn btn-info btn-sm mr-2 mb-2">                 
                    오늘 
                  </button>
                  <button class="btn btn-info btn-sm mr-2 mb-2">         
                  <i class="fa-solid fa-greater-than"></i>
                  </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  
              <div class="col-lg-4">
                <div class="form-group">               
                  <div class="row">
                    <div class="col-3">
                      <button class="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"
                      style="width:100px;">
                          정치부
                      </button>
                    </div>
                    <div class="col-6">
                    <button class="btn btn-info btn-sm mr-2 mb-2">                 
                        월
                      </button>
                      <button class="btn btn-info btn-sm mr-2 mb-2">                 
                      주 
                    </button>
                    <button class="btn btn-info btn-sm mr-2 mb-2">                 
                      일
                    </button>
                    </div> 
                  </div>
                </div>
              </div>
  
              <div class="col-lg-5">
                <div class="form-group">
                  <button @click="() => openModal1()"  class="btn btn-info btn-sm mr-2 mb-2">
                    신규
                  </button>
                  <button class="btn btn-info btn-sm mr-2 mb-2">
                    수정
                  </button>
                  <button class="btn btn-info btn-sm mr-2 mb-2">
                    삭제</button>
                  <button class="btn btn-info btn-sm mr-2 mb-2">               
                    승인
                  </button>
                  <button class="btn btn-info btn-sm mr-2 mb-2">                
                    승인취소
                  </button>
                  <button  @click="() => openModal2()"  class="btn btn-info btn-sm mr-2 mb-2" >
                      콘텐츠계획화
                  </button><ModalsContainer/>
                  <button class="btn btn-info btn-sm mr-2 mb-2">                
                    기사작성
                  </button>
                  <button @click="() => openModal3()"  class="btn btn-info btn-sm mr-2 mb-2">                
                    기사맵핑
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
                <div class="card card-primary card-outline" style="height:300px;">
                  <div class="card-header">
                    <h3 class="card-title">근무자 현황 및 제작계획</h3>
                  </div>
                  <!-- /.card-header -->   
                  <div class="card-header">            
                    <div class="input-group">
                        <textarea id="compose-textarea" class="form-control" style="height: 180px">
                         
                        </textarea>
                    </div>
                    <div class="float-right mt-2">                  
                      <button type="submit" class="btn btn-sm btn-primary"><i class="far fa-save"></i> 저장</button>
                    </div>
                  </div>
                </div>   
                

                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">계획내용</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">배정</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">계획이력</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-abled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false" disabled>기사화</button>
                  </li>
                </ul>

                <div class="tab-content" id="pills-tabContent">
                  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">       
                    <div class="card card-primary card-outline" style="height:300px;">
                          <div class="row">
                            <div class="col-11">
                              <div class="form-group mt-2 ml-2">
                                계획구분&ensp;
                                <button class="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"
                            >
                                    출연
                                </button>                      
                            </div>
                          </div>
      
                          <div class="col-11">
                            <div class="input-group ml-4 mt-n2">
                            신청자&ensp;
                            <input type="text" class="form-control form-control-sm " placeholder="아무개"  aria-describedby="basic-addon2"
                            style="">                               
                              &ensp;
                            <input type="text" class="form-control form-control-sm" placeholder="정치부"  aria-describedby="basic-addon2">                        
                            </div>
                          </div>
      
                          <div class="col-11">
                            <div class="input-group ml-4 mt-2">
                              &ensp;&ensp;제목&ensp;
                              <input type="text" class="form-control form-control-sm " placeholder="노숙인"  aria-describedby="basic-addon2"
                            style="">                               
                                  
                              
                            </div>
                          </div>
                          <div class="col-11">
                            <div class="input-group mt-2 ml-4">
                              &ensp;&ensp;내용&ensp;
                                <textarea id="compose-textarea" class="form-control" style="height: 150px">
                              
                                
                                </textarea>
                            </div>
                          </div>
                        </div>
                     </div>
                    </div>
                  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">       
                    <div class="card card-primary card-outline" style="height:300px;">
                          <div class="row">
                            <div class="col-11">
                              <div class="form-group mt-2 ml-2">
                                계획구분&ensp;
                                <button class="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"
                            >
                                    출연
                                </button>                      
                            </div>
                          </div>
      
                          <div class="col-11">
                            <div class="input-group ml-4 mt-n2">
                            신청자&ensp;
                            <input type="text" class="form-control form-control-sm " placeholder="아무개"  aria-describedby="basic-addon2"
                            style="">                               
                              &ensp;
                            <input type="text" class="form-control form-control-sm" placeholder="정치부"  aria-describedby="basic-addon2">                        
                            </div>
                          </div>
      
                          <div class="col-11">
                            <div class="input-group ml-4 mt-2">
                              &ensp;&ensp;제목&ensp;
                              <input type="text" class="form-control form-control-sm " placeholder="노숙인"  aria-describedby="basic-addon2"
                            style="">                               
                                  
                              
                            </div>
                          </div>
                          <div class="col-11">
                            <div class="input-group mt-2 ml-4">
                              &ensp;&ensp;내용&ensp;
                                <textarea id="compose-textarea" class="form-control" style="height: 150px">
                              
                                
                                </textarea>
                            </div>
                          </div>
                        </div>
                     </div>
                    </div>
                  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">       <div class="card card-primary card-outline" style="height:300px;">
                          <div class="row">
                            <div class="col-11">
                              <div class="form-group mt-2 ml-2">
                                계획구분&ensp;
                                <button class="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"
                            >
                                    출연
                                </button>                      
                            </div>
                          </div>
      
                          <div class="col-11">
                            <div class="input-group ml-4 mt-n2">
                            신청자&ensp;
                            <input type="text" class="form-control form-control-sm " placeholder="아무개"  aria-describedby="basic-addon2"
                            style="">                               
                              &ensp;
                            <input type="text" class="form-control form-control-sm" placeholder="정치부"  aria-describedby="basic-addon2">                        
                            </div>
                          </div>
      
                          <div class="col-11">
                            <div class="input-group ml-4 mt-2">
                              &ensp;&ensp;제목&ensp;
                              <input type="text" class="form-control form-control-sm " placeholder="노숙인"  aria-describedby="basic-addon2"
                            style="">                               
                                  
                              
                            </div>
                          </div>
                          <div class="col-11">
                            <div class="input-group mt-2 ml-4">
                              &ensp;&ensp;내용&ensp;
                                <textarea id="compose-textarea" class="form-control" style="height: 150px">
                              
                                
                                </textarea>
                            </div>
                          </div>
                        </div>
                     </div>
                    </div>
                  <div class="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-abled-tab" tabindex="0">       <div class="card card-primary card-outline" style="height:300px;">
                          <div class="row">
                            <div class="col-11">
                              <div class="form-group mt-2 ml-2">
                                계획구분&ensp;
                                <button class="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"
                            >
                                    출연
                                </button>                      
                            </div>
                          </div>
      
                          <div class="col-11">
                            <div class="input-group ml-4 mt-n2">
                            신청자&ensp;
                            <input type="text" class="form-control form-control-sm " placeholder="아무개"  aria-describedby="basic-addon2"
                            style="">                               
                              &ensp;
                            <input type="text" class="form-control form-control-sm" placeholder="정치부"  aria-describedby="basic-addon2">                        
                            </div>
                          </div>
      
                          <div class="col-11">
                            <div class="input-group ml-4 mt-2">
                              &ensp;&ensp;제목&ensp;
                              <input type="text" class="form-control form-control-sm " placeholder="노숙인"  aria-describedby="basic-addon2"
                            style="">                               
                                  
                              
                            </div>
                          </div>
                          <div class="col-11">
                            <div class="input-group mt-2 ml-4">
                              &ensp;&ensp;내용&ensp;
                                <textarea id="compose-textarea" class="form-control" style="height: 150px">
                              
                                
                                </textarea>
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
  import contentplan1 from '../../components/broad/interView/contentplan1.vue'
  import contentplan2 from '../../components/broad/interView/contentplan2.vue'
  import contentplan3 from '../../components/broad/interView/contentplan3.vue'
  
    const { open: openModal1} = useModal({
    component: contentplan1,
  
    attrs: {
      title: '취재/제작계획일정 등록', 
    },
    slots: {
      default: '<p>The content of the modal</p>',
    },
    
  });
  
  const {open: openModal2} = useModal({
    component: contentplan2,
  
    attrs: {
      title: '콘텐츠계획화', 
    },
    slots: {
      default: '<p>The content of the modal</p>',
    },
    
  })
  
  
  const {open: openModal3} = useModal({
    component: contentplan3,
  
    attrs: {
      title: '기사맵핑', 
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
  