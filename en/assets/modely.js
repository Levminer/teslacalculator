//? model
let modely_options = () => {
	let modely_options1 = document.getElementById("modely_options1").checked
	let modely_options2 = document.getElementById("modely_options2").checked

	if (modely_options1 || modely_options2 == true) {
		// next
		counter_number = 2
		let modely_color = document.getElementById("modely_color")
		modely_color.style.display = "block"

		// options
		if (modely_options1 == true) {
			price_number += my_options_price[0]

			console.log("Options 1 (Model Y): " + price_number)
		}

		if (modely_options2 == true) {
			price_number += my_options_price[1]

			console.log("Options 2 (Model Y): " + price_number)
		}
	}
}

//? color
let modely_color = () => {
	let modely_color1 = document.getElementById("modely_color1").checked
	let modely_color2 = document.getElementById("modely_color2").checked
	let modely_color3 = document.getElementById("modely_color3").checked
	let modely_color4 = document.getElementById("modely_color4").checked
	let modely_color5 = document.getElementById("modely_color5").checked

	if (modely_color1 || modely_color2 || modely_color3 || modely_color4 || modely_color5 == true) {
		// next
		counter_number = 3
		let modely_tires = document.getElementById("modely_tires")
		modely_tires.style.display = "block"

		// options
		if (modely_color1 == true) {
			price_number += m3_my_color_price[0]

			console.log("Color 1 (Model Y): " + price_number)
		}

		if (modely_color2 == true) {
			price_number += m3_my_color_price[1]

			console.log("Color 2 (Model Y): " + price_number)
		}

		if (modely_color3 == true) {
			price_number += m3_my_color_price[2]

			console.log("Color 3 (Model Y): " + price_number)
		}

		if (modely_color4 == true) {
			price_number += m3_my_color_price[3]

			console.log("Color 4 (Model Y): " + price_number)
		}

		if (modely_color5 == true) {
			price_number += m3_my_color_price[4]

			console.log("Color 5 (Model Y): " + price_number)
		}
	}
}

//? tires
let modely_tires = () => {
	let modely_tires1 = document.getElementById("modely_tires1").checked
	let modely_tires2 = document.getElementById("modely_tires2").checked
	let modely_tires3 = document.getElementById("modely_tires3").checked
	let modely_tires4 = document.getElementById("modely_tires4").checked
	let modely_tires5 = document.getElementById("modely_tires4").checked

	if ((modely_tires1 || modely_tires2 || modely_tires3) == true) {
		// next
		counter_number = 4
		let modely_other = document.getElementById("modely_other")
		modely_other.style.display = "block"

		// options
		if (modely_tires1 == true) {
			price_number += my_tires_price[0]

			console.log("Tires 1 (Model Y): " + price_number)
		}

		if (modely_tires2 == true) {
			price_number += my_tires_price[1]

			console.log("Tires 2 (Model Y): " + price_number)
		}

		if (modely_tires3 == true) {
			price_number += my_tires_price[2]

			console.log("Tires PU (Model Y): " + price_number)
		}

		if (modely_tires4 == true) {
			price_number += my_tires_price[3]

			console.log("Tires2 1 (Model Y): " + price_number)
		}

		if (modely_tires5 == true) {
			price_number += my_tires_price[4]

			console.log("Tires2 2 (Model Y): " + price_number)
		}
	}
}

//? other
let modely_other = () => {
	let modely_other1 = document.getElementById("modely_other1").checked
	let modely_other2 = document.getElementById("modely_other2").checked
	let modely_other3 = document.getElementById("modely_other3").checked
	let modely_other4 = document.getElementById("modely_other4").checked
	let modely_other5 = document.getElementById("modely_other5").checked
	let modely_other6 = document.getElementById("modely_other6").checked

	if ((modely_other1 || modely_other2) && (modely_other3 || modely_other4) && (modely_other5 || modely_other6) == true) {
		// options
		if (modely_other1 == true) {
			price_number += my_other_price[0]

			modely_money()
			console.log("Other 1 (Model Y): " + price_number)
		}

		if (modely_other2 == true) {
			price_number += my_other_price[1]

			modely_money()
			console.log("Other 1 (Model Y): " + price_number)
		}

		if (modely_other3 == true) {
			price_number += autopilot_price[0]

			modely_money()
			console.log("Other2 1 (Model Y): " + price_number)
		}

		if (modely_other4 == true) {
			price_number += autopilot_price[1]

			modely_money()
			console.log("Other2 2 (Model Y): " + price_number)
		}

		if (modely_other5 == true) {
			price_number += my_other_price[2]

			modely_money()
			console.log("Other3 1 (Model Y): " + price_number)
		}

		if (modely_other6 == true) {
			price_number += my_other_price[3]

			modely_money()
			console.log("Other3 1 (Model Y): " + price_number)
		}
	}
}

//? money
let modely_money = () => {
	let currency_value = document.getElementById("currency").value
	let saving_value = document.getElementById("saving").value
	let saved_value = document.getElementById("saved").value
	let vat_value = document.getElementById("vat").value
	let price_final
	let price_symbol

	counter_number = 5

	// price_final
	if (currency_value == 1) {
		price_final = Math.round(usd * price_number)
		price_symbol = " $"
	} else if (currency_value == 2) {
		price_final = Math.round(eur * price_number)
		price_symbol = " €"
	} else if (currency_value == 3) {
		price_final = Math.round(huf * price_number)
		price_symbol = " FT"
	}

	// price_final_vat
	let price_final_vat = Math.round(price_final * vat_value) + price_final

	// month_final & year_final
	let calculator = (+price_final - +saved_value) / +saving_value

	let month_final = Math.round(calculator + 0)
	let year_final = Math.round(calculator / 12)

	// month_final_vat & month_final_vat
	let calculator2 = (+price_final_vat - +saved_value) / +saving_value

	let month_final_vat = Math.round(calculator2 + 0)
	let year_final_vat = Math.round(calculator2 / 12)

	document.getElementById("price").innerText = `Price: ${price_final}${price_symbol} - Price with VAT: ${price_final_vat}${price_symbol}`

	document.getElementById("month").innerText = `${month_final} months you have to work - ${month_final_vat} months you have to work with vat`

	document.getElementById("year").innerText = `That's ${year_final} years! - That's ${year_final_vat} years with vat!`
}
