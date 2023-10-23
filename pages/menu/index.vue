<template>
  <div id="news-single-post">
    <Loading />

    <Header logoColor="dark" />

    <main id="main" class="site-main">
      <PageTitle name="Menu" />

      <div id="page-content" class="spacer p-top-xl">
        <div class="wrapper">
          <div class="content">
            <div id="single">
              <div class="row gutter-width-sm">
                <div
                  class="col-xl-8 col-lg-8 col-md-8 col-sm-12 single-content"
                >
                  <MenuCategory
                    v-for="(category, categoryIndex) in categories"
                    :id="category.name.replace(/\s/g, '')"
                    :key="categoryIndex"
                    :image="category.image"
                    :name="category.name"
                  >
                    <MenuListItem
                      v-for="(item, itemIndex) in category.items"
                      :key="itemIndex"
                      :item="item"
                    />
                  </MenuCategory>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <aside id="aside" class="widget-area">
                    <MenuItems />
                  </aside>
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
import PageTitle from "~/components/blocks/news-single-post/PageTitle";
import Meta from "~/components/blocks/news-single-post/Meta";
import Description from "~/components/blocks/news-single-post/Description";
import Tags from "~/components/blocks/news-single-post/Tags";
import Comments from "~/components/blocks/news-single-post/Comments";
import Sidebar from "~/components/blocks/news/Sidebar";
import MenuItems from "~/components/blocks/sidebar/MenuItems";
import MenuCategory from "~/components/blocks/menu/MenuCategory";
import MenuListItem from "~/components/blocks/menu/MenuListItem";
import seoTitles from "@/mixins/seo-titles";
export default {
  mixins: [seoTitles],
  components: {
    MenuListItem,
    MenuCategory,
    MenuItems,
    Loading,
    Header,
    PageTitle,
    Meta,
    Description,
    Tags,
    Comments,
    Sidebar,
    Footer,
  },
  mounted: function () {
    if (process.client) {
      document.body.classList.add("single-post");
    }
  },
  data() {
    return {
      categories: [
        {
          name: "Burgers",
          image: "img/demo/menu/menu-title-burgers.jpg",
          items: [
            {
              name: "American Classic",
              description: "Beef, Cheese, Potato, Onion, Fries",
              price: 9.0,
            },
            {
              name: "Chicken Burger",
              description: "Chicken, Cheese, Potato, Onion, Fries",
              price: 9.0,
            },
            {
              name: "Angus Burger",
              description: "Angues Beef, Pickles, Potato, Onion, Fries",
              price: 14.0,
            },
            {
              name: "Russian Special",
              description: "Beef, Cheese, Potato, Onion, Fries",
              price: 12.0,
            },
            {
              name: "Tranditional Beef",
              description: "Chicken, Cheese, Potato, Onion, Fries",
              price: 9.0,
            },
            {
              name: "Burger of a Month",
              description: "Angues Beef, Pickles, Potato, Onion, Fries",
              price: 19.0,
            },
          ],
        },
        {
          name: "Deserts",
          image: "img/demo/menu/menu-title-desserts.jpg",
          items: [
            {
              name: "American Classic",
              description: "Beef, Cheese, Potato, Onion, Fries",
              price: 9.0,
            },
            {
              name: "Chicken Burger",
              description: "Chicken, Cheese, Potato, Onion, Fries",
              price: 9.0,
            },
            {
              name: "Angus Burger",
              description: "Angues Beef, Pickles, Potato, Onion, Fries",
              price: 14.0,
            },
            {
              name: "Russian Special",
              description: "Beef, Cheese, Potato, Onion, Fries",
              price: 12.0,
            },
            {
              name: "Tranditional Beef",
              description: "Chicken, Cheese, Potato, Onion, Fries",
              price: 9.0,
            },
            {
              name: "Burger of a Month",
              description: "Angues Beef, Pickles, Potato, Onion, Fries",
              price: 19.0,
            },
          ],
        },
        {
          name: "Drinks",
          image: "img/demo/menu/menu-title-drinks.jpg",
          items: [
            {
              name: "American Classic",
              description: "Beef, Cheese, Potato, Onion, Fries",
              price: 9.0,
            },
            {
              name: "Chicken Burger",
              description: "Chicken, Cheese, Potato, Onion, Fries",
              price: 9.0,
            },
            {
              name: "Angus Burger",
              description: "Angues Beef, Pickles, Potato, Onion, Fries",
              price: 14.0,
            },
            {
              name: "Russian Special",
              description: "Beef, Cheese, Potato, Onion, Fries",
              price: 12.0,
            },
            {
              name: "Tranditional Beef",
              description: "Chicken, Cheese, Potato, Onion, Fries",
              price: 9.0,
            },
            {
              name: "Burger of a Month",
              description: "Angues Beef, Pickles, Potato, Onion, Fries",
              price: 19.0,
            },
          ],
        },
        {
          name: "Pasta",
          image: "img/demo/menu/menu-title-pasta.jpg",
          items: [
            {
              name: "American Classic",
              description: "Beef, Cheese, Potato, Onion, Fries",
              price: 9.0,
            },
            {
              name: "Chicken Burger",
              description: "Chicken, Cheese, Potato, Onion, Fries",
              price: 9.0,
            },
            {
              name: "Angus Burger",
              description: "Angues Beef, Pickles, Potato, Onion, Fries",
              price: 14.0,
            },
            {
              name: "Russian Special",
              description: "Beef, Cheese, Potato, Onion, Fries",
              price: 12.0,
            },
            {
              name: "Tranditional Beef",
              description: "Chicken, Cheese, Potato, Onion, Fries",
              price: 9.0,
            },
            {
              name: "Burger of a Month",
              description: "Angues Beef, Pickles, Potato, Onion, Fries",
              price: 19.0,
            },
          ],
        },
        {
          name: "Pizza",
          image: "img/demo/menu/menu-title-pizza.jpg",
          items: [
            {
              name: "American Classic",
              description: "Beef, Cheese, Potato, Onion, Fries",
              price: 9.0,
            },
            {
              name: "Chicken Burger",
              description: "Chicken, Cheese, Potato, Onion, Fries",
              price: 9.0,
            },
            {
              name: "Angus Burger",
              description: "Angues Beef, Pickles, Potato, Onion, Fries",
              price: 14.0,
            },
            {
              name: "Russian Special",
              description: "Beef, Cheese, Potato, Onion, Fries",
              price: 12.0,
            },
            {
              name: "Tranditional Beef",
              description: "Chicken, Cheese, Potato, Onion, Fries",
              price: 9.0,
            },
            {
              name: "Burger of a Month",
              description: "Angues Beef, Pickles, Potato, Onion, Fries",
              price: 19.0,
            },
          ],
        },
        {
          name: "Sushi",
          image: "img/demo/menu/menu-title-sushi.jpg",
          items: [
            {
              name: "American Classic",
              description: "Beef, Cheese, Potato, Onion, Fries",
              price: 9.0,
            },
            {
              name: "Chicken Burger",
              description: "Chicken, Cheese, Potato, Onion, Fries",
              price: 9.0,
            },
            {
              name: "Angus Burger",
              description: "Angues Beef, Pickles, Potato, Onion, Fries",
              price: 14.0,
            },
            {
              name: "Russian Special",
              description: "Beef, Cheese, Potato, Onion, Fries",
              price: 12.0,
            },
            {
              name: "Tranditional Beef",
              description: "Chicken, Cheese, Potato, Onion, Fries",
              price: 9.0,
            },
            {
              name: "Burger of a Month",
              description: "Angues Beef, Pickles, Potato, Onion, Fries",
              price: 19.0,
            },
          ],
        },
      ],
    };
  },
  beforeDestroy() {
    if (process.client) {
      document.body.classList.remove("single-post");
    }
  },
  metaInfo: {
    title: "News single post | Bona - Health & Medical Vue JS Template",
    titleTemplate: "%s",
  },
};
</script>
