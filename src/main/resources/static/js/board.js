// Инициализация плиток игрока
const playerTiles = ['A', 'E', 'I', 'O', 'U', 'T', 'N'];  // Это можно динамически обновлять
const tilesContainer = document.getElementById('tiles-container');

// Отображение плиток на панели игрока
function renderPlayerTiles() {
    tilesContainer.innerHTML = ''; // Очистить контейнер
    playerTiles.forEach(tile => {
        const tileElement = document.createElement('div');
        tileElement.classList.add('tile');
        tileElement.textContent = tile;
        tileElement.setAttribute('draggable', true);
        tileElement.addEventListener('dragstart', handleDragStart);
        tilesContainer.appendChild(tileElement);
    });
}

// Обработка начала перетаскивания
function handleDragStart(event) {
    event.dataTransfer.setData('text', event.target.textContent);
}

// Обработка перетаскивания плитки на клетку доски
document.querySelectorAll('.board-cell').forEach(cell => {
    cell.addEventListener('dragover', (event) => event.preventDefault());
    cell.addEventListener('drop', handleDrop);
});

function handleDrop(event) {
    const droppedTile = event.dataTransfer.getData('text');
    event.target.textContent = droppedTile;

    // Удалить плитку из панели игрока
    const index = playerTiles.indexOf(droppedTile);
    if (index !== -1) {
        playerTiles.splice(index, 1);
    }

    renderPlayerTiles(); // Обновляем панель плиток
}



// Инициализация игры
renderPlayerTiles();