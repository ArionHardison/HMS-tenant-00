<template>
    <div id="our-doctors" class="block spacer p-top-xl">
        <div class="wrapper">
            <div class="title">
                <h2 class="hr">Care Team Members</h2>
            </div>

            <div class="row gutter-width-sm with-pb-md">

              <template v-for="member in team" >
                <div  class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                    <div class="team-member">
                        <div class="team-member-top">
                            <div class="img object-fit">
                                <div class="object-fit-cover">
                                    <ImageContent :src="member.profile_cover" :alt="member.full_name" :tenant="true" size="md"/>
                                </div>
                            </div>

                            <div class="team-member-position">
                                <p>{{ member.roles[member.roles.length-1] }}</p>
                            </div>
                        </div>

                        <div class="team-member-content">
                            <h4 class="team-member-t-head">{{ member.full_name }}</h4>

                            <div class="team-member-description">
                                <p>{{ member.description }}</p>
                            </div>
                        </div>

                        <nav class="team-member-nav-items">
                            <ul class="nav">
                                <li class="nav-item">
                                    <a title="Facebook" :href="member.facebook_profile" target="_blank"><i class="fab fa-facebook-f"></i></a>
                                </li>

                                <li class="nav-item">
                                    <a title="LinkedIn" :href="member.linkedin_profile" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                                </li>

                                <li class="nav-item">
                                    <a title="Instagram" :href="member.instagram_profile" target="_blank"><i class="fab fa-instagram"></i></a>
                                </li>

                                <li class="nav-item">
                                    <a title="Twitter" :href="member.twitter_profile" target="_blank"><i class="fab fa-twitter"></i></a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
              </template>
            </div>
        </div>
    </div>
</template>

<script>
    import ImageContent from "@/components/blocks/ImageContent.vue";
    export default {
        components: {
          ImageContent
        },
        name: 'OurDoctors',
        props: {
          team: {
            type: Array,
            default: []
          }
        },
    };
</script>
