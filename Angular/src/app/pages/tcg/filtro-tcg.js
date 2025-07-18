document.addEventListener('DOMContentLoaded', function () {
    const filterCheckboxes = document.querySelectorAll('.region-filter');
    const productItems = document.querySelectorAll('.product-item');
    const selectedFiltersContainer = document.getElementById('selected-filters-container');

    function updateFilters() {
        // Limpa as tags existentes antes de recriá-las
        selectedFiltersContainer.innerHTML = '';

        const selectedRegions = [];
        
        filterCheckboxes.forEach(function (box) {
            if (box.checked) {
                selectedRegions.push(box.value);

                // NOVO: Cria a tag para o filtro selecionado
                const tag = document.createElement('div');
                tag.className = 'filter-tag';
                // Pega o texto do label associado ao checkbox
                const labelText = document.querySelector(`label[for="${box.id}"]`).textContent;
                tag.innerHTML = `${labelText} <span class="remove-tag">&times;</span>`;
                tag.dataset.filterValue = box.value;
                
                selectedFiltersContainer.appendChild(tag);

                // NOVO: Adiciona evento de clique para remover a tag e desmarcar o checkbox
                tag.addEventListener('click', function() {
                    const checkboxToUncheck = document.querySelector(`.region-filter[value="${this.dataset.filterValue}"]`);
                    if (checkboxToUncheck) {
                        checkboxToUncheck.checked = false;
                        // Dispara o evento 'change' para atualizar a lista de produtos e tags
                        checkboxToUncheck.dispatchEvent(new Event('change'));
                    }
                });
            }
        });

        // Lógica de filtragem dos produtos
        productItems.forEach(function (item) {
            const itemRegion = item.dataset.region;
            if (selectedRegions.length === 0 || selectedRegions.includes(itemRegion)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    // Adiciona o ouvinte de evento 'change' a cada checkbox
    filterCheckboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', updateFilters);
    });

    // Nota: A lógica para a funcionalidade de "Selecionar por" (ordenar os produtos) 
    // ainda não foi implementada, apenas os elementos visuais foram adicionados.
});