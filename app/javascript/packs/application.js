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

//sweetalert2
import Swal from 'sweetalert2'
window.Swal = Swal

//datepicker
import 'tempusdominus-bootstrap-4'
import 'tempusdominus-bootstrap-4/build/css/tempusdominus-bootstrap-4.min.css'
import 'font-awesome/css/font-awesome.min.css'