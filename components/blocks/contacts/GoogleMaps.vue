<template>
  <div id="google-maps" v-if="showMap" class="footer-no-border" ref="map" :class="{'hideMap': containerData===null}"></div>
</template>

<script>
import MapStyles from "./googleMapsStyle.json";

export default {
  name: "GoogleMaps",
  props: {
    containerData: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      mapsStyle: MapStyles.mapsStyles,
      showMap: true
    };
  },
  methods: {
    checkAndAttachMapScript() {
      if (process.client) {
        if (window.google && window.google.maps) {
          this.initMap();
          return;
        }

        var self = this;
        var script = document.createElement("script");
        script.onload = function () {
          if (!window.google && !window.google.maps)
            return console.error("no google maps script included");

          self.initMap();
        };

        script.async = true;
        script.defer = true;
        script.src =
          `https://maps.googleapis.com/maps/api/js?key=${this.containerData.jsApiKey}`;
        document.getElementsByTagName("head")[0].appendChild(script);
      }
    },
    isValidKey(key){
      if(key){
        const testUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=${this.containerData.jsApiKey}`;
        fetch(testUrl)
          .then(response => response.json())
          .then(data => {
            if (data.status === "REQUEST_DENIED") {
              console.error('Invalid Google Maps API key.');
              this.showMap = false;
            } else {
              this.showMap = true;
              this.checkAndAttachMapScript();
            }
          })
          .catch(error => {
            console.error('Error validating Google Maps API key:', error);
            this.showMap = false;
          });
      }
      return false;
    },
    initMap() {
      if (process.client) {
        let address = [this.containerData.placeName];
        let center_latlng = new window.google.maps.LatLng(
          this.containerData.placeLat,
          this.containerData.placeLong
        );

        let map = new window.google.maps.Map(this.$refs.map, {
          center: center_latlng,
          zoom: 19,
          zoomControl: false,
          mapTypeControl: false,
          scaleControl: false,
          streetViewControl: false,
          rotateControl: false,
          fullscreenControl: false,
          styles: this.mapsStyle,
        });

        let icon = {
          url: "img/demo/20_img.png",
          size: new window.google.maps.Size(112, 118),
        };

        let geocoder = new window.google.maps.Geocoder();

        for (let i = 0; i < address.length; i++) {
          geocoder.geocode({ address: address[i] }, function (results, status) {
            if (status === "OK") {
              let marker = new window.google.maps.Marker({
                position: results[0].geometry.location,
                icon: icon,
              });

              marker.setMap(map);
              map.setCenter(results[0].geometry.location);
            }
          });
        }
      }
    },
  },
  mounted() {
    if(this.containerData) {
      if(this.containerData.jsApiKey && this.isValidKey(this.containerData.jsApiKey)){
        this.checkAndAttachMapScript();
      }

    }
  },
};
</script>
<style scoped>
.hideMap {
  display: none;
}
</style>
