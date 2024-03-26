<template>
  <input class="button" :type="type" :value="value">
</template>

<script>
export default {
  name: 'my-button',
  props: {
    value: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'button'
    }
  }
}
</script>

<style scoped>
  .button{
    padding: 20px 50px;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
  }

  .button:hover{
    cursor: pointer;
  }

  .blue{
    border: 2px solid #2C2450;
    background: #2C2450;
    color: #fff;
  }

  .blue:hover{
    border: 2px solid #2C2450;
    background: #fff;
    color: #2C2450;
  }

  .button:disabled{
    background: #9591A7;
  }

  .white{
    border: 2px solid #fff;
    background: #fff;
    color: #2C2450;
  }

  .white:hover{
    border: 2px solid #fff;
    background: #2C2450;
    color: #fff;
  }

  @media screen and (max-width: 800px) {
    .button{
      padding: 10px 0px;
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 15px;
    }
  }
</style>