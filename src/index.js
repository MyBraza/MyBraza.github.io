import './style.scss'
import $ from 'jquery'

const emailRegEx =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const telRegEx =
  /(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]‌​)\s*)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)([2-9]1[02-9]‌​|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})\s*(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+)\s*)?$/

$(document).ready(function () {
  $('.form').submit(function (e) {
    e.preventDefault()

    let isValid = true

    const nameField = $('.form__input[name="name"]')
    const telField = $('.form__input[name="tel"]')
    const emailField = $('.form__input[name="email"]')
    const name = nameField.val()
    const tel = telField.val()
    const email = emailField.val()

    $('.form__input').removeClass('invalid')

    const agreementCheckbox = $('#agreement')
    const agreementIsChecked = agreementCheckbox.is(':checked')

    agreementCheckbox.removeClass('invalid')

    if (name.length < 1) {
      nameField.addClass('invalid')
      isValid = false
    }
    if (tel.length < 1 || !telRegEx.test(tel)) {
      telField.addClass('invalid')
      isValid = false
    }
    if (email.length < 1 || !emailRegEx.test(email)) {
      emailField.addClass('invalid')
      isValid = false
    }
    if (!agreementIsChecked) {
      agreementCheckbox.addClass('invalid')
      isValid = false
    }

    if (isValid) {
      alert('form is valid')
    }
  })
})
