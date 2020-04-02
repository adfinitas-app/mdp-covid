// CLICK TO EXPAND

$('.show-more-container').on('click', function() {
    $('.arrow-down').toggleClass('active');
    
    const maxHeight = $('.click-to-expand').css('max-height');
    
    if (maxHeight && maxHeight !== '0px' && maxHeight !== 'none') {
        $('.click-to-expand').css('max-height', '0px')
    } else {
        $('.click-to-expand').css('max-height', '1000px');
        $('.click-to-expand').css('height', 'auto');
    }
});
//CLICK TO EXPAND

//INIT AMOUNT IN URL
const initAmount = $('.btn-gift-once .price-btn.active').data('amount');
const initForm = $('.btn-gift-once').parents('.grid-don').find('.btn-donate');
replaceAction(initForm, +initAmount);

const initAmount2 = $('.btn-gift-regular .price-btn.active').data('amount');
const initForm2 = $('.btn-gift-regular').parents('.grid-don').find('.btn-donate');

replaceAction(initForm2, +initAmount2);

//INIT AMOUNT IN URL


//FORM DONATION

function replaceAction(formElement, nb) {
    if (!formElement || formElement.length === 0)
        return false;
    
    $('.btn-donate-value').text(nb);
    
    addOrModifyQueryParameter(formElement, 'amount', parseInt(nb * 100));
}

$('.price-btn').on('click', function() {
    $('.price-btn').removeClass('active');
    $(this).addClass('active');
    
    const amount = $(this).data('amount');
    const formElement = $(this).parents('.grid-don').find('.btn-donate');
    
    addOrModifyQueryParameter(formElement, 'free_amount', 0);
    
    replaceAction(formElement, +amount);
});

$('.input-free-amount').on('input', function() {
    const val = $(this).val();
    
    if (!val)
    return false;
    
    const nb = Number($(this).val());
        
    if (!isNaN(nb)) {
        $('.btn-don-value').text(nb);
        const formElement = $(this).parent().next('.btn-donate');
        
        addOrModifyQueryParameter(formElement, 'free_amount', '1');

        isFreeAmount = true;
        replaceAction(formElement, +nb);
    }
})

//FORM DONATION