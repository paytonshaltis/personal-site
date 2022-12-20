// Disable tooltips on touch devices.
if (!("ontouchstart" in document.documentElement)) {
  $(function () {
    $("[data-bs-toggle='tooltip']").tooltip({
      trigger: "hover",
    });
  });
}
