var openModalRef = document.querySelector('.quick-action .add');
var Modal = document.querySelector('.modal');
var closeModalRef = document.querySelector('.modal .right-section .close');
const priorityBoxesRef = document.querySelectorAll('.modal .right-section .priority-filter .box');
const textareaRef = document.querySelector('.modal .left-section textarea');

const tasks = [];

openModalRef.addEventListener('click',function(){
    const isHideClassApplied = Modal.classList.contains('hide');
    if(isHideClassApplied)
    {
        openModal();
    }
    else
    {
        closeModal();
    }
})

closeModalRef.addEventListener('click',function(){
    closeModal();
})

function openModal()
{
    Modal.classList.remove('hide');
}

function closeModal()
{
    Modal.classList.add('hide');
}

function removeSelectedClassFromBox()
{
   priorityBoxesRef.forEach(function(singleBoxRef){
   singleBoxRef.classList.remove('selected');
   })
}

function addSelectedClassToCurrentBox(boxRef)
{
    boxRef.classList.add('selected');
}

priorityBoxesRef.forEach(function(boxRef){
    boxRef.addEventListener('click',function(ev){
    
        removeSelectedClassFromBox();

        addSelectedClassToCurrentBox(ev.target);
    })
});

textareaRef.addEventListener('keyup',function(ev){
    if(ev.key == "Shift")
    {
        const description = ev.target.value;
        const priority = getClassPriority(); 
        tasks.push({
            id : tasks.length+1,
            description : description,
            priority : priority
        });
        console.log(tasks);
        closeModal();
    }
})

function getClassPriority()
{
    let priority='';
    priorityBoxesRef.forEach(function(singleBoxRef, idx){
        if(singleBoxRef.classList.contains('selected')){
            priority = `p${idx+1}`;
        }
    })
    return priority;
}
