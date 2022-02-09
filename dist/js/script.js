'use strict';

window.addEventListener('DOMContentLoaded', () => {

    const inputAdd = document.querySelectorAll('.form__input-add');
    const btnAdd = document.querySelectorAll('.btn__contact-add');
    const form = document.querySelector('.form');

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

        <!-- Организация - Организации - Имя - НАЧАЛО -->
        <input type="text" name='organization-name' autocomplete="off" placeholder="Имя" class="form__input">
        <!-- Организация - Организации - Имя - КОНЕЦ -->

        <!-- Организация - Организации - ИНН - НАЧАЛО -->
        <label for="organization-INN" class="form__lable">
            <span class="form__lable-name">ИНН</span>
            <div class="form__lable-wrapper">
                <input type="text" name="organization-INN" autocomplete="off" class="form__input">
            </div>
        </label>
        <!-- Организация - Организации - ИНН - КОНЕЦ -->

        <!-- Организация - Организации - СНО - НАЧАЛО -->
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
        <!-- Организация - Организации - СНО - КОНЕЦ -->

        <!-- Организация - Организации - Форма - НАЧАЛО -->
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
        <!-- Организация - Организации - Форма - Конец -->

        <!-- Организация - Организации - Вид деятельности - НАЧАЛО -->
        <label for="organization-kind-of-activity" class="form__lable">
            <span class="form__lable-name">Деятельность</span>
            <div class="form__lable-wrapper">
                <input type="text" name="organization-kind-of-activity" autocomplete="off" class="form__input">
            </div>
        </label>
        <!-- Организация - Организации - Вид деятельности - КОНЕЦ -->

        <!-- Организация- Телефон - НАЧАЛО -->
        <label for="contact-phone" class="form__lable">
            <span class="form__lable-name">Телефон</span>
            <div class="form__lable-wrapper">
                <span class="form__input-add"></span>
                <input type="text" name='contact-phone' autocomplete="off" class="form__input">
            </div>
        </label>
        <!-- Организация- Телефон - КОНЕЦ -->

        <!-- Организация- E-mail - НАЧАЛО -->
        <label for="contact-email" class="form__lable">
            <span class="form__lable-name">E-mail</span>
            <div class="form__lable-wrapper">
                <span class="form__input-add"></span>
                <input type="text" name="contact-email" autocomplete="off" class="form__input">
            </div>
        </label>
        <!-- Организация- E-mail - КОНЕЦ -->

        <!-- Организация - Организации - Адрес - НАЧАЛО -->
        <label for="organization-address" class="form__lable">
            <span class="form__lable-name">Адрес</span>
            <div class="form__textarea-wrapper">
                <textarea name="organization-address" rows="1" class="form__textarea"></textarea>
            </div>
        </label>
        <!-- Организация - Организации - Адрес - КОНЕЦ -->

        <!-- Организация - Организации - Комментарий - НАЧАЛО -->
        <label for="organization-comment" class="form__lable">
            <span class="form__lable-name">Комментарий</span>
            <div class="form__textarea-wrapper">
                <textarea name="organization-comment" rows="1" class="form__textarea"></textarea>
            </div>
        </label>
        <!-- Организация - Организации - Комментарий - КОНЕЦ -->

    </div>`;
    // Шаблон блока Подразделение
    const subdivisionBlock = `
    <div class="form__input-wrapper">

        <!-- Организация - Подразделение - Имя - НАЧАЛО -->
        <input type="text" name='subdivision-name' autocomplete="off" placeholder="Имя" class="form__input">
        <!-- Организация - Подразделение - Имя - КОНЕЦ -->

        <!-- Организация - Подразделение - Адрес - НАЧАЛО -->
        <label for="subdivision-address" class="form__lable">
            <span class="form__lable-name">Адрес</span>
            <div class="form__textarea-wrapper">
                <textarea name="subdivision-address" rows="1" class="form__textarea"></textarea>
            </div>
        </label>
        <!-- Организация - Подразделение - Адрес - КОНЕЦ -->

        <!-- Организация - Подразделение - Тип - НАЧАЛО -->
        <label for="subdivision-type" class="form__lable">
            <span class="form__lable-name">Тип</span>
            <div class="form__lable-wrapper">
                <input type="text" name="subdivision-type" autocomplete="off" class="form__input">
            </div>
        </label>
        <!-- Организация - Подразделение - Тип - КОНЕЦ -->

        <!-- Организация - Подразделение - Комментарий - НАЧАЛО -->
        <label for="subdivision-comment" class="form__lable">
            <span class="form__lable-name">Комментарий</span>
            <div class="form__textarea-wrapper">
                <textarea name="subdivision-comment" rows="1" class="form__textarea"></textarea>
            </div>
        </label>
        <!-- Организация - Подразделение - Комментарий - КОНЕЦ -->

    </div>`;
    // Шаблон блока Программные продукты 1С
    const pp1CBlock = `
        <div class="form__input-wrapper">

        <!-- Программные продукты 1С - Программный продукт 1С - НАЧАЛО -->
        <label for="pp1C-name" class="form__lable">
            <div class="form__lable-wrapper form__lable-wrapper_width-100">
                <span class="form__select"></span>
                <ul class="form__options form__options_width-100">
                    <li class="form__options-item js-options-item">1С:Розница</li>
                    <li class="form__options-item js-options-item">1С:Управление нашей фирмой</li>
                    <li class="form__options-item js-options-item">1С:Управление торговлей</li>
                    <li class="form__options-item js-options-item">1С:Бухгалтерия</li>
                    <li class="form__options-item js-options-item">1С:Зарплата и управление персоналом</li>
                </ul>
                <input type="text" name="pp1C-name" autocomplete="off" placeholder="Программный продукт 1С" class="form__input">
            </div>
        </label>
        <!-- Программные продукты 1С - Программный продукт 1С - КОНЕЦ -->

        <!-- Программные продукты 1С - Рег. номер - НАЧАЛО -->
        <label for="pp1C-regnumber" class="form__lable">
            <span class="form__lable-name">Рег. номер</span>
            <div class="form__lable-wrapper">
                <input type="text" name="pp1C-regnumber" autocomplete="off" class="form__input">
            </div>
        </label>
        <!-- Программные продукты 1С - Рег. номер - КОНЕЦ -->

        <!-- Программные продукты 1С - 1С:КП - НАЧАЛО -->
        <label for="pp1C-KP" class="form__lable">
            <span class="form__lable-name">1C:КП</span>
            <div class="form__lable-wrapper">
                <span class="form__select"></span>
                <ul class="form__options">
                    <li class="form__options-item js-options-item">Нет</li>
                    <li class="form__options-item js-options-item">Техно</li>
                    <li class="form__options-item js-options-item">ПРОФ</li>
                </ul>
                <input type="text" name="pp1C-KP" autocomplete="off" disabled class="form__input">
            </div>
        </label>
        <!-- Программные продукты 1С - 1С:КП - КОНЕЦ -->

        <!-- Программные продукты 1С - Лицензия - НАЧАЛО -->
        <label for="pp1C-license" class="form__lable">
            <span class="form__lable-name">Лицензия</span>
            <div class="form__lable-wrapper">
                <span class="form__select"></span>
                <ul class="form__options">
                    <li class="form__options-item js-options-item">Да</li>
                    <li class="form__options-item js-options-item">Нет</li>
                </ul>
                <input type="text" name="pp1C-license" autocomplete="off" disabled class="form__input">
            </div>
        </label>
        <!-- Программные продукты 1С - Лицензия - КОНЕЦ -->

        <!-- Программные продукты 1С - Пользователи - НАЧАЛО -->
        <label for="pp1C-user" class="form__lable">
            <span class="form__lable-name">Пользователи</span>
            <div class="form__lable-wrapper">
                <input type="text" name="pp1C-user" autocomplete="off" class="form__input">
            </div>
        </label>
        <!-- Программные продукты 1С - Пользователи - КОНЕЦ -->

        <!-- Программные продукты 1С - Инфо. базы - НАЧАЛО -->
        <label for="pp1C-infodb" class="form__lable">
            <span class="form__lable-name">Инфо. базы</span>
            <div class="form__lable-wrapper">
                <input type="text" name="pp1C-infodb" autocomplete="off" class="form__input">
            </div>
        </label>
        <!-- Программные продукты 1С - Инфо. базы - КОНЕЦ -->

        <!-- Программные продукты 1С - Релиз - НАЧАЛО -->
        <label for="pp1C-release" class="form__lable">
            <span class="form__lable-name">Релиз</span>
            <div class="form__lable-wrapper">
                <input type="text" name="pp1C-release" autocomplete="off" class="form__input">
            </div>
        </label>
        <!-- Программные продукты 1С - Релиз - КОНЕЦ -->

        <!-- Программные продукты 1С - Регистрация - НАЧАЛО -->
        <label for="pp1C-reg" class="form__lable">
            <span class="form__lable-name">Регистрация</span>
            <div class="form__lable-wrapper">
                <span class="form__select"></span>
                <ul class="form__options">
                    <li class="form__options-item js-options-item">Да</li>
                    <li class="form__options-item js-options-item">Нет</li>
                </ul>
                <input type="text" name="pp1C-reg" autocomplete="off" disabled class="form__input">
            </div>
        </label>
        <!-- Программные продукты 1С - Регистрация - КОНЕЦ -->

        <!-- Программные продукты 1С - Доработки - НАЧАЛО -->
        <label for="pp1C-rework" class="form__lable">
            <span class="form__lable-name">Доработки</span>
            <div class="form__lable-wrapper">
                <span class="form__select"></span>
                <ul class="form__options">
                    <li class="form__options-item js-options-item">Да</li>
                    <li class="form__options-item js-options-item">Нет</li>
                </ul>
                <input type="text" name="pp1C-rework" autocomplete="off" disabled class="form__input">
            </div>
        </label>
        <!-- Программные продукты 1С - Доработки - КОНЕЦ -->

        <!-- Программные продукты 1С - Комментарий - НАЧАЛО -->
        <label for="pp1C-comment" class="form__lable">
            <span class="form__lable-name">Комментарий</span>
            <div class="form__textarea-wrapper">
                <textarea name="pp1C-comment" rows="1" class="form__textarea"></textarea>
            </div>
        </label>
        <!-- Программные продукты 1С - Комментарий - КОНЕЦ -->

    </div>`;

    // Отключаем подсказки автозаполнения для input
    function autocompleteOff() {
        let inputs = document.querySelectorAll('input');
        document.querySelectorAll('textarea');
        inputs.forEach(input => {
            let attr = input.getAttribute('name');
            input.addEventListener('focus', () => {
                input.setAttribute("name", Math.random() * 5);
            });
            input.addEventListener('blur', () => {
                input.setAttribute("name", attr);
            });
        });
        document.querySelectorAll('textarea').forEach(textarea => {
            let attr = textarea.getAttribute('name');
            textarea.addEventListener('focus', () => {
                textarea.setAttribute("name", Math.random() * 5);
            });
            textarea.addEventListener('blur', () => {
                textarea.setAttribute("name", attr);
            });
        });
    }

    autocompleteOff();

    // Контролируем выбранные чекбоксы внутри Select

    function activeCheckBox(e) {
        const chbox = e.target;
        if (chbox.checked) {
            const formLableWrapper = chbox.parentNode.parentNode.parentNode;
            let input = formLableWrapper.querySelector('.form__input');
            const inputs = formLableWrapper.querySelectorAll('.form__input');
            let newInput = input.cloneNode();

            if (inputs.length == 1 && input.value == '') {
                input.value = chbox.parentNode.textContent;
                input.setAttribute('disabled', 'disabled');
                console.log(inputs.length);
            } else {
                newInput.classList.add('form__input');
                newInput.value = chbox.parentNode.textContent;
                newInput.setAttribute('disabled', 'disabled');
                formLableWrapper.prepend(newInput);
            }

            autocompleteOff();

        } else {
            const formLableWrapper = chbox.parentNode.parentNode.parentNode;
            const inputs = formLableWrapper.querySelectorAll('.form__input');
            inputs.forEach(i => {
                if (inputs.length == 1) {
                    i.value = '';
                } else if (i.value == chbox.parentNode.textContent) {
                    i.remove();
                }
            });
        }
    }

    function controlCheckBox() {
        let checkBox = document.querySelectorAll('.form__options input[type="checkbox"]');
        checkBox.forEach(item => {
            item.addEventListener('click', activeCheckBox);
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
                const formOptions = formLableWrapper.querySelector('.form__options');
                const formSelect = formLableWrapper.querySelector('.form__select');

                formInput.value = optionsItem.textContent;
                formInput.setAttribute('disabled', 'disabled');
                formOptions.classList.remove('form__options_active');
                formSelect.classList.remove('form__select_active');
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

    // textarea авто высота по размеру контента
    document.querySelectorAll('.form__textarea').forEach(el => {
        const formTextareaWrapper = el.parentNode;
        console.log(formTextareaWrapper);
        el.style.height = el.setAttribute('style', 'height: ' + el.scrollHeight + 'px');
        formTextareaWrapper.style.height = formTextareaWrapper.setAttribute('style', 'height: ' + el.scrollHeight + 'px');
        el.classList.add('auto');
        el.addEventListener('input', e => {
            el.style.height = 'auto';
            el.style.height = (el.scrollHeight) + 'px';
            formTextareaWrapper.style.height = (el.scrollHeight) + 'px';
        });
    });

    function autoHeightTextarea() {
        document.querySelectorAll('.form__textarea').forEach(el => {
            const formTextareaWrapper = el.parentNode;
            console.log(formTextareaWrapper);
            el.style.height = el.setAttribute('style', 'height: ' + el.scrollHeight + 'px');
            formTextareaWrapper.style.height = formTextareaWrapper.setAttribute('style', 'height: ' + el.scrollHeight + 'px');
            el.classList.add('auto');
            el.addEventListener('input', e => {
                el.style.height = 'auto';
                el.style.height = (el.scrollHeight) + 'px';
                formTextareaWrapper.style.height = (el.scrollHeight) + 'px';
            });
        });
    }

    autoHeightTextarea();

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
            autoHeightTextarea();
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
            } else if (dataName === 'subdivisionBlock') {
                div.innerHTML = subdivisionBlock;
            } else if (dataName === 'pp1CBlock') {
                div.innerHTML = pp1CBlock;
            }
            btn.target.parentNode.before(div);

            autocompleteOff();
            autoHeightTextarea();
            controlCheckBox();
            controlSelectItems();
        });
    });

});