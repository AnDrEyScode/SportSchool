<template>
  <div class="contacts-form">
    <h2>Свяжитесь с нами!</h2>
    <form class="form">
      <div class="form-inputs">
        <my-input
          id="form-name"
          :input_name="'name'"
          class="form-input"
          placeholder="Имя"
          errorPlaceholder="Данные введены неверно"
          v-model.trim="name"
          :isValid="isNameValid"
          @change="validateName"
        />

        <my-input
          id="form-phone"
          :input_name="'phone'"
          class="form-input"
          inputType="phone"
          placeholder="Телефон"
          errorPlaceholder="Данные введены неверно"
          v-model="phone"
          :isValid="isPhoneValid"
          @change="validatePhone"
        />

        <my-check-box class="check" v-model="politicsChecked">
          Я даю согласие на
          <a style="text-decoration: underline"
            >обработку персональных данных</a
          >
          и соглашаетесь с политикой конфиденциальности
        </my-check-box>

        <my-button
          class="form-input white"
          :value="'Отправить'"
          @click.prevent="trySend"
        />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      phone: "",
      politicsChecked: false,
      isNameValid: true,
      isPhoneValid: true,
    };
  },
  methods: {
    validateForm() {
      this.validatePhone();
      this.validateName();
      return Boolean(
        this.politicsChecked && this.isNameValid && this.isPhoneValid
      );
    },

    validatePhone() {
      let mask = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
      this.isPhoneValid = mask.test(this.phone);
    },

    validateName() {
      const mask =
        /^[А-ЯЁ][а-яё]*([-][А-ЯЁ][а-яё]*)?\s[А-ЯЁ][а-яё]*\s[А-ЯЁ][а-яё]*$/;
      this.isNameValid = mask.test(this.name);
    },

    trySend() {
      //if(!this.validateForm())
      //  return
      alert();

      Email.send({
        Host: "smtp.mail.ru",
        Username: "mgmos-from",
        Password: "1ttOaIyrYP2-",
        To: "mgmos-from@mail.ru",
        From: "mgmos-from@mail.ru",
        Subject: `${this.name} ${Date.now().toString()}`,
        Body: `${this.name} оставил заявку, его телефон: ${this.phone}`,
      })
        .then((message) => alert(message))
        .catch((Err) => console.log(Err.name));

      console.log("Sent");
      this.name = "";
      this.phone = "";
    },
  },
};
</script>

<style scoped>
.contacts-form {
  background: #2c2450;
  padding: 60px 110px;
  margin: 0px 75px;
  position: relative;
  display: flex;
  flex-direction: column;
}

.form-inputs {
  margin: 30px 0px;
  display: flex;
  flex-wrap: wrap;
}

.contacts-form > h2 {
  color: #fff;
}

.form-input {
  /* width: 300px; */
  margin-right: 30px;
  flex: 0 0 30%;
}

.check {
  width: 600px;
  margin-top: 20px;
  order: 1;
  font-style: normal;
  font-weight: 300;
  font-size: 10px;
  line-height: 12px;
}

@media screen and (max-width: 800px) {
  .check {
    order: 0;
    font-weight: 300;
    font-size: 9px;
    line-height: 11px;
  }

  .contacts-form > h2 {
    align-self: center;
  }
}

@media screen and (max-width: 600px) {
  .contacts-form {
    width: 90%;
    margin: 0 auto;
    padding: 20px;
    align-items: center;
    justify-content: center;
  }

  .form-inputs {
    width: 80%;
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;

    margin: 0 auto;
    margin-top: 20px;
  }

  .form-input {
    margin: 0;
    margin-bottom: 10px;
    width: 100%;
  }

  .check {
    order: 0;
    margin: 0;
    width: 100%;
    margin-bottom: 20px;
  }
}
</style>
