let zvE
let est
let einKomstr
function berechne() {
    let jahr = document.getElementById('jahr').value
    // console.log(jahr)
    if (jahr == 2020) {
        // console.log('Ich berechne fur 2020')
        if (document.getElementById('single').checked) {
            zvE = Number(document.getElementById('zvE1').value)
           
        } else {
            zvE = (Number(document.getElementById('zvE1').value) + Number(document.getElementById('zvE2').value)) / 2
        }
        
        
      
        
        if (zvE <= 9408) {
            est = 0
           
        } else if (zvE >= 9409 && zvE <= 14532) {
            let y = (zvE - 9408) / 10000
            est = (972.87 * y + 1400) * y
            
        } else if (zvE >= 14533 && zvE <= 57051) {
            let z = (zvE - 14532) / 10000
            est = (212.02 * z + 2397) * z + 972.79
            
        } else if (zvE >= 57052 && zvE <= 270500) {
            est = 0.42 * zvE - 8963.74
            
        } else if (zvE >= 270501) {
            est = 0.45 * zvE - 17078.74
            
        }
        if (document.getElementById('single').checked) {
            einKomstr = est
            
            
        } else {
            einKomstr = (est * 2)
            
        }
        document.getElementById('steuer').innerHTML = einKomstr
        
    }
    else if (jahr == 2019) {
        // console.log('Ich berechne fur 2019')
        if (document.getElementById('single').checked) {
            zvE = Number(document.getElementById('zvE1').value)
           
        } else {
            zvE = (Number(document.getElementById('zvE1').value) + Number(document.getElementById('zvE2').value)) / 2
        }
       
        if (zvE <= 9168) {
            est = 0
           
        } else if (zvE >= 9169 && zvE <= 14254) {
            let y = (zvE - 9168) / 10000
            est = (980.14 * y + 1400) * y
            
        } else if (zvE >= 14255 && zvE <= 55960) {
            let z = (zvE - 14254) / 10000
            est = (216.16 * z + 2397) * z + 965.58
            
        } else if (zvE >= 55961 && zvE <= 265326) {
            est = 0.42 * zvE - 8780.90
            
        } else if (zvE >= 265327) {
            est = 0.45 * zvE - 16740.68
           
        }
        if (document.getElementById('single').checked) {
            einKomstr = est
            
            
        } else {
            einKomstr = (est * 2)
            
        }
        document.getElementById('steuer').innerHTML = einKomstr
        
       
    } else if (jahr == 2018) {
        // console.log('Ich berechne fur 2018')
        if (document.getElementById('single').checked) {
            zvE = Number(document.getElementById('zvE1').value)
           
        } else {
            zvE = (Number(document.getElementById('zvE1').value) + Number(document.getElementById('zvE2').value)) / 2
        }
       
        if (zvE <= 9000) {
            est = 0
           
        } else if (zvE >= 9001 && zvE <= 13996) {
            let y = (zvE - 9000) / 10000
            est = (997.80 * y + 1400) * y
            
        } else if (zvE >= 13997 && zvE <= 54949) {
            let z = (zvE - 13996) / 10000
            est = (220.13 * z + 2397) * z + 948.49
            
        } else if (zvE >= 54950 && zvE <= 260532) {
            est = 0.42 * zvE - 8621.75
            
        } else if (zvE >= 260533) {
            est = 0.45 * zvE - 16437.70
            
        }
        if (document.getElementById('single').checked) {
            einKomstr = est
            
            
        } else {
            einKomstr = (est * 2)
            
        }
        document.getElementById('steuer').innerHTML = einKomstr
        
    }
}

