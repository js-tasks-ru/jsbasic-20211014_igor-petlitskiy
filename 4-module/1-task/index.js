function makeFriendsList(friends) {
  let list = document.createElement('ul');
  document.body.append(list);
  
  for(let i = 0; i < friends.length; i++) {
    li = document.createElement('li');
    li.innerHTML = `${friends[i].firstName} ${friends[i].lastName}`;
    list.append(li);
  }
  return list
}
