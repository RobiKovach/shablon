
/*headerTown*/

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function changeActive(k){
    for(i=0;i<20;i++){
        if (k==i)
            document.getElementsByClassName('blockDropdown')[0].getElementsByTagName('a')[i].className = 'active';
        else
            document.getElementsByClassName('blockDropdown')[0].getElementsByTagName('a')[i].className = 'none';
    }
}

/*headerTownPhone*/

function myFunctionPhone() {
    document.getElementById("myDropdownPhone").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-contentPhone");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function changeActive(k){
    for(i=0;i<20;i++){
        if (k==i)
            document.getElementsByClassName('blockDropdown')[0].getElementsByTagName('a')[i].className = 'active';
        else
            document.getElementsByClassName('blockDropdown')[0].getElementsByTagName('a')[i].className = 'none';
    }
}



/*Nav*/


function changeActiveNav(c){
    for(i=0;i<2;i++){
        if (c==i)
            document.getElementsByClassName('blockDropdownNav')[0].getElementsByTagName('a')[i].className = 'activeNav';
        else
            document.getElementsByClassName('blockDropdownNav')[0].getElementsByTagName('a')[i].className = 'none';
    }
}

/*Calc*/

 function func(){
          var num1 = Number(document.getElementById("num1").value);
          var num2 = Number(document.getElementById("num2").value);
          var rub = '₽';
          var result = ((num1*0.12)+num1)/num2;
          result = result.toFixed(2);
          rovno = result+rub;



          document.getElementById("result").innerHTML = rovno;
          }


/*scroll*/
var linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
    V = 1;  // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) { //по клику на ссылку
        e.preventDefault(); //отменяем стандартное поведение
        var w = window.pageYOffset,  // производим прокрутка прокрутка
            hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
        t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
            start = null;
        requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash  // URL с хэшем
            }
        }
    }, false);
}

