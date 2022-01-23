'use strict';

window.addEventListener('DOMContentLoaded', () => {

    const inputAdd = document.querySelectorAll('.form__input-add');
    const btnAdd = document.querySelectorAll('.btn__contact-add');
    const form = document.querySelector('.form');
    let inputs = document.querySelectorAll('input');

    // Шаблоны элементов для добавления
    // Шаблон блока контактов
    const contactBlock = `
        <div class="form__input-wrapper">
            <input type="text" name='contact-name' autocomplete="off" placeholder="Имя" class="form__input">
            <label for="contact-phone" class="form__lable">
                <span class="form__lable-name">Телефон</span>
                <div class="form__lable-wrapper">
                    <span class="form__input-add"></span>
                    <input type="text" name='contact-phone' autocomplete="off" class="form__input">
                </div>
            </label>
            <label for="contact-email" class="form__lable">
                <span class="form__lable-name">E-mail</span>
                <div class="form__lable-wrapper">
                    <span class="form__input-add"></span>
                    <input type="text" name="contact-email" autocomplete="off" class="form__input">
                </div>
            </label>
            <label for="contact-position" class="form__lable">
                <span class="form__lable-name">Должность</span>
                <div class="form__lable-wrapper">
                    <input type="text" name="contact-position" autocomplete="off" class="form__input">
                </div>
            </label>
        </div>`;
    // Шаблон блока ЮЛ/ИП
    const organizationBlock = `
        <div class="form__input-wrapper">

            <!-- Организация - ЮЛ/ИП - Имя - НАЧАЛО -->
            <input type="text" name='organization-name' autocomplete="off" placeholder="Имя" class="form__input">
            <!-- Организация - ЮЛ/ИП - Имя - КОНЕЦ -->

            <!-- Организация - ЮЛ/ИП - ИНН - НАЧАЛО -->
            <label for="organization-INN" class="form__lable">
                <span class="form__lable-name">ИНН</span>
                <div class="form__lable-wrapper">
                    <input type="text" name="organization-INN" autocomplete="off" class="form__input">
                </div>
            </label>
            <!-- Организация - ЮЛ/ИП - ИНН - КОНЕЦ -->

            <!-- Организация - ЮЛ/ИП - СНО - НАЧАЛО -->
            <label for="organization-taxation-system" class="form__lable">
                <span class="form__lable-name">СНО</span>
                <div class="form__lable-wrapper">
                    <input type="text" name="organization-taxation-system" autocomplete="off" class="form__input">
                </div>
            </label>
            <!-- Организация - ЮЛ/ИП - СНО - КОНЕЦ -->

            <!-- Организация - ЮЛ/ИП - Форма - НАЧАЛО -->
            <label for="organization-form" class="form__lable">
                <span class="form__lable-name">Форма</span>
                <div class="form__lable-wrapper">
                    <input type="text" name="organization-form" autocomplete="off" class="form__input">
                </div>
            </label>
            <!-- Организация - ЮЛ/ИП - Форма - КОНЕЦ -->

            <!-- Организация - ЮЛ/ИП - Комментарий - НАЧАЛО -->
            <label for="organization-comment" class="form__lable">
                <span class="form__lable-name">Комментарий</span>
                <div class="form__lable-wrapper">
                    <input type="text" name="organization-comment" autocomplete="off" class="form__input">
                </div>
            </label>
            <!-- Организация - ЮЛ/ИП - Комментарий - КОНЕЦ -->

        </div>`;
    // Шаблон блока Офисы/ТТ
    const officeBlock = `
    <div class="form__input-wrapper">

        <!-- Организация - Офисы/ТТ - Имя - НАЧАЛО -->
        <input type="text" name='organization-name' autocomplete="off" placeholder="Имя" class="form__input">
        <!-- Организация - Офисы/ТТ - Имя - КОНЕЦ -->

        <!-- Организация - Офисы/ТТ - Адрес - НАЧАЛО -->
        <label for="organization-address" class="form__lable">
            <span class="form__lable-name">Адрес</span>
            <div class="form__lable-wrapper">
                <input type="text" name="organization-address" autocomplete="off" class="form__input">
            </div>
        </label>
        <!-- Организация - Офисы/ТТ - Адрес - КОНЕЦ -->

        <!-- Организация - Офисы/ТТ - Тип - НАЧАЛО -->
        <label for="organization-type" class="form__lable">
            <span class="form__lable-name">Тип</span>
            <div class="form__lable-wrapper">
                <input type="text" name="organization-type" autocomplete="off" class="form__input">
            </div>
        </label>
        <!-- Организация - Офисы/ТТ - Тип - КОНЕЦ -->

        <!-- Организация - Офисы/ТТ - Комментарий - НАЧАЛО -->
        <label for="organization-comment" class="form__lable">
            <span class="form__lable-name">Комментарий</span>
            <div class="form__lable-wrapper">
                <input type="text" name="organization-comment" autocomplete="off" class="form__input">
            </div>
        </label>
        <!-- Организация - Офисы/ТТ - Комментарий - КОНЕЦ -->

    </div>`;

    // Отключаем подсказки автозаполнения для input
    function autocompleteOff(inputs) {
        inputs.forEach(input => {
            let attr = input.getAttribute('name');
            input.addEventListener('focus', () => {
                input.setAttribute("name", Math.random() * 5);
            });
            input.addEventListener('blur', () => {
                input.setAttribute("name", attr);
            });
        });
    }

    autocompleteOff(inputs);

    //

    // Обрабатываем событие клика по форме
    form.addEventListener('click', (e) => {
        // Обрабатываем событие нажатия кнопки добавить новый input
        if (e.target.classList.contains('form__input-add')) {
            let lableWrapper = e.target.parentNode;
            let input = lableWrapper.querySelector('.form__input');
            let newInput = input.cloneNode();
            newInput.value ='';
            lableWrapper.appendChild(newInput);
            inputs = document.querySelectorAll('input');
            autocompleteOff(inputs);
        // Обрабатываем событие нажатия кнопки открыть select
        } else if (e.target.classList.contains('form__select')) {
            const select = e.target;
            const lableWrapper = e.target.parentNode;
            const options = lableWrapper.querySelector('.form__options');
            const checkboxs = options.querySelectorAll('input');
            select.classList.toggle('form__select_active');
            options.classList.toggle('form__options_active');
            checkboxs.forEach(e => {
                e.addEventListener('change', checkbox => {
                    const chbox = checkbox.target;
                    if (chbox.checked) {
                        console.log('Выбран', chbox.parentNode.textContent);
                    } else {
                        console.log('Выбор отменен', chbox.parentNode.textContent);
                    }
                });
            });
        }
    });

    // Обрабатываем событие для добавления новых блоков
    btnAdd.forEach((item)=> {
        item.addEventListener('click', (btn) => {
            btn.preventDefault();
                const div = document.createElement('div');
                const dataName = btn.target.getAttribute('data-name');
                div.classList.add('form__input-wrapper');
                if (dataName === 'contactBlock') {
                    div.innerHTML = contactBlock;
                } else if (dataName === 'organizationBlock') {
                    div.innerHTML = organizationBlock;
                } else if (dataName === 'officeBlock') {
                    div.innerHTML = officeBlock;
                }
                btn.target.parentNode.before(div);
                inputs = document.querySelectorAll('input');
                autocompleteOff(inputs);
            });
    });



});