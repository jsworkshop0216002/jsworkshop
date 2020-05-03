// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

//bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

//select2
import 'select2'
import 'select2/dist/css/select2.min.css'
window.$ = $

$(document).on("turbolinks:load", function(){
  $('.js-currency-select').select2();
  $(".js-tag-select").select2({
    multiple: true,
    tags: true,
    placeholder: 'Select an option'
  });
})

//sweetalert2
import Swal from 'sweetalert2'
window.Swal = Swal

$(document).on("turbolinks:load", function(){
  $('.js-submit-btn').click(function(e){
    e.preventDefault()
    Swal.fire({
      title: 'Are you sure?',
      text: "You will create a product!?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.value) {
        Swal.fire({
            showConfirmButton: false,
            title: 'Loading...'
          },
        )
        $('.js-form').submit()
      }
    })
  })
})

//datepicker
import 'tempusdominus-bootstrap-4'
import 'tempusdominus-bootstrap-4/build/css/tempusdominus-bootstrap-4.min.css'
import 'font-awesome/css/font-awesome.min.css'