/*popup*/
let form = document.getElementById('form')
 function openForm() {
    document.getElementById("myForm").style.display = "block";
     form.classList.add('form')
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

var popup = document.querySelector('.form-popup');
document.addEventListener('mousedown', function(e){
    if(e.target.closest('.form-popup') === null){
        popup.style.display = 'none';
        form.classList.remove('form')
    }
});

/*slider*/
function Sim(sldrId) {

  let id = document.getElementById(sldrId);
  if(id) {
    this.sldrRoot = id
  }
  else {
    this.sldrRoot = document.querySelector('.sim-slider')
  };

  // Carousel objects
  this.sldrList = this.sldrRoot.querySelector('.sim-slider-list');
  this.sldrElements = this.sldrList.querySelectorAll('.sim-slider-element');
  this.sldrElemFirst = this.sldrList.querySelector('.sim-slider-element');
  this.leftArrow = this.sldrRoot.querySelector('div.sim-slider-arrow-left');
  this.rightArrow = this.sldrRoot.querySelector('div.sim-slider-arrow-right');
  this.indicatorDots = this.sldrRoot.querySelector('div.sim-slider-dots');

  // Initialization
  this.options = Sim.defaults;
  Sim.initialize(this)
};

Sim.defaults = {

  // Default options for the carousel
  loop: true,     // Бесконечное зацикливание слайдера
  auto: true,     // Автоматическое пролистывание
  interval: 5000, // Интервал между пролистыванием элементов (мс)
  arrows: true,   // Пролистывание стрелками
  dots: true      // Индикаторные точки
};

Sim.prototype.elemPrev = function(num) {
  num = num || 1;

  let prevElement = this.currentElement;
  this.currentElement -= num;
  if(this.currentElement < 0) this.currentElement = this.elemCount-1;

  if(!this.options.loop) {
    if(this.currentElement == 0) {
      this.leftArrow.style.display = 'none'
    };
    this.rightArrow.style.display = 'block'
  };
  
  this.sldrElements[this.currentElement].style.opacity = '1';
  this.sldrElements[prevElement].style.opacity = '0';

  if(this.options.dots) {
    this.dotOn(prevElement); this.dotOff(this.currentElement)
  }
};

Sim.prototype.elemNext = function(num) {
  num = num || 1;
  
  let prevElement = this.currentElement;
  this.currentElement += num;
  if(this.currentElement >= this.elemCount) this.currentElement = 0;

  if(!this.options.loop) {
    if(this.currentElement == this.elemCount-1) {
      this.rightArrow.style.display = 'none'
    };
    this.leftArrow.style.display = 'block'
  };

  this.sldrElements[this.currentElement].style.opacity = '1';
  this.sldrElements[prevElement].style.opacity = '0';

  if(this.options.dots) {
    this.dotOn(prevElement); this.dotOff(this.currentElement)
  }
};

Sim.prototype.dotOn = function(num) {
  this.indicatorDotsAll[num].style.cssText = 'background-color:#BBB; cursor:pointer;'
};

Sim.prototype.dotOff = function(num) {
  this.indicatorDotsAll[num].style.cssText = 'background-color:#556; cursor:default;'
};

Sim.initialize = function(that) {

  // Constants
  that.elemCount = that.sldrElements.length; // Количество элементов

  // Variables
  that.currentElement = 0;
  let bgTime = getTime();

  // Functions
  function getTime() {
    return new Date().getTime();
  };
  function setAutoScroll() {
    that.autoScroll = setInterval(function() {
      let fnTime = getTime();
      if(fnTime - bgTime + 10 > that.options.interval) {
        bgTime = fnTime; that.elemNext()
      }
    }, that.options.interval)
  };

  // Start initialization
  if(that.elemCount <= 1) {   // Отключить навигацию
    that.options.auto = false; that.options.arrows = false; that.options.dots = false;
    that.leftArrow.style.display = 'none'; that.rightArrow.style.display = 'none'
  };
  if(that.elemCount >= 1) {   // показать первый элемент
    that.sldrElemFirst.style.opacity = '1';
  };

  if(!that.options.loop) {
    that.leftArrow.style.display = 'none';  // отключить левую стрелку
    that.options.auto = false; // отключить автопркрутку
  }
  else if(that.options.auto) {   // инициализация автопрокруки
    setAutoScroll();
    // Остановка прокрутки при наведении мыши на элемент
    that.sldrList.addEventListener('mouseenter', function() {clearInterval(that.autoScroll)}, false);
    that.sldrList.addEventListener('mouseleave', setAutoScroll, false)
  };

  if(that.options.arrows) {  // инициализация стрелок
    that.leftArrow.addEventListener('click', function() {
      let fnTime = getTime();
      if(fnTime - bgTime > 1000) {
        bgTime = fnTime; that.elemPrev()
      }
    }, false);
    that.rightArrow.addEventListener('click', function() {
      let fnTime = getTime();
      if(fnTime - bgTime > 1000) {
        bgTime = fnTime; that.elemNext()
      }
    }, false)
  }
  else {
    that.leftArrow.style.display = 'none'; that.rightArrow.style.display = 'none'
  };

  if(that.options.dots) {  // инициализация индикаторных точек
    let sum = '', diffNum;
    for(let i=0; i<that.elemCount; i++) {
      sum += '<span class="sim-dot"></span>'
    };
    that.indicatorDots.innerHTML = sum;
    that.indicatorDotsAll = that.sldrRoot.querySelectorAll('span.sim-dot');
    // Назначаем точкам обработчик события 'click'
    for(let n=0; n<that.elemCount; n++) {
      that.indicatorDotsAll[n].addEventListener('click', function() {
        diffNum = Math.abs(n - that.currentElement);
        if(n < that.currentElement) {
          bgTime = getTime(); that.elemPrev(diffNum)
        }
        else if(n > that.currentElement) {
          bgTime = getTime(); that.elemNext(diffNum)
        }
        // Если n == that.currentElement ничего не делаем
      }, false)
    };
    that.dotOff(0);  // точка[0] выключена, остальные включены
    for(let i=1; i<that.elemCount; i++) {
      that.dotOn(i)
    }
  }
};

new Sim("first"); new Sim("second"); new Sim("third");






