
document.addEventListener("DOMContentLoaded", () =>
{

//    console.log("hello world");


    const textItem = document.getElementById("text-item");
    const buttonAddItem = document.getElementById("button-add-item");
    const unorderedListItem = document.getElementById("unordered-list-item");
    let itemFound = false;

    buttonAddItem.addEventListener("click", () => 
    {
        const itemTextValue = textItem.value.trim();

        if (itemTextValue !== "")
        {
            const items = unorderedListItem.getElementsByTagName("span");
        
            itemFound = false;
        
            for (let i = 0; i < items.length; i++)
            {
                if (items[i].textContent.toUpperCase() === itemTextValue.toUpperCase())
                {
                    itemFound = true;
                    break;
                }               
            }

            if (itemFound === true)
            {
	            alert(`Item ${itemTextValue} already exists in list`);
            }
            else
            {
	            const newLiElement = document.createElement("li");
	            const newSpan = document.createElement("span");
                const newRemoveButtonElement = document.createElement("button");
	            const newEditButtonElement = document.createElement("button");

                newRemoveButtonElement.type = "button";
                newEditButtonElement.type  = "button";
	            newSpan.textContent = itemTextValue;	
	            newRemoveButtonElement.textContent = "Remove";
	            newEditButtonElement.textContent = "Edit";

                newLiElement.appendChild(newSpan);
	            newLiElement.appendChild(newRemoveButtonElement);
	            newLiElement.appendChild(newEditButtonElement);
	            unorderedListItem.appendChild(newLiElement);

 	            textItem.value = "";

	            newRemoveButtonElement.addEventListener("click", (event) => 
                {
	                const listItem = event.target.parentElement;
                    const list = listItem.parentElement;
                            
                    list.removeChild(listItem);			
 	            });

           		newEditButtonElement.addEventListener("click", (event) => 
                {
                    const listItem = event.target.closest('li');
                    const editButton = event.target;

                    if (editButton.textContent === 'Edit') 
                    {
                        // Enter edit mode
                        const span = listItem.querySelector('span');
                        const newInputText = document.createElement('input');

                        newInputText.type = 'text';
                        newInputText.value = span.textContent;
                        listItem.replaceChild(newInputText, span);
                        editButton.textContent = 'Save';
                    } 
                    else if (editButton.textContent === 'Save') 
                    {
                        // Save changes
                        const inputText = listItem.querySelector('input');				
		            	const itemTextValue = inputText.value.trim();

			            if (itemTextValue !== "")
			            {
                            itemFound = false;
                                    
                            for (let i = 0; i < items.length; i++)
                            {
                                if (items[i].textContent.toUpperCase() === itemTextValue.toUpperCase())
                                {
                                    itemFound = true;
                                    break;
                                }        
                            }
        
                            if (itemFound === true)
                            {
		                        alert(`Item ${itemTextValue} already exists in list`);
                            }
                            else
                            {			
                                const newSpan = document.createElement('span');
                                newSpan.textContent = inputText.value.trim();
                                listItem.replaceChild(newSpan, inputText);
                                editButton.textContent = 'Edit';                                
		                    }
			            }		
		                else
			            {
				            alert("Must be at least 1 character");			
			            }
                    }    
                });
            }
        }
        else
		{
            alert("Must be at least 1 character");			
		}
    });
});

