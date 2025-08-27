const menuLi = document.querySelectorAll('.admin-sidebar-content > ul > li > a');
for(let index=0; index<menuLi.length; index++){
    menuLi[index].addEventListener('click', (e)=>{
        e.preventDefault();
        for(let i=0; i<menuLi.length; i++){
            const element = array[index];
        }
        const submenuHeight = menuLi[index].parentNode.querySelector('ul,sub-menu-items').offsetHeight;
    menuLi[index].parentNode.classList.querySelector('ul').setAttribute("style", "height:" + submenuHeight+"px");  })
    };