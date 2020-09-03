<template>
  <div class="home">
    <FormBlock :class="{formOpen : !isOpen}" @click="isOpen = !isOpen"/>
    <main class="main">
      <Header @click="isOpen = !isOpen" />
      <Section />
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import FormBlock from '@/components/FormBlock.vue'
import Section from '@/components/Section.vue'

export default {
  name: 'Home',
  components: {
    Header,
    FormBlock,
    Section
  },
  data: () => ({
    isOpen: true
  }),
}
</script>

<style lang="scss" >

.home {
  width: 100%;
  min-height: calc(100vh - 48px);
}

.main {
  display: flex;
  justify-content: space-between;
}

.formOpen {
  opacity: 1;
  visibility: visible;
}

@media screen and (max-width: 1224px) {
  .main {
    flex-direction: column;
  }
}

</style>