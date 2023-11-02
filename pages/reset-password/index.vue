<template>
  <div id="index">
    <Loading/>

    <Header logoColor='dark'/>

    <main id="main" class="site-main">
      <PageTitle name="Reset password"/>
      <div id="page-content" class="spacer p-top-xl">
        <div class="wrapper">
          <div class="content">
            <div id="single">
              <div class="row gutter-width-sm">
                <div
                  class="offset-xl-4 col-xl-4 col-lg-4 offset-lg-4 col-md-6 offset-md-3 offset-sm-0 col-sm-12 single-content">
                  <div class="form-group form-group-xs">
                    <ResetPasswordForm/>
                  </div>
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
import Loading from '~/components/Loading/Loading';
import Header from '~/components/blocks/header/Header';
import Footer from '~/components/blocks/footer/Footer';
import PageTitle from '~/components/blocks/news-single-post/PageTitle';
import ResetPasswordForm from "~/components/Forms/ResetPasswordForm";
import seoTitles from "@/mixins/seo-titles";

export default {
  mixins: [seoTitles],
  components: {
    ResetPasswordForm,
    Loading,
    Header,
    PageTitle,
    Footer
  },
};
</script>
