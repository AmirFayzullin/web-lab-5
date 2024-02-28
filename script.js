$(function () {
  $(".datepicker").datepicker({
    language: "es",
    autoclose: true,
    format: "dd/mm/yyyy",
  });
});

$('.basicAutoComplete').autoComplete({
    resolverSettings: {
        url: 'constants/autocomplete-data.json'
    }
});