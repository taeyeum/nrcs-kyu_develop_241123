<template>

    <div class="card mt-5" style="border-radius: 0%;  height:100%; overflow: hidden;">
        <div class="row">
            <div class="col-lg-12 ">

                <div class="card-header" style="height:50px; background-color: #828282; ">
                    <div class="row text-sm text-white">
                        <div class="col-lg-12 scrollable-div">

                            <div class="form-group">
                                <div class="row justify-content-start">

                                    <div class="col-4">
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



export default {
    components: {
        AgGridVue,

    },



    data() {
        return {
            gridApi: null,

            columnDefs: [


                { field: "no", headerName: "순번", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 60 },
                { field: "select", headerName: "선택", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 100 },
                { field: "sitenm", headerName: "사이트명", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, minWidth: 500, maxWidth: 700 },
                { field: "id", headerName: "아이디", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, minWidth: 500, maxWidth: 700 },
                { field: "password", headerName: "패스워드", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, minWidth: 300, maxWidth: 400 },
                { field: "chl", headerName: "채널", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 200 },
                { field: "sendyn", headerName: "전송여부", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 200 },



                // ...
            ],
            rowData: [
                { no: "1", select: "", sitenm: "twitter", id: "MStwitter", password: "1111 ", chl: "MS", sendyn: "전송함", },
                { no: "2", select: "", sitenm: "facebook", id: "MSfacebook", password: "2222 ", chl: "MS", sendyn: "전송안함", },
                { no: "3", select: "", sitenm: "twitter", id: "MStwitter", password: "1111 ", chl: "MS", sendyn: "전송함", },
                { no: "4", select: "", sitenm: "facebook", id: "MSfacebook", password: "2222 ", chl: "MS", sendyn: "전송안함", },
                { no: "5", select: "", sitenm: "twitter", id: "MStwitter", password: "1111 ", chl: "MS", sendyn: "전송함", },

            ],




        }
    },



    methods: {
        onGridReady(params) {
            this.gridApi = params.api;
            this.gridColumnApi = params.columnApi;

        },

        addRow() {
            const newRowData = {
            };
            this.gridApi.applyTransaction({ add: [newRowData] });
        }
    }
}




</script>



<style></style>