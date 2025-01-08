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

                                    <div class="col-2">
                                        <div class="input-group align-items-center ">
                                            접속&ensp;
                                            <div class="row">
                                                <div class="col-12">
                                                    <select class="form-select form-select-sm "
                                                        aria-label="Default select example">
                                                        <option selected>CS</option>

                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-1">
                                        <div class="input-group align-items-center">
                                            IP&ensp;
                                            <input type="text"
                                                class="form-control form-control-sm  datetimepicker-input "
                                                data-target="#reservationdate" />

                                        </div>
                                    </div>


                                    <div class="col-4">
                                        <div class="input-group align-items-center">
                                            사용자&ensp;
                                            <div class="col-3">
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


                                    <div class="col-1">
                                        <div class="button-group  float-right">
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

                { field: "id", headerName: "ID", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 200 },
                { field: "name", headerName: "이름", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 200 },
                { field: "division", headerName: "구분", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 200 },
                { field: "date", headerName: "일시", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, minWidth: 300, maxWidth: 400 },
                { field: "ip", headerName: "IP", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 200 },
                { field: "maddress", headerName: "Mac Address", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, minWidth: 300, maxWidth: 400 },
                { field: "apath", headerName: "접속경로", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 200 },
                { field: "version", headerName: "버전", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 200 },



                // ...
            ],
            rowData: [
                { no: "1", select: "", id: "000001", name: "정하윤", division: "로그인", date: "24-08-13 12:23:22", ip: "192.0.168.0", maddress: "00-C0-9F-A1-9D-4A", apath: "CS", version: "1.0" },
                { no: "2", select: "", id: "000002", name: "정홍기", division: "로그인", date: "24-08-13 12:23:22", ip: "192.0.168.0", maddress: "00-C0-9F-A1-9D-4A", apath: "CS", version: "1.0" },
                { no: "3", select: "", id: "000003", name: "정보리", division: "로그인", date: "24-08-13 12:23:22", ip: "192.0.168.0", maddress: "00-C0-9F-A1-9D-4A", apath: "CS", version: "1.0" },
                { no: "4", select: "", id: "000004", name: "정호두", division: "로그아웃", date: "24-08-13 12:23:22", ip: "192.0.168.0", maddress: "", apath: "WEB", version: "1.0" },
                { no: "5", select: "", id: "000005", name: "정안나", division: "로그인", date: "24-08-13 12:23:22", ip: "192.0.168.0", maddress: "00-C0-9F-A1-9D-4A", apath: "CS", version: "1.0" },


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