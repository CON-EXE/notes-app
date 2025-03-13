'use strict';

let title = '';
let content = '';
const list = [];

const newNote = document.querySelector('.new-note');
const save = document.querySelector('.save');
const cancel = document.querySelector('.cancel');
const popup = document.querySelector('.overlay');
const form = document.querySelector('form');
const noteList = document.querySelector('ul');
const titleInput = document.querySelector('.title');
const contentInput = document.querySelector('.content');
const titleDisplay = document.querySelector('.display-title');
const contentDisplay = document.querySelector('.display-content');
const dateDisplay = document.querySelector('.display-date');

class Note {
    #title;
    #content;
    #date;

    constructor(title, content) {
        this.#title = title;
        this.#content = content;
        this.#date = this.getDate();
    }

    getDate() {
        const now = new Date();
        return `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()}`;
    }

    get title() {
        return this.#title;
    }

    get content() {
        return this.#content;
    }

    get date() {
        return this.#date
    }
}

function createNote() {
    const note = new Note(titleInput.value, contentInput.value);
    list.unshift(note);
    loadNotes();
}

function loadNotes() {
    if (list.length > 0) {
        noteList.innerHTML = '';
        for (let i = 0; i < list.length; i++) {
            let listNote = document.createElement('li');
            listNote.setAttribute('data-index', i);
            listNote.setAttribute('onclick', 'displayNote(this)');
            listNote.innerHTML += `
                            <li class=flex>
                                ${list[i].title}
                                <div class="note-buttons">
                                    <a class="edit">
                                        <i class="fa-solid fa-pencil"></i>
                                    </a>
                                    <a class="delete">
                                        <i class="fa-solid fa-trash"></i>
                                    </a>
                                </div>
                            </li>`;
            noteList.append(listNote);
        }

        titleDisplay.innerText = list[0].title;
        contentDisplay.innerText = list[0].content;
        dateDisplay.innerText = `Last save: ${list[0].date}`;
    }
}

function displayNote(note) {
    let index = parseInt(note.dataset.index);
    titleDisplay.innerText = list[index].title;
    contentDisplay.innerText = list[index].content;
    dateDisplay.innerText = `Last save: ${list[index].date}`;
}

function clearInput() {
    titleInput.value = '';
    contentInput.value = '';
}

newNote.addEventListener('click', () => {
    popup.classList.remove('hide');
});

save.addEventListener('click', () => {
    popup.classList.add('hide');
    createNote();
    clearInput();
});

cancel.addEventListener('click', () => {
    popup.classList.add('hide');
    clearInput();
});

window.addEventListener('load', () => {
    loadNotes();
});