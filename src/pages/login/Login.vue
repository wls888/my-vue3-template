<template>
  <div class="login">
    <div class="container">
      <div class="form-container">
        <div class="title">
          <div class="pwd-login" @click="changeMode('pwd')">密码登录</div>
          <div class="email-login" @click="changeMode('email')">邮箱登录</div>
          <div class="underline" ref="underline"></div>
        </div>
        <div class="form">
          <div class="form-item">
            <input type="text" placeholder="请输入账号或邮箱" />
            <div class="err">请输入邮箱或账号</div>
          </div>
          <div class="form-item">
            <input type="text" placeholder="请输入密码" />
            <div class="err"></div>
          </div>
          <div class="form-ext">
            <div class="left">
              <input type="checkbox" id="remember_me" />
              <label for="remember_me" style="cursor: pointer">
                <span>记住我</span>
              </label>
            </div>
            <div class="right">
              <a href="#">忘记密码</a>
            </div>
          </div>
        </div>

        <button class="login-btn">登录</button>
      </div>
      <div class="red-bg"></div>
      <div class="blue-bg"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const underline = ref<HTMLElement | null>(null);
    const changeMode = (mode: string) => {
      if (mode === "pwd") {
        underline.value!.style.transform = "translateX(" + 20 + "px)";
      } else if (mode === "email") {
        underline.value!.style.transform = "translateX(" + 252 + "px)";
      }

      console.log(underline);
    };
    return {
      changeMode,
      underline
    };
  }
});
</script>

<style scoped lang="less">
.login {
  position: absolute;
  left: 0;
  top: 0;
  min-width: 375px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../../assets/images/bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left top;
  z-index: -9999;
}
.container {
  width: 384px;
  height: 475px;
  position: relative;
  z-index: 999;

  .form-container {
    background-color: #f3f4f6;
    padding: 16px 24px;

    .form {
      .form-item {
        margin-top: 30px;
        box-shadow: 0 6px 8px rgba(0, 0, 0, 0.12);
        border-radius: 10px;
        position: relative;

        input {
          border-radius: 10px;
          border: 0;
          width: 336px;
          height: 44px;
          outline: 0;
          padding-left: 8px;
          color: 16px;
          background-color: #f3f4f6;
        }
        input:hover {
          background-color: #dbeafe;
        }
        input::placeholder {
          color: #9ca3af;
          font-size: 16px;
        }
      }
      .form-item:first-of-type {
        margin-top: 50px;
      }
      .form-ext {
        color: #4b5563;
        margin: 40px 0 30px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        .right a {
          color: #4b5563;
        }
        .right a:hover {
          color: #000;
        }

        #remember_me {
          margin: 0;
          margin-right: 5px;
          vertical-align: baseline;
        }

        #remember_me:focus {
          border: 2px solid #60a5fa rgba(96, 165, 250, 0.2);
        }
      }
    }
  }
}

.form-container,
.blue-bg,
.red-bg {
  width: 100%;
  height: 100%;
  border-radius: 20px;
}
.err {
  position: absolute;
  left: 0;
  top: 48px;
  padding-left: 8px;
  width: 336px;
  height: 24px;
  line-height: 24px;
  border-radius: 8px;
  color: #fff;
  font-size: 12px;
  background-color: #f87171;
  display: none;
}

.blue-bg {
  background-color: #60a5fa;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -2;
  transform: rotate(-6deg);
}

.red-bg {
  background-color: #f87171;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  transform: rotate(6deg);
}

.login-btn {
  width: 100%;
  border: 0;
  background-color: #3b82f6;
  color: #fff;
  padding: 12px 0;
  border-radius: 10px;
  transition: all 200ms ease-in;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.login-btn:hover {
  transform: scale(1.04);
  box-shadow: none;
}
.title {
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  border-bottom: 2px solid #e0e0e0;

  .pwd-login,
  .email-login {
    cursor: pointer;
  }
  .underline {
    content: "";
    transform: translateX(20px);
    position: absolute;
    left: 0px;
    bottom: -2px;
    width: 64px;
    height: 2px;
    background-color: #f87171;
    transition: all 250ms linear;
  }
}
</style>
