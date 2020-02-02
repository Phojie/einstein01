<template>
  <q-layout view="lHr lpR fFf">
    <q-header reveal>
      <q-toolbar
        class="q-px-md-xl"
        style="min-height:32px !important"
      >
        <div class="text-caption">
          <span>
            <q-icon name="call" /> Call Us: (063) 388 - 7282
          </span>
          <span class="q-ml-md">
            <q-icon name="message" /> info@ckcmians.edu.ph
          </span>
        </div>
        <q-space />

        <div>
          <q-btn
            round
            dense
            flat
            size="10px"
          >
            <q-icon name="mdi-facebook" />
          </q-btn>
          <q-btn
            round
            dense
            flat
            size="10px"
          >
            <q-icon name="mdi-twitter" />
          </q-btn>
          <q-btn
            round
            dense
            flat
            size="10px"
          >
            <q-icon name="mdi-youtube" />
          </q-btn>
        </div>
      </q-toolbar>

      <q-toolbar
        class="q-px-md-xl bg-white text-black"
        style="height:55px"
      >
        <div class="text-h6">
          <q-avatar class="q-mr-sm">
            <img src="/statics/jieIcons/apple-touch-icon-180x180.png" alt="">
          </q-avatar>
          <strong>Christ the King</strong> College de Maranding Inc.
        </div>
        <q-space />
        <q-btn
          class="xs"
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />
        <q-tabs
          v-model="tab"
          class=" md text-black"
        >
          <q-tab
            class="text-capitalize"
            v-for="(tab, index) in linkTabs"
            :key="index"
            :name="tab.title"
            :label="tab.title"
          />
          <!-- <q-tab @click="showMyckcm" class="text-capitalize" label="MyCkcm"></q-tab> -->
          <q-route-tab exact="" to="myckcm" class="text-capitalize" label="Myckcm"></q-route-tab>
        </q-tabs>
      </q-toolbar>

    </q-header>

    <q-drawer
      class="xs"
      v-model="leftDrawerOpen"
      bordered
      behavior="mobile"
      content-class="bg-grey-2"
     >
      <q-list >
        <q-item-label header>Essential Links</q-item-label>
        <q-item
          v-for="(tab, index) in linkTabs"
          :key="index"
          clickable
          tag="a"
          target="_blank"
          :href="tab.link"
        >
          <q-item-section avatar>
            <q-icon :name="tab.avatar" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{tab.title}}</q-item-label>
            <q-item-label caption>{{tab.link}}</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
    </q-drawer>

    <q-page-container style="height:1900px !important">
      <q-parallax
        class="motivateParallax"
        :height="560"
      >
        <q-carousel
          height="100%"
          animated
          autoplay
          swipeable
          v-model="slide"
          navigation
          infinite
          class="full-width jieMotivate"
          style="background-color:#000000ab"
        >
          <q-carousel-slide :name="1">
            <!-- <q-card>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque iste atque neque consequuntur aliquid, ea impedit voluptate corrupti quasi architecto consequatur eius alias magnam molestiae distinctio, cum, dolorum expedita perspiciatis?</q-card> -->
          </q-carousel-slide>
          <q-carousel-slide :name="2">test 2</q-carousel-slide>
          <q-carousel-slide :name="3">test 3</q-carousel-slide>
          <q-carousel-slide :name="4">test 4</q-carousel-slide>
        </q-carousel>
      </q-parallax>
      <section
        class="bg-orange-9"
        style="height:400px"
      >

      </section>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: false,
      tab: '',
      slide: 1,
      linkTabs: [
        {
          avatar: 'home',
          title: 'Home',
          link: '#'
        },
        {
          avatar: 'info',
          title: 'About',
          link: '#'
        },
        {
          avatar: 'subject',
          title: 'Programs',
          link: '#'
        },
        {
          avatar: 'format_shapes',
          title: 'Admissions',
          link: '#'
        },
        {
          avatar: 'contact_support',
          title: 'Contact Us',
          link: '#'
        }
      ]
    }
  }

}
</script>

<style >
.jieMotivate .q-btn .q-icon,
.q-btn .q-spinner {
  font-size: 10px !important;
}

.motivateParallax {
  background-image: url("/statics/defaultimages/school1.jpg");
  background-size: cover;
  background-position: 0px -200px;
  background-repeat: no-repeat;
  background-color: #000000ab !Important;
}
</style>
