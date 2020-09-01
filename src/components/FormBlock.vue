<template>
  <div class="form-block" :class="{ open: value }">
    <div class="close" @click.prevent="$emit('click')">
      <svg height="329pt" viewBox="0 0 329.26933 329" width="329pt" xmlns="http://www.w3.org/2000/svg"><path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"/></svg>
    </div>
    <form @submit.prevent="sendEmail">
      <input 
        type="text" 
        name="user_name" 
        placeholder="Your name"
        v-model="user_name"
      >
      <span v-if="!$v.user_name.required && $v.user_name.$dirty">Name is required!</span>
      <input 
        type="text" 
        name="user_email" 
        placeholder="Your email"
        v-model.trim="user_email" 
      >
      <textarea 
        placeholder="messages" 
        name="message"
        v-model="message"
      ></textarea>
      <input class="btn-submit" type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
import emailjs from 'emailjs-com'
import { required, maxLength, minLength, email} from 'vuelidate/lib/validators'

export default {
  props: ['value'],
  data: () => ({
    user_name: '',
    user_email: '',
    message: ''
  }),
  validations: {
    user_name: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(24)
    },
    user_email: {
      required,
      email
    },
    message: {
      required,
      minLength: minLength(8),
      maxLength: maxLength(255)
    }
  },
  methods: {
    // sendTo:(e) => {

    //   emailjs.sendForm('gmail', 'template_j31Ot9l6', e.target, 'user_IIctbikCJsk2u3iLfMclI')
    //     .then((result) => {
    //         console.log('SUCCESS!', result.status, result.text);


    //     }, (error) => {
    //         console.log('FAILED...', error);
    //     });
    // },
    sendEmail (e)  {
      this.$v.$touch();

      if (!this.$v.$invalid) {

        emailjs.sendForm('gmail', 'template_j31Ot9l6', e.target, 'user_IIctbikCJsk2u3iLfMclI')
          .then((result) => {
              console.log('SUCCESS!', result.status, result.text);


          }, (error) => {
              console.log('FAILED...', error);
          });
      }
      
    }
  }
}
</script>

<style lang="scss">

.form-block {
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  background: #111111;
  transition: .2s ease;
  padding: 24px;

  opacity: 0;
  visibility: hidden;

  .close {
    position: absolute;
    top: 24px;
    right: 24px;
    display: block;
    cursor: pointer;
    padding: 10px;
    border-radius: 8px;
    transition: .1s ease;

    &:hover {
      background: #1B1B1B;
    }

    svg {
      display: block;
      width: 24px;
      height: 24px;
      path {
        fill: #fff;
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;

    input {
      width: 400px;
      height: 56px;
      border: 0;
      outline: 0;
      border-radius: 8px;
      background-color: #2c2c2c;
      color: #7a7a7a;
      font-size: 16px;
      font-weight: 400;
      letter-spacing: 0.4px;
      padding: 8px 12px;
      margin-bottom: 1rem;
    }

    textarea {
      width: 400px;
      height: 56px;
      border: 0;
      outline: 0;
      border-radius: 8px;
      background-color: #2c2c2c;
      color: #7a7a7a;
      font-size: 16px;
      font-weight: 400;
      letter-spacing: 0.4px;
      padding: 8px 12px;
      resize: vertical;
      margin-bottom: 1rem;
    }

    .btn-submit {
      background-color: #fff;
      font-weight: 700;
      color: #0a0a0a;
      cursor: pointer;

      &:hover {
        background-color: darken( #fff, 15%)
      }
    }
  }
}

.invalid {
  border-bottom: 2px solid red !important;
}

@media screen and (max-width: 460px) {
  .form-block form {
    width: 100%;
  }

  .form-block form input {
    width: 100%;
  }

  .form-block form textarea{
    width: 100%;
  }
}
</style>