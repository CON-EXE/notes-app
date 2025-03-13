'use strict';

const { log } = console;

let title = '';
let content = '';
let count = 0;
const list = [];

const newNote = document.querySelector('.new-note');
const cancel = document.querySelector('.cancel');
const popup = document.querySelector('.overlay');
const form = document.querySelector('form');

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
        return `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear}`;
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
    const savedNote = document.createElement('div');
    savedNote.setAttribute('data-index', count);
    savedNote.setAttribute('onclick', 'displayNote(this)');
    noteList.append(savedNote);
    const note = new Note(titleInput.value, contentInput.value);
    list.push(note);
}

newNote.addEventListener('click', () => {
    popup.classList.remove('hide');
});

cancel.addEventListener('click', () => {
    popup.classList.add('hide');
})