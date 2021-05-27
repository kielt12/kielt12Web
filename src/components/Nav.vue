<template>
  <div class="test">
    <nav>
      <div class="navbar">
        <router-link to="/" id="navbar-logo">
          <img src="../assets/logo.png" class="logo" />
        </router-link>
        <div class="hamburger" @click="toggle">
          <div
            class="container-hamburger"
            onclick="this.classList.toggle('active')"
            ref="list"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="75"
              height="75"
              viewBox="0 0 200 200"
            >
              <g stroke-width="6.5" stroke-linecap="round">
                <path
                  d="M72 82.286h28.75"
                  fill="#009100"
                  fill-rule="evenodd"
                  stroke="#fff"
                />
                <path
                  d="M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554"
                  fill="none"
                  stroke="#fff"
                />
                <path
                  d="M72 125.143h28.75"
                  fill="#009100"
                  fill-rule="evenodd"
                  stroke="#fff"
                />
                <path
                  d="M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554"
                  fill="none"
                  stroke="#fff"
                />
                <path
                  d="M100.75 82.286h28.75"
                  fill="#009100"
                  fill-rule="evenodd"
                  stroke="#fff"
                />
                <path
                  d="M100.75 125.143h28.75"
                  fill="#009100"
                  fill-rule="evenodd"
                  stroke="#fff"
                />
              </g>
            </svg>
          </div>
        </div>

        <ul :style="{ top: navToggle ? '-1600px' : '-16px' }">
          <li v-for="(page, index) in nav.pages" :key="index">
            <router-link :to="nav.links[index]" exact @click="close"
              >{{ page }}
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {
    toggle() {
      this.navToggle = this.navToggle ? false : true;
    },
    close() {
      this.navToggle = true;
      this.$refs.list.classList.toggle("active");
    },
  },
  data() {
    return {
      navToggle: true,
      nav: {
        pages: ["Home", "Projects", "Contact"],
        links: ["/", "/projects", "/contact"],
      },
    };
  },
};
</script>

<style>
nav {
  padding-left: 6%;
  padding-right: 6%;
}
.navbar {
  padding-top: 1%;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.logo {
  cursor: pointer;
}

.menu-icon {
  width: 25px;
  cursor: pointer;
  display: none;
}

.navbar {
  display: flex;
  justify-content: space-between;
}

nav ul li {
  list-style: none;
}

nav ul {
  width: 300px;
  display: flex;
  justify-content: space-between;
}
nav ul li a {
  text-decoration: none;
  color: #fff;
  font-size: 20px;
}
.container-hamburger {
  cursor: pointer;
  display: flex;
}
svg {
  transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
}
.active svg {
  transform: rotate(90deg);
}
path {
  transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dasharray 500ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 500ms cubic-bezier(0.4, 0, 0.2, 1);
}
path:nth-child(1) {
  transform-origin: 36% 40%;
}
path:nth-child(2) {
  stroke-dasharray: 29 299;
}
path:nth-child(3) {
  transform-origin: 35% 63%;
}
path:nth-child(4) {
  stroke-dasharray: 29 299;
}
path:nth-child(5) {
  transform-origin: 61% 52%;
}
path:nth-child(6) {
  transform-origin: 62% 52%;
}
.active path:nth-child(1) {
  transform: translateX(9px) translateY(1px) rotate(45deg);
}
.active path:nth-child(2) {
  stroke-dasharray: 225 299;
  stroke-dashoffset: -72px;
}
.active path:nth-child(3) {
  transform: translateX(9px) translateY(1px) rotate(-45deg);
}
.active path:nth-child(4) {
  stroke-dasharray: 225 299;
  stroke-dashoffset: -72px;
}
.active path:nth-child(5) {
  transform: translateX(9px) translateY(1px) rotate(-45deg);
}
.active path:nth-child(6) {
  transform: translateX(9px) translateY(1px) rotate(45deg);
}
nav ul li a:hover {
  color: #d6bde7;
}

.router-link-active {
  color: #d6bde7;
}

.hamburger {
  display: none;
}

#navbar-logo {
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text--fill-color: transparent;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
}

@media only screen and (max-width: 1200px) {
  .hamburger {
    z-index: 9999;
    display: inline;
  }
}

@media only screen and (max-width: 1200px) {
  nav ul {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    background: black;
    position: absolute;
    height: 100vh;
    right: 0;
    opacity: 0.95;
    z-index: 999;
  }
  nav ul li {
    height: 80px;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
    padding-left: 0px;
  }
  nav ul li a {
    color: #fff;
  }

  .menu-icon {
    display: block;
  }

  .menuList {
    overflow: hidden;
    transition: 0.5s;
  }

  .test {
    border: none;
  }

  .router-link-exact-active a {
    background: red;
  }

  /* nav a::before {
    content: '';
    display: block;
    height: 5px;
    background: black;
    position: absolute;
    top: -.75em;
    left: 0;
    right: 0;
    transform: scale(0, 1);
    transition: transform ease-in-out 250ms;
  }
  
  nav a:hover::before {
    transform: scale(1,1);
  } */
}
</style>
