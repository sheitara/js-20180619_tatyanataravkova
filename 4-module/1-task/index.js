'use strict';

/**
 * Генерация HTML списка друзей
 * @param {Friend[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList (friends) {
    let arrFIO = friends.map(item=>`${item.firstName} ${item.lastName}`);

    let list = document.createElement("ul");

    arrFIO.forEach( function(item, i, arrFIO) {

        let listElement = document.createElement('li');
        listElement.appendChild(document.createTextNode(arrFIO[i]));
        list.appendChild(listElement);
    });

    return list;
}
