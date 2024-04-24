<template>
  <div class="checkbox">
    <input :checked="modelValue" @click="updateValue" type="checkbox" id="cb1"> <label for="cb1"><slot></slot></label>
  </div>
  
</template>

<script>
export default {
  name: "my-check-box",

  props: {
    modelValue: {
      type: Boolean
    }
  },

  methods: {
    updateValue(event){
      this.$emit('update:modelValue', event.target.checked)
    }
  }
}
</script>

<style scoped>

  

  .checkbox > input[type="checkbox"]:checked, 
  .checkbox > input[type="checkbox"]:not(:checked)
  {
    position: absolute;
    left: -9999px;
  }

  .checkbox > input[type="checkbox"]:checked + label, 
  .checkbox > input[type="checkbox"]:not(:checked) + label{
      display: inline-block;
      position: relative;
      padding-left: 28px;
      line-height: 20px;
      cursor: pointer;

  }

  .checkbox > input[type="checkbox"]:checked + label:before, 
  .checkbox > input[type="checkbox"]:not(:checked) + label:before{
      content: "";
      position: absolute;
      left: 0px;
      top: 0px;
      width: 18px;
      height: 18px;
      border: 1px solid #fff;
      background-color: #2C2450;
  }

  input[type="checkbox"]:checked + label:after, 
  input[type="checkbox"]:not(:checked) + label:after{
      content: "";
      position: absolute;
      -webkit-transition: all 0.2s ease;
      -moz-transition: all 0.2s ease;
      -o-transition: all 0.2s ease;
      transition: all 0.2s ease;

      left: 3px;
      top: 4px;
      width: 10px;
      height: 5px;
      border-radius: 1px;
      border-left: 2px solid #fff;
      border-bottom: 2px solid #fff;
      -webkit-transform: rotate(-45deg);
      -moz-transform: rotate(-45deg);
      -o-transform: rotate(-45deg);
      -ms-transform: rotate(-45deg);
      transform: rotate(-45deg);
  }

  input[type="checkbox"]:not(:checked) + label:after{
    opacity: 0;
  }

  input[type="checkbox"]:checked + label:after{
    opacity: 1;
  }

  .checkbox label{
    font-style: normal;
    font-weight: 300;
    font-size: 10px;
    line-height: 12px;
    color: #FFFFFF;
  }

  @media screen and (max-width: 600px) {
    .checkbox label{
      font-style: normal;
      font-weight: 300;
      font-size: 9px;
      line-height: 11px;
    }
  }

</style>