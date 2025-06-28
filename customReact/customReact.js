

const mainContainer = document.querySelector('#root');
const reactElement = {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    Children:'Click me to visit google'
}
function customRender(reactElement,container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.Children

    domElement.setAttribute('href',reactElement.props.href)

    container.appendChild(domElement)
}
//document.setAttribute('target',reactElement.props.target);
customRender(reactElement,mainContainer)