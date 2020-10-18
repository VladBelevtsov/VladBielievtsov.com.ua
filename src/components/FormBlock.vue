<template>
  <div class="form-block">
    <div class="close" @click.prevent="$emit('click')">
      <svg height="329pt" viewBox="0 0 329.26933 329" width="329pt" xmlns="http://www.w3.org/2000/svg"><path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"/></svg>
    </div>
    <div class="overflow"  @click.prevent="$emit('click')"></div>
    <form @submit.prevent="sendEmail">
      <input 
        type="text" 
        name="user_name" 
        placeholder="Your name"
        v-model="user_name"
      >
      <span class="text-danger" v-if="!$v.user_name.required && $v.user_name.$dirty">Name is required!</span>
      <input 
        type="email" 
        name="user_email" 
        placeholder="Your email"
        v-model.trim="user_email" 
      >
      <span class="text-danger" v-if="(!$v.user_email.required || !$v.user_email.email) && $v.user_email.$dirty">Valid Email is required!</span>
      <textarea 
        placeholder="Message" 
        name="message"
        v-model="message"
      ></textarea>
      <span class="text-danger" v-if="!$v.message.required && $v.message.$dirty">Message is required!</span>
      <span class="text-danger" v-if="(!$v.message.minLength || !$v.message.maxLength) && $v.message.$dirty">Message must be between {{ $v.message.$params.minLength.min }} and {{ $v.message.$params.maxLength.max }} characters!</span>
      <input class="btn-submit" type="submit" value="Submit">
    </form>
    <div class="answer" >
      <div class="success-card">
        <span>Success!</span> 
        Thank you for your message. I'll reply to you as soon as possible 💌
      </div>
    </div>
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
      required
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
    resetData() {
      this.user_name = '',
      this.user_email = '',
      this.message = ''
    },
    sendTo:(e) => {
      
      emailjs.sendForm('', '', e.target, '')
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
        }, (error) => {
            console.log('FAILED...', error);
        });
    },
    sendEmail (e)  {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.sendTo(e)
        this.$v.$reset()
        this.resetData()
        document.querySelector('.success-card').classList.add("success-text");
        setTimeout("document.querySelector('.success-card').style.left = '-100%'", 5000)
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

  .overflow {
    width: 100%;
    min-height: 100vh;
    position: absolute;
  }

  .close {
    position: absolute;
    top: 24px;
    right: 24px;
    display: block;
    cursor: pointer;
    padding: 10px;
    border-radius: 8px;
    transition: .1s ease;
    z-index: 9999;

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
    z-index: 99999;

    .text-danger {
      color: rgb(235, 33, 33);
      margin-bottom: 1rem;
    }

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

  .success-card {
    position: absolute;
    bottom: 60px;
    left: -200%;
    padding: 20px;
    background: #fff;
    border-radius: 16px;
    color: #666;
    z-index: 9999999;
    transition: .2s ease;

    span {
      color: rgb(69, 170, 69);
      font-weight: 700;
    }
  }

  .success-text {
    left: 20px;
  }
}



.invalid {
  border-bottom: 2px solid red !important;
}

@media screen and (max-width: 600px) {
  .form-block {
    .success-card {
      width: 100%;
    }

    .success-text {
      left: 0px;
    }
  }
  
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