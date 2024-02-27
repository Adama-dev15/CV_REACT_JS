import $ from "jquery";
import Isotope from "isotope-layout";

export const handlePortfolioWaypointEnter = () => {
  var portfolioIsotope = new Isotope(".portfolio-container", {
    itemSelector: ".portfolio-item",
    layoutMode: "fitRows",
  });

  $("#portfolio-flters li").on("click", function () {
    $("#portfolio-flters li").removeClass("active");
    $(this).addClass("active");

    portfolioIsotope.arrange({ filter: $(this).data("filter") });
  });
};
