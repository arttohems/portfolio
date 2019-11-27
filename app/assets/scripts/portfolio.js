// Object Sizes

var sizeInfo = [
  {
    size: "XS",
    value: 3.49,
    id: "xsId",
    fieldset: "xsSet",
    class: "sizeClass"
  },
  {
    size: "SM",
    value: 3.49,
    id: "smId",
    fieldset: "smSet",
    class: "sizeClass"
  },
  {
    size: "MD",
    value: 3.49,
    id: "mdId",
    fieldset: "mdSet",
    class: "sizeClass"
  },
  {
    size: "LG",
    value: 3.49,
    id: "lgId",
    fieldset: "lgSet",
    class: "sizeClass"
  },
  {
    size: "XL",
    value: 3.49,
    id: "xlId",
    fieldset: "xlSet",
    class: "sizeClass"
  },
  {
    size: "2X",
    value: 4.49,
    id: "x2Id",
    fieldset: "x2Set",
    class: "sizeClass"
  },
  {
    size: "3X",
    value: 6.49,
    id: "x3Id",
    fieldset: "x3Set",
    class: "sizeClass"
  },
  {
    size: "4X",
    value: 7.89,
    id: "x4Id",
    fieldset: "x4Set",
    class: "sizeClass"
  }
];

/* Object Sizes

var printPrices = [{
count: 1,
pricing: {
    t1: 3.60,
    t2: 3.20,
    t3: 2.40,
    t4: 1.60,
    t5: 0.85,
    t6: 0.80,
    t7: 0.75,
    t8: 0.70,
    t9: 0.65,
    t10: 0.60,
    t11: 0.55,
    t12: 0.50
},
set_up: 35.00,
min: 1,
max: 12
},
{
count: 2,
pricing: [3.85,3.40,2.55,1.70,1.00,0.85,0.80,0.75,0.75,0.65,0.55],
set_up: 70.00,
min: 13,
max: 24
},
{
count: 3,
pricing: [4.10,3.60,2.70,1.80,1.20,0.90,0.85,0.80,0.80,0.70,0.60],
set_up: 105.00,
min: 25,
max: 48
},
{
count: 4,
pricing: [4.35,3.80,2.85,1.90,1.35,1.10,0.90,0.85,0.85,0.75,0.65],
set_up: 140.00,
min: 49,
max: 72
},
{
count: 5,
pricing: [4.60,4.00,3.00,2.00,1.65,1.20,0.95,0.85,0.85,0.70,0.65],
set_up: 175.00,
min: 73,
max: 144
},
{
count: 6,
pricing: [4.85,4.20,3.15,2.25,1.85,1.30,1.05,0.90,0.85,0.75,0.65],
set_up: 210.00,
min: 145,
max: 288
},
{
count: 7,
pricing: [5.10,4.40,3.30,2.50,2.05,1.75,1.15,1.00,0.90,0.80,0.70],
set_up: 245.00,
min: 289,
max: 600
},
{
count: 8,
pricing: [5.35,4.60,3.45,2.80,2.30,1.90,1.40,1.10,0.95,0.85,0.75],
set_up: 280.00,
min: 601,
max: 1200
},
{
count: 9,
pricing: [5.60,4.80,3.60,3.10,2.55,2.15,1.55,1.20,1.10,0.90,0.80],
set_up: 315.00,
min: 1201,
max: 2400
},
{
count: 10,
pricing: [5.85,5.00,3.75,3.40,2.80,2.35,1.70,1.30,1.15,1.00,0.85],
set_up: 350.00,
min: 2401,
max: 5000
},
{
count: 11,
pricing: [6.10,5.20,3.90,3.70,3.05,2.55,1.85,1.20,1.20,1.10,0.90],
set_up: 385.00,
min: 5001,
max: 10000
},
{
count: 12,
pricing: [6.35,5.40,4.05,4.00,3.25,2.75,2.00,1.30,1.25,1.20,0.95],
set_up: 420.00,
min: 10001,
max: 1000000000
}
]
*/

function makeSizeFields(sizeInfo) {
  return `
<fieldset id="${sizeInfo.fieldset}" class="fieldset">
                <form class="form-wrapper" oninput="total_${sizeInfo.size}.value=parseFloat(price_${sizeInfo.size}.value*size_${sizeInfo.id}.value).toFixed(2)">
                <div class="size-wrapper">
                <label class="la-size" for="input size_${sizeInfo.id}"> ${sizeInfo.size} </label>
                <input class="in-size" id="size_${sizeInfo.id}" name="${sizeInfo.id}" type="number" value="" placeholder="0" onblur="calcTotalUnits()" />
                </div>
                <div class="price-wrapper">
                <label class="la-price" for="input price_${sizeInfo.size}"> $/EA </label>
                <input class="in-price" id="price_${sizeInfo.size}" name="price-${sizeInfo.size}" type="number" value=${sizeInfo.value} readonly="readonly">
                </div>
                <div class="total-wrapper">
                <label class="la-total" for="input total_${sizeInfo.size}"> ${sizeInfo.size} $</label>
                <output class="in-total" id="total_${sizeInfo.size}">0</output>
                </div>
                </form>
</fieldset>
    `;
}

// Calc
/*
<datalist>
                `<option data_setUp=${printPrices.set_up}360.00 data_frontPrint=>9</option>`
                <option data_frontSetUp=400.00 data_frontPrint=5.85,5.00,3.75,3.40,2.80,2.35,1.70,1.30,1.15,1.00,0.85>10</option>
                <option data_frontSetUp=440.00 data_frontPrint=6.10,5.20,3.90,3.70,3.05,2.55,1.85,1.20,1.20,1.10,0.90>11</option>
                <option data_frontSetUp=480.00 data_frontPrint=6.35,5.40,4.05,4.00,3.25,2.75,2.00,1.30,1.25,1.20,0.95>12</option>
</datalist>
*/

document.querySelector("#sizeFields").innerHTML = `
${sizeInfo.map(makeSizeFields).join("")}
`;

function calcTotalUnits() {
  var sf = (function() {
    let sizeUnit = document.getElementsByClassName("in-size");
    var totalUnits = 0;
    for (var i = 0; i < sizeUnit.length; i++) {
      if (parseInt(sizeUnit[i].value))
        totalUnits += parseInt(sizeUnit[i].value);
    }
    document.getElementById("allUnits").value = totalUnits;
  })();

  var pf = (function() {
    let priceUnit = document.getElementsByClassName("in-total");
    var totalPrice = 0;
    for (var j = 0; j < priceUnit.length; j++) {
      if (Number(priceUnit[j].value))
        totalPrice += parseFloat(priceUnit[j].value);
    }
    document.getElementById("allPrice").value = parseFloat(totalPrice).toFixed(
      2
    );
  })();

  return sf, pf;
}

var tierValue = (function() {
  var allUnits = document.getElementById("allUnits").innerHTML;
  return (allUnits = 0
    ? 0
    : allUnits > 0 && allUnits < 13
    ? 0
    : allUnits > 12 && allUnits < 37
    ? 1
    : allUnits > 36 && allUnits < 73
    ? 2
    : allUnits > 72 && allUnits < 145
    ? 3
    : allUnits > 144 && allUnits < 289
    ? 4
    : allUnits > 288 && allUnits < 601
    ? 5
    : allUnits > 600 && allUnits < 1501
    ? 6
    : allUnits > 1500 && allUnits < 3001
    ? 7
    : allUnits > 3000 && allUnits < 5001
    ? 8
    : allUnits > 5000 && allUnits < 10001
    ? 9
    : allUnits > 10001
    ? 10
    : 0);
})();
