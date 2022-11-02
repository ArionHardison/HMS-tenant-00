<template>
    <div id="our-doctors" class="block spacer p-top-xl">
        <div class="wrapper">
            <div class="title">
                <h2 class="hr">Our Doctors</h2>
            </div>

            <div class="row gutter-width-sm with-pb-md">

                <div v-for="doctorsItem in doctorsItems" :key="doctorsItem.id" class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                    <div class="team-member">
                        <div class="team-member-top">
                            <div class="img object-fit">
                                <div class="object-fit-cover">
                                    <img :src="doctorsItem.imgSrc" :alt="doctorsItem.name">
                                </div>
                            </div>

                            <div class="team-member-position">
                                <p>{{ doctorsItem.position }}</p>
                            </div>
                        </div>

                        <div class="team-member-content">
                            <h4 class="team-member-t-head">{{ doctorsItem.name }}</h4>

                            <div class="team-member-description">
                                <p>{{ doctorsItem.description }}</p>
                            </div>
                        </div>

                        <nav class="team-member-nav-items">
                            <ul class="nav">
                                <li class="nav-item">
                                    <a title="Facebook" :href="doctorsItem.facebook"><i class="fab fa-facebook-f"></i></a>
                                </li>

                                <li class="nav-item">
                                    <a title="LinkedIn" :href="doctorsItem.linkedIn"><i class="fab fa-linkedin-in"></i></a>
                                </li>

                                <li class="nav-item">
                                    <a title="Instagram" :href="doctorsItem.insta"><i class="fab fa-instagram"></i></a>
                                </li>

                                <li class="nav-item">
                                    <a title="Twitter" :href="doctorsItem.twitter"><i class="fab fa-twitter"></i></a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OurDoctors',
        data() {
            return {
                doctorsItems: DoctorsList.doctorsData
            }
        }
    };
</script>
