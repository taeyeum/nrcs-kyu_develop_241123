<template>

    <div class="card mt-5" style="border-radius: 0%;  height:100%; overflow: hidden;">
        <div class="row">
            <div class="col-lg-12 ">

                <div class="card-header" style="height:50px; background-color: #828282; ">
                    <div class="row text-sm text-white">
                        <div class="col-lg-12 scrollable-div">

                            <div class="form-group">
                                <div class="row justify-content-start">

                                    <div class="col-12">
                                        <div class="button-group  float-right">
                                            <button type="button" class="btn btn-info btn-sm mr-2 mb-2"
                                                data-bs-toggle="modal" data-bs-target="#exampleModal1">
                                                신규
                                            </button>
                                            <ModalComponent />
                                            <button type=" button" class="btn btn-info btn-sm mr-2 mb-2">
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
                        <div class="col-lg-2 ml-2 container">
                            <div class="card" style="height:740px;">

                                <div class="button-group mt-2 mx-3">
                                    <button type="button" class="btn btn-info btn-sm mr-2 mb-2" data-bs-toggle="modal"
                                        data-bs-target="#exampleModal2">
                                        등록
                                    </button>
                                    <ModalComponent2 />
                                    <button type="button" class="btn btn-info btn-sm mr-2 mb-2" data-bs-toggle="modal"
                                        data-bs-target="#exampleModal3">
                                        수정
                                    </button>
                                    <ModalComponent3 />
                                    <button type="button" class="btn btn-info btn-sm mr-2 mb-2">
                                        삭제
                                    </button>

                                </div>

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

                        <div class="col-lg-6 ml-n2">

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

                        <div class="col-lg-4  text-sm">
                            <div class="card ml-n2 " style="height:740px;">
                                <div class="row gx-1 mx-1 mt-3">
                                    <div class="col-lg-6">
                                        <div class="input-group ">
                                            코드그룹&ensp;
                                            <select class="form-select form-select-sm "
                                                aria-label="Default select example">
                                                <option selected>방송구분</option>

                                            </select>
                                        </div>
                                    </div>

                                    <div class="col-lg-12 mt-2">
                                        <div class="input-group ">
                                            &ensp;&ensp;코드명&ensp;
                                            <input type="text"
                                                class="form-control form-control-sm  datetimepicker-input "
                                                data-target="#reservationdate" v-model="rinfos.codenm">

                                        </div>
                                    </div>

                                    <div class="col-lg-12 mt-2 ml-5">
                                        <div class="form-check-inline ">
                                            &ensp;&ensp;<input class="form-check-input" type="radio"
                                                name="flexRadioDefault" id="flexRadioDefault1" checked>
                                            <label class="form-check-label" for="flexRadioDefault1">
                                                타입
                                            </label>&ensp;&ensp;

                                            <div class="form-check-inline">
                                                <input class="form-check-input" type="radio" name="flexRadioDefault"
                                                    id="flexRadioDefault2" checked>
                                                <label class="form-check-label" for="flexRadioDefault2">
                                                    공통
                                                </label>&ensp;&ensp;

                                                <div class="form-check-inline">
                                                    <input class="form-check-input" type="radio" name="flexRadioDefault"
                                                        id="flexRadioDefault2" checked>
                                                    <label class="form-check-label" for="flexRadioDefault2">
                                                        Image
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 mt-2 ml-5">
                                        <div class=" input-group ">
                                            &ensp;&ensp;<input type=" text"
                                                class="form-control form-control-sm  datetimepicker-input "
                                                data-target="#reservationdate">&ensp;

                                            <button type="button" class="btn btn-info btn-sm">
                                                등록
                                            </button>
                                        </div>
                                    </div>

                                    <div class="col-lg-12 mt-2">
                                        <div class="input-group ">
                                            <div class="input-group ">
                                                &ensp;&ensp;&ensp;&ensp;설명&ensp;
                                                <textarea class="form-control" id="exampleFormControlTextarea1"
                                                    rows="5"></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 mt-2">
                                        <div class="input-group ">
                                            사용여부&ensp;
                                            <select class="form-select form-select-sm "
                                                aria-label="Default select example" v-model="rinfos.useyn">
                                                <option selected>Y</option>
                                                <option selected>N</option>
                                            </select>
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
</template>


<script>


import { ref } from 'vue';
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-alpine.css";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { AgGridVue } from 'ag-grid-vue3';

import ModalComponent from "./CodeManageAdd.vue";
import ModalComponent2 from "./CodeManageRegist.vue";
import ModalComponent3 from "./CodeManageCorrect.vue";


export default {
    components: {
        AgGridVue,
        ModalComponent,
        ModalComponent2,
        ModalComponent3

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

                { field: "no", headerName: "순번", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 60 },
                { field: "codeid", headerName: "코드ID", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 200 },
                { field: "codenm", headerName: "코드명", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: '' }, minWidth: 380, maxWidth: 500 },
                { field: "type", headerName: "타입", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 150 },
                { field: "useyn", headerName: "사용여부", editable: true, cellEditor: 'CellComponentEditor', cellStyle: { textAlign: 'center' }, maxWidth: 150 },


                // ...
            ],
            rowData: [
                { no: "1", codeid: "01", codenm: "본방", type: "공통", useyn: "Y" },
                { no: "2", codeid: "02", codenm: "재방", type: "공통", useyn: "Y" },
                { no: "3", codeid: "03", codenm: "3방", type: "공통", useyn: "Y" },
                { no: "4", codeid: "04", codenm: "4방", type: "공통", useyn: "Y" },
                { no: "5", codeid: "05", codenm: "5방", type: "공통", useyn: "Y" },

            ],

            treeData: [
                {
                    id: 1,
                    label: '그룹',
                    expanded: false,
                    children: [
                        { id: 2, label: '001 게시물분류', expanded: false },
                        { id: 3, label: '002 기사유형', expanded: false },
                        { id: 4, label: '003 기사형식', expanded: false },
                        { id: 5, label: '004 방송구분', expanded: false },
                        { id: 6, label: '005 방송장비', expanded: false },
                        { id: 7, label: '006 분야', expanded: false },
                        { id: 8, label: '007 연합기사분류', expanded: false },
                        { id: 9, label: '008 연합뉴스', expanded: false },
                        { id: 10, label: '009 영상분류코드', expanded: false },
                        { id: 11, label: '010 외신', expanded: false },


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


        },
        onCellClicked(params) {


            console.log('params : ' + JSON.stringify(params.data));
            // 다른 input에 값 할당
            this.rinfos = params.data;


        },
        handleClick(item) {
            item.expanded = !item.expanded;
        }

    }
}




</script>



<style></style>