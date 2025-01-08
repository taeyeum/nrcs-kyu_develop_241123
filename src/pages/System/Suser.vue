<template>

    <div class="card mt-5" style="border-radius: 0%;  height:100%; overflow: hidden;">
        <div class="row">
            <div class="col-lg-12 ">

                <div class="card-header" style="height:50px; background-color: #828282; ">
                    <div class="row text-sm text-white">
                        <div class="col-lg-12 scrollable-div">

                            <div class="form-group">
                                <div class="row justify-content-start">

                                    <div class="col-3">
                                        <div class="input-group align-items-center">
                                            채널&ensp;
                                            <div class="row">
                                                <div class="col-12">
                                                    <select class="form-select form-select-sm "
                                                        aria-label="Default select example">
                                                        <option selected>MS</option>

                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-5 ml-n5">
                                        <div class="input-group align-items-center">
                                            사용자&ensp;
                                            <div class="row">
                                                <div class="col-8">
                                                    <input type="text"
                                                        class="form-control form-control-sm  datetimepicker-input "
                                                        data-target="#reservationdate" />
                                                </div>

                                                <div class="col-1">
                                                    <button class="btn btn-info btn-sm mx-1">
                                                        검색
                                                    </button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="col-3 ml-n5">
                                        <div class=" form-check form-check-inline text-white">
                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox3"
                                                value="option3">
                                            <label class="form-check-label" for="inlineCheckbox3">삭제데이터</label>
                                        </div>
                                    </div>

                                    <div class="col-1 ml-n5">
                                        <div class="button-group  ">
                                            <button type="button" class="btn btn-info btn-sm mr-2 mb-2"
                                                data-bs-toggle="modal" data-bs-target="#exampleModal1">
                                                신규
                                            </button>
                                            <ModalComponent />
                                            <button type="button" class="btn btn-info btn-sm mr-2 mb-2"
                                                data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                                수정
                                            </button>
                                            <ModalComponent2 />
                                            <button type="button" class="btn btn-info btn-sm mr-2 mb-2">
                                                삭제
                                            </button>
                                            <button type="button" class="btn btn-info btn-sm mr-2 mb-2">
                                                삭제취소
                                            </button>
                                            <button type="button" class="btn btn-info btn-sm mr-2 mb-2">
                                                인쇄
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="card-body p-0 m-0 text-sm">
                    <div class="row gx-1">

                        <div class="col-lg-8 ">
                            사용자 목록
                            <ag-grid-vue :columnDefs="columnDefs" :modules="modules" :rowData="rowData"
                                :groupHeaders="true" :defaultColDef="defaultColDef" @cellClicked="onCellClicked"
                                :headerHeight="28" :rowHeight="35" class="ag-theme-alpine"
                                style="flex: 1 1 auto; height: 720px; " @grid-ready="onGridReady">

                            </ag-grid-vue>

                            <div class="nav text-sm " style="display:flex; justify-content: center; ">
                                <nav aria-label="Page navigation example">
                                    <ul class="pagination">
                                        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                        <li class="page-item"><a class="page-link" href="#">Next</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>

                        <div class="col-lg-4  ml-n2 text-sm">
                            <div class="card " style="height:740px;">
                                <div class="row gx-1 mx-1 mt-3">
                                    <div class="col-lg-6">
                                        <div class="input-group ">
                                            &ensp;&ensp;&ensp;&ensp;채널&ensp;
                                            <input type="text"
                                                class="form-control form-control-sm  datetimepicker-input "
                                                data-target="#reservationdate" v-model="rinfos.chl">

                                        </div>
                                    </div>

                                    <div class="col-lg-6">
                                        <div class="input-group ">
                                            사용자ID&ensp;
                                            <select class="form-select form-select-sm "
                                                aria-label="Default select example" v-model="rinfos.id">
                                                <option selected>000001</option>
                                                <option selected>000002</option>
                                                <option selected>000003</option>
                                                <option selected>000004</option>
                                                <option selected>000005</option>

                                            </select>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 mt-2">
                                        <div class="input-group ">
                                            사용자명&ensp;
                                            <input type="text"
                                                class="form-control form-control-sm  datetimepicker-input "
                                                data-target="#reservationdate" v-model="rinfos.usernm">

                                        </div>
                                    </div>

                                    <div class="col-lg-6 mt-2">
                                        <div class="input-group ">
                                            비밀번호&ensp;
                                            <input type="text"
                                                class="form-control form-control-sm  datetimepicker-input "
                                                data-target="#reservationdate" />&ensp;
                                            <button type="button" class="btn btn-info btn-sm mr-2 mb-2">
                                                초기화
                                            </button>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 mt-2">
                                        <div class="input-group ">
                                            내선번호&ensp;
                                            <input type="text"
                                                class="form-control form-control-sm  datetimepicker-input "
                                                data-target="#reservationdate" />
                                        </div>
                                    </div>

                                    <div class="col-lg-6 mt-2">
                                        <div class="input-group ">
                                            휴대전화&ensp;

                                            <input type="text"
                                                class="form-control form-control-sm  datetimepicker-input "
                                                data-target="#reservationdate" />

                                        </div>
                                    </div>

                                    <div class="col-lg-12 mt-2">
                                        <div class="input-group ">
                                            &ensp;&ensp;이메일&ensp;

                                            <input type="text"
                                                class="form-control form-control-sm  datetimepicker-input "
                                                data-target="#reservationdate" />

                                        </div>
                                    </div>

                                    <div class="col-lg-12 mt-2">
                                        <div class="input-group ">
                                            &ensp;&ensp;&ensp;&ensp;비고&ensp;

                                            <input type="text"
                                                class="form-control form-control-sm  datetimepicker-input "
                                                data-target="#reservationdate" />
                                        </div>
                                    </div>

                                    <div class="col-lg-4 ml-5">
                                        <div class="form-check form-check-inline ">
                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox3"
                                                value="option3">
                                            <label class="form-check-label" for="inlineCheckbox3">C/S 사용</label>

                                        </div>
                                    </div>

                                    <div class="col-lg-4">
                                        <div class="form-check form-check-inline">

                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox3"
                                                value="option3">
                                            <label class="form-check-label" for="inlineCheckbox3">WEB 사용</label>


                                        </div>
                                    </div>

                                    <div class="col-lg-3">
                                        <div class="form-check form-check-inline">

                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox3"
                                                value="option3">
                                            <label class="form-check-label" for="inlineCheckbox3">Mobile 사용</label>


                                        </div>
                                    </div>

                                    <div class="col-lg-6 ml-5">
                                        <div class="form-check form-check-inline">

                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox3"
                                                value="option3">
                                            <label class="form-check-label" for="inlineCheckbox3">다음 로그인시 비밀번호
                                                변경</label>


                                        </div>
                                    </div>

                                    <div class="col-lg-6 ml-5">
                                        <div class="form-check form-check-inline">

                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox3"
                                                value="option3">
                                            <label class="form-check-label" for="inlineCheckbox3">다음 로그인시 SMS 인증</label>


                                        </div>
                                    </div>

                                    <div class="col-lg-12 mt-2">
                                        <div class="col-lg-12 mt-4">
                                            <button type="button" class="btn btn-info btn-sm mr-2 mb-2"
                                                data-bs-toggle="modal" data-bs-target="#exampleModal3">
                                                그룹변경
                                            </button>
                                            <ModalComponent3 />
                                            <button type="button" class="btn btn-info btn-sm mr-2 mb-2"
                                                data-bs-toggle="modal" data-bs-target="#exampleModal4">
                                                그룹복사
                                            </button>
                                            <ModalComponent4 />
                                        </div>
                                        <ag-grid-vue :columnDefs="columnDefs01" :modules="modules" :rowData="rowData01"
                                            :groupHeaders="true" :defaultColDef="defaultColDef"
                                            @cellClicked="onCellClicked" :headerHeight="25" :rowHeight="25"
                                            class="ag-theme-alpine" style="flex: 1 1 auto; height: 150px; "
                                            @grid-ready="onGridReady">
                                        </ag-grid-vue>
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


