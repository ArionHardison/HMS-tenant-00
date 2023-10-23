<template>
  <div id="news-single-post">
    <Loading />

    <Header logoColor='dark'/>

    <main id="main" class="site-main">
      <PageTitle name="Terms"/>
      <div id="page-content" class="spacer p-top-xl">
        <div class="wrapper">
          <div class="content">
            <div id="single">
              <div class="row gutter-width-sm">
                <div class="offset-xl-1 col-xl-10 col-lg-10 offset-lg-1 col-md-10 offset-md-1 offset-sm-0 col-sm-12 single-content">
                  <div class="form-group form-group-xs">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets

                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
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
import Loading from '~/components/Loading/Loading';
import Header from '~/components/blocks/header/Header';
import Footer from '~/components/blocks/footer/Footer';
import PageTitle from '~/components/blocks/news-single-post/PageTitle';
import seoTitles from "@/mixins/seo-titles";
export default {
  mixins: [seoTitles],
  components: {
    Loading,
    Header,
    PageTitle,
    Footer
  },
  metaInfo: {
    title: 'Privacy Policy',
  },
  middleware: "guest",
};
</script>
