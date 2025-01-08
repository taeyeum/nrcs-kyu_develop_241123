<template>

    <div class="card mt-5" style="border-radius: 0%;  height:100%; overflow: hidden;">
        <div class="row">
            <div class="col-lg-12 ">

                <div class="card-header" style="height:50px; background-color: #828282; ">
                    <div class="row text-sm text-white">
                        <div class="col-lg-12 scrollable-div">

                            <div class="form-group">
                                <div class="row justify-content-start">

                                    <div class="col-5">
                                        <div class="input-group">
                                            <div class="row">
                                                <div class="col-5">
                                                    <input type="date"
                                                        class="form-control form-control-sm  datetimepicker-input "
                                                        data-target="#reservationdate" />
                                                </div>~
                                                <div class="col-5">
                                                    <input type="date"
                                                        class="form-control form-control-sm datetimepicker-input"
                                                        data-target="#reservationdate" />&ensp;
                                                </div>
                                            </div>

                                        </div>
                                    </div>


                                    <div class="col-5">
                                        <div class="input-group">
                                            <div class="row">
                                                <div class="col-4">
                                                    <select class="form-select form-select-sm"
                                                        aria-label="Default select example">
                                                        <option selected>전체</option>

                                                    </select>
                                                </div>

                                                <div class="col-6">
                                                    <input type="text"
                                                        class="form-control form-control-sm datetimepicker-input"
                                                        data-target="#reservationdate" />
                                                </div>
                                                <div class="col-2">
                                                    <button class="btn btn-info btn-sm mr-2 mb-2">
                                                        검색
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="col-2">
                                        <div class="button-group  float-right">
                                            <button type=" button" class="btn btn-info btn-sm mr-2 mb-2"
                                                data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                이동
                                            </button>
                                            <ModalComponent />

                                            <button type="button" class="btn btn-info btn-sm mr-2 mb-2">
                                                삭제
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
                        <div class="col-lg-2">
                            <div class="card" style="height:740px;">
                                <div class="container-fluid">
                                    <div class="tree mt-2 ">
                                        <ul>
                                            <li v-for="item in treeData" :key="item.id" @click="handleClick(item)">
                                                {{ item.label }}
                                                <ul v-if="item.children && item.children.length > 0"
                                                    style="margin-left: 20px;">
                                                    <li v-for="child in item.children" :key="child.id"
                                                        style="padding-top: 10px;">
                                                        <span class="node">{{ child.label }}</span>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>

                                </div>

                            </div>
                        </div>


                        <div class="col-lg-10 ml-n2">
                            <ag-grid-vue :columnDefs="columnDefs" :modules="modules" :rowData="rowData"
                                :groupHeaders="true" :defaultColDef="defaultColDef" @cellClicked="onCellClicked"
                                :headerHeight="28" :rowHeight="35" class="ag-theme-alpine"
                                style="flex: 1 1 auto; height: 740px; " @grid-ready="onGridReady">

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

import ModalComponent from "./AFmanageMove.vue";


export default {
    components: {
        AgGridVue,
        ModalComponent,

    },
    props: {
        treeData: {
            type: Array,
            required: true,
        },
    },


    data() {
        return {
            rinfos: '',

            columnDefs: [

                {
                    field: "select", headerName: "선택", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 100,
                    cellRenderer: params => {
                        const eInput = document.createElement('input');
                        eInput.type = 'checkbox';
                        eInput.checked = params.data.isChecked;
                        eInput.style.margin = '0 auto'; // 체크박스를 가운데 정렬
                        return eInput;
                    }
                },
                { field: "id", headerName: "아이디", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: '' }, maxWidth: 200 },
                { field: "registrant", headerName: "등록자", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: '' }, maxWidth: 200 },
                { field: "filenm", headerName: "파일명", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, minWidth: 670, maxWidth: 700 },
                { field: "filesize", headerName: "파일크기", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 200 },
                { field: "rdate", headerName: "등록일", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 200 },

                // ...
            ],
            rowData: [
                { select: "", id: "sprojeonct ", registrant: "정홍기", filenm: "Attach_file_loca.mp3", filesize: "234KB", rdate: "24-07-21 12:23:12" },
                { select: "", id: "jungyun", registrant: "정하윤", filenm: "Attach_file_loca.mp3", filesize: "222KB", rdate: "24-07-25 12:20:20" },
                { select: "", id: "jeong", registrant: "정호두", filenm: "Attach_file_loca.mp3", filesize: "335KB", rdate: "24-07-28 12:13:23" },
                { select: "", id: "marryt", registrant: "정안나", filenm: "Attach_file_loca.mp3", filesize: "534KB", rdate: "24-08-12 12:08:16" },
                { select: "", id: "pro", registrant: "정보리", filenm: "Attach_file_loca.mp3", filesize: "1234KB", rdate: "24-08-11 12:34:26" },
            ],
            treeData: [
                {
                    id: 1,
                    label: '사용자',
                    expanded: false,
                    children: [
                        { id: 2, label: 'sprojeonct 정홍기', expanded: false },
                        { id: 3, label: 'jungyun 정하윤', expanded: false },
                        { id: 4, label: 'jeong 정호두', expanded: false },
                        { id: 5, label: 'marryt 정안나', expanded: false },
                        { id: 6, label: 'pro 정보리', expanded: false },

                    ],
                },
                // ...
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