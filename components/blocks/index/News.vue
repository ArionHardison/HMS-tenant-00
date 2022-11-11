<template>
  <section id="news" class="block spacer p-top-xl mb-4">
    <div class="wrapper">
      <div class="title">
        <h2 class="hr">Most Recent Programs</h2>
      </div>

      <div class="row gutter-width-sm with-pb-lg">
        <div
          v-for="program in programs"
          :key="program.id"
          class="col-xl-4 col-lg-4 col-md-4 col-sm-12"
        >
          <div class="card card-post">
            <div class="card-top position-relative">
              <nuxt-link
                :title="program.name"
                :to="{ name: 'program', query: { id: program.id } }"
              >
                <div class="img object-fit overflow-hidden">
                  <div class="object-fit-cover transform-scale-h">
                    <ImageContent :src="program.program_image" size="sm" class="card-top-img"/>
                  </div>
                </div>
              </nuxt-link>
            </div>

            <div class="card-body">
              <div class="card-meta">
                <p>
                  <span
                    ><nuxt-link
                      class="btn btn-lg btn-before-horbar btn-link border-0 p-0 min-w-auto link-no-space"
                      :to="{ name: 'program', query: { id: program.id } }"
                      >{{ program.category }}</nuxt-link
                    ></span
                  >
                </p>
              </div>

              <h4 class="card-title">
                <nuxt-link
                  title="Which Diagnostic Should I Choose?"
                  :to="{ name: 'program', query: { id: program.id } }"
                  >{{ program.name }}</nuxt-link
                >
              </h4>

              <p class="card-text cut-text" v-html="program.description"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ImageContent from "@/components/blocks/ImageContent";
export default {
  name: "News",
  components: {ImageContent},
  data() {
    return {
      programs: null,
    };
  },
  async mounted() {
    this.programs = await this.get("public/get-recent-programs");
  },
};
</script>
<style scoped>
.cut-text {
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  height: 5.2em;
  white-space: nowrap;
}
</style>