<script>


import { ref } from 'vue';
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-alpine.css";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { AgGridVue } from 'ag-grid-vue3';



import ModalComponent from "./SuserAdd.vue";
import ModalComponent2 from "./SuserCorrect.vue";
import ModalComponent3 from "./SgroupGchange.vue";
import ModalComponent4 from "./SgroupGcopy.vue";


export default {
    components: {
        AgGridVue,
        ModalComponent,
        ModalComponent2,
        ModalComponent3,
        ModalComponent4


    },



    data() {
        return {
            rinfos: '',

            columnDefs: [

                { field: "no", headerName: "순번", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 60 },
                { field: "chl", headerName: "채널", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 60 },
                { field: "id", headerName: "ID", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 120 },
                { field: "usernm", headerName: "사용자명", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 120 },
                { field: "group", headerName: "그룹수", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 120 },
                { field: "mgroup", headerName: "주그룹", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 200 },
                { field: "mdate", headerName: "수정일시", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 200 },
                { field: "modifier", headerName: "수정자", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 120 },
                { field: "cs", headerName: "C/S", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 60 },
                { field: "web", headerName: "WEB", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 100 },
                { field: "mobile", headerName: "Mobile", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 100 },



                // ...
            ],
            rowData: [
                { no: "1", chl: "MS", id: "000001", usernm: "정하윤", group: "4 ", mgroup: "편성운영부", mdate: "24-08-13 12:00:00", modifier: "정상호", cs: "V", web: "V", mobile: "V" },
                { no: "2", chl: "MS", id: "000002", usernm: "정호두", group: "4 ", mgroup: "편성운영부", mdate: "24-08-20 12:00:00", modifier: "정상호", cs: "V", web: "V", mobile: "V" },
                { no: "3", chl: "MS", id: "000003", usernm: "정보리", group: "4 ", mgroup: "편성운영부", mdate: "24-09-01 12:00:00", modifier: "정상호", cs: "", web: "V", mobile: "V" },
                { no: "4", chl: "MS", id: "000004", usernm: "정홍기", group: "4 ", mgroup: "편성운영부", mdate: "24-09-03 12:00:00", modifier: "정상호", cs: "V", web: "", mobile: "V" },
                { no: "5", chl: "MS", id: "000005", usernm: "정안나", group: "4 ", mgroup: "편성운영부", mdate: "24-10-12 12:00:00", modifier: "정상호", cs: "V", web: "V", mobile: "" },


            ],

            columnDefs01: [

                { field: "no", headerName: "순번", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 60 },
                { field: "groupnm", headerName: "그룹명", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: '' }, maxWidth: 200 },
                { field: "papproval", headerName: "가승인", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 110 },
                { field: "approval", headerName: "승인", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 110 },
                { field: "mgroup", headerName: "주그룹", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 110 },

                // ...
            ],
            rowData01: [
                { no: "1", groupnm: "편성운영부", papproval: "V", approval: "V", mgroup: "V", },
                { no: "2", groupnm: "뉴스팀", papproval: "", approval: "", mgroup: "", },
                { no: "3", groupnm: "편집1부", papproval: "V", approval: "V", mgroup: "V", },
                { no: "4", groupnm: "편집2부", papproval: "V", approval: "V", mgroup: "", },
                { no: "5", groupnm: "보두국게시", papproval: "V", approval: "", mgroup: "V", },
                { no: "6", groupnm: "당직인수인계", papproval: "V", approval: "V", mgroup: "", },
            ],


        }
    },



    methods: {
        onGridReady(params) {
            this.gridApi = params.api;
            this.gridColumnApi = params.columnApi;

        },
        onCellClicked(params) {


            console.log('params : ' + JSON.stringify(params.data));
            // 다른 input에 값 할당
            this.rinfos = params.data;


        }

    }
}




</script>



<style></style>