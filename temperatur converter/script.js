const calculateTemp=()=>{
    const numberTemp=document.getElementById('temp').value;
    const tempselected=document.getElementById('temp_diff');
    const valuetemp=temp_diff.options[tempselected.selectedIndex].value;
    
    const celtofeh=(cel)=>{
        let fahrenheit=Math.round((cel*9/5)+32);
        return fahrenheit;
    }
    const fehtocel=(fehr)=>{
        let celcius=Math.round((fehr-32)*5/9);
        return celcius;
    }
    let result;
    if(valuetemp=='cel'){
        result=celtofeh(numberTemp);
        document.getElementById('resultcontainer').innerHTML=`=${result}°Fahrenheit`
    }else{
        result=fehtocel(numberTemp);
        document.getElementById('resultcontainer').innerHTML=`=${result}°Celcius`
    }
}