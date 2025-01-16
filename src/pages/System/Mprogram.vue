<template>

    <div class="card mt-5" style="border-radius: 0%;  height:100%; overflow: hidden;">
        <div class="row">
            <div class="col-lg-12 ">

                <div class="card-header" style="height:50px; background-color: #828282; ">
                    <div class="row text-sm text-white">
                        <div class="col-lg-12 scrollable-div">

                            <div class="form-group">
                                <div class="row justify-content-start">

                                    <div class="col-10">
                                        <div class="input-group ">
                                            <label class="mt-1">채널</label>&ensp;
                                            <div class="row">

                                                <div class="col-2">
                                                    <select class="form-select form-select-sm "
                                                        aria-label="Default select example">
                                                        <option selected>MS</option>

                                                    </select>
                                                </div>


                                                <div class="col-10">
                                                    <div class="input-group align-items-center">
                                                        프로그램명&ensp;
                                                        <div class="row">
                                                            <div class="col-5">
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

                                            </div>
                                        </div>
                                    </div>



                                    <div class="col-2">
                                        <div class="button-group  float-right">
                                            <button type="button" class="btn btn-info btn-sm mr-2 mb-2" @click="addRow">
                                                신규
                                            </button>
                                            <button type="button" class="btn btn-info btn-sm mr-2 mb-2">
                                                삭제
                                            </button>
                                            <button type="button" class="btn btn-info btn-sm mr-2 mb-2">
                                                저장
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


                <div class="card-body p-0 m-0 text-sm ">
                    <div class="row gx-1 ">

                        <div class="col-lg-2 text-center ">
                            <div class="card " style="height:770px;">
                                주메뉴
                                <ag-grid-vue ref="grid1" :columnDefs="columnDefs" :modules="modules" :rowData="rowData"
                                    :groupHeaders="true" :defaultColDef="defaultColDef" @cellClicked="onCellClicked"
                                    :headerHeight="28" :rowHeight="35" class="ag-theme-alpine"
                                    style="flex: 1 1 auto; height: 770px; " @grid-ready="onGridReady1">

                                </ag-grid-vue>
                            </div>
                        </div>

                        <div class="col-lg-2 text-center ">
                            <div class="card ml-n2" style="height:770px;">

                                그룹메뉴
                                <ag-grid-vue ref="grid2" :columnDefs="columnDefs01" :modules="modules"
                                    :rowData="rowData01" :groupHeaders="true" :defaultColDef="defaultColDef"
                                    @cellClicked="onCellClicked" :headerHeight="28" :rowHeight="35"
                                    class="ag-theme-alpine" style="flex: 1 1 auto; height: 770px; "
                                    @grid-ready="onGridReady2">

                                </ag-grid-vue>
                            </div>
                        </div>

                        <div class="col-lg-2 text-center ">
                            <div class="card ml-n2" style="height:770px;">
                                프로그램
                                <ag-grid-vue ref="grid3" :columnDefs="columnDefs02" :modules="modules"
                                    :rowData="rowData02" :groupHeaders="true" :defaultColDef="defaultColDef"
                                    @cellClicked="onCellClicked" :headerHeight="28" :rowHeight="35"
                                    class="ag-theme-alpine" style="flex: 1 1 auto; height: 740px; "
                                    @grid-ready="onGridReady3">

                                </ag-grid-vue>
                            </div>
                        </div>

                        <div class="col-lg-6 text-center ">
                            <div class="card ml-n2" style="height:770px;">
                                사용권한
                                <ag-grid-vue ref="grid4" :columnDefs="columnDefs03" :modules="modules"
                                    :rowData="rowData03" :groupHeaders="true" :defaultColDef="defaultColDef"
                                    @cellClicked="onCellClicked" :headerHeight="28" :rowHeight="35"
                                    class="ag-theme-alpine" style="flex: 1 1 auto; height: 740px; "
                                    @grid-ready="onGridReady4">

                                </ag-grid-vue>
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
import "ag-grid-community/styles/ag-theme-quartz.css";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { AgGridVue } from 'ag-grid-vue3';

import CustomButtonComponent from "../../pages/js/CustomButtonComponent.vue";


