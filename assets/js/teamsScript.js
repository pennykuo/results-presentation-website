/* teams area */
var $cont = document.querySelector('.cont');
var $elsArr = [].slice.call(document.querySelectorAll('.el'));
var $closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));

setTimeout(function() {
  $cont.classList.remove('s--inactive');
}, 200);

$elsArr.forEach(function($el) {
  $el.addEventListener('click', function() {
    if (this.classList.contains('s--active')) return;
    $cont.classList.add('s--el-active');
    this.classList.add('s--active');
  });
});

$closeBtnsArr.forEach(function($btn) {
  $btn.addEventListener('click', function(e) {
    e.stopPropagation();
    $cont.classList.remove('s--el-active');
    document.querySelector('.el.s--active').classList.remove('s--active');
  });
});
function flipPage(){
    document.body.classList.toggle('flipped');
    window.scrollTo(0, 0);
}
let currentContent = 1;

document.getElementById('Picture-content-2').style.display = 'none';
document.getElementById('Picture-content-3').style.display = 'none';

document.getElementById('myButton').addEventListener('click', function(event) {
    event.preventDefault();

    // Hide current content
    document.getElementById(`Picture-content-${currentContent}`).style.display = 'none';

    // Update current content
    currentContent = currentContent % 3 + 1;

    // Show new current content
    document.getElementById(`Picture-content-${currentContent}`).style.display = 'block';
});