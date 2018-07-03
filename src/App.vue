<template>
  <div>
    <navbar></navbar>
    <section>
        <router-view></router-view>
     </section>
    <footerbar></footerbar>
  </div>
</template>

<script>
import navbar from "./components/common/navbar";
import footerbar from "./components/common/footerbar";
export default {
 data(){
     return{

     }
   }, 
   components:{
   navbar,
   footerbar,
   }  
 }
</script>

<style>
	*{
	   margin:0px;
	   padding:0px;
	 }
  div{
    height: 50px;
    width: 100%;
  }
	


	 ul {
	   list-style: none;
	 }
	 section{
	   
	   
	 }
</style>