export default {
    components: {
        AgGridVue,
        CustomButtonComponent,
    },



    data() {
        return {
            gridApi1: null,
            gridApi2: null,
            gridApi3: null,
            gridApi4: null,

            columnDefs: [

                { field: "no", headerName: "순번", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 60 },
                { field: "id", headerName: "ID", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 60 },
                { field: "mmenunm", headerName: "주메뉴명", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'left' }, maxWidth: 200 },

                // ...
            ],
            rowData: [
                { no: "1", id: "01", mmenunm: "게시판", },
                { no: "2", id: "02", mmenunm: "이슈", },
                { no: "3", id: "03", mmenunm: "방송계획관리", },
                { no: "4", id: "04", mmenunm: "기사", },
                { no: "5", id: "05", mmenunm: "기사수신", },


            ],

            columnDefs01: [

                { field: "no", headerName: "순번", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 60 },
                { field: "id", headerName: "ID", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 60 },
                { field: "gmenunm", headerName: "그룹메뉴명", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'left' }, maxWidth: 200 },

                // ...
            ],
            rowData01: [
                { no: "1", id: "001", gmenunm: "그룹게시판", },
                { no: "2", id: "002", gmenunm: "미디어게시판", },
                { no: "3", id: "003", gmenunm: "마이페이지지", },
                { no: "4", id: "004", gmenunm: "", },
                { no: "5", id: "005", gmenunm: "", },

            ],

            columnDefs02: [

                { field: "no", headerName: "순번", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 60 },
                { field: "id", headerName: "ID", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 100 },
                { field: "grogramnm", headerName: "프로그램명", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'left' }, maxWidth: 150 },

                // ...
            ],
            rowData02: [
                { no: "1", id: "0101", grogramnm: "공지사항", },
                { no: "2", id: "0202", grogramnm: "전체게시", },
                { no: "3", id: "0303", grogramnm: "부서게시", },
                { no: "4", id: "0404", grogramnm: "", },
                { no: "5", id: "0505", grogramnm: "", },

            ],

            columnDefs03: [

                { field: "no", headerName: "순번", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 60 },
                { field: "id", headerName: "ID", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 120 },
                { field: "grogramnm", headerName: "권한명", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'left' }, maxWidth: 200 },
                {
                    field: "puse", headerName: "사용권한", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'left' }, minWidth: 300, maxWidth: 400,
                    cellRenderer: "CustomButtonComponent",
                },
                {
                    field: "papproval", headerName: "가승인", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 120, cellRenderer: params => {
                        const eInput = document.createElement('input');
                        eInput.type = 'checkbox';
                        eInput.checked = params.data.isChecked;
                        eInput.style.margin = '0 auto'; // 체크박스를 가운데 정렬
                        return eInput;

                    }
                },

                {
                    field: "approval", headerName: "승인", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 120, cellRenderer: params => {
                        const eInput = document.createElement('input');
                        eInput.type = 'checkbox';
                        eInput.checked = params.data.isChecked;
                        eInput.style.margin = '0 auto'; // 체크박스를 가운데 정렬
                        return eInput;

                    }
                },
                // ...
            ],
            rowData03: [
                { no: "1", id: "0101", grogramnm: "검색", puse: "전체" },
                { no: "2", id: "0202", grogramnm: "신규", puse: "전체" },
                { no: "3", id: "0303", grogramnm: "수정", puse: "전체" },
                { no: "4", id: "0404", grogramnm: "삭제", puse: "정치부,보도부,편성부" },
                { no: "5", id: "0505", grogramnm: "삭제취소", puse: "" },

            ],

        }
    },



    methods: {
        onGridReady1(params) {
            this.gridApi1 = params.api;
            this.gridColumnApi = params.columnApi;

        },
        onGridReady2(params) {
            this.gridApi2 = params.api;
            this.gridColumnApi = params.columnApi;

        },
        onGridReady3(params) {
            this.gridApi3 = params.api;
            this.gridColumnApi = params.columnApi;

        },
        onGridReady4(params) {
            this.gridApi4 = params.api;
            this.gridColumnApi = params.columnApi;

        },

        handleClick(params) {
            // 선택된 행의 데이터를 가져와 처리
            console.log('선택된 행:', params.data);
            // 예: 선택된 행 삭제
            this.$emit('removeRow', params.data);
        },

        addRow() {
            const newRowData = {


            };
            this.gridApi1.applyTransaction({ add: [newRowData] });
            this.gridApi2.applyTransaction({ add: [newRowData] });
            this.gridApi3.applyTransaction({ add: [newRowData] });
            this.gridApi4.applyTransaction({ add: [newRowData] });
        }
    },



}




</script>



<style></style>