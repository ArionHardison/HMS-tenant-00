<template>
  <div id="google-maps" class="footer-no-border" ref="map"></div>
</template>

<script>
import MapStyles from "./googleMapsStyle.json";

export default {
  name: "GoogleMaps",
  data() {
    return {
      mapsStyle: MapStyles.mapsStyles,
    };
  },
  methods: {
    checkAndAttachMapScript() {
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
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyD9TrJVxlYSCKv8WHGcR2fHTg-Ltx1beWU";
      document.getElementsByTagName("head")[0].appendChild(script);
    },
    initMap() {
      var address = ["189 Bedford Ave, Brooklyn, NY 11211, United States"];
      var center_latlng = new google.maps.LatLng(40.7741156, -73.9603525);

      let map = new window.google.maps.Map(this.$refs.map, {
        center: center_latlng,
        zoom: 16,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        styles: this.mapsStyle,
      });

      let icon = {
        url: "img/demo/16_img.png",
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
    },
  },
  mounted() {
    if (process.client) {
      this.checkAndAttachMapScript();
    }
  },
};
</script>
