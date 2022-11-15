$('.category .product > img').on('click', function() {
    const titleText = $(this).parents('.category').find('.title').html();
    $('#main-tittle').html(titleText);

    // console.log(titleText)
})