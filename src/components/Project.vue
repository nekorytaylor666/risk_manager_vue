<template>
  <v-container fluid>
    <v-row dense>
      <v-col v-for="project in projects" :key="project.id" col="12">
        <v-hover v-slot:default="{ hover }">
          <v-card to="/schedule">
            <v-img
              src="https://image.flaticon.com/icons/svg/1998/1998711.svg"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="400px"
            >
              <v-card-title>{{ project.name }}</v-card-title>
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out secondary darken-2 v-card--reveal display-3 white--text"
                  style="height: 100%;"
                >
                  Open project
                </div>
              </v-expand-transition>
            </v-img>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { db } from "@/firebase";
export default {
  computed: {
    projects() {
      return this.$store.state.projectStore.projects;
    }
  },
  async mounted() {
    const snapshot = await db.collection("projects").get();
    const projects = [];
    snapshot.forEach(doc => {
      projects.push({ id: doc.id, ...doc.data() });
    });
    this.$store.state.projectStore.projects = projects;
  }
};
</script>

<style lang="scss">
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.8;
  position: absolute;
  width: 100%;
}
</style>
