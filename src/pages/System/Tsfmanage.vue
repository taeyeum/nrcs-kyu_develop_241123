<template>

    <div class="card mt-5" style="border-radius: 0%;  height:100%; overflow: hidden;">
        <div class="row">
            <div class="col-lg-12 ">

                <div class="card-header" style="height:50px; background-color: #828282; ">
                    <div class="row text-sm text-white">
                        <div class="col-lg-12 scrollable-div">

                            <div class="form-group">
                                <div class="row justify-content-start">

                                    <div class="col-2">
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

                                    <div class="col-8">
                                        <div class="input-group align-items-center">
                                            구분&ensp;
                                            <div class="row">
                                                <div class="col-12">
                                                    <select class="form-select form-select-sm "
                                                        aria-label="Default select example">
                                                        <option selected>전체</option>

                                                    </select>
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
                                                저장
                                            </button>

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

                        <div class="col-lg-12">
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


export default {
    components: {
        AgGridVue,


    },



    data() {
        return {
            rinfos: '',
            gridApi: null,


            columnDefs: [

                { field: "no", headerName: "순번", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 60 },
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
                { field: "form", headerName: "형식", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: '' }, minWidth: 300, maxWidth: 400 },
                { field: "detail", headerName: "내용", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: '' }, minWidth: 700, maxWidth: 800 },
                { field: "charactno", headerName: "글자수", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 200 },
                { field: "linenno", headerName: "라인수", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 200 },
                { field: "division", headerName: "구분", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 200 },
                { field: "order", headerName: "순서", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 120 },


                // ...
            ],
            rowData: [
                { no: "1", select: "선택", form: "sc 주요뉴스", detail: "이시각 주요뉴스", charactno: "40 ", linenno: "01", division: "스크롤", order: "01" },
                { no: "2", select: "선택", form: "sc 특보", detail: "뉴스특보", charactno: "40 ", linenno: "01", division: "스크롤", order: "02" },
                { no: "3", select: "선택", form: "sc 경제", detail: "경제뉴스", charactno: "40 ", linenno: "01", division: "스크롤", order: "03" },
                { no: "4", select: "선택", form: "sc 문화", detail: "문화뉴스", charactno: "40 ", linenno: "01", division: "스크롤", order: "04" },
                { no: "5", select: "선택", form: "sc 스포츠", detail: "스포츠 뉴스", charactno: "40 ", linenno: "01", division: "스크롤", order: "05" },


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


        },
        addRow() {
            const newRowData = {
                no: "", select: "선택", form: "", detail: "", charactno: " ", linenno: "", division: "", order: ""

            };
            this.gridApi.applyTransaction({ add: [newRowData] });
        }
    }
}




</script>



<style></style>