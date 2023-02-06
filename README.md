
# currencyconverter-simple

Currency Converter Simple

## pseudo-code by Bernhard Hustomo

- there will be input field
- there will be rate (currency rate)
- there will be output field
- there will be button to execute calculation

when submit button clicked:

- what has been entered at input field saved into a variable
- multiply the variable with the rate
- show the output in the output section of the DOM

add async funtion to get api:

- get the rate by using live rate (create fetch function)
- filter the data gotten from the api to get the live rate
- pass the rate to the EventListener
