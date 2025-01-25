var productDetail = [
  {
    product_img_main:"/img/venako_m_on_form.svg",
    text_big:"Венако М",
    text_small:"Стол выполнен из шпона натурального дуба, толщина столешницы 21 мм (18 мм березовая влагостойкая фанера + 3 мм шпон дуба). Торец стола с открытой кромкой. Покрытие столешницы морилка, матовый лак.",
    
  },

]

document.getElementById('item_venako_m').innerHTML = productDetail.map(product => 
    `<div class="product_form_main">
        <div class="product_form_main_img_div">
          <img src="${product.product_img_main}" class="product_form_img_main" alt='#'>
        </div>
        <div class="product_form_main_content_div">
          <div class="product_form_main_content_div_had">
            <span class="product_form_main_content_div_had_spans">
              Главная /
            </span>
            <span class="product_form_main_content_div_had_spans">
              Страница /
            </span>
            <span class="product_form_main_content_div_had_spans">
              Страница /
            </span>
            <span class="product_form_main_content_div_had_spans">
              Страница /
            </span>
            <span class="product_form_main_content_div_had_spans">
              Страница /
            </span>
            <a href="/index.html" class="product_form_main_content_div_had_url">
              Ссылка
            </a>
          </div>
          <div class="product_form_main_content_div_text">
            <div class="product_form_main_content_div_text_big">
              ${product.text_big}
            </div>
            <div class="product_form_main_content_div_text_small">
              ${product.text_small}
            </div>
          </div>
          <div class="product_form_main_content_div_stiles">
            <div class="product_form_main_content_div_stiles_text">
              Форма столешницы
            </div>
            <div class="product_form_main_content_div_stiles_variant">
              <div class="product_form_main_content_div_stiles_variant_venako">
                <div id="rectangle" class="product_form_main_content_div_stiles_variant_venako_rectangle">
                </div>
                <div class="product_form_main_content_div_stiles_variant_venako_text">
                  Венако
                </div>
              </div>
              <div class="product_form_main_content_div_stiles_variant_vense">
                <div id="square" class="product_form_main_content_div_stiles_variant_vense_square">
                </div>
                <div class="product_form_main_content_div_stiles_variant_vense_text">
                  Венсе
                </div> 
              </div>
              <div class="product_form_main_content_div_stiles_variant_leer">
                <div id="elipse" class="product_form_main_content_div_stiles_variant_leer_elipse">
                </div>
                <div class="product_form_main_content_div_stiles_variant_leer_text">
                  Леер
                </div> 
              </div>
            </div>
          </div>

          <div class="product_form_main_content_div_size">
            <div  class="product_form_main_content_div_size_text">
              <div class="product_form_main_content_div_size_text_top">
                Размер стола
              </div>
              <a href="/index.html" class="product_form_main_content_div_size_text_bot">
                Таблица размеров
              </a>
            </div>            
            <div class="product_form_main_content_div_size_variants">
              <div class="product_form_main_content_div_size_variants_first">
                <input type="radio" class="product_form_main_content_div_size_variants_first_checkbox">
                <div class="product_form_main_content_div_size_variants_first_number">
                  1450 х 750 мм
                </div>
              </div>
              <div class="product_form_main_content_div_size_variants_second">
                <input type="radio" class="product_form_main_content_div_size_variants_first_checkbox">
                <div class="product_form_main_content_div_size_variants_first_number">
                  1200 х 700 мм
                </div>
              </div>
            </div>
          </div>

          <div class="product_form_main_content_div_colors">
            <div class="product_form_main_content_div_colors_text">
              Цвет столешницы
            </div>
            <div class="product_form_main_content_div_colors_type"> 
              <div class="product_form_main_content_div_colors_type_nature">
                <img src="/img/rustik_nature.png" class="product_form_main_content_div_colors_type_nature_img">
                <div class="product_form_main_content_div_colors_type_nature_text">
                  Рустик натуральный
                </div>
              </div>
              <div class="product_form_main_content_div_colors_type_brown">
                <img src="/img/rustik_brown.png" class="product_form_main_content_div_colors_type_brown_img">
                <div class="product_form_main_content_div_colors_type_brown_text">
                  Рустик браун
                </div>
              </div>
              <div class="product_form_main_content_div_colors_type_graphite">
                <img src="/img/rustik_graphite.png" class="product_form_main_content_div_colors_type_graphite_img">
                <div class="product_form_main_content_div_colors_type_graphite_text">
                  Рустик графит
                </div>
              </div>
            </div>
          </div>

          <div class="product_form_main_content_div_pattern">
            <div class="product_form_main_content_div_pattern_text">
              <div class="product_form_main_content_div_pattern_text_top">
                Узор столешницы
              </div>
              <a href="/index.html" class="product_form_main_content_div_pattern_text_bottom">
                Таблица узоров
              </a>
            </div>
            <div class="product_form_main_content_div_pattern_variant">
              <div class="product_form_main_content_div_pattern_variant_first">
                <input type="radio" class="product_form_main_content_div_pattern_variant_first_checkbox">
                <div class="product_form_main_content_div_pattern_variant_first_text">
                  Узор 1
                </div>
              </div>
              <div class="product_form_main_content_div_pattern_variant_first">
                <input type="radio" class="product_form_main_content_div_pattern_variant_first_checkbox">
                <div class="product_form_main_content_div_pattern_variant_first_text">
                  Узор 2
                </div>
              </div>
              <div class="product_form_main_content_div_pattern_variant_first">
                <input type="radio" class="product_form_main_content_div_pattern_variant_first_checkbox">
                <div class="product_form_main_content_div_pattern_variant_first_text">
                  Узор 3
                </div>
              </div>
              <div class="product_form_main_content_div_pattern_variant_first">
                <input type="radio" class="product_form_main_content_div_pattern_variant_first_checkbox">
                <div class="product_form_main_content_div_pattern_variant_first_text">
                  Узор 4
                </div>
              </div>
            </div>
          </div>

          <div class="product_form_main_content_div_legcolor">
            <div class="product_form_main_content_div_legcolor_text">
              Цвет ножек
            </div>
            <div class="product_form_main_content_div_legcolor_variant">
              <div class="product_form_main_content_div_legcolor_variant_white">
                <div id="square" class="product_form_main_content_div_legcolor_variant_white_square">
                </div>
                <div class="product_form_main_content_div_legcolor_variant_white_text">
                  Белый
                </div> 
              </div>
              <div class="product_form_main_content_div_legcolor_variant_gray">
                <div id="square" class="product_form_main_content_div_legcolor_variant_gray_square">
                </div>
                <div class="product_form_main_content_div_legcolor_variant_gray_text">
                  Серый
                </div> 
              </div>
              <div class="product_form_main_content_div_legcolor_variant_black">
                <div id="square" class="product_form_main_content_div_legcolor_variant_black_square">
                </div>
                <div class="product_form_main_content_div_legcolor_variant_black_text">
                  Чёрный
                </div> 
              </div>
            </div>
          </div>
          

          <div class="product_form_main_content_div_price">
            <div class="product_form_main_content_div_price_full">
              <div class="product_form_main_content_div_price_promo">
                <div class="product_form_main_content_div_price_promo_top">
                  20 300 руб
                </div>
                <div class="product_form_main_content_div_price_promo_bottom">
                  при покупке в комплекте (от 2-х шт.)
                </div>
              </div>

              <div class="product_form_main_content_div_price_common">
                <div class="product_form_main_content_div_price_common_top">
                  22 300 руб
                </div>
                <div class="product_form_main_content_div_price_common_bottom">
                  без комплекта (1 шт.)
                </div>
              </div>
            </div>

            <div class="product_form_main_content_div_price_buttons_full">
              <div class="product_form_main_content_div_price_buttons">
                <button id="buttonsMinus" class="product_form_main_content_div_price_buttons_minus">
                  <div class="product_form_main_content_div_price_buttons_minus_in">
                  </div>
                </button>
                <input id="counter" value="2" class="product_form_main_content_div_price_buttons_counter">
                <button id="buttonsPlus" class="product_form_main_content_div_price_buttons_plus">
                  <div class="product_form_main_content_div_price_buttons_plus_in">
                  </div>
                </button>
              </div>

              <button class="product_form_main_content_div_price_basket">
                В КОРЗИНУ
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
    `
).join('')

const counterInput = document.getElementById("counter");
const buttonM = document.getElementById("buttonsMinus");
const buttonP = document.getElementById("buttonsPlus");

buttonM.addEventListener("click", function(){
  counterInput.value = parseInt(counterInput.value) - 1;
});
buttonP.addEventListener("click", function(){
  counterInput.value = parseInt(counterInput.value) + 1;
});