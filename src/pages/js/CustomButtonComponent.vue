<template>
   <div class="d-flex align-items-center float-right">       
    <button  type="button" class="btn btn-sm" v-on:click="clickbutton" data-bs-toggle="modal" data-bs-target="#exampleModal6" 
    style="border:1px solid gray">+</button>
     <button  type="button" class="btn btn-sm" v-on:click="clickbutton" data-bs-toggle="modal" data-bs-target="#exampleModal6" 
    style="border:1px solid gray">-</button>
   
  
  </div>
</template>

<script>



  export default {
   
  components: {

  },
    data() {
      return {
        ifile: '',  
        modalShow: false,
       
      }
    },
    methods: {
     
handleFileUpload(evt){
      
        console.log('handleFile: start');
        this.ifile = evt.target.files[0];
        console.log('handleFile: start2 '+ this.ifile );
      
      let reader  = new FileReader();

      reader.addEventListener("load", function () {
          this.showPreview = true;
          this.imagePreview = reader.result;
        }.bind(this), false);


      if( this.ifile ){
      
          if ( /\.(jpe?g|png|gif)$/i.test( this.ifile.name ) ) {
        
              reader.readAsDataURL( this.ifile );
        }
      }

      }
    }
      }
    </script> 
    
    <style>

    </style>