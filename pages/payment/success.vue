<template>
  <div id="index">
    <Loading/>

    <Header logoColor="dark"/>

    <main id="main" class="site-main">
      <PageTitle name="Payment status"/>
      <div id="page-content" class="spacer p-top-xl">
        <div class="wrapper">
          <div class="content">
            <div id="single">
              <div class="row gutter-width-sm">
                <div
                  class="col-12 single-content text-center"
                >
                  Your payment is being processed, the program will be available soon.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <Footer/>
  </div>
</template>

<script>
import Loading from "~/components/Loading/Loading";
import Header from "~/components/blocks/header/Header";
import Footer from "~/components/blocks/footer/Footer";
import PageTitle from "~/components/blocks/news-single-post/PageTitle";
import SignUpForm from "~/components/Forms/SignUpForm";
import seoTitles from "@/mixins/seo-titles";
export default {
  mixins: [seoTitles],
  components: {
    SignUpForm,
    Loading,
    Header,
    PageTitle,
    Footer,
  },
  metaInfo: {
    title: "Sign Up",
  },
};
</script>
