
let input = document.getElementsByClassName('input');






function calcBTN (){

    
 

    // declare output 
    const outputYears = document.getElementById('outputYears');
    const outputMonth = document.getElementById('outputMonths');
    const outputDays = document.getElementById('outputDays');

    const days = parseInt( input[0].value);
    const month = parseInt( input[1].value); 
    const year = parseInt( input[2].value);

    // initialize date
    const isoDate = new Date().toISOString();
    const currentDate = new Date(isoDate);

    const userDate = new Date(`${year}-${month}-${days}`);

    const timeDiff = currentDate.getTime() - userDate.getTime();
    const diffDate = new Date(timeDiff);

    // Calculate years, months, and remaining days
    const yearsDiff = diffDate.getUTCFullYear() - 1970;
    const monthsDiff = diffDate.getUTCMonth();
    const remainingDays = diffDate.getUTCDate() - 2 ;
    

    let validDay =  (validDay) =>{
        try {
            if(days >= 1 && days <= 31){
                const date = new Date(year, month - 1, days); // Subtract 1 from month
                if (date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === days) {
                    return validDay = true;
                } else {
                    return validDay = false;
                }
            }
            else{
                return validDay = false;
            }
        } catch (error) {
            return validDay = false;
        }
    };


    let validMonth = month >= 1 && month <= 12;
    let validYear = year <= currentDate.getFullYear();

   
   if(days,month, year){

        if(validDay() && validMonth && validYear){
            errorLabel('', 0, false);
            errorLabel('',1, false);
            errorLabel('',2, false);

            


            

            outputDays.innerHTML = remainingDays;
            outputMonth.innerHTML = monthsDiff;
            outputYears.innerHTML = yearsDiff;

            // Add the focus-in-expand class to trigger the animation
            outputDays.classList.add('focus-in-expand');
            outputMonth.classList.add('focus-in-expand');
            outputYears.classList.add('focus-in-expand');

            // Remove the focus-in-expand class after the animation completes
            outputDays.addEventListener('animationend', () => {
                outputDays.classList.remove('focus-in-expand');
            });

            outputMonth.addEventListener('animationend', () => {
                outputMonth.classList.remove('focus-in-expand');
            });

            outputYears.addEventListener('animationend', () => {
                outputYears.classList.remove('focus-in-expand');
            });
        }    
        else{
            if(!validDay()){
                errorLabel('invalid-day', 0, true);
                outputDays.innerHTML = '--';
            }
            if(!validMonth){
                errorLabel('invalid-mm', 1, true);
                ouputMonth.innerHTML = '--';
            }
            if(!validYear){
                errorLabel('no-field', 2, true)
                outputYears.innerHTML = '--'
            }
        }

   }else{

  
        if(!days){
            errorLabel('no-field', 0, true);
            outputDays.innerHTML = '--';
        }
                             
        

        if(!month){
            errorLabel('no-field', 1, true); 
            outputMonth.innerHTML = '--';
        }
        


        if(!year){
            errorLabel('no-field', 2, true)
            outputYears.innerHTML = '--';
        }
            
   }
   
    
   /*
    if(days){
        
        if(days >= 1 && days <= 31){

            errorLabel('', 0, false);
            outputDays.innerHTML = remainingDays;
            
        }
        else{
            errorLabel('invalid-day', 0, true);
            outputDays.innerHTML = '--'
        }
       
    }
    else{
        errorLabel('no-field', 0, true);
        outputDays.innerHTML = '--';
    }
    

    if(month){
       
        if(month >= 1 && month <= 12){

            errorLabel('',1, false);
            ouputMonth.innerHTML = monthsDiff;
        }
        else{
            errorLabel('invalid-mm', 1, true);
            ouputMonth.innerHTML = '--'
        }
    }
    else{
        errorLabel('no-field', 1, true);
        outputDays.innerHTML = '--';
    }

    if(year){

        if(year <= currentDate.getFullYear()){

            errorLabel('',2, false);
            outputYears.innerHTML = yearsDiff;
        }
        else{
            errorLabel('invalid-year', 2, true);
            outputYears.innerHTML = '--'
        }
        
    }
    else{
        
        errorLabel('no-field', 2, true);
        outputYears.innerHTML = '--'
    }
    */





    
    


    
}

let errorLabel = (context, errorField, checkError) => {
    const errorText = document.getElementsByClassName("errorText")[errorField];
    const errorLabel = document.getElementsByClassName("errorLabel")[errorField];
   
  
    if(context === 'no-field'){
        errorLabel.innerHTML = 'This field is required';
    }
    else if(context === 'invalid-year'){
        errorLabel.innerHTML = 'Must be in the past';
    }
    else if(context === 'invalid-day'){
        errorLabel.innerHTML = 'Must be a valid day';
    }
    else if(context === 'invalid-mm'){
        errorLabel.innerHTML = 'Must be a valid month';
    }


    if(checkError){
        errorText.style.color = '#f56565';
        input[errorField].classList.add('error');
        errorLabel.style.visibility = 'visible';
        errorLabel.style.opacity = 1
    }
    else{
        errorText.style.color = 'hsl(0, 1%, 44%)';
        input[errorField].classList.remove('error');
        errorLabel.style.visibility = 'hidden';   
        errorLabel.style.opacity = 0;
    }
}