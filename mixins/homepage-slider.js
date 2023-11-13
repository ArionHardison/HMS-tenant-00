import cloneDeep from "lodash.clonedeep";

export default {
  data(){
    return {
      sliderName: null,
      slidesLoad: false,
      sliderOptions: {
        autoplay: false,
        centerMode: true,
        dots: false,
        navButtons: false,
        infinite: false,
        initialSlide: 1,
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 200,
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 760,
            settings: {
              slidesToShow: 2,
            }
          },

          {
            breakpoint: 900,
            settings: {
              slidesToShow: 3,
            }
          }
        ]
      },
      items: {
        data: []
      },
    }
  },
  methods: {
    scrollIsAllowed(){
      const currentSlide = this.$refs[`${this.sliderName}`].currentSlide;
      const slidesLeft = this.$refs[`${this.sliderName}`].countSlides - currentSlide;
      const breakpoint = this.$refs[`${this.sliderName}`].getCurrentBreakpoint()
      if(slidesLeft<3 && breakpoint>=600){
        return false;
      } else if(slidesLeft===1 && breakpoint<600){
        return false;
      }
      return true;
    },
    async nextSlide(){
      this.$store.commit("setPreloaderState", false);
      if(!this.scrollIsAllowed()){
        const currentSlide = this.$refs[`${this.sliderName}`].currentSlide;
        if(this.items.meta.current_page<this.items.meta.last_page){
          this.slidesLoad = true;
          const loadedItems = cloneDeep(this.items.data);
          this.items.data = [];
          const nextPage = this.items.meta.current_page+1;
          const newSlides = await this.get(`public/get-recent-programs?page=${nextPage}`);
          this.sliderOptions.initialSlide = currentSlide+1;
          this.items.meta = newSlides.meta;
          this.items.data = loadedItems.concat(newSlides.data);
          setTimeout(()=>{
            this.slidesLoad = false;
          }, 300)

        }
        this.$store.commit("setPreloaderState", true);
      }else{
        this.$refs[`${this.sliderName}`].goToNext()
      }
    },
    prevSlide(){
      if(this.isSlideExists()){
        this.$refs[`${this.sliderName}`].goToPrev()
      }
    },
    isSlideExists(){
      return !(this.$refs[`${this.sliderName}`].currentBreakpoint===900 && this.$refs[`${this.sliderName}`].currentSlide===1);
    },
  },
};
