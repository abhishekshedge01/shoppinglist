var input=document.querySelector('#gettask');
var button=document.querySelector('#push');
button.onclick=function()
{
    if(input.value.length==0)
    {
        alert("Write Something")
    }
    else
    {
        document.querySelector('.tasks').innerHTML
        +=
        `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('.newtask input').value}
                </span>

                <button class="delete">
                  X
                </button>
             </div>

        `;


        var current=document.querySelectorAll(".delete");
        for(var i=0;i<current.length;++i)
        {
            current[i].onclick=function()
            {
                this.parentNode.remove();
            }
        }

        var tasks=document.querySelectorAll(".tasks")
        {
            count=tasks.length;
            for(var i=0;i<tasks.length;++i)
            {
                tasks[i].onclick=function()
                {
                    this.classList.toggle('completed');
                }
            }
        }
    
        input.value="";

    }
}

