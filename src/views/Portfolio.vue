<template>
  <div class="portfolio">
    <div class="portfolio__wrapper">

      <div class="card" v-for="data in portfolio" :key="data.id" >
        <div class="image">
          <img :src="require(`../assets/${data.img}.jpg`)" :alt="data.id">
        </div>
        <div class="title">
          <a target="_blank" :href="`https://${data.link}`">{{ data.title }} <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="external-link-alt" class="svg-inline--fa fa-external-link-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path></svg></a>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    portfolio: [
      {
        id: 4,
        img: '001',
        title: 'Title of project',
        link: 'google.com'
      },
      {
        id: 3,
        img: '001',
        title: 'Title of project',
        link: 'google.com'
      },
      {
        id: 2,
        img: '001',
        title: 'Title of project',
        link: 'google.com'
      },
      {
        id: 1,
        img: '001',
        title: 'Title of project',
        link: 'google.com'
      },
    ]
  }),
}
</script>

<style lang="scss">
.portfolio {
  min-height: calc(100vh - 48px);
  padding-top: 80px;

  &__wrapper{

    margin-left: 5%;
    margin-right: 5%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .card {
      padding: 24px;
      background: #1B1B1B;
      width: 30%;
      border-radius: 8px;
      margin-bottom: 3rem;
      box-shadow: 0px 0px 30px 0px rgba(0,0,0,.05);

      .image {

        img {
          width: 100%;
          min-height: 250px;
          object-fit: cover;
          display: block;
        }
      }

      .title {
        margin-top: 1rem;

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
  }
}

@media screen and (max-width: 1224px) {
  .portfolio {
    &__wrapper{
      .card {
        width: 47%;
      }
    }
  }
}

@media screen and (max-width: 770px) {
  .portfolio {
    &__wrapper{
      .card {
        width: 100%;
      }
    }
  }
}
</style>