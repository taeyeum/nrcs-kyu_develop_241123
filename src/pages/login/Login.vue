<template>
  <div class="card ">

    <div class="login-box container" style="margin-top: 10%;">
      <div class="card " style="height:380px; background-color:#09a8de">
        <div class="card-header text-center">
          <div class="h1"><img src="../../components/image/noticelogo02.png"></div>
        </div>
        <div class="card-body">

          <div class="form-group">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <p class="mb-n2">아이디</p>
            <hr style="width:300px; margin-top: 5px; border: 1px solid white; " />

            <p class="mb-n2">비밀번호</p>
            <hr style="width:300px; margin-top: 5px; border: 1px solid white;" />


            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled" disabled>
              <label class="form-check-label" for="flexCheckDisabled" style="color:white;">
                아이디 저장
              </label>
            </div>
          </div>

          <div class="input-group">
            <button @click="Login()" class="btn btn-outline-light btn-block">
              로그인
            </button>


          </div>

          <div class="input-group">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <p class="mb-n2 mt-4">인증번호</p>
            <hr style="width:300px; margin-top: 5px; border: 1px solid white;" />
            <button @click="Login()" class="btn btn-outline-light btn-block">
              인증
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useTheme } from "../../stores";
import { useRouter } from "vue-router";

import CryptoJS from "crypto-js";
import axios from "axios";

const themeStore = useTheme();
const router = useRouter();

const user_id = ref<string>('');
const password = ref<string>('');
const loginType = "WEB";

onMounted(() => {
  const currentTheme = themeStore.getTheme();
  themeStore.setTheme({
    ...currentTheme,
    handleHeader: false,
    handleFooter: false,
    handleNavbar: false
  });
});

const Login = () => {
  var shapassword = CryptoJS.SHA256(password.value).toString();
  let saveData = {
    user_id: '',
    password: '',
    loginType: ''
  };

  console.log("user_id : " + user_id.value);

  //좀더 구체화된 데이터 형식으로 수정 필요
  saveData.user_id = user_id.value;
  saveData.password = shapassword;
  saveData.loginType = loginType;

  axios.post('/json/login.json', {
    //axios.post(`${import.meta.env.VITE_API_HOST}/v1/auth/login/`+this.user_id, {
    saveData
  })
    // 서버로부터 응답이 오면 처리
    .then((response) => {
      console.log("====>" + response.data);
      console.log("====>" + response.data.user_id);

      let token = response.data.stoken;
      console.log('token', token);
      localStorage.setItem('access_token', token)

      // this.$router.push("/index");
      let userInfo = {
        id: response.data.user_id,
        grp_id: response.data.user_grp_id,
        token: response.data.stoken,
        user_nm: response.data.user_nm,
      }

      localStorage.setItem('user', JSON.stringify(userInfo));

      const currentTheme = themeStore.getTheme();
      themeStore.setTheme({
        ...currentTheme,
        handleHeader: true,
        handleFooter: true,
        handleNavbar: true
      });
      router.replace("/issue");
    })
    .catch(function (error) {
      console.log('error' + error);
    })
};
</script>

<style>
.card {
  background-image: url(../image/noticelogoin.png);
  height: 1000px;
}

p {
  color: white
}
</style>
