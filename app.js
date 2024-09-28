const sidebar=document.querySelector(".sidebar");
const toggleBtn=document.querySelector("#panelstyle2");
const crossButtonContainer=document.querySelector(".cross_btn_container");
const constButton=document.querySelector(".close_btn");

toggleBtn.addEventListener("click",()=>{
    console.log("clicked");
    sidebar.classList.toggle('show');
});

document.addEventListener('click',(event)=>{
    if(!sidebar.contains(event.target) && !toggleBtn.contains(event.target))
    {
        sidebar.classList.remove('show');
    }
});

crossButtonContainer.addEventListener("click",()=>{
    crossButtonContainer.style.display="none";
});
close_btn.addEventListener("Click",()=>{
    sidebar.classList.remove('show');
})