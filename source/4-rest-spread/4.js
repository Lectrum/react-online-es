const sum = (a, b, c, d) => {
    console.log(a + b + c + d);
};

const data = [ 2, 3, 4 ];

/**
 * Здесь ... снова приобретает контекст spread.
 * Только в этот раз мы распределяем аргументы функции при ещё вызове.
 */
sum(1, ...data);
sum(1, 2, 3, 4);
