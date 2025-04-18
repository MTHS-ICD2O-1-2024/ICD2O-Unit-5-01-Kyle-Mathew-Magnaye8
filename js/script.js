// Copyright (c) 2025 Kyle Matthew Magnaye
//
// Created by: Kyle Matthew Magnaye
// Created on: Apr 2025
// This file contains the JS functions for index.html

const randomNumber = Math.floor(Math.random() * 6) + 1

/**
 * This function checks if the user has selected the random number from above
 */
// eslint-disable-next-line no-unused-vars
function checkNumber() {
  // input
  const userNumber = parseInt(document.getElementById('user-number').value)

  // process and output
  if (userNumber === randomNumber) {

    document.getElementById('result').innerHTML =
      '<p>You have guessed the correct number!</p>'
  } else {
    document.getElementById('result').innerHTML =
      '<p>You have guessed the wrong number!' +
      '<br/>The correct number was: ' + randomNumber + '</p>'
  }
}

