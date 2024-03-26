<template>
  <div class="my-input-container">
    <input class="my-input" :class="{'my-input-error': !isValid}" :name="input_name" :type="inputType" :value="modelValue" @input="updateValue" :placeholder="placeholder">
    <label >{{ errorPlaceholder }}</label>
  </div>
  
</template>

<script>
export default {
  name: 'my-input',
  props: {
    
    inputType: {
      type: String,
      default: 'text',
    },

    modelValue: {
      type: String
    }, 

    errorPlaceholder: {
      type: String,
      default: 'подсказака'
    },

    isValid: {
      type: Boolean,
      required: true
    },

    placeholder: {
      type: String,
      default: ''
    },

    input_name: {
      type: String,
      default: ''
    }

  },
  
  methods: {
    updateValue(event){
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
  .my-input-container{
    display: flex;
    flex-direction: column;
    align-items: left;
    position: relative;
  }

  .my-input{
    padding: 20px 15px;
    border: 2px solid #fff;
    background: #2C2450;
    color: #fff;
    width: 100%;
    height: 100%;
  }

  .my-input-error{
    border: 2px solid #FF8653;
  }

  label{
    display: none;
  }

  .my-input-error + label{
    display: block;
    font-weight: 500;
    font-size: 9px;
    line-height: 11px;
    color: #FF8753;
    align-self: flex-end;
    position: absolute;
    top: 100%;
  }

  

  
</style>