var _receitasItens = document.querySelectorAll('.recipe-item');
if (_receitasItens.length > 0) {
    _receitasItens.forEach(function (_receitaItem) {
        _receitaItem.addEventListener('click', function (e) {
            var _receita = this,
                receitaNome = _receita.getAttribute('data-receita');

            window.location.href = 'recipe.html?receita=' + receitaNome;
        })
    })
}