// Подключение из node_modules
import * as noUiSlider from 'nouislider';

// Подключение стилей из scss/base/forms/range.scss 
// в файле scss/forms/forms.scss

// Подключение cтилей из node_modules
// import 'nouislider/dist/nouislider.css';

export function rangeInit() {
	const rangeItems = document.querySelectorAll('[data-range]');
	if (rangeItems.length) {
		rangeItems.forEach(rangeItem => {
			const fromValue = rangeItem.querySelector('[data-range-from]');
			const toValue = rangeItem.querySelector('[data-range-to]');
			const item = rangeItem.querySelector('[data-range-item]');
			noUiSlider.create(item, {
				start: [Number(fromValue.value), Number(toValue.value)], // [0,200000]
				connect: true,
				tooltips: [true, true],
				range: {
					'min': [Number(fromValue.dataset.rangeFrom)],
					'max': [Number(toValue.dataset.rangeTo)]
				}
			});

			item.noUiSlider.on('update', function (values, handle) {
				fromValue.value = values[0];
				toValue.value = values[1];
			});
			
		    fromValue.addEventListener('keydown', function (e) {
                var values = item.noUiSlider.get();
                var value = Number(values[0]);
                // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
                var steps = item.noUiSlider.steps();
                // [down, up]
                var step = steps[0];
                var position;
                // 40 is key down.// 38 is key up, // 13 is enter,
                switch (e.which) {
                    case 13:
                    item.noUiSlider.setHandle([0], this.value);
                    break;
                    case 38:
                    // Get step to go increase slider value (up)
                    position = step[1];
                    // false = no step is set
                    if (position === false) {
                        position = 1;
                    }
                    // null = edge of slider
                    if (position !== null) {
                        item.noUiSlider.setHandle([0], value + position);
                    }
                    break;
                    case 40:
                    position = step[0];
                    if (position === false) {
                        position = 1;
                    }
                    if (position !== null) {
                        item.noUiSlider.setHandle([0], value - position);
                    }
                    break;
                }
            });
			toValue.addEventListener('keydown', function (e) {
                var values = item.noUiSlider.get();
                var value = Number(values[1]);
                // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
                var steps = item.noUiSlider.steps();
                // [down, up]
                var step = steps[1];
                var position;
                // 40 is key down.// 38 is key up, // 13 is enter,
                switch (e.which) {
                    case 13:
                    item.noUiSlider.setHandle([1], this.value);
                    break;
                    case 38:
                    // Get step to go increase slider value (up)
                    position = step[1];
                    // false = no step is set
                    if (position === false) {
                        position = 1;
                    }
                    // null = edge of slider
                    if (position !== null) {
                        item.noUiSlider.setHandle([1], value + position);
                    }
                    break;
                    case 40:
                    position = step[0];
                    if (position === false) {
                        position = 1;
                    }
                    if (position !== null) {
                        item.noUiSlider.setHandle([1], value - position);
                    }
                    break;
                }
            });
		});
	}
}
rangeInit();
