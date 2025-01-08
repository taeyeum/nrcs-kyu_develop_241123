<template>
  <Panel title="중계차 기본일정">
    <div class="row">
      <div class="col-lg-12">
        <div class="card card-primary" style="height:800px;">
          <div class="card-header">
            <h3 class="card-title">검색바</h3>
          </div>
 
          <div class="card-body row">
            <div class="col-lg-4">
              <div class="form-group"> 
                <div class="row">                  
                  <div class="col-lg-7">
                    <div class="dropdown">
                      구분
                      <select class="form-select" aria-label="Default select example " style="width:120px;" >
                                  <option selected>전체</option>
                                  
                                </select>     
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="input-group"> 
                <div class="row">     
                  <div class="col-lg-2">     
                  중계<br>
                  예정일
                  </div>                  
                  <div class="col-lg-4">
                      <input
                          type="date"
                          class="form-control datetimepicker-input"
                          data-target="#reservationdate"
                      />
                  </div>
                  <div class="col-lg-4">
                    
                    <input
                        type="date"
                        class="form-control datetimepicker-input"
                        data-target="#reservationdate"
                    />
                  
                   </div>
               
                  <div class="col-lg-2">
                            <button class="btn btn-info btn-sm ">
                                검색
                            </button>
                  </div>
                </div>
              </div>
            </div>
         

            <div class="col-lg-2">
              <div class="form-group just">
                <button @click="() => openModal1()"  class="btn btn-info btn-sm mr-2 mb-2">
                  신규
                </button><ModalsContainer/>
                <button  @click="() => openModal1()" class="btn btn-info btn-sm mr-2 mb-2">
                  수정
                </button>
                <button class="btn btn-info btn-sm mr-2 mb-2">
                  삭제</button>              
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

       
            <div class="col-lg-4">
                <div class="card card-primary card-outline" style="height:670px;">
                  <div class="row text-sm mx-1">
              
                    <!-- /.card-header -->   
                     
                          <div class="col-lg-5">
                            <div class="form-group mt-2">
                              요청
                              <select class="form-select" aria-label="Default select example" style="width:100px;">
                                  <option selected>중계자</option>
                                  
                                </select>                         
                          </div>
                        </div>

                        <div class="col-lg-4">
                          <div class="form-check mt-2">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="flexCheckDefault">
                              배차필요
                            </label>
                          </div>
                        </div>

                        <div class="col-lg-3">
                          <div class="dropdown mt-2">
                            <select class="form-select" aria-label="Default select example"  style="width:50px;">
                                  <option selected>1</option>
                                  
                                </select>     &ensp;대&ensp;
                              <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                              </ul>
                          </div>
                        </div>
                    </div>

                    <div class="row text-sm mx-1">
                        <div class="col-lg-12">
                          <div class="input-group mt-n2">
                          제목&ensp;
                            <input type="text" class="form-control form-control-sm " placeholder="아침날씨중계"  aria-describedby="basic-addon2"
                          style="">                               
                                
                            
                          </div>
                        </div>

                        <div class="col-lg-6">
                          <div class="input-group mt-2">
                            예정시간&ensp;
                            <input type="time" class="form-control form-control-sm " aria-describedby="basic-addon2"
                          style="">                               
                    
                          </div>
                       </div>
                       <div class="col-lg-6">
                          <div class="input-group mt-2">
                            소요시간&ensp;
                            <input type="text" class="form-control form-control-sm " placeholder="1"  aria-describedby="basic-addon2"
                          style="">     시간                          
                    
                         </div>
                      </div>

                  </div>

                  <div class="row text-sm mx-1">


                    <div class="col-lg-6">
                            <div class="input-group  mt-2">
                              귀사예정&ensp;
                              <input type="time" class="form-control form-control-sm "  aria-describedby="basic-addon2"
                            style="">                               
                      
                          </div>
                    </div>
                  </div>

                  <div class="row text-sm mx-1">

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
                </div>

                 <div class="row text-sm mx-1">
                  <div class="col-lg-12">
                      <div class="input-group mt-2  ">
                        중계장소&ensp;
                        <input type="text" class="form-control form-control-sm " placeholder="숭례문"  aria-describedby="basic-addon2"
                          >                               
                    
                      </div>
                  </div>

                  <div class="col-lg-12">
                      <div class="input-group mt-2  ">
                        중계내용&ensp;
                          <textarea id="compose-textarea" class="form-control" style="height: 50px">
                        
                          
                          </textarea>
                      </div>
                  </div>
            
                  <div class="col-lg-12">
                      <div class="input-group mt-2  ">
                       비고&ensp;
                          <textarea id="compose-textarea" class="form-control" style="height: 50px">
                        
                          
                          </textarea>
                      </div>
                  </div>
                  
                  <div class="col-lg-5">
                      <div class="input-group   mt-2">
                        시작일자&ensp;
                        <input type="time" class="form-control form-control-sm "  aria-describedby="basic-addon2"
                      style="">                               
                      </div>
                   </div>

                   <div class="col-lg-5">
                      <div class="input-group   mt-2">
                        종료일자&ensp;
                        <input type="time" class="form-control form-control-sm "  aria-describedby="basic-addon2"
                      style="">                               
                      </div>
                   </div>

                   <div class="col-lg-10">
                            <div class="form-group   mt-2">
                              중계차량&ensp;
                              <select class="form-select" aria-label="Default select example" style="width:120px;">
                                  <option selected>OVAN</option>
                                  
                                </select>                      
                          </div>
                    </div>

                    <div class="col-lg-12">
                      <div class="input-group   mt-n2">
                        중계감독&ensp;
                        <input type="text" class="form-control form-control-sm " placeholder="김감독"  aria-describedby="basic-addon2"
                          style="">                               
                    
                      </div>
                  </div>
                  <div class="col-lg-12">
                      <div class="input-group   mt-2">
                        중계요원&ensp;
                        <input type="text" class="form-control form-control-sm " placeholder="아무개1,아무개2,아무개3"  aria-describedby="basic-addon2"
                          style="">                               
                    
                      </div>
                  </div>
                 
                   <div class="col-lg-12 " >
                          <div class="form-check mt-3 " style="text-align: right;" >
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="flexCheckDefault">
                              배정/배차시 SMS 수신
                            </label>
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