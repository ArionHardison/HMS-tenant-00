<template>
  <aside id="aside" class="widget-area">
    <div class="widget">
      <h6 class="widget-title">
        <a title="Content" class="scroll-to-id" href="#content">Content</a>
      </h6>

      <ul>
        <li>
          <a title="Typography" class="scroll-to-id" href="#typography"
            >Typography</a
          >
        </li>
        <li>
          <a title="Icons" class="scroll-to-id" href="#icons">Icons</a>
        </li>
        <li>
          <a title="Images" class="scroll-to-id" href="#images">Images</a>
        </li>
        <li>
          <a title="Tables" class="scroll-to-id" href="#tables">Tables</a>
        </li>
        <li>
          <a title="Figures" class="scroll-to-id" href="#figures">Figures</a>
        </li>
      </ul>
    </div>

    <div class="widget">
      <h6 class="widget-title">
        <a title="Components" class="scroll-to-id" href="#components"
          >Components</a
        >
      </h6>

      <ul>
        <li>
          <a title="Alerts" class="scroll-to-id" href="#alerts">Alerts</a>
        </li>
        <li>
          <a title="Badge" class="scroll-to-id" href="#badge">Badge</a>
        </li>
        <li>
          <a title="Buttons" class="scroll-to-id" href="#buttons">Buttons</a>
        </li>
        <li>
          <a title="Button group" class="scroll-to-id" href="#button-group"
            >Button group</a
          >
        </li>
        <li>
          <a title="Card" class="scroll-to-id" href="#card">Card</a>
        </li>
        <li>
          <a title="Collapse" class="scroll-to-id" href="#collapse">Collapse</a>
        </li>
        <li>
          <a title="Dropdowns" class="scroll-to-id" href="#dropdowns"
            >Dropdowns</a
          >
        </li>
        <li>
          <a title="Forms" class="scroll-to-id" href="#forms">Forms</a>
        </li>
        <li>
          <a title="Input group" class="scroll-to-id" href="#input-group"
            >Input group</a
          >
        </li>
        <li>
          <a title="List group" class="scroll-to-id" href="#list-group"
            >List group</a
          >
        </li>
        <li>
          <a title="Media object" class="scroll-to-id" href="#media-object"
            >Media object</a
          >
        </li>
        <li>
          <a title="Modal" class="scroll-to-id" href="#modal">Modal</a>
        </li>
        <li>
          <a title="Navs" class="scroll-to-id" href="#navs">Navs</a>
        </li>
        <li>
          <a title="Pagination" class="scroll-to-id" href="#pagination"
            >Pagination</a
          >
        </li>
        <li>
          <a title="Pop-up" class="scroll-to-id" href="#pop-up">Pop-up</a>
        </li>
        <li>
          <a title="Scroll" class="scroll-to-id" href="#scroll">Scroll</a>
        </li>
      </ul>
    </div>

    <div class="widget">
      <h6 class="widget-title">
        <a title="Utilities" class="scroll-to-id" href="#utilities"
          >Utilities</a
        >
      </h6>

      <ul>
        <li>
          <a title="Borders" class="scroll-to-id" href="#borders">Borders</a>
        </li>
        <li>
          <a title="Clearfix" class="scroll-to-id" href="#clearfix">Clearfix</a>
        </li>
        <li>
          <a title="Colors" class="scroll-to-id" href="#colors">Colors</a>
        </li>
        <li>
          <a title="Display" class="scroll-to-id" href="#display">Display</a>
        </li>
        <li>
          <a title="Embed" class="scroll-to-id" href="#embed">Embed</a>
        </li>
        <li>
          <a title="Flex" class="scroll-to-id" href="#flex">Flex</a>
        </li>
        <li>
          <a title="Float" class="scroll-to-id" href="#float">Float</a>
        </li>
        <li>
          <a title="Overflow" class="scroll-to-id" href="#overflow">Overflow</a>
        </li>
        <li>
          <a title="Position" class="scroll-to-id" href="#position">Position</a>
        </li>
        <li>
          <a title="Shadows" class="scroll-to-id" href="#shadows">Shadows</a>
        </li>
        <li>
          <a title="Sizing" class="scroll-to-id" href="#sizing">Sizing</a>
        </li>
        <li>
          <a title="Spacing" class="scroll-to-id" href="#spacing">Spacing</a>
        </li>
        <li>
          <a title="Stretched link" class="scroll-to-id" href="#stretched-link"
            >Stretched link</a
          >
        </li>
        <li>
          <a title="Text" class="scroll-to-id" href="#text">Text</a>
        </li>
        <li>
          <a
            title="Vertical alignment"
            class="scroll-to-id"
            href="#vertical-alignment"
            >Vertical alignment</a
          >
        </li>
        <li>
          <a title="Visibility" class="scroll-to-id" href="#visibility"
            >Visibility</a
          >
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  name: "index",
  mounted() {
    if (process.client) {
      window.onscroll = function () {
        var rect = document
          .querySelector("#aside-sticky")
          .getBoundingClientRect();
        var offsetTop = rect.top + window.scrollY;

        var position = window.pageYOffset - offsetTop;
        var parentwidth = window.getComputedStyle(
          document.getElementById("aside-sticky"),
          null
        );
        var parentContainerWidth = parentwidth.getPropertyValue("width");
        var parentPaddingLeft = parentwidth.getPropertyValue("padding-left");
        var parentPaddingRight = parentwidth.getPropertyValue("padding-right");

        var parentContainerWidthSplit = parentContainerWidth.split("px");
        var parentPaddingLeftSplit = parentPaddingLeft.split("px");
        var parentPaddingRightSplit = parentPaddingRight.split("px");

        var parentWidthAfterCalc =
          parentContainerWidthSplit[0] -
          parentPaddingLeftSplit[0] -
          parentPaddingRightSplit[0];

        if (position > 0) {
          document.getElementById("aside").classList.add("sticky-fixed-lg");
          document.getElementById("aside").style.width =
            parentWidthAfterCalc + "px";
        } else {
          document.getElementById("aside").classList.remove("sticky-fixed-lg");
          document.getElementById("aside").style.width = null;
        }
      };

      window.onresize = function () {
        var rect = document
          .querySelector("#aside-sticky")
          .getBoundingClientRect();
        var offsetTop = rect.top + window.scrollY;

        var position = window.pageYOffset - offsetTop;
        var parentwidth = window.getComputedStyle(
          document.getElementById("aside-sticky"),
          null
        );
        var parentContainerWidth = parentwidth.getPropertyValue("width");
        var parentPaddingLeft = parentwidth.getPropertyValue("padding-left");
        var parentPaddingRight = parentwidth.getPropertyValue("padding-right");

        var parentContainerWidthSplit = parentContainerWidth.split("px");
        var parentPaddingLeftSplit = parentPaddingLeft.split("px");
        var parentPaddingRightSplit = parentPaddingRight.split("px");

        var parentWidthAfterCalc =
          parentContainerWidthSplit[0] -
          parentPaddingLeftSplit[0] -
          parentPaddingRightSplit[0];

        if (position > 0) {
          document.getElementById("aside").classList.add("sticky-fixed-lg");
          document.getElementById("aside").style.width =
            parentWidthAfterCalc + "px";
        } else {
          document.getElementById("aside").classList.remove("sticky-fixed-lg");
          document.getElementById("aside").style.width = null;
        }
      };
    }
  },
};
</script>
