document.addEventListener('DOMContentLoaded', function () {
    // Seleciona todos os checkboxes de filtro
    const filterCheckboxes = document.querySelectorAll('.region-filter');
    
    // Seleciona todos os cards de produto
    const productItems = document.querySelectorAll('.product-item');

    // Adiciona um "ouvinte" para o evento de mudança em qualquer checkbox
    filterCheckboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            // Cria uma lista para armazenar as regiões selecionadas
            const selectedRegions = [];
            
            // Verifica quais checkboxes estão marcados e adiciona seus valores à lista
            filterCheckboxes.forEach(function (box) {
                if (box.checked) {
                    selectedRegions.push(box.value);
                }
            });

            // Passa por cada item de produto para decidir se deve mostrá-lo ou escondê-lo
            productItems.forEach(function (item) {
                const itemRegion = item.dataset.region;

                // A LÓGICA:
                // Se nenhuma região está selecionada, OU se a região do item está na lista de selecionadas...
                if (selectedRegions.length === 0 || selectedRegions.includes(itemRegion)) {
                    item.style.display = 'block'; // ...então mostra o item.
                } else {
                    item.style.display = 'none'; // ...senão, esconde o item.
                }
            });
        });
    });
});