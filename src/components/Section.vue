<template>
  <div class="Section">

    <div class="card">
      <div class="card__title">
        <h2>About Me</h2>
      </div>
      <div class="card__desc" v-for="about in aboutMe" :key="about.id">
        <p>{{about.title}}</p>
      </div>
    </div>

    <div class="card">
      <div class="card__title">
        <h2>Projects</h2>
      </div>
      <div class="card__links" v-for="project in projects" :key="project.id">
        <a target="_blank" :href="`https://${project.link}`">{{ project.title }}
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="external-link-alt" class="svg-inline--fa fa-external-link-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path></svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import db from '@/db'

export default {
  data () {
    return {
      aboutMe: [],
      projects: []
    }
  },
  created () {
    db.collection('AboutMe').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        this.aboutMe.push(doc.data())
      })
    })
    db.collection('Home_projects').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        this.projects.push(doc.data())
      })
    })
  }
}
</script>

<style lang="scss" scoped>
.Section {
  margin-right: 5%;
  width: 35%;
  padding: 56px;
  padding-top: 80px;
}
.card {
  width: 100%;
  background-color: #1B1B1B;
  border-radius: 8px;
  margin-bottom: 3rem;
  padding: 24px 48px 32px;
  box-shadow: 0px 0px 30px 0px rgba(0,0,0,.05);

  &__title {
    margin-bottom: 32px;

    h2 {
      font-size: 34px;
      color: #fff;
    }
  }

  &__desc {

    p {
      font-size: 20px;
      color: darken( #fff, 50%);
    }
  }

  &__links {
    display: flex;
    flex-direction: column;

    a {
      font-size: 20px;
      text-decoration: none;
      color: #fff;
      transition: .1s ease;
      margin-bottom: 5px;

      &:hover {
        color: darken( #fff, 50%);
      }

      svg {
        width: 18px;
        height: 18px;
        margin-left: 5px;
      }
    }
  }
}

@media screen and (max-width: 1224px) {
  .Section {
    width: 100%;
  }
}

@media screen and (max-width: 500px) {
  .Section {
    padding-left: 24px;
    padding-right: 24px;
    margin-right: 0;
  }
}

@media screen and (max-width: 400px) {
  .card {
    padding-right: 24px;
    padding-left: 24px;
  }
}
</style>