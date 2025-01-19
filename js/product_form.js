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
                <div>
                  Венако
                </div>
              </div>
              <div class="product_form_main_content_div_stiles_variant_vense">
                <div id="square" class="product_form_main_content_div_stiles_variant_vense_square">
                </div>
                <div>
                  Венсе
                </div> 
              </div>
              <div class="product_form_main_content_div_stiles_variant_leer">
                <div id="elipse" class="product_form_main_content_div_stiles_variant_leer_elipse">
                </div>
                <div>
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
        </div>
      </div>
    </div>
    `
).join('')