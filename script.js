document.addEventListener('DOMContentLoaded', () => {
    const model = document.getElementById('model');
    const modelDetails = document.getElementById('model-details');
    const closemodel = document.querySelector('.close');
    const carouImage = document.querySelector('.carou-image');

    let carouInterval;
    document.querySelectorAll('.capl').forEach(capl => {
        capl.addEventListener('click', () => {
            const modelId = capl.getAttribute('data-model');
            modelacc(modelId);
        });
    });
    function modelacc(id) {
        const modelContent = jsyazmakcokzor(id);
        const ressam = getcarouressam(id);
        modelDetails.innerHTML = modelContent;
        startcarou(ressam);
        model.style.display = 'block';
    }
    closemodel.addEventListener('click', () => {
        model.style.display = 'none';
        clearInterval(carouInterval);
    });
    window.addEventListener('click', (event) => {
        if (event.target == model) {
            model.style.display = 'none';
            clearInterval(carouInterval);
        }
    });
    function jsyazmakcokzor(id) {
        const modelContents = {
            'area1': `<h2>"area"</h2><p>WRİTE SOMETHİNG</p>`,
            'area2': `<h2>"area"</h2><p>WRİTE SOMETHİNG</p>`,
            'area3': `<h2>"area"</h2><p>WRİTE SOMETHİNG</p>`,
            'area4': `<h2>"area"</h2><p>WRİTE SOMETHİNG</p>`,
        };

        return modelContents[id] || `<h2>EROOR</h2><p>ERROR</p>`;
    }

    function getcarouressam(id) {
        const carouressam = {
            'area1': ['https://via.placeholder.com/300x200', 'https://via.placeholder.com/300x200', 'https://via.placeholder.com/300x200'],
            'area2': ['https://via.placeholder.com/300x200', 'https://via.placeholder.com/300x200', 'https://via.placeholder.com/300x200'],
            'area3': ['https://via.placeholder.com/300x200', 'https://via.placeholder.com/300x200', 'https://via.placeholder.com/300x200'],
            'area4': ['https://via.placeholder.com/300x200', 'https://via.placeholder.com/300x200', 'https://via.placeholder.com/300x200'],
        };

        return carouressam[id] || [];
    }
    function startcarou(ressam) {
        let index = 0;
        carouImage.src = ressam[index];

        carouInterval = setInterval(() => {
            index = (index + 1) % ressam.length;
            carouImage.src = ressam[index];
        }, 1000);
    }
});
