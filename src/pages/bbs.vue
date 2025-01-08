<template>
  <Panel title="런다운" class="ml-0">
    <div class="row">
      <div class="col-lg-12">
        <div class="card card-primary">
          <div class="card-header">
            <h3 class="card-title">검색바</h3>
          </div>
          <div class="card-body row">
            <div class="col-lg-4">
              <div class="input-group">
                <label>조회기간</label>
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
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="form-group">
                <label for="inputName">프로그램</label>
                <input type="text" id="inputName" class="form-control" />
              </div>
            </div>
            <div class="col-lg-4">
              <div class="form-group">
                <button class="btn btn-info btn-sm mr-2 mb-2">
                  자막템플릿변환
                </button>
                <button class="btn btn-info btn-sm mr-2 mb-2">
                  운영참조등록
                </button>
                <button class="btn btn-info btn-sm mr-2 mb-2">락해제</button>
                <button class="btn btn-info btn-sm mr-2 mb-2">
                  <i class="fas fa-copy"></i>
                  복사
                </button>
                <button class="btn btn-info btn-sm mr-2 mb-2">
                  <i class="fas fa-print"></i>
                  인쇄
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <ag-grid-vue
          :columnDefs="columnDefs"
          :modules="modules"
          :rowData="rowData"
          :groupHeaders="true"
          :defaultColDef="defaultColDef"
          class="ag-theme-alpine"
          style="flex: 1 1 auto; height: 240px"
        >
        </ag-grid-vue>
      </div>
    </div>

        <div class="row">
          <div class="col-md-3">
            <a href="mailbox.html" class="btn btn-primary btn-block mb-3">영상 그래픽</a>

            <div class="card">
              <div class="card-header">
                <h3 class="card-title">미디어목록</h3>

                <div class="card-tools">
                  <button type="button" class="btn btn-tool" data-card-widget="collapse">
                    <i class="fas fa-minus"></i>
                  </button>
                </div>
              </div>
              <div class="card-body p-0">
                <ul class="nav nav-pills flex-column">
                  <li class="nav-item active">
                    <a href="#" class="nav-link">
                      <i class="fas fa-newspaper"></i> 기사
                      <span class="badge bg-primary float-right">12</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="fas fa-video"></i> 동영상
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="fas fa-image"></i> 이미지
                      <span class="badge bg-warning float-right">65</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="far fa-plus"></i> 첨부
                    </a>
                  </li>
                </ul>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Labels</h3>

                <div class="card-tools">
                  <button type="button" class="btn btn-tool" data-card-widget="collapse">
                    <i class="fas fa-minus"></i>
                  </button>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body p-0">
                <ul class="nav nav-pills flex-column">
                  <li class="nav-item">
                    <a class="nav-link" href="#"><i class="far fa-circle text-danger"></i> 기사1</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#"><i class="far fa-circle text-warning"></i> 동영상1</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#"><i class="far fa-circle text-primary"></i> 기사2</a>
                  </li>
                </ul>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
          <!-- /.col -->
          <div class="col-md-9">
            <div class="card card-primary card-outline">
              <div class="card-header">
                <h3 class="card-title">상세 내용</h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <div class="form-group">
                  <input class="form-control" placeholder="제목">
                </div>
                <div class="form-group">
                  <input class="form-control" placeholder="제목">
                </div>
                <div class="form-group">
                    <textarea id="compose-textarea" class="form-control" style="height: 300px">
                      <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain
                        was born and I will give you a complete account of the system, and expound the actual teachings
                        of the great explorer of the truth, the master-builder of human happiness. No one rejects,
                        dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know
                        how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again
                        is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain,
                        but because occasionally circumstances occur in which toil and pain can procure him some great
                        pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise,
                        except to obtain some advantage from it? But who has any right to find fault with a man who
                        chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that
                        produces no resultant pleasure? On the other hand, we denounce with righteous indignation and
                        dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so
                        blinded by desire, that they cannot foresee</p>
                      <ul>
                        <li>List item one</li>
                        <li>List item two</li>
                        <li>List item three</li>
                        <li>List item four</li>
                      </ul>
                      <p>Thank you,</p>
                      <p>John Doe</p>
                    </textarea>
                </div>
                <div class="form-group">
                  <div class="btn btn-default btn-file">
                    <i class="fas fa-paperclip"></i> Attachment
                    <input type="file" name="attachment">
                  </div>
                  <p class="help-block">Max. 32MB</p>
                </div>
              </div>
              <!-- /.card-body -->
              <div class="card-footer">
                <div class="float-right">
                  <button type="button" class="btn btn-default"><i class="fas fa-pencil-alt"></i> 임시저장</button>
                  <button type="submit" class="btn btn-primary"><i class="far fa-save"></i> 저장</button>
                </div>
                <button type="reset" class="btn btn-default"><i class="fas fa-times"></i>취소</button>
              </div>
              <!-- /.card-footer -->
            </div>
            <!-- /.card -->
          </div>
          <!-- /.col -->
        </div>        

</Panel>
</template>
<script setup lang="ts">

import { ref } from "vue";
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-alpine.css";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { AgGridVue } from "@ag-grid-community/vue3";


const modules = ref([ClientSideRowModelModule]);

const defaultColDef = {
  flex: 1,
};

</script>
