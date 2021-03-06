/*
 *  BMI and BMR calculator using metric values
 *  Version 0.2
 *
 *  written by A.Hermann 
 *  this software is OpenSourc and is published unter the GPL
 
    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation; either version 2 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License along
    with this program; if not, write to the Free Software Foundation, Inc.,
    51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

    Alexandra Hermann – Beratung, Software, Design 
    Copyright (C) 2013 - 2021 Alexandra Hermann
    Alexandra Hermann – Beratung, Software, Design comes with ABSOLUTELY NO 
    WARRANTY; for details type `show w'. This is free software, and you are 
    welcome to redistribute it under certain conditions; type `show c' for details.

Alexandra Hermann – Beratung, Software, Design, hereby disclaims all copyright 
interest in the program (which makes passes at compilers) written by 
Heinrich Alexandra Hermann.

 */

/**
 * Function to get the BMR by values.
 * Formula by wikipedia:
 * http://en.wikipedia.org/wiki/Basalmetabolic_rate#The_Harris-Benedict_equations
 * @param sex String gender may be m(ale) or f(emale) - single letter
 * @param weight Mixed weight in kg
 * @param size Mixed size in m
 * @param age Mixed age in years
 * @return double returns the BMR for the given parameters
 */
function GetBMR(sex, weight, size, age)
{
	var bmr = 0;
	
	// formula from en.wikipedia.org:
	// http://en.wikipedia.org/wiki/Basal_metabolic_rate#The_Harris-Benedict_equations
	
	if (sex == "m")
	{
		bmr = 66.4730 + (13.7516 * weight) + (5.0033 * (size * 100.0)) - (6.7550 * age);
	}
	else
	{
		bmr = 655.0955 + (9.5634 * weight) + (1.8496 * (size * 100.0)) - (4.6756 * age);
	}
	return bmr;
}

/**
 * Function to get the BMI by values.
 * @param weight Mixed weight in kg
 * @param size Mixed size in m
 * @return double returns the BMI for the given parameters
 */
function GetBMI(weight, size)
{
	var bmi = weight / (size * size);
	return bmi;
}

/**
 * Function to do the calculations. 
 * Reads and writes the parameters from the added form; see bmr_bmi_calc_form.js.
 */
function CalcIt()
{
	var theForm = document.forms["calculator"];
	var s_sex = "w";
	if (theForm.elements[1].checked == true) s_sex = "m";
	var s_weight = theForm.elements["weight"].value;
	var s_height = theForm.elements["height"].value;
	var s_age = theForm.elements["age"].value;
	
	var d_weight = s_weight.replace(/,/g, ".");
	var d_height = s_height.replace(/,/g, ".");
	var d_age = s_age.replace(/,/g, ".");
	
	var d_bmr = GetBMR(s_sex, d_weight, d_height, d_age);
	var d_bmi = GetBMI(d_weight, d_height);
	
	d_bmr = "" + d_bmr;
	d_bmi = "" + d_bmi;
		
	theForm.elements["bmr"].value = d_bmr;
	theForm.elements["bmi"].value = d_bmi;
}
