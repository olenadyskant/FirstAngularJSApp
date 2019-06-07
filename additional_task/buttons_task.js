createButton('Save', 'additional-class') //<button class="btn btn-light additional-class">Save</button>
createButton('Close', 'close-class') //<button class="btn btn-light close-class">Close</button>

createButton('Submit') //<button class="btn btn-light">Submit</button>

createButton('Submit', 'additional-class', 'ToolTip') //<button class="btn btn-light additional-class" data-toggle="ToolTip">Submit</button>

createButton('Submit', 'additional-class', 'ToolTip' , true) //<button class="btn btn-light additional-class" data-toggle="ToolTip"><span>Submit</span></button>
createButton('Submit', 'additional-class', 'ToolTip' , false) //<button class="btn btn-light additional-class" data-toggle="ToolTip">Submit</button>


function createButton(name, btnClass, data, boolean) {
    var btn = document.createElement('button');
    btn.setAttribute('class', 'btn btn-light');
    btn.classList.toggle(btnClass);
    btn.setAttribute('data-toggle', data);
    if(boolean){
        btn.innerHTML = `<span>${name}</span>`;
    } else {btn.innerHTML = name}
    document.querySelector('body').appendChild(btn);
    
}