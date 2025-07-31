const form = document.getElementById('userForm');
const listBtn = document.getElementById('listBtn');
const userList = document.getElementById('userList');

let users = [];
let editIndex = -1;

function addUser(name, age, course)
{
    if (editIndex === -1)
    {
        users.push({name, age, course});
    } else
    {
        users[editIndex] = {name, age, course};
        editIndex = -1
    }
    
}

function displayUsers()
{
    userList.innerHTML = '';
    users.forEach((user, index) => 
    {
        const userHTML = `
        <div class="userItem">
            <h3>${user.name}</h3>
            <p>Idade: ${user.age}</p>
            <p>Curso: ${user.course}</p>
            <button class="deleteBtn" onclick="deleteUser(${index})">Deletar</button>
            <button class="editBtn" onclick="editUser(${index})">Editar</button>
        </div>
        `;
        userList.insertAdjacentHTML('beforeend', userHTML);
    });
}

function deleteUser(index)
{
    users.splice(index, 1);
    displayUsers();
}

function toggleUserList()
{
    userList.classList.toggle('hidden')
    if (!userList.classList.contains('hidden'))
    {
        displayUsers();
    }
}

form.addEventListener('submit', (e) => 
{
    e.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const course = document.getElementById('course').value;
    addUser(name, age, course);
    form.reset();
});

listBtn.addEventListener('click', toggleUserList);

function editUser(index)
{
    const user = users[index];
    document.getElementById('name').value = user.name;
    document.getElementById('age').value = user.age;
    document.getElementById('course').value = user.course;
    editIndex = index;
}


