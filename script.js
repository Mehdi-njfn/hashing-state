// window.addEventListener("hashchange", e=>{
//     router();
// })

// function router(){

//     switch(location.hash){
//             case "":
//                 render({title: "HOME", color: "red", href: "#home"})
//                 break;
//             case "#home":
//                 render({title: "HOME", color: "red", href: "#home"})
//                 break;
//             case "#search":
//                     render({title: "SEARCH", color: "blue", href: "#search"})
//                     break;
//             case "#likes":
//                         render({title: "LIKES", color: "yellow", href: "#likes"})
//                         break;
//             case "#profile":
//                         render({title: "PROFILE", color: "green", href: "#profile"})
//                         break;
    
//     }
// }

// function render(data){
//     document.querySelector("h1").innerText = data.title;
//     document.querySelector("main").style.backgroundColor = data.color;

//     document.querySelectorAll("a").forEach(Element=>{
//         if(Element.href.includes(data.href)){
//             Element.style.color = "black"
//         }
//         else{
//             Element.style.color = "#666"
//         }
//     })
// }





document.querySelector("nav").addEventListener("click", e=>{
    if(e.target.nodeName != "I")return
    let data;
    switch(e.target.getAttributeNode("item-id").value){
        case "home":
            data = {title: "HOME", color: "red", itemId:"home"}
            update(data)
            history.pushState(data, "home", "home")
            break;
        case "search":
                data = {title: "SEARCH", color: "blue", itemId:"search"}
                update(data)
                history.pushState(data, "search", "search")
                break;
        case "likes":
                    data = {title: "LIKES", color: "yellow", itemId:"likes"}
                    update(data)
                    history.pushState(data, "likes", "likes")
                    break;
        default:
                    data = {title: "PROFILE", color: "green", itemId:"profile"}
                    update(data)
                    history.pushState(data, "profile", "profile")
                    break;

    }
})
window.addEventListener("popstate", e=>{
    if(history.state){
        update(history.state)
    }
    else{
        update({title: "HOME", color: "red", itemId:"home"})
    }
})

function update(data){
    document.querySelector("h1").innerText = data.title
    document.querySelector("main").style.backgroundColor = data.color

        document.querySelectorAll("i").forEach(Element=>{
            Element.style.color = "#666"
        })
        //document.querySelector('i[item-id=${data.itemId}]').style.color = "black"

}