<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="socials">
        <input type="image" src="@/assets/icons/fb.png" alt="facebook" />
        <input type="image" src="@/assets/icons/vk.png" alt="vk" />
      </div>

      <img src="@/assets/logoWhite.png" alt="logo" class="logo" />

      <div class="phone">+7 (495) 766-10-31</div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  background-color: #2c2450;
  width: 100%;
  padding: 15px 75px;
  position: relative;
}

.footer-container {
  margin: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.socials {
  display: flex;
  align-items: center;
}

.socials > input {
  width: 30px;
  height: auto;
  margin-right: 5px;
}

.phone {
  color: #fff;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
}

@media screen and (max-width: 600px) {
  .footer {
    padding: 10px;
    /* transform: translateY(-120px); */
    position: relative;
  }

  .logo {
    width: 160px;
    height: auto;
  }

  .phone {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
  }
}

@media screen and (max-width: 480px) {
  .logo {
    width: 80px;
    height: auto;
  }

  .phone {
    font-weight: 600;
    font-size: 7px;
    line-height: 9px;
  }
}
</style>
