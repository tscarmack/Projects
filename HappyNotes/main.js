let notes = []; 


function showNotes() {
    document.getElementById('notesList').innerHTML = '';
    notes.forEach((note, index) => {
        let liTag = `<li class="note">
            <div class="details">
                <p>${note.title}</p>
                <span>${note.description}</span>
            </div>
            <div class="bottom-content">
                <button onclick="deleteNote(${index})">Delete</button>
            </div>
        </li>`;
        document.getElementById('notesList').innerHTML += liTag;
    });
}


function addNote(event) {
    event.preventDefault();
    let title = document.getElementById('inputTitle').value;
    let description = document.getElementById('inputDesc').value;
    let note = {
        title: title,
        description: description
    };
    notes.push(note);
    showNotes();
    document.getElementById('inputTitle').value = '';
    document.getElementById('inputDesc').value = '';
}


function deleteNote(index) {
    notes.splice(index, 1);
    showNotes();
}


document.getElementById('noteForm').addEventListener('submit', addNote);
