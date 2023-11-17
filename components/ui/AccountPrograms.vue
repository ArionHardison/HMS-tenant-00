<template>
  <div class="row gutter-width-sm">
    <template v-if="programs.length">
    <div
      v-for="program in programs"
      :key="program.id"
      class="col-xl-4 col-lg-4 col-md-4 col-sm-12 mb-4 mt-1"
    >
      <div class="card card-post mt-3" :class="{
                                  'failed-program': program.status===2,
                                  'finished-program': program.status===1,
                                  'running-program': program.status===0,
                                }">
        <div class="card-top position-relative">
          <nuxt-link
            :title="program.name"
            :to="{
                          name: 'follow-program',
                          query: { id: program.id },
                        }"
          >
            <div class="img object-fit overflow-hidden">
              <div class="object-fit-cover transform-scale-h">

                <ImageContent :src="program.program_image" size="md" :tenant="false"/>

              </div>
            </div>
          </nuxt-link>
        </div>
        <div class="card-body text-center">
          <h4 class="card-title text-center">
            <nuxt-link
              title="Follow Program"
              class="program-name"
              :to="{
                            name: 'follow-program',
                            query: { id: program.id },
                          }"
            >{{ program.name }}
            </nuxt-link
            >
          </h4>
          <nuxt-link
            class="btn btn-primary"
            title="Follow Program"
            :to="{
                          name: 'follow-program',
                          query: { id: program.id },
                        }"
          >
            <template v-if="program.status===2">
              Failed Program
            </template>
            <template v-else-if="program.status===1">
              Finished Program
            </template>
            <template v-else>
              Follow Program
            </template>
          </nuxt-link>
        </div>
      </div>
    </div>
    </template>
    <template v-else>
      <div class="col-12 text-center">
        <p class="mt-3">No programs</p>
      </div>
    </template>
  </div>
</template>

<script>
import ImageContent from "@/components/blocks/ImageContent";
export default {
  components: {
    ImageContent
  },
  props: {
    programs: {
      type: Array,
      default: []
    },
  },
};
</script>
<style scoped>
.program-name {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  max-height: 66px;
  font-size: 16px;
}
</style>
<style>

.running-program {
  box-shadow: 0 0 0 0 rgb(100, 183, 70);
  animation: pulse 2s infinite;
}

.failed-program {
  box-shadow: 0 0 0 3px rgb(236, 11, 53);
}

.finished-program {
  box-shadow: 0 0 0 3px #3B89C9;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(100, 183, 70, 0.7);
  }

  70% {
    box-shadow: 0 0 0 10px rgba(100, 183, 70, 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(100, 183, 70, 0);
  }
}
</style>
