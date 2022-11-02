<template>
    <form v-on:submit.prevent="submitForm" method="post" action="form.php" id="cf-1" class="contact-form">
        <div class="form-group form-group-xs">
            <p class="input-group gutter-width-xs no-space">
                <span class="gutter-width">
                    <input v-model="form.name" name="cf-1-name-surename" type="text" id="cf-1-name-surename" class="form-control form-lg" placeholder="Your name and surename here *" required="required">
                </span>

                <span class="gutter-width">
                    <select v-model="form.service" name="cf-1-services" id="cf-1-services" class="form-control form-lg">
                        <option value="" disabled selected hidden>Choose a service *</option>
                        <option value="Labaratory analysis">Labaratory analysis</option>
                        <option value="cardiology">Cardiology</option>
                        <option value="neurology">Neurology</option>
                        <option value="dental-service">Dentatal service</option>
                    </select>
                </span>
            </p>
        </div>

        <div class="form-group form-group-xs">
            <p class="input-group gutter-width-xs no-space">
                <span class="gutter-width">
                    <input v-model="form.phone" name="cf-1-name-phone" type="text" id="cf-1-phone" class="form-control form-lg" placeholder="Your phone number here *" required="required">
                </span>

                <span class="gutter-width">
                    <input v-model="form.date" name="cf-1-date" type="text" id="cf-1-date" class="form-control form-lg" placeholder="Appointment date ( dd/mm/yyyy )" value="Appointment date ( dd/mm/yyyy )">
                </span>
            </p>
        </div>

        <div class="form-group form-group-xs">
            <textarea v-model="form.message" name="cf-1-message" id="cf-1-message" class="form-control form-lg" placeholder="Your message here"></textarea>
        </div>

        <div class="form-group form-group-xs mb-0">
            <button type="submit" class="btn btn-primary">Book Now</button>
        </div>

        <transition appear leave-active-class="animated fadeOut">
            <div v-if="callAlert" id="alert" :class="'animated fadeIn alert alert--shadow alert-' + alertClass">
                {{ responseMessage }}
            </div>
        </transition>
    </form>
</template>

<script>

    export default {
        name: 'ContactsForm',
        data() {
            return {
                form: {
                    name: '',
                    service: '',
                    phone: '',
                    message: ''
                },
                successMessage: "Sender's message was sent successfully",
                warningMessage: 'Fill up the form, please!',
                errorMessage: 'Something go wrong. Try again later!',
                responseMessage: '',
                alertClass: '',
                callAlert: false
            }
        },
        methods: {
            async submitForm() {
                this.$axios.post( 'https://store.adveits.com/API/form.php', this.form, {
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json; charset=UTF-8'
                    },
                }, ).then( response => {
                    if ( response.data.status === 'success' ) {
                        this.responseMessage = this.successMessage;
                    }

                    if ( response.data.status === 'warning' ) {
                        this.responseMessage = this.warningMessage;
                    }

                    if ( response.data.status === 'error' ) {
                        this.responseMessage = this.errorMessage;
                    }
                    this.alertClass = response.data.status;
                    this.callAlert  = true;

                    setTimeout( () => {
                        this.callAlert = false;
                    }, 2000 )
                } ).catch( error => {
                    this.responseMessage = this.errorMessage;
                    this.alertClass      = 'danger';
                    this.callAlert       = true;

                    setTimeout( () => {
                        this.callAlert = false;
                    }, 2000 )
                } );
            }
        }
    };
</script>
