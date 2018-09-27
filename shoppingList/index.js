'use strict';
function itemAdder(){
    
$('#js-shopping-list-form').submit(function(event){
    event.preventDefault();
    const newItem = $('.js-shopping-list-entry').val();
    //reset text box
    event.target.reset();
    $('.shopping-list').append(
        `<li> 
                <span class="shopping-item">${newItem}</span>
                <div class="shopping-item-controls">
                    <button class="shopping-item-toggle">
                        <span class="button-label">check</span>
                    </button>
                    <button class="shopping-item-delete">
                        <span class="button-label">delete</span>
                    </button>
                </div>
            </li>`
    )
    
    //console.log(newItem);
  });
}

// Q: why does find work and not prop?
function checkUncheckItems(){
$('.shopping-list').on('click', '.shopping-item-toggle', function(){
    $(this).closest('li').find('.shopping-item').toggleClass( 'shopping-item__checked');
  });
}

function deleteItems(){
$('shopping-list').on('click', '.shopping-item-delete',function(){
    $(this).closest('li').remove();
  });
}

//$( "p" ).click(function() { $( this ).toggleClass( "highlight" ); });
$(itemAdder);
$(checkUncheckItems);
$(deleteItems);