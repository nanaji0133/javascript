class listBinding
{
  constructor(elements)
  {
    this.elements = elements;
    this.myList = ["hi"];
  }

  static itemsBinding(item)
  {
    let newLi = document.createElement("li")
    newLi.textContent = item
    return newLi
  }

  update()
  {
    while (this.elements.firstChild)
    {
      this.elements.removeChild(this.elements.firstChild)
    }

    for (let items of this.myList)
    {
      this.elements.appendChild(listBinding.itemsBinding(items))
    }

  }

  add(item)
  {
    this.myList.push(item)
    this.update()
  }

  remove(index)
  {
    this.myList.slice(index, 1)
    this.update()
  }
}