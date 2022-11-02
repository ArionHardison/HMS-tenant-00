<template>
  <div id="contacts">
    <Loading />

    <Header logoColor="dark" />

    <main id="main" class="site-main">
      <PageTitle />

      <div id="page-content" class="spacer p-top-xl">
        <div class="wrapper">
          <div class="content">
            <div class="clearfix">
              <GoogleMaps />

              <div class="spacer p-top-xl">
                <div class="title">
                  <h2>Let’s talk or book now</h2>
                </div>

                <div class="row gutter-width-sm with-pb-xl spacer p-top-lg">
                  <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <div class="contacts">
                      <div class="contacts-items">
                        <div class="contacts-item">
                          <div class="contacts-item-description">
                            <p>
                              <a href="mailto:company@domain.com"
                                >company@domain.com</a
                              >
                            </p>
                          </div>

                          <div class="contacts-item-title">
                            <h6>Email</h6>
                          </div>
                        </div>

                        <div class="contacts-item">
                          <div class="contacts-item-description">
                            <p>36 M St, New York, 152, USA</p>
                          </div>

                          <div class="contacts-item-title">
                            <h6>Address</h6>
                          </div>
                        </div>

                        <div class="contacts-item">
                          <div class="contacts-item-description">
                            <p>
                              <a href="tel:005053255350539"
                                >0050 (5325) 535-0539</a
                              >
                            </p>
                          </div>

                          <div class="contacts-item-title">
                            <h6>Phone</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                    <div class="contact-form-shortcode">
                      <ContactsForm />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script>
import Loading from "~/components/Loading/Loading";
import Header from "~/components/blocks/header/Header";
import Footer from "~/components/blocks/footer/Footer";

import PageTitle from "~/components/blocks/contacts/PageTitle";
import GoogleMaps from "~/components/blocks/contacts/GoogleMaps";
import ContactsForm from "~/components/Forms/ContactsForm";

export default {
  components: {
    Loading,
    Header,
    PageTitle,
    ContactsForm,
    GoogleMaps,
    Footer,
  },
  mounted: function () {
    if (process.client) {
      document.body.classList.add("page");
    }
  },
  beforeDestroy() {
    if (process.client) {
      document.body.classList.remove("page");
    }
  },
  metaInfo: {
    title: "Contacts | Bona - Health & Medical Vue JS Template",
    titleTemplate: "%s",
  },
};
</script>
