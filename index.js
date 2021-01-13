function myFunction() {
    var a = [
    "Ang pagsusumikap at pagpipilit na kumita ng ikakabuhay ay nagpapahayag ng tunay na pagmamahal sa sarili, sa asawa, anak, kapatid, at kababayan", 
    "Ang hindi magmahal sa sariling wika, daig pa ang hayop at malansang isda.", 
    "Ang hindi marunong lumingon sa pinangalingan ay hindi makakarating sa paroroonan.", 
    "The Filipino Is Worth Dying For", 
    "Puñeta"];
    
    document.getElementById("demo").innerHTML = a[Math.floor(Math.random() * a.length)];
    
}
