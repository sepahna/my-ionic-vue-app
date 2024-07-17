<template>
  <ion-app>
    <ion-menu side="start" menu-id="first" content-id="main-content">
      <ion-header>
        <ion-toolbar>
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list>
          <ion-item button @click="navigate('/home')">Home</ion-item>
          <ion-item button @click="navigate('/radio')">Radio</ion-item>
          <ion-item button @click="navigate('/library')">Library</ion-item>
          <ion-item button @click="navigate('/search')">Search</ion-item>
        </ion-list>
      </ion-content>
    </ion-menu>

    <div class="ion-page" id="main-content">
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button auto-hide="false"></ion-menu-button>
          </ion-buttons>
          <ion-title>My App</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <router-view />
      </ion-content>

      <ion-tabs>
        <ion-router-outlet></ion-router-outlet>
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="home" href="/home">
            <ion-icon :icon="playCircle" />
            <ion-label>Listen now</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="radio" href="/radio">
            <ion-icon :icon="radio" />
            <ion-label>Radio</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="library" href="/library">
            <ion-icon :icon="library" />
            <ion-label>Library</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="search" href="/search">
            <ion-icon :icon="search" />
            <ion-label>Search</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </div>
  </ion-app>
</template>

<script>
import { playCircle, radio, library, search } from 'ionicons/icons';

export default {
  data() {
    return {
      playCircle,
      radio,
      library,
      search
    };
  },
  methods: {
    navigate(route) {
      this.$router.push(route);
    }
  }
};
</script>

<style>
/* سبک‌های خود را اینجا اضافه کنید */
</style>
