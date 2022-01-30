'use strict';

window.addEventListener('DOMContentLoaded', () => {

    const inputAdd = document.querySelectorAll('.form__input-add');
    const btnAdd = document.querySelectorAll('.btn__contact-add');
    const form = document.querySelector('.form');
    // let selectItems = document.querySelectorAll('.js-options-item');

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
                <span class="form__select"></span>
                <ul class="form__options">
                    <li class="form__options-item"><input type="checkbox">ОСНО</li>
                    <li class="form__options-item"><input type="checkbox">УСН д-р</li>
                    <li class="form__options-item"><input type="checkbox">УСН д</li>
                    <li class="form__options-item"><input type="checkbox">ПСН</li>
                    <li class="form__options-item"><input type="checkbox">ЕСХН</li>
                </ul>
                <input type="text" name="organization-taxation-system" autocomplete="off" class="form__input">
            </div>
        </label>
        <!-- Организация - ЮЛ/ИП - СНО - КОНЕЦ -->

        <!-- Организация - ЮЛ/ИП - Форма - НАЧАЛО -->
        <label for="organization-form" class="form__lable">
            <span class="form__lable-name">Форма</span>
            <div class="form__lable-wrapper">
                <span class="form__select"></span>
                <ul class="form__options">
                    <li class="form__options-item js-options-item">ИП</li>
                    <li class="form__options-item js-options-item">ЮЛ</li>
                </ul>
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
    function autocompleteOff() {
        let inputs = document.querySelectorAll('input');
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

    autocompleteOff();

    // Контролируем выбранные чекбоксы внутри Select
    function controlCheckBox() {
        let checkBox = document.querySelectorAll('.form__options input[type="checkbox"]');
        checkBox.forEach(item => {
            item.addEventListener('click', e => {
                const chbox = e.target;
                if (chbox.checked) {
                    const formLableWrapper = chbox.parentNode.parentNode.parentNode;
                    let input = formLableWrapper.querySelector('.form__input');
                    let newInput = input.cloneNode();
                    newInput.value = chbox.parentNode.textContent;
                    newInput.setAttribute('disabled', 'disabled');
                    formLableWrapper.prepend(newInput);

                    autocompleteOff();


                } else {
                    const formLableWrapper = chbox.parentNode.parentNode.parentNode;
                    const inputs = formLableWrapper.querySelectorAll('.form__input');
                    inputs.forEach(i => {
                        if (i.value == chbox.parentNode.textContent) {
                            i.remove();
                        }
                    });
                }
            });
        });
    }

    controlCheckBox();

    // Контролируем выбор пункта Select
    function controlSelectItems() {
        let selectItems = document.querySelectorAll('.js-options-item');
        selectItems.forEach(item => {
            item.addEventListener('click', e => {
                const optionsItem = e.target;
                const formLableWrapper = optionsItem.parentNode.parentNode;
                const formInput = formLableWrapper.querySelector('.form__input');

                formInput.value = optionsItem.textContent;
                formInput.setAttribute('disabled', 'disabled');
            });
        });
    }

    controlSelectItems();

    // Select
    document.addEventListener('click', (e) => {
        const element = e.target;

        const formSelectAll = document.querySelectorAll('.form__select');
        formSelectAll.forEach(select => {
            const wrapper = select.parentNode;
            const options = wrapper.querySelector('.form__options');

            if (!element.getAttribute('type', 'checkbox') && !element.classList.contains('form__options-item') && element != select) {
                options.classList.remove('form__options_active');
                select.classList.remove('form__select_active');
            }

        });

        if (element.classList.contains('form__select')) {
            const formSelect = element;
            const formLableWrapper = formSelect.parentNode;
            const formOptions = formLableWrapper.querySelector('.form__options');

            if (formSelect.classList.contains('form__select_active') && formOptions.classList.contains('form__options_active')) {
                formSelect.classList.remove('form__select_active');
                formOptions.classList.remove('form__options_active');
            } else {
                formSelect.classList.add('form__select_active');
                formOptions.classList.add('form__options_active');
            }

        }
    });

    // Обрабатываем событие клика по форме
    form.addEventListener('click', (e) => {
        // Обрабатываем событие нажатия кнопки добавить новый input
        if (e.target.classList.contains('form__input-add')) {
            let lableWrapper = e.target.parentNode;
            let input = lableWrapper.querySelector('.form__input');
            let newInput = input.cloneNode();

            newInput.value ='';
            lableWrapper.appendChild(newInput);
            autocompleteOff();
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

            autocompleteOff();
            controlCheckBox();

            // selectItems = document.querySelectorAll('.js-options-item');
            controlSelectItems();
        });
    });

});