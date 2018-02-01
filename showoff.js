let currentCreaIndex = 0,
  transitionMs = 390,
  baseClass = 'col span_2_of_4',
  creaDiv,
  creaLink;

window.onload = function() {
  creaDiv = document.querySelector('#crea');
  creaLink = document.querySelector('#crea-link');
  selectCreation(creations[currentCreaIndex]);
}

let colorEvents = [];

function nextShow() {
  currentCreaIndex++;
  if (currentCreaIndex == creations.length) currentCreaIndex = 0;

  creaDiv.setAttribute('class', `${baseClass} move-right`);

  window.setTimeout(() => {
    selectCreation(creations[currentCreaIndex]);
  }, transitionMs);
}

function prevShow() {
  currentCreaIndex--;
  if (currentCreaIndex < 0) currentCreaIndex = creations.length - 1;

  creaDiv.setAttribute('class', `${baseClass} move-left`);

  window.setTimeout(() => {
    selectCreation(creations[currentCreaIndex]);
  }, transitionMs);
}

function selectCreation(creation) {
  creaDiv.innerHTML = `<p>${creation.name}</p>`
  creaDiv.setAttribute('class', `${baseClass} pop`);

  creaLink.href = creation.url;

  colorEvents = [];
  document.querySelector('#crea-params').innerHTML = '';

  let params = {};
  for (let p of creation.params) {
    params[p.key] = p.value;
  }

  creaDiv.innerHTML = "<div></div>";

  Wb(creation.name).init('#crea > div', params).then((crea) => {
    let c = crea[0];
    for (let [key, fn] of creation.functions.entries()) {
      let elt;
      let isColor = false;
      switch (fn.type) {
        case 'color':
          let colorFn = function(jscolor) {
            c[fn.key]('#' + jscolor);
          };
          if (fn.nbParams == 2) { // Color main with its complementary
            colorFn = function(jscolor) {
              c[fn.key]('#' + jscolor, '#' + ('000000' + (('0xffffff' ^ '0x' + jscolor).toString(16))).slice(-6));
            }
          }

          colorEvents.push(colorFn);

          elt = document.createElement('input');
          elt.setAttribute('class', `js-color {onFineChange: 'colorEvents[${key}](this)', value:'${creation.params[key].value.substring(1, creation.params[key].value.length)}'}`);
          elt.setAttribute('id', `c-${fn.key}`);
          elt.style.outline = 'none';
          elt.style.border = 'none';
          elt.style.height = '33px';
          elt.style.width = '100%';
          elt.style.textAlign = 'center';

          isColor = true;

          break;
        case 'text':
          elt = document.createElement('input');
          elt.type = 'text';
          elt.value = creation.params[key].value;
          elt.onkeyup = function(evt) {
            c[fn.key]((evt.srcElement || evt.target).value);
          };
          break;
        case 'number':
          elt = document.createElement('input');
          elt.type = 'range';
          elt.value = creation.params[key].value;
          elt.min = fn.minRange;
          elt.max = fn.maxRange;
          elt.setAttribute('class', 'slider');
          elt.oninput = function(evt) {
            c[fn.key]((evt.srcElement || evt.target).value);
          }
          break;

      }
      buildParam(fn.name, elt, isColor);
    }
  });
  window.setTimeout(() => {
    creaDiv.setAttribute('class', `${baseClass}`);
  }, transitionMs);
}

function buildParam(name, elt, isColor) {
  let main = document.querySelector('#crea-params');

  let wrapper = document.createElement('div');
  wrapper.setAttribute('class', 'group');

  let wrapLabel = document.createElement('div');
  wrapLabel.setAttribute('class', 'col span_1_of_4 param-name');
  wrapLabel.innerHTML = name;

  let wrapInput = document.createElement('div');
  wrapInput.setAttribute('class', 'col span_3_of_4');
  wrapInput.appendChild(elt);

  wrapper.appendChild(wrapLabel);
  wrapper.appendChild(wrapInput);

  main.appendChild(wrapper);

  if (isColor) {
    jscolor.installByClassName('js-color');
  }
}
