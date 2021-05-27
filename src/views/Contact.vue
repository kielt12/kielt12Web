<template>
  <div class="container-contact">
    <div class="contact">
      <h1>Let's Get Started</h1>
      <div class="contact-form">
        <form
          @submit.prevent="handleSubmit"
          name="contact"
          method="POST"
          netlify-honeypot="bot-field"
          data-netlify="true"
        >
          <p style="display: none" class="hidden"></p>
          <span class="form-header">Leave a Message</span>
          <div class="form-name">
            <input
              pattern=".*\S+.*"
              required
              type="text"
              name="name"
              placeholder="Name"
              v-model="form.name"
            />
          </div>
          <div class="form-email">
            <input
              v-model="form.email"
              required
              type="text"
              name="email"
              placeholder="Email Address"
            />
          </div>
          <div class="form-message">
            <textarea
              required
              v-model="form.message"
              placeholder="Message"
              name="message"
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div>
            <button type="submit" id="button">Send</button>
          </div>
        </form>
        <div class="contact-images">
          <img class="draw" src="../assets/group3.png" alt="" />
          <div class="contact-icons">
            <img src="../assets/email.png" alt="" />
            <span>Kmoulon@gmail.com</span>
          </div>
          <div class="contact-icons">
            <img src="../assets/linkedin.png" alt="" />
            <span>linkedin.com/in/kiel-moulon-7b22b1195</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    const form = reactive({
      name: "",
      email: "",
      message: "",
    });

    const handleSubmit = () => {
      fetch("/", {
        method: "post",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: encode({
          "form-name": "contact",
          ...form,
        }),
      })
        .then(() => {
          form.name = "";
          form.email = "";
          form.message = "";
        })
        .catch((e) => console.error(e));
    };
    const encode = (data) => {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    };
    return {
      handleSubmit,
      encode,
      form,
    };
  },
};
</script>

<style lang="scss" scoped>
.container-contact {
  padding-top: 75px;
  height: 475px;
  width: 1100px;
  margin: 0 auto;
  margin-bottom: 150px;

  h1 {
    padding-top: 23px;
    text-align: center;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 44px;
    color: #ffffff;
  }
  .contact {
    border-radius: 20px;
    padding-left: 68px;
    background: linear-gradient(135deg, #e25544 2.88%, #42127e 98.14%);
    padding-bottom: 24px;
  }
  .contact-form {
    display: flex;
  }
  .form-header {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;

    color: #ffffff;
  }
  .form-name {
    padding-top: 12px;
    padding-bottom: 12px;
    input {
      padding-left: 5px;
      width: 342px;
      height: 42px;
      font-family: Montserrat;
      font-size: 15px;
      background: #e5bdbd;
      border-radius: 5px;
      border: none;
    }
  }
  .form-email {
    padding-bottom: 12px;
    input {
      font-family: Montserrat;
      padding-left: 5px;
      width: 342px;
      height: 42px;
      font-size: 15px;
      background: #e5bdbd;
      border-radius: 5px;
      border: none;
    }
  }
  .form-message {
    textarea {
      padding-left: 5px;
      width: 342px;
      background: #e5bdbd;
      border-radius: 5px;
      border: none;
      font-family: Montserrat;
      font-size: 15px;
      resize: none;
      color: #666666;
    }
  }
  #button {
    margin-top: 32px;
    width: 352px;
    height: 42px;
    background: rgba(66, 18, 126, 0.51);
    border-radius: 10px;
    border: none;
    line-height: 20px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    color: #ffffff;
  }

  .contact-images {
    padding-left: 75px;
    span {
      color: #fff;
      padding-left: 20px;
    }
  }

  .contact-icons {
    padding-top: 30px;
  }
}

@media only screen and (max-width: 1200px) {
  .container-contact {
    padding-top: 100px;
    height: 475px;
    width: 800px;
  }

  .draw {
    width: 300px;
  }
  .contact-images {
    font-size: 12px;
  }
}
@media only screen and (max-width: 800px) {
  .container-contact {
    padding-top: 50px;
    height: 475px;
    width: 700px;
    .contact-images {
      padding-left: 15px;
      font-size: 12px;
    }
  }

  .draw {
    width: 270px;
  }
}
@media only screen and (max-width: 710px) {
  .container-contact {
    padding-top: 50px;
    height: 475px;
    width: 400px;

    .contact-images {
      display: none;
    }
    .contact {
      flex-direction: column;
      padding-left: 0px;
      justify-content: center;
    }
    .contact-form {
      text-align: center;
      display: flex;
      justify-content: center;
    }
  }
}

@media only screen and (max-width: 510px) {
  .container-contact {
    padding-top: 25px;
    height: 475px;
    width: 360px;

    .contact-images {
      display: none;
    }
    .contact {
      flex-direction: column;
      padding-left: 0px;
      justify-content: center;
    }
    .contact-form {
      text-align: center;
      display: flex;
      justify-content: center;
    }
  }
}
</style>
