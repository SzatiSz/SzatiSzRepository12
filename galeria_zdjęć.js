function zmianaobrazu(zmienna) {
                    
        let obraz = document.getElementById("obraz")
        obraz.setAttribute('src', zmienna) // najpierw podajemy w nawaisie jaki atrybut,a nastepnie na co zmieniamy

                }

function ikona() {
    let ikona = document.getElementById('ikona')
         if(ikona.value==0) {
                    
        ikona.value=1;
        ikona.setAttribute('src', 'icon-on.png')
        }
        else{
        ikona.value=0;
        ikona.setAttribute('src', 'icon-off.png')
        }
                }