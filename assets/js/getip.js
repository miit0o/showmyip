function getUserIP(){
    let apiKey = 'bdc_ba0439652fc54d4d8e25a2f56b9a1100';
    $.getJSON('https://api.bigdatacloud.net/data/client-ip', function(data) {
  document.getElementById("userIP").textContent = data.ipString;
});
